/* =====================================================
   app.js — Init GrapesJS con componenti custom
   ===================================================== */

const editor = grapesjs.init({

  container: '#gjs',

  // Dimensioni canvas
  width: 'auto',
  height: '100vh',

  // Store HTML/CSS nel localStorage
  storageManager: {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
  },

  // Blocchi (li registriamo dopo)
  blockManager: {
    appendTo: '#blocks',
    blocks: [],
  },

  // Layer, stili, trait
  deviceManager: {
    devices: [
      { name: 'Telefono', width: '390', height: '844' },
      { name: 'Tablet',   width: '768', height: '1024' },
      { name: 'Desktop',  width: '1440', height: '900' },
    ]
  },

  // Canvas opzioni
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
const domc = editor.DomComponents;

// Collezione dei nostri componenti
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

// Registra ogni blocco
components.forEach(c => {
  bm.add(c.id, {
    label: c.label,
    content: c.content,
    category: c.category || 'Componenti',
    media: c.media || `<svg width="24" height="24" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="#6C5CE7" opacity="0.2"/><rect x="6" y="6" width="5" height="5" rx="1" fill="#6C5CE7"/></svg>`,
  });
});

// =====================================================
// Pulsanti canvas
// =====================================================

editor.Panels.addButton('options', {
  id: 'undo',
  className: 'fa fa-undo',
  command: e => e.runCommand('core:undo'),
});

editor.Panels.addButton('options', {
  id: 'redo',
  className: 'fa fa-redo',
  command: e => e.runCommand('core:redo'),
});

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
    win.document.write(fullDoc);
    win.document.close();
  }
});

editor.Panels.addButton('options', {
  id: 'export',
  className: 'fa fa-download',
  command: 'export-html',
  attributes: { title: 'Esporta HTML/CSS' },
});

// Default: carica schermata dashboard
editor.on('load', () => {
  const pages = editor.Pages;
  if (pages && pages.getAll().length === 0) {
    // Aggiunge un componente di benvenuto
    editor.setComponents(`
      <div style="padding: 40px 20px; text-align: center; font-family: Inter, sans-serif; background: #F5F6FA; min-height: 100vh;">
        <h2 style="color: #2D3436; margin-bottom: 12px;">🎨 UI Builder</h2>
        <p style="color: #636E72; margin-bottom: 24px;">Trascina i componenti dal pannello sinistro</p>
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <div style="background: #6C5CE7; color: white; padding: 12px 24px; border-radius: 12px; font-weight: 500;">Dashboard</div>
          <div style="background: #E84393; color: white; padding: 12px 24px; border-radius: 12px; font-weight: 500;">Task List</div>
          <div style="background: #00B894; color: white; padding: 12px 24px; border-radius: 12px; font-weight: 500;">Charts</div>
        </div>
      </div>
    `);
  }
});
