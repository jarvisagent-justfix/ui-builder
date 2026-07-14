/* =====================================================
   app.js — UI Builder Pro — Completo
   ===================================================== */

var editor = grapesjs.init({

  container: '#gjs',
  width: 'auto',
  height: '100vh',

  storageManager: {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
  },

  blockManager: { blocks: [] },

  deviceManager: {
    devices: [
      { name: 'Telefono', width: '390', height: '844' },
      { name: 'Tablet',   width: '768', height: '1024' },
      { name: 'Desktop',  width: '1440', height: '900' },
    ]
  },

  canvas: {
    styles: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'],
  },
});

// =====================================================
// BLOCKS — Registra tutti i blocchi
// =====================================================
const bm = editor.BlockManager;

// Helper: registra un array di blocchi
function reg(blocks) {
  blocks.forEach(b => bm.add(b.id, {
    label: b.label,
    content: b.content,
    category: b.cat,
    media: b.media || '',
  }));
}

// === DASHBOARD (esistenti) ===
reg([
  { id:'dash-header',  label:'Header Dashboard', cat:'Dashboard', ...dashboardHeader },
  { id:'stat-grid',    label:'Stat Grid 2×2',    cat:'Dashboard', ...statGrid },
  { id:'progress-chart',label:'Bar Chart',       cat:'Dashboard', ...progressChart },
  { id:'working-hours', label:'Working Hours',   cat:'Dashboard', ...workingHours },
  { id:'task-filters',  label:'Filtri Task',     cat:'Dashboard', ...taskFilters },
  { id:'task-card',     label:'Task Card',       cat:'Dashboard', ...taskCard },
  { id:'task-list',     label:'Lista Task',      cat:'Dashboard', ...taskListBlock },
  { id:'bottom-nav',    label:'Bottom Nav',      cat:'Dashboard', ...bottomNav },
]);

// === ELEMENTI BASE ===
reg([
  { id:'bl-text',      label:'Testo + Titolo',   cat:'Elementi Base', ...blockText },
  { id:'bl-title',     label:'Titolo Sezione',   cat:'Elementi Base', ...blockTitle },
  { id:'bl-paragraph', label:'Paragrafo',        cat:'Elementi Base', ...blockParagraph },
  { id:'bl-button',    label:'Pulsante',         cat:'Elementi Base', ...blockButton },
  { id:'bl-btn-out',   label:'Pulsante Outline', cat:'Elementi Base', ...blockButtonOutline },
  { id:'bl-image',     label:'Immagine',         cat:'Elementi Base', ...blockImage },
  { id:'bl-icon',      label:'Icona',            cat:'Elementi Base', ...blockIcon },
  { id:'bl-divider',   label:'Divisore',         cat:'Elementi Base', ...blockDivider },
  { id:'bl-spacer',    label:'Spaziatore',       cat:'Elementi Base', ...blockSpacer },
]);

// === FORM ===
reg([
  { id:'f-input',     label:'Input Testo',      cat:'Form', ...blockInput },
  { id:'f-textarea',  label:'Textarea',         cat:'Form', ...blockTextarea },
  { id:'f-select',    label:'Menu a Tendina',   cat:'Form', ...blockSelect },
  { id:'f-toggle',    label:'Toggle',           cat:'Form', ...blockToggle },
  { id:'f-checkbox',  label:'Checkbox',         cat:'Form', ...blockCheckbox },
  { id:'f-date',      label:'Selettore Data',   cat:'Form', ...blockDatePicker },
  { id:'f-search',    label:'Barra Ricerca',    cat:'Form', ...blockSearch },
]);

// === DATI E STATI ===
reg([
  { id:'d-badge',     label:'Badge / Tag',      cat:'Dati e Stati', ...blockBadge },
  { id:'d-progress',  label:'Barra Progresso',  cat:'Dati e Stati', ...blockProgressBar },
  { id:'d-profile',   label:'Card Profilo',     cat:'Dati e Stati', ...blockProfileCard },
  { id:'d-alert-ok',  label:'Alert Successo',   cat:'Dati e Stati', ...blockAlert },
  { id:'d-alert-no',  label:'Alert Errore',     cat:'Dati e Stati', ...blockAlertError },
  { id:'d-empty',     label:'Stato Vuoto',      cat:'Dati e Stati', ...blockEmptyState },
  { id:'d-loading',   label:'Caricamento',      cat:'Dati e Stati', ...blockLoading },
]);

// === NAVIGAZIONE ===
reg([
  { id:'n-tabbar',    label:'Tab Bar',          cat:'Navigazione', ...blockTabBar },
  { id:'n-search',    label:'Header + Search',  cat:'Navigazione', ...blockSearchNav },
  { id:'n-back',      label:'Back Button',      cat:'Navigazione', ...blockBackButton },
]);

// === GRAFICI ===
reg([
  { id:'c-line',      label:'Line Chart',       cat:'Grafici', ...blockLineChart },
  { id:'c-pie',       label:'Pie Chart',        cat:'Grafici', ...blockPieChart },
]);

// === COMMERCE ===
reg([
  { id:'co-product',  label:'Product Card',     cat:'Commerce', ...blockProductCard },
  { id:'co-rating',   label:'Rating Stelle',    cat:'Commerce', ...blockRating },
]);

// === SOCIAL ===
reg([
  { id:'s-post',      label:'Post Card',        cat:'Social', ...blockPostCard },
  { id:'s-notify',    label:'Notifica',         cat:'Social', ...blockNotification },
]);

// === CALENDARIO ===
reg([
  { id:'ca-mini',     label:'Mini Calendario',  cat:'Calendario', ...blockMiniCalendar },
  { id:'ca-event',    label:'Event Card',       cat:'Calendario', ...blockEventCard },
]);

// === TEMPLATE PREDEFINITI ===
reg([
  { id:'tp-dash',     label:'Dashboard',        cat:'🎯 Template', ...templateDashboard },
  { id:'tp-login',    label:'Login',            cat:'🎯 Template', ...templateLogin },
  { id:'tp-profile',  label:'Profilo',          cat:'🎯 Template', ...templateProfile },
  { id:'tp-settings', label:'Impostazioni',     cat:'🎯 Template', ...templateSettings },
  { id:'tp-tasks',    label:'Task List',        cat:'🎯 Template', ...templateTaskList },
]);

// =====================================================
// TOOLBAR — Pulsanti extra
// =====================================================
const pn = editor.Panels;

// Tema buttons
pn.addButton('options', {
  id: 'theme-light',
  className: 'fa fa-sun-o',
  command: () => applyTheme('light'),
  attributes: { title: 'Tema Chiaro' },
});
pn.addButton('options', {
  id: 'theme-dark',
  className: 'fa fa-moon-o',
  command: () => applyTheme('dark'),
  attributes: { title: 'Tema Scuro' },
});
pn.addButton('options', {
  id: 'theme-corp',
  className: 'fa fa-briefcase',
  command: () => applyTheme('corporate'),
  attributes: { title: 'Tema Aziendale' },
});

// Export HTML
pn.addButton('options', {
  id: 'export',
  className: 'fa fa-download',
  command: 'export-html',
  attributes: { title: 'Esporta HTML/CSS' },
});

// Export PWA
pn.addButton('options', {
  id: 'export-pwa',
  className: 'fa fa-file-code-o',
  command: 'export-pwa',
  attributes: { title: 'Esporta come PWA pronta' },
});

// =====================================================
// COMANDI EXPORT
// =====================================================

editor.Commands.add('export-html', {
  run: function(ed) {
    const h = ed.getHtml(), c = ed.getCss();
    const doc = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La Mia App</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#F5F6FA}${c}</style>
</head>
<body>${h}</body>
</html>`;
    const w = window.open('', '_blank');
    if (w) { w.document.write(doc); w.document.close(); }
  }
});

editor.Commands.add('export-pwa', {
  run: function(ed) {
    const h = ed.getHtml(), c = ed.getCss();
    const pwa = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>La Mia App</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#6C5CE7">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#F5F6FA;overflow-x:hidden;max-width:430px;margin:0 auto;}${c}</style>
</head>
<body>${h}
<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
<\/script>
</body>
</html>`;
    const w = window.open('', '_blank');
    if (w) { w.document.write(pwa); w.document.close(); }
  }
});

// =====================================================
// ON LOAD
// =====================================================
editor.on('load', () => {
  // Attiva blocchi
  const vp = editor.Panels.getPanel('views');
  if (vp) {
    const btn = vp.get('buttons').find(b => b.id === 'open-blocks');
    if (btn) btn.set('active', true);
  }
  // Espandi categorie
  const cats = editor.BlockManager.getCategories();
  if (cats) cats.each(c => c.set('open', true));
  // Default device
  editor.setDevice('Telefono');
  // Tema salvato
  const saved = localStorage.getItem('ui-builder-theme');
  if (saved) applyTheme(saved);
});
