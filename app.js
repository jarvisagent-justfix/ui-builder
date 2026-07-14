/* =====================================================
   app.js — UI Builder Pro
   ===================================================== */

const editor = grapesjs.init({

  container: '#gjs',
  width: 'auto',
  height: '100vh',

  storageManager: {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
  },

  // Pannelli di default di GrapesJS (toolbar, sidebar, canvas)
  // I blocchi saranno nella sidebar sinistra (pulsante con icona quadretti)

  blockManager: {
    blocks: [],
  },

  deviceManager: {
    devices: [
      { name: 'Telefono', width: '390', height: '844' },
      { name: 'Tablet',   width: '768', height: '1024' },
      { name: 'Desktop',  width: '1440', height: '900' },
    ]
  },

  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ],
  },

});

// =====================================================
// B LOCKS — Registra tutti i blocchi custom
// =====================================================

const bm = editor.BlockManager;

const components = [
  // Dashboard
  { id: 'dashboard-header',   label: 'Header Dashboard', ...dashboardHeader, cat: 'Dashboard' },
  { id: 'stat-grid',         label: 'Stat Grid 2×2',     ...statGrid, cat: 'Dashboard' },
  { id: 'progress-chart',    label: 'Bar Chart',         ...progressChart, cat: 'Dashboard' },
  { id: 'working-hours',     label: 'Working Hours',     ...workingHours, cat: 'Dashboard' },
  { id: 'task-filters',      label: 'Filtri Task',       ...taskFilters, cat: 'Dashboard' },
  { id: 'task-card',         label: 'Task Card',         ...taskCard, cat: 'Dashboard' },
  { id: 'task-list',         label: 'Lista Task',        ...taskListBlock, cat: 'Dashboard' },
  { id: 'bottom-nav',        label: 'Bottom Nav',        ...bottomNav, cat: 'Dashboard' },

  // Elementi Base
  { id: 'block-text',        label: 'Testo + Titolo',    ...blockText, cat: 'Elementi Base' },
  { id: 'block-title',       label: 'Titolo Sezione',    ...blockTitle, cat: 'Elementi Base' },
  { id: 'block-paragraph',   label: 'Paragrafo',         ...blockParagraph, cat: 'Elementi Base' },
  { id: 'block-button',      label: 'Pulsante',          ...blockButton, cat: 'Elementi Base' },
  { id: 'block-button-outline', label: 'Pulsante Out',   ...blockButtonOutline, cat: 'Elementi Base' },
  { id: 'block-image',       label: 'Immagine',          ...blockImage, cat: 'Elementi Base' },
  { id: 'block-icon',        label: 'Icona',             ...blockIcon, cat: 'Elementi Base' },
  { id: 'block-divider',     label: 'Divisore',          ...blockDivider, cat: 'Elementi Base' },
  { id: 'block-spacer',      label: 'Spaziatore',        ...blockSpacer, cat: 'Elementi Base' },

  // Form
  { id: 'block-input',       label: 'Input Testo',       ...blockInput, cat: 'Form' },
  { id: 'block-textarea',    label: 'Textarea',           ...blockTextarea, cat: 'Form' },
  { id: 'block-select',      label: 'Menu a Tendina',     ...blockSelect, cat: 'Form' },
  { id: 'block-toggle',      label: 'Toggle',             ...blockToggle, cat: 'Form' },
  { id: 'block-checkbox',    label: 'Checkbox',           ...blockCheckbox, cat: 'Form' },
  { id: 'block-datepicker',  label: 'Selettore Data',     ...blockDatePicker, cat: 'Form' },
  { id: 'block-search',      label: 'Barra Ricerca',      ...blockSearch, cat: 'Form' },

  // Dati e Stati
  { id: 'block-badge',       label: 'Badge / Tag',        ...blockBadge, cat: 'Dati e Stati' },
  { id: 'block-progress',    label: 'Barra Progresso',    ...blockProgressBar, cat: 'Dati e Stati' },
  { id: 'block-profile-card', label: 'Card Profilo',      ...blockProfileCard, cat: 'Dati e Stati' },
  { id: 'block-alert',       label: 'Alert Successo',     ...blockAlert, cat: 'Dati e Stati' },
  { id: 'block-alert-error', label: 'Alert Errore',       ...blockAlertError, cat: 'Dati e Stati' },
  { id: 'block-empty',       label: 'Stato Vuoto',         ...blockEmptyState, cat: 'Dati e Stati' },
  { id: 'block-loading',     label: 'Caricamento',         ...blockLoading, cat: 'Dati e Stati' },
];

components.forEach(c => {
  bm.add(c.id, {
    label: c.label,
    content: c.content,
    category: c.cat,
    media: c.media || '',
  });
});

// =====================================================
// TOOLBAR — Aggiunge pulsante Export
// =====================================================

editor.Panels.addButton('options', {
  id: 'export',
  className: 'fa fa-download',
  command: 'export-html',
  attributes: { title: 'Esporta HTML/CSS' },
});

editor.Commands.add('export-html', {
  run: function(ed) {
    const html = ed.getHtml();
    const css = ed.getCss();
    const doc = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La Mia App</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: #F5F6FA; }
${css}
  </style>
</head>
<body>
${html}
</body>
</html>`;
    const w = window.open('', '_blank');
    if (w) { w.document.write(doc); w.document.close(); }
  }
});

// =====================================================
// ON LOAD — Attiva blocchi ed espande categorie
// =====================================================

editor.on('load', () => {
  // Attiva il pannello blocchi (icona quadretti nella sidebar sinistra)
  const viewsPanel = editor.Panels.getPanel('views');
  if (viewsPanel) {
    const btns = viewsPanel.get('buttons');
    const blocksBtn = btns.find(b => b.id === 'open-blocks' || b.id === 'blocks');
    if (blocksBtn) blocksBtn.set('active', true);
  }

  // Espande tutte le categorie di blocchi
  const cats = editor.BlockManager.getCategories();
  if (cats) cats.each(c => c.set('open', true));

  // Imposta dispositivo default su Telefono
  editor.setDevice('Telefono');
});
