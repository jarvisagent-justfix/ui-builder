/* =====================================================
   app.js — Solo preset-webpage, nessun custom
   ===================================================== */
var editor = grapesjs.init({
  container: '#gjs',
  width: 'auto',
  height: 'calc(100vh - 86px)',

  plugins: ['grapesjs-preset-webpage'],
  pluginsOpts: {
    'grapesjs-preset-webpage': {
      // Opzioni default del preset
      blocks: ['link-block', 'quote', 'text-basic'],
    }
  },

  storageManager: {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
  },

  deviceManager: {
    devices: [
      { name: 'Desktop',  width: '1440', height: '900' },
      { name: 'Tablet',   width: '768',  height: '1024' },
      { name: 'Telefono', width: '390',  height: '844' },
    ]
  },
});

console.log('✅ UI Builder con preset-webpage caricato');
