/* =====================================================
   app.js — Init GrapesJS con componenti custom
   ===================================================== */

const editor = grapesjs.init({

  container: '#gjs',
  width: 'auto',
  height: '100%',

  // Storage locale
  storageManager: {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
  },

  // Disabilita i pannelli di default (creiamo UI personalizzata)
  panels: { defaults: [] },

  // I blocchi vengono renderizzati nel div #blocks
  blockManager: {
    appendTo: '#blocks',
    blocks: [],
  },

  // Dispositivi
  deviceManager: {
    devices: [
      { name: 'Telefono', width: '390', height: '844' },
      { name: 'Tablet',   width: '768', height: '1024' },
      { name: 'Desktop',  width: '1440', height: '900' },
    ]
  },

  // Font per il canvas
  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ],
  },

});

// =====================================================
// Registra tutti i blocchi custom
// =====================================================

const bm = editor.BlockManager;

const components = [
  { id: 'dashboard-header',   label: 'Header Dashboard', ...dashboardHeader },
  { id: 'stat-card-progress', label: 'Stat Card (In Progress)', ...statCardFn('#E8D5FF', '#6C5CE7', 'In Progress', '24') },
  { id: 'stat-card-review',   label: 'Stat Card (In Review)',   ...statCardFn('#FFD5F0', '#E84393', 'In Review', '56') },
  { id: 'stat-card-hold',     label: 'Stat Card (On Hold)',     ...statCardFn('#FFE8D5', '#F39C12', 'On Hold', '16') },
  { id: 'stat-card-done',     label: 'Stat Card (Completed)',   ...statCardFn('#D5FFE8', '#00B894', 'Completed', '45') },
  { id: 'stat-grid',         label: 'Stat Grid 2×2',         ...statGrid },
  { id: 'progress-chart',    label: 'Bar Chart Settimanale', ...progressChart },
  { id: 'working-hours',     label: 'Total Working Hours',   ...workingHours },
  { id: 'task-filters',      label: 'Filtri Task',           ...taskFilters },
  { id: 'task-card',         label: 'Task Card',             ...taskCard },
  { id: 'task-list',         label: 'Lista Task',            ...taskListBlock },
  { id: 'bottom-nav',        label: 'Bottom Navigation',     ...bottomNav },
];

components.forEach(c => {
  bm.add(c.id, {
    label: c.label,
    content: c.content,
    category: c.category || 'Componenti',
    media: c.media || `<svg width="24" height="24" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="#6C5CE7" opacity="0.2"/><rect x="6" y="6" width="5" height="5" rx="1" fill="#6C5CE7"/></svg>`,
  });
});

// =====================================================
// Pannello toolbar (sostituisce i pannelli di default)
// =====================================================

const pn = editor.Panels;

pn.addPanel({ id: 'options', visible: true });

pn.addButton('options', {
  id: 'undo',
  className: 'fa fa-undo toolbar-btn',
  command: e => e.runCommand('core:undo'),
  attributes: { title: 'Annulla' },
});

pn.addButton('options', {
  id: 'redo',
  className: 'fa fa-redo toolbar-btn',
  command: e => e.runCommand('core:redo'),
  attributes: { title: 'Ripeti' },
});

pn.addButton('options', {
  id: 'device-desktop',
  className: 'fa fa-desktop toolbar-btn',
  command: e => editor.setDevice('Desktop'),
  attributes: { title: 'Desktop' },
});

pn.addButton('options', {
  id: 'device-tablet',
  className: 'fa fa-tablet toolbar-btn',
  command: e => editor.setDevice('Tablet'),
  attributes: { title: 'Tablet' },
});

pn.addButton('options', {
  id: 'device-mobile',
  className: 'fa fa-mobile toolbar-btn',
  command: e => editor.setDevice('Telefono'),
  attributes: { title: 'Telefono' },
});

pn.addButton('options', {
  id: 'export',
  className: 'fa fa-download toolbar-btn',
  command: 'export-html',
  attributes: { title: 'Esporta HTML/CSS' },
});

// =====================================================
// Comando esportazione HTML
// =====================================================

editor.Commands.add('export-html', {
  run: function(editor) {
    const html = editor.getHtml();
    const css = editor.getCss();
    const fullDoc = `<!DOCTYPE html>
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
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(fullDoc);
      win.document.close();
    }
  }
});

// =====================================================
// All'avvio: espande le categorie dei blocchi
// =====================================================

editor.on('load', () => {
  const categories = editor.BlockManager.getCategories();
  if (categories) {
    categories.each(c => c.set('open', true));
  }
});
