/* ============================================================
   UI Builder Pro — Completo
   GrapesJS 0.22.2 — Multi-pagina, 10 categorie, 55+ blocchi, 7 template
   ============================================================ */

// —————————————————————————————————————
// 1. INIZIALIZZA EDITOR — TUTTI I MODULI ATTIVI
// —————————————————————————————————————
var editor = grapesjs.init({
  container: '#gjs',
  width: 'auto',
  height: 'calc(100vh - 86px)',

  // Tutti i moduli built-in attivi
  pages: {},
  blockManager: { blocks: [] },
  styleManager: {},
  layerManager: {},
  traitManager: {},

  storageManager: {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
  },

  deviceManager: {
    devices: [
      { name: 'Desktop',        width: '1440', height: '900' },
      { name: 'Tablet',         width: '768',  height: '1024' },
      { name: 'Telefono',       width: '390',  height: '844' },
      { name: 'Telefono Small', width: '320',  height: '568' },
    ]
  },

  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ],
  },
});

// —————————————————————————————————————
// 2. PAGE MANAGER — UI tabs
// —————————————————————————————————————
const pages = editor.Pages;
const pageTabsEl = document.getElementById('page-tabs');

function renderPageTabs() {
  const all = pages.getAll();
  const current = pages.getSelected();
  pageTabsEl.innerHTML = '';
  all.forEach(p => {
    const tab = document.createElement('button');
    tab.className = 'page-tab' + (p === current ? ' active' : '');
    tab.textContent = p.get('name') || p.get('id');
    tab.title = 'Vai a: ' + (p.get('name') || p.get('id'));
    tab.onclick = () => { pages.select(p); renderPageTabs(); };
    pageTabsEl.appendChild(tab);
  });
}
editor.on('page', renderPageTabs);

// Aggiungi pagina
document.getElementById('btn-add-page').onclick = () => {
  const name = prompt('Nome nuova pagina:', 'Nuova Pagina');
  if (!name) return;
  const id = 'page-' + Date.now();
  pages.add({
    id, name,
    component: `<div style="padding:24px;font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;color:#333">
      <h2 style="margin:0 0 8px;font-size:22px">${name}</h2>
      <p style="color:#999">Trascina i blocchi qui</p>
    </div>`,
  });
  pages.select(id);
  renderPageTabs();
};

// Elimina pagina
document.getElementById('btn-del-page').onclick = () => {
  const all = pages.getAll();
  if (all.length <= 1) { alert('Devi tenere almeno una pagina!'); return; }
  const cur = pages.getSelected();
  if (!confirm(`Eliminare "${cur.get('name')||cur.get('id')}"?`)) return;
  pages.remove(cur);
  renderPageTabs();
};

// —————————————————————————————————————
// 3. BLOCKS — 10 categorie, 55+ blocchi
// —————————————————————————————————————
const bm = editor.BlockManager;

function reg(blocks) {
  const catIcons = {
    'Navigazione': '🧭', 'Dashboard & Stats': '📊', 'Form & Input': '📝',
    'Elementi Base': '🔤', 'Liste': '📋', 'Commerce': '🛒', 'Social': '👥',
    'Feedback': '💬', 'Calendario': '📅', 'Layout': '📐',
  };
  blocks.forEach(b => bm.add(b.id, {
    label: b.label,
    content: b.content,
    category: '🧭 ' + b.cat,
    media: b.media || `<div style="font-size:32px;text-align:center;padding:4px;line-height:1.2">${catIcons[b.cat] || '🧩'}</div>`,
  }));
}

// ========== 3a. NAVIGAZIONE ==========
const navBlocks = [
  {
    id:'nav-bottom-tab', label:'Bottom Tab Bar', cat:'Navigazione',
    content:`<div style="display:flex;justify-content:space-around;padding:12px 0;background:white;border-top:1px solid #eee;font-family:Inter,sans-serif">
      <div style="text-align:center;color:#667eea"><div style="font-size:20px">🏠</div><div style="font-size:10px">Home</div></div>
      <div style="text-align:center;color:#999"><div style="font-size:20px">📊</div><div style="font-size:10px">Analytics</div></div>
      <div style="text-align:center;color:#999"><div style="font-size:20px">🔔</div><div style="font-size:10px">Notifiche</div></div>
      <div style="text-align:center;color:#999"><div style="font-size:20px">👤</div><div style="font-size:10px">Profilo</div></div>
    </div>`,
    media:'<div style="font-size:28px;text-align:center">📱</div>',
  },
  {
    id:'nav-header', label:'Header', cat:'Navigazione',
    content:`<div style="display:flex;justify-content:space-between;align-items:center;padding:16px;font-family:Inter,sans-serif">
      <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0">Titolo</h1>
      <div style="background:#667eea;color:white;border-radius:50%;width:38px;height:38px;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:15px">T</div>
    </div>`,
  },
  {
    id:'nav-header-search', label:'Header + Search', cat:'Navigazione',
    content:`<div style="padding:16px 16px 8px;font-family:Inter,sans-serif">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h1 style="font-size:20px;font-weight:700;color:#1a1a2e;margin:0">Cerca</h1>
        <span style="font-size:20px;color:#667eea">🔔</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;background:#f0f2f5;border-radius:12px;padding:10px 14px">
        <span style="color:#999">🔍</span>
        <input type="text" placeholder="Cerca..." style="background:none;border:none;font-size:14px;color:#333;width:100%;outline:none;font-family:Inter,sans-serif">
      </div>
    </div>`,
  },
  {
    id:'nav-back', label:'Back Button', cat:'Navigazione',
    content:`<div style="display:flex;align-items:center;gap:8px;padding:12px 16px;font-family:Inter,sans-serif">
      <span style="font-size:24px;color:#667eea;cursor:pointer;font-weight:300">‹</span>
      <span style="font-size:16px;font-weight:500;color:#333">Indietro</span>
    </div>`,
  },
  {
    id:'nav-hamburger', label:'Hamburger Menu ☰', cat:'Navigazione',
    content:`<div style="position:relative;font-family:Inter,sans-serif;min-height:200px">
      <!-- Barra superiore con hamburger -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:white;border-bottom:1px solid #f0f0f0">
        <div style="font-size:24px;cursor:pointer;color:#333;line-height:1;width:36px;text-align:center">☰</div>
        <span style="font-weight:600;color:#1a1a2e;font-size:16px">App Name</span>
        <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:600">T</div>
      </div>
      <!-- Sidebar (drawer) visibile in anteprima -->
      <div style="position:absolute;top:0;left:0;bottom:0;width:260px;background:white;z-index:200;box-shadow:2px 0 20px rgba(0,0,0,0.1);display:flex;flex-direction:column">
        <div style="padding:24px 16px 16px;background:linear-gradient(135deg,#667eea,#764ba2);color:white">
          <div style="width:50px;height:50px;border-radius:50%;background:rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;margin-bottom:8px">T</div>
          <div style="font-size:16px;font-weight:600">Toni Rossi</div>
          <div style="font-size:12px;opacity:0.8">toni@esempio.it</div>
        </div>
        <div style="flex:1;padding:8px 0">
          <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;color:#333;font-size:14px;background:#f0f2f5;border-right:3px solid #667eea"><span style="font-size:18px">🏠</span><span>Dashboard</span></div>
          <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;color:#555;font-size:14px"><span style="font-size:18px">👤</span><span>Profilo</span></div>
          <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;color:#555;font-size:14px"><span style="font-size:18px">⚙️</span><span>Impostazioni</span></div>
          <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;color:#555;font-size:14px"><span style="font-size:18px">🔔</span><span>Notifiche</span></div>
          <hr style="border:none;border-top:1px solid #f0f0f0;margin:8px 0">
          <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;color:#e55;font-size:14px"><span style="font-size:18px">🚪</span><span>Esci</span></div>
        </div>
      </div>
      <!-- Overlay (semi-trasparente) -->
      <div style="position:absolute;top:0;left:260px;right:0;bottom:0;background:rgba(0,0,0,0.3);z-index:199"></div>
    </div>`,
  },
  {
    id:'nav-top-tabs', label:'Top Tab Bar', cat:'Navigazione',
    content:`<div style="font-family:Inter,sans-serif;background:white;border-bottom:1px solid #f0f0f0">
      <div style="display:flex;padding:0 16px">
        <div style="flex:1;text-align:center;padding:12px 8px;border-bottom:2px solid #667eea;color:#667eea;font-weight:600;font-size:14px;cursor:pointer">Oggi</div>
        <div style="flex:1;text-align:center;padding:12px 8px;border-bottom:2px solid transparent;color:#999;font-weight:500;font-size:14px;cursor:pointer;transition:all 0.15s">Settimana</div>
        <div style="flex:1;text-align:center;padding:12px 8px;border-bottom:2px solid transparent;color:#999;font-weight:500;font-size:14px;cursor:pointer;transition:all 0.15s">Mese</div>
      </div>
    </div>`,
  },
];
reg(navBlocks);

// ========== 3b. DASHBOARD & STATS ==========
const statsBlocks = [
  {
    id:'stat-card', label:'Stat Card', cat:'Dashboard & Stats',
    content:`<div style="background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:16px;padding:16px;font-family:Inter,sans-serif">
      <div style="font-size:13px;opacity:0.9">Etichetta</div>
      <div style="font-size:28px;font-weight:800">€4.350</div>
      <div style="font-size:12px;opacity:0.8">↑ 23% variazione</div>
    </div>`,
  },
  {
    id:'stat-grid-2x2', label:'Stat Grid 2×2', cat:'Dashboard & Stats',
    content:`<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:16px;font-family:Inter,sans-serif">
      <div style="background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:16px;padding:16px"><div style="font-size:12px;opacity:0.9">Vendite</div><div style="font-size:26px;font-weight:800">€4.3k</div><div style="font-size:11px;opacity:0.8">↑ 23%</div></div>
      <div style="background:linear-gradient(135deg,#f093fb,#f5576c);color:white;border-radius:16px;padding:16px"><div style="font-size:12px;opacity:0.9">Utenti</div><div style="font-size:26px;font-weight:800">1.28k</div><div style="font-size:11px;opacity:0.8">↑ 12%</div></div>
      <div style="background:linear-gradient(135deg,#4facfe,#00f2fe);color:white;border-radius:16px;padding:16px"><div style="font-size:12px;opacity:0.9">Ordini</div><div style="font-size:26px;font-weight:800">89</div><div style="font-size:11px;opacity:0.8">+12 nuovi</div></div>
      <div style="background:linear-gradient(135deg,#43e97b,#38f9d7);color:#1a1a2e;border-radius:16px;padding:16px"><div style="font-size:12px;opacity:0.7">Revenue</div><div style="font-size:26px;font-weight:800">€12.4k</div><div style="font-size:11px;opacity:0.7">↑ 8%</div></div>
    </div>`,
    media:'<div style="font-size:28px;text-align:center">📊</div>',
  },
  {
    id:'bar-chart', label:'Bar Chart', cat:'Dashboard & Stats',
    content:`<div style="background:white;border-radius:16px;padding:16px;margin:0 16px 16px;font-family:Inter,sans-serif;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
      <div style="display:flex;justify-content:space-between;margin-bottom:12px"><span style="font-weight:600;color:#1a1a2e">Andamento</span><span style="color:#667eea;font-size:13px">Dettaglio →</span></div>
      <div style="display:flex;align-items:flex-end;gap:6px;height:80px">
        <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:40px"></div>
        <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:60px"></div>
        <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:80px"></div>
        <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:50px"></div>
        <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:70px"></div>
        <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:90px"></div>
      </div>
      <div style="display:flex;gap:6px;margin-top:4px">
        <span style="flex:1;text-align:center;font-size:10px;color:#999">L</span><span style="flex:1;text-align:center;font-size:10px;color:#999">M</span><span style="flex:1;text-align:center;font-size:10px;color:#999">M</span>
        <span style="flex:1;text-align:center;font-size:10px;color:#999">G</span><span style="flex:1;text-align:center;font-size:10px;color:#999">V</span><span style="flex:1;text-align:center;font-size:10px;color:#999">S</span>
      </div>
    </div>`,
  },
  {
    id:'progress-bar', label:'Barra Progresso', cat:'Dashboard & Stats',
    content:`<div style="padding:0 16px;font-family:Inter,sans-serif">
      <div style="display:flex;justify-content:space-between;font-size:13px;color:#555;margin-bottom:4px"><span>Avanzamento</span><span>75%</span></div>
      <div style="width:100%;height:8px;background:#eee;border-radius:8px;overflow:hidden">
        <div style="width:75%;height:100%;background:linear-gradient(90deg,#667eea,#764ba2);border-radius:8px"></div>
      </div>
    </div>`,
  },
  {
    id:'stats-row', label:'Stats Row 2 col', cat:'Dashboard & Stats',
    content:`<div style="display:flex;gap:12px;padding:0 16px;font-family:Inter,sans-serif">
      <div style="flex:1;background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 1px 6px rgba(0,0,0,0.04)">
        <div style="font-size:11px;color:#999">Views</div>
        <div style="font-size:22px;font-weight:700;color:#1a1a2e">2,847</div>
        <div style="font-size:11px;color:#43e97b">↑ 12%</div>
      </div>
      <div style="flex:1;background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 1px 6px rgba(0,0,0,0.04)">
        <div style="font-size:11px;color:#999">Clicks</div>
        <div style="font-size:22px;font-weight:700;color:#1a1a2e">384</div>
        <div style="font-size:11px;color:#e55">↓ 3%</div>
      </div>
    </div>`,
  },
];
reg(statsBlocks);

// ========== 3c. FORM ==========
const formBlocks = [
  {
    id:'form-input', label:'Campo Testo', cat:'Form & Input',
    content:`<div style="font-family:Inter,sans-serif;margin-bottom:12px;padding:0 16px">
      <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Etichetta</label>
      <input type="text" placeholder="Inserisci testo..." style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box">
    </div>`,
  },
  {
    id:'form-email', label:'Campo Email', cat:'Form & Input',
    content:`<div style="font-family:Inter,sans-serif;margin-bottom:12px;padding:0 16px">
      <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Email</label>
      <input type="email" placeholder="nome@esempio.it" style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box">
    </div>`,
  },
  {
    id:'form-password', label:'Campo Password', cat:'Form & Input',
    content:`<div style="font-family:Inter,sans-serif;margin-bottom:12px;padding:0 16px">
      <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Password</label>
      <input type="password" placeholder="••••••••" style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box">
    </div>`,
  },
  {
    id:'form-textarea', label:'Textarea', cat:'Form & Input',
    content:`<div style="font-family:Inter,sans-serif;margin-bottom:12px;padding:0 16px">
      <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Messaggio</label>
      <textarea placeholder="Scrivi qui..." rows="4" style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;resize:vertical;box-sizing:border-box"></textarea>
    </div>`,
  },
  {
    id:'form-select', label:'Menu a Tendina', cat:'Form & Input',
    content:`<div style="font-family:Inter,sans-serif;margin-bottom:12px;padding:0 16px">
      <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Scegli</label>
      <select style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box;background:white">
        <option>Opzione 1</option><option>Opzione 2</option><option>Opzione 3</option>
      </select>
    </div>`,
  },
  {
    id:'form-checkbox', label:'Checkbox', cat:'Form & Input',
    content:`<label style="display:flex;align-items:center;gap:8px;padding:0 16px;font-family:Inter,sans-serif;font-size:14px;color:#555;cursor:pointer">
      <input type="checkbox" style="width:18px;height:18px;accent-color:#667eea"> Accetta i termini
    </label>`,
  },
  {
    id:'form-toggle', label:'Toggle Switch', cat:'Form & Input',
    content:`<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;font-family:Inter,sans-serif;font-size:14px;color:#333">
      <span>Notifiche push</span>
      <label style="position:relative;display:inline-block;width:44px;height:24px">
        <input type="checkbox" checked style="opacity:0;width:0;height:0">
        <span style="position:absolute;cursor:pointer;inset:0;background:#667eea;border-radius:24px;transition:0.2s"></span>
        <span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transition:0.2s;transform:translateX(20px)"></span>
      </label>
    </div>`,
  },
  {
    id:'form-submit', label:'Bottone Submit', cat:'Form & Input',
    content:`<div style="padding:0 16px"><button style="width:100%;background:#667eea;color:white;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">Invia</button></div>`,
  },
];
reg(formBlocks);

// ========== 3d. ELEMENTI BASE ==========
const baseBlocks = [
  {
    id:'base-heading', label:'Titolo H1', cat:'Elementi Base',
    content:'<h1 style="font-family:Inter,sans-serif;font-size:28px;font-weight:700;color:#1a1a2e;margin:0;padding:0 16px">Titolo</h1>',
  },
  {
    id:'base-heading2', label:'Sottotitolo H2', cat:'Elementi Base',
    content:'<h2 style="font-family:Inter,sans-serif;font-size:22px;font-weight:600;color:#333;margin:0;padding:0 16px">Sottotitolo</h2>',
  },
  {
    id:'base-paragraph', label:'Paragrafo', cat:'Elementi Base',
    content:'<p style="font-family:Inter,sans-serif;font-size:15px;color:#555;line-height:1.6;margin:0;padding:0 16px">Testo descrittivo. Clicca per modificare.</p>',
  },
  {
    id:'base-card', label:'Card Base', cat:'Elementi Base',
    content:`<div style="background:white;border-radius:16px;padding:16px;margin:0 16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);font-family:Inter,sans-serif">
      <h3 style="margin:0 0 8px;font-size:16px;color:#333">Titolo Card</h3>
      <p style="margin:0;font-size:14px;color:#666">Contenuto della card. Personalizza cliccando.</p>
    </div>`,
  },
  {
    id:'base-button', label:'Bottone Primario', cat:'Elementi Base',
    content:'<div style="padding:0 16px"><button style="background:#667eea;color:white;border:none;border-radius:12px;padding:14px 24px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">Bottone</button></div>',
  },
  {
    id:'base-button-outline', label:'Bottone Outline', cat:'Elementi Base',
    content:'<div style="padding:0 16px"><button style="background:none;color:#667eea;border:2px solid #667eea;border-radius:12px;padding:12px 24px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">Bottone</button></div>',
  },
  {
    id:'base-fab', label:'FAB Button', cat:'Elementi Base',
    content:'<div style="position:fixed;bottom:24px;right:24px;width:56px;height:56px;background:#667eea;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;box-shadow:0 4px 16px rgba(102,126,234,0.4);cursor:pointer;z-index:50">+</div>',
  },
  {
    id:'base-divider', label:'Divisore', cat:'Elementi Base',
    content:'<hr style="border:none;border-top:1px solid #eee;margin:16px">',
  },
  {
    id:'base-spacer', label:'Spaziatore', cat:'Elementi Base',
    content:'<div style="height:16px"></div>',
  },
  {
    id:'base-avatar', label:'Avatar', cat:'Elementi Base',
    content:'<div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:600;font-family:Inter,sans-serif;margin:0 16px">T</div>',
  },
  {
    id:'base-badge', label:'Badge', cat:'Elementi Base',
    content:'<div style="display:inline-block;background:#667eea;color:white;border-radius:20px;padding:4px 12px;font-size:12px;font-weight:500;font-family:Inter,sans-serif;margin:0 16px">Nuovo</div>',
  },
  {
    id:'base-image', label:'Immagine', cat:'Elementi Base',
    content:'<div style="height:160px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:12px;margin:0 16px;display:flex;align-items:center;justify-content:center;color:white;font-size:40px">🖼️</div>',
  },
];
reg(baseBlocks);

// ========== 3e. LISTE ==========
const listBlocks = [
  {
    id:'list-simple', label:'Lista Semplice', cat:'Liste',
    content:`<div style="background:white;border-radius:16px;padding:8px 0;margin:0 16px;font-family:Inter,sans-serif;box-shadow:0 1px 6px rgba(0,0,0,0.04)">
      <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
        <div style="width:8px;height:8px;border-radius:50%;background:#667eea;flex-shrink:0"></div>
        <div style="flex:1;font-size:14px;color:#333">Elemento 1</div>
        <span style="color:#ccc">›</span>
      </div>
      <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
        <div style="width:8px;height:8px;border-radius:50%;background:#f5576c;flex-shrink:0"></div>
        <div style="flex:1;font-size:14px;color:#333">Elemento 2</div>
        <span style="color:#ccc">›</span>
      </div>
      <div style="padding:12px 16px;display:flex;align-items:center;gap:12px">
        <div style="width:8px;height:8px;border-radius:50%;background:#43e97b;flex-shrink:0"></div>
        <div style="flex:1;font-size:14px;color:#333">Elemento 3</div>
        <span style="color:#ccc">›</span>
      </div>
    </div>`,
  },
  {
    id:'list-task', label:'Task Item', cat:'Liste',
    content:`<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;font-family:Inter,sans-serif;border-bottom:1px solid #f0f0f0">
      <input type="checkbox" style="width:20px;height:20px;accent-color:#667eea;flex-shrink:0">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333">Task da fare</div><div style="font-size:11px;color:#999">Scadenza: domani</div></div>
      <span style="background:#fee;color:#e55;padding:2px 8px;border-radius:6px;font-size:11px">Urgente</span>
    </div>`,
  },
  {
    id:'list-menu', label:'Menu List', cat:'Liste',
    content:`<div style="background:white;border-radius:14px;margin:0 16px;font-family:Inter,sans-serif;overflow:hidden;box-shadow:0 1px 6px rgba(0,0,0,0.04)">
      <div style="padding:14px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
        <span style="font-size:18px">👤</span>
        <span style="flex:1;font-size:14px;color:#333">Profilo</span>
        <span style="color:#ccc">›</span>
      </div>
      <div style="padding:14px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
        <span style="font-size:18px">⚙️</span>
        <span style="flex:1;font-size:14px;color:#333">Impostazioni</span>
        <span style="color:#ccc">›</span>
      </div>
      <div style="padding:14px 16px;display:flex;align-items:center;gap:12px">
        <span style="font-size:18px">🚪</span>
        <span style="flex:1;font-size:14px;color:#e55">Esci</span>
        <span style="color:#ccc">›</span>
      </div>
    </div>`,
  },
];
reg(listBlocks);

// ========== 3f. COMMERCE ==========
const commerceBlocks = [
  {
    id:'prod-card', label:'Product Card', cat:'Commerce',
    content:`<div style="background:white;border-radius:16px;overflow:hidden;margin:0 16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);font-family:Inter,sans-serif">
      <div style="height:120px;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white;font-size:36px">🛍️</div>
      <div style="padding:12px">
        <div style="font-weight:600;color:#1a1a2e;font-size:15px">Prodotto Premium</div>
        <div style="font-size:12px;color:#999;margin:2px 0 8px">Categoria</div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:20px;font-weight:700;color:#667eea">€29,99</span>
          <span style="font-size:13px;color:#f5a623">★★★★☆</span>
        </div>
      </div>
    </div>`,
    media:'<div style="font-size:28px;text-align:center">🛒</div>',
  },
  {
    id:'rating-stars', label:'Rating Stelle', cat:'Commerce',
    content:'<div style="display:flex;gap:4px;padding:8px 16px;font-size:24px;font-family:Inter,sans-serif"><span style="color:#f5a623">★</span><span style="color:#f5a623">★</span><span style="color:#f5a623">★</span><span style="color:#f5a623">★</span><span style="color:#ddd">★</span><span style="font-size:13px;color:#666;margin-left:6px">4.0</span></div>',
  },
  {
    id:'price-tag', label:'Prezzo', cat:'Commerce',
    content:'<div style="padding:0 16px;font-family:Inter,sans-serif"><span style="font-size:28px;font-weight:800;color:#667eea">€29,99</span> <span style="font-size:14px;color:#999;text-decoration:line-through">€49,99</span> <span style="background:#fee;color:#e55;padding:2px 6px;border-radius:4px;font-size:11px">-40%</span></div>',
  },
];
reg(commerceBlocks);

// ========== 3g. SOCIAL ==========
const socialBlocks = [
  {
    id:'social-post', label:'Post Card', cat:'Social',
    content:`<div style="background:white;border-radius:14px;padding:14px;margin:0 16px;box-shadow:0 1px 8px rgba(0,0,0,0.04);font-family:Inter,sans-serif">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:600">T</div>
        <div><div style="font-size:14px;font-weight:600;color:#333">Toni Rossi</div><div style="font-size:11px;color:#999">2 ore fa</div></div>
      </div>
      <p style="font-size:14px;color:#444;margin:0 0 10px;line-height:1.5">Stiamo lavorando a qualcosa di incredibile! 🚀</p>
      <div style="display:flex;gap:16px;font-size:13px;color:#999"><span>❤️ 24</span><span>💬 8</span><span>↗️ 3</span></div>
    </div>`,
  },
  {
    id:'social-notifica', label:'Notifica Social', cat:'Social',
    content:`<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;font-family:Inter,sans-serif;border-bottom:1px solid #f0f0f0">
      <div style="width:40px;height:40px;border-radius:50%;background:#e8f4fd;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">❤️</div>
      <div><div style="font-size:14px;color:#333">A Marco piace il tuo post</div><div style="font-size:11px;color:#999">15 min fa</div></div>
    </div>`,
  },
];
reg(socialBlocks);

// ========== 3h. FEEDBACK ==========
const feedbackBlocks = [
  {
    id:'alert-success', label:'Alert Success', cat:'Feedback',
    content:`<div style="display:flex;align-items:center;gap:10px;background:#e8fce8;color:#2a7;border-radius:12px;padding:12px 16px;margin:0 16px;font-family:Inter,sans-serif;font-size:14px">
      <span style="font-size:18px">✅</span>
      <span>Operazione completata con successo!</span>
    </div>`,
  },
  {
    id:'alert-error', label:'Alert Error', cat:'Feedback',
    content:`<div style="display:flex;align-items:center;gap:10px;background:#fce8e8;color:#e55;border-radius:12px;padding:12px 16px;margin:0 16px;font-family:Inter,sans-serif;font-size:14px">
      <span style="font-size:18px">❌</span>
      <span>Errore: qualcosa è andato storto.</span>
    </div>`,
  },
  {
    id:'alert-info', label:'Alert Info', cat:'Feedback',
    content:`<div style="display:flex;align-items:center;gap:10px;background:#e8f4fd;color:#48b;border-radius:12px;padding:12px 16px;margin:0 16px;font-family:Inter,sans-serif;font-size:14px">
      <span style="font-size:18px">ℹ️</span>
      <span>Nuovo aggiornamento disponibile.</span>
    </div>`,
  },
  {
    id:'loading', label:'Loading Spinner', cat:'Feedback',
    content:`<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px;font-family:Inter,sans-serif">
      <div style="width:36px;height:36px;border:3px solid #eee;border-top-color:#667eea;border-radius:50%;animation:spin 0.8s linear infinite"></div>
      <div style="font-size:13px;color:#999">Caricamento in corso...</div>
    </div>`,
  },
];
reg(feedbackBlocks);

// ========== 3i. CALENDARIO ==========
const calendarBlocks = [
  {
    id:'calendar-mini', label:'Mini Calendario', cat:'Calendario',
    content:`<div style="background:white;border-radius:16px;padding:16px;margin:0 16px;box-shadow:0 1px 8px rgba(0,0,0,0.04);font-family:Inter,sans-serif">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <span style="font-weight:600;color:#333">Luglio 2026</span>
        <span style="color:#667eea;font-size:18px;cursor:pointer">›</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;font-size:12px">
        <span style="color:#999;font-weight:500">L</span><span style="color:#999;font-weight:500">M</span><span style="color:#999;font-weight:500">M</span>
        <span style="color:#999;font-weight:500">G</span><span style="color:#999;font-weight:500">V</span><span style="color:#e55;font-weight:500">S</span><span style="color:#e55;font-weight:500">D</span>
        <span></span><span></span><span></span><span>1</span><span>2</span><span style="color:#e55">3</span><span style="color:#e55">4</span>
        <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span style="color:#e55">10</span><span style="color:#e55">11</span>
        <span>12</span><span>13</span><span style="background:#667eea;color:white;border-radius:50%;width:24px;height:24px;margin:auto;line-height:24px">14</span>
        <span>15</span><span>16</span><span style="color:#e55">17</span><span style="color:#e55">18</span>
      </div>
    </div>`,
  },
  {
    id:'event-card', label:'Event Card', cat:'Calendario',
    content:`<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;font-family:Inter,sans-serif">
      <div style="text-align:center;background:#f0f2f5;border-radius:10px;padding:6px 12px;min-width:48px;flex-shrink:0">
        <div style="font-size:10px;color:#999;text-transform:uppercase">Lug</div>
        <div style="font-size:18px;font-weight:700;color:#1a1a2e">14</div>
      </div>
      <div><div style="font-size:14px;font-weight:500;color:#333">Review Design</div><div style="font-size:12px;color:#999">10:00 - 11:30</div></div>
      <div style="margin-left:auto;width:8px;height:8px;border-radius:50%;background:#667eea"></div>
    </div>`,
  },
];
reg(calendarBlocks);

// ========== 3j. LAYOUT ==========
const layoutBlocks = [
  {
    id:'layout-row', label:'Riga Flessibile', cat:'Layout',
    content:'<div style="display:flex;gap:12px;padding:16px"><div style="flex:1;background:#667eea20;border-radius:8px;padding:12px;text-align:center;font-size:12px;color:#667eea">Col 1</div><div style="flex:1;background:#764ba220;border-radius:8px;padding:12px;text-align:center;font-size:12px;color:#764ba2">Col 2</div></div>',
  },
  {
    id:'layout-col', label:'Colonna', cat:'Layout',
    content:'<div style="display:flex;flex-direction:column;gap:8px;padding:16px"><div style="background:#667eea20;border-radius:8px;padding:12px;text-align:center;font-size:12px;color:#667eea">Sezione 1</div><div style="background:#764ba220;border-radius:8px;padding:12px;text-align:center;font-size:12px;color:#764ba2">Sezione 2</div></div>',
  },
  {
    id:'layout-grid-2', label:'Grid 2 colonne', cat:'Layout',
    content:'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:16px"><div style="background:#f0f2f5;border-radius:8px;padding:20px;text-align:center;font-size:12px;color:#999">1</div><div style="background:#f0f2f5;border-radius:8px;padding:20px;text-align:center;font-size:12px;color:#999">2</div></div>',
  },
  {
    id:'layout-grid-3', label:'Grid 3 colonne', cat:'Layout',
    content:'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:16px"><div style="background:#f0f2f5;border-radius:8px;padding:16px;text-align:center;font-size:11px;color:#999">1</div><div style="background:#f0f2f5;border-radius:8px;padding:16px;text-align:center;font-size:11px;color:#999">2</div><div style="background:#f0f2f5;border-radius:8px;padding:16px;text-align:center;font-size:11px;color:#999">3</div></div>',
  },
  {
    id:'layout-section', label:'Sezione Colorata', cat:'Layout',
    content:'<div style="background:linear-gradient(135deg,#667eea,#764ba2);padding:32px 16px;color:white;text-align:center;font-family:Inter,sans-serif"><h2 style="margin:0 0 8px;font-size:22px">Sezione</h2><p style="margin:0;font-size:14px;opacity:0.9">Contenuto della sezione</p></div>',
  },
  {
    id:'layout-limiter', label:'Contenitore Max-W', cat:'Layout',
    content:'<div style="max-width:420px;margin:0 auto;padding:16px;font-family:Inter,sans-serif;color:#666;font-size:14px">Contenitore centrato (max 420px come app mobile)</div>',
  },
];
reg(layoutBlocks);

// —————————————————————————————————————
// 4. PAGINE PREFINITE (7 template)
// —————————————————————————————————————
const pageTemplates = {
  Dashboard: `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;padding:16px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
    <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0">Dashboard</h1>
    <div style="background:#667eea;color:white;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px">T</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
    <div style="background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:16px;padding:16px">
      <div style="font-size:13px;opacity:0.9">Vendite Oggi</div>
      <div style="font-size:28px;font-weight:800">€4.350</div>
      <div style="font-size:12px;opacity:0.8">↑ 23% da ieri</div>
    </div>
    <div style="background:linear-gradient(135deg,#f093fb,#f5576c);color:white;border-radius:16px;padding:16px">
      <div style="font-size:13px;opacity:0.9">Utenti Attivi</div>
      <div style="font-size:28px;font-weight:800">1.280</div>
      <div style="font-size:12px;opacity:0.8">↑ 12% settimana</div>
    </div>
    <div style="background:linear-gradient(135deg,#4facfe,#00f2fe);color:white;border-radius:16px;padding:16px">
      <div style="font-size:13px;opacity:0.9">Ordini</div>
      <div style="font-size:28px;font-weight:800">89</div>
      <div style="font-size:12px;opacity:0.8">+12 in arrivo</div>
    </div>
    <div style="background:linear-gradient(135deg,#43e97b,#38f9d7);color:#1a1a2e;border-radius:16px;padding:16px">
      <div style="font-size:13px;opacity:0.7">Revenue</div>
      <div style="font-size:28px;font-weight:800">€12.4k</div>
      <div style="font-size:12px;opacity:0.7">↑ 8%</div>
    </div>
  </div>
  <div style="background:white;border-radius:16px;padding:16px;margin-bottom:16px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="display:flex;justify-content:space-between;margin-bottom:12px"><span style="font-weight:600;color:#1a1a2e">Andamento Settimanale</span><span style="color:#667eea;font-size:13px">Dettaglio →</span></div>
    <div style="display:flex;align-items:flex-end;gap:8px;height:100px">
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:50px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:70px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:90px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:60px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:80px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:100px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:75px"></div>
    </div>
  </div>
  <div style="background:white;border-radius:16px;padding:16px;margin-bottom:80px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="font-weight:600;color:#1a1a2e;margin-bottom:12px">Task Recenti</div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:10px"><input type="checkbox" checked style="width:18px;height:18px;accent-color:#667eea"><div><div style="font-size:14px;color:#333;text-decoration:line-through;opacity:0.6">Review design</div><div style="font-size:11px;color:#999">Scaduto ieri</div></div></div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:10px"><input type="checkbox" style="width:18px;height:18px;accent-color:#667eea"><div><div style="font-size:14px;color:#333">Preparare report</div><div style="font-size:11px;color:#999">Domani</div></div></div>
    <div style="padding:10px 0;display:flex;align-items:center;gap:10px"><input type="checkbox" style="width:18px;height:18px;accent-color:#667eea"><div><div style="font-size:14px;color:#333">Call team developer</div><div style="font-size:11px;color:#999">Tra 3 giorni</div></div></div>
  </div>
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0;border-top:1px solid #eee;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#667eea"><div style="font-size:20px">🏠</div><div style="font-size:10px">Home</div></div>
    <div style="text-align:center;color:#999"><div style="font-size:20px">📊</div><div style="font-size:10px">Analytics</div></div>
    <div style="text-align:center;color:#999"><div style="font-size:20px">🔔</div><div style="font-size:10px">Notifiche</div></div>
    <div style="text-align:center;color:#999"><div style="font-size:20px">👤</div><div style="font-size:10px">Profilo</div></div>
  </div>
</div>`,

  Login: `
<div style="font-family:Inter,sans-serif;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px">
  <div style="font-size:48px;margin-bottom:8px">🚀</div>
  <h1 style="color:white;font-size:28px;font-weight:700;margin:0 0 4px 0">Benvenuto</h1>
  <p style="color:rgba(255,255,255,0.7);font-size:14px;margin:0 0 32px 0">Accedi al tuo account</p>
  <div style="width:100%;max-width:340px">
    <div style="background:rgba(255,255,255,0.15);border-radius:14px;padding:14px 16px;margin-bottom:12px;display:flex;align-items:center;gap:10px">
      <span style="color:rgba(255,255,255,0.6)">📧</span>
      <input type="email" placeholder="Email" style="background:none;border:none;color:white;font-size:15px;width:100%;outline:none;font-family:Inter,sans-serif" value="utente@esempio.it">
    </div>
    <div style="background:rgba(255,255,255,0.15);border-radius:14px;padding:14px 16px;margin-bottom:20px;display:flex;align-items:center;gap:10px">
      <span style="color:rgba(255,255,255,0.6)">🔒</span>
      <input type="password" placeholder="Password" style="background:none;border:none;color:white;font-size:15px;width:100%;outline:none;font-family:Inter,sans-serif" value="••••••••">
    </div>
    <button style="width:100%;background:white;color:#667eea;border:none;border-radius:14px;padding:16px;font-size:16px;font-weight:700;font-family:Inter,sans-serif;cursor:pointer">Accedi</button>
    <div style="display:flex;justify-content:space-between;margin-top:14px">
      <a style="color:rgba(255,255,255,0.7);font-size:13px;text-decoration:none">Password dimenticata?</a>
      <a style="color:rgba(255,255,255,0.7);font-size:13px;text-decoration:none">Registrati</a>
    </div>
  </div>
  <div style="margin-top:32px;width:100%;max-width:340px">
    <div style="text-align:center;color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:16px">oppure continua con</div>
    <div style="display:flex;gap:12px">
      <button style="flex:1;background:rgba(255,255,255,0.15);border:none;border-radius:12px;padding:12px;color:white;font-size:20px;cursor:pointer">🔵</button>
      <button style="flex:1;background:rgba(255,255,255,0.15);border:none;border-radius:12px;padding:12px;color:white;font-size:20px;cursor:pointer">⚫</button>
      <button style="flex:1;background:rgba(255,255,255,0.15);border:none;border-radius:12px;padding:12px;color:white;font-size:20px;cursor:pointer">🍎</button>
    </div>
  </div>
</div>`,

  Profilo: `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh">
  <div style="background:linear-gradient(135deg,#667eea,#764ba2);padding:40px 20px 60px;text-align:center">
    <div style="width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.3);margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:36px;color:white;font-weight:700">T</div>
    <h2 style="color:white;margin:0;font-size:22px">Toni Rossi</h2>
    <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:13px">Product Designer</p>
  </div>
  <div style="margin:-30px 16px 16px;background:white;border-radius:16px;padding:16px;display:flex;gap:8px;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
    <div style="flex:1;text-align:center"><div style="font-size:20px;font-weight:700;color:#1a1a2e">128</div><div style="font-size:11px;color:#999">Progetti</div></div>
    <div style="flex:1;text-align:center"><div style="font-size:20px;font-weight:700;color:#1a1a2e">4.8k</div><div style="font-size:11px;color:#999">Followers</div></div>
    <div style="flex:1;text-align:center"><div style="font-size:20px;font-weight:700;color:#1a1a2e">892</div><div style="font-size:11px;color:#999">Like</div></div>
  </div>
  <div style="margin:0 16px 16px;background:white;border-radius:16px;padding:16px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="font-weight:600;color:#1a1a2e;margin-bottom:12px">Informazioni</div>
    <div style="display:flex;gap:10px;margin-bottom:8px"><span style="color:#667eea">📍</span><span style="font-size:14px;color:#555">Milano, Italia</span></div>
    <div style="display:flex;gap:10px;margin-bottom:8px"><span style="color:#667eea">💼</span><span style="font-size:14px;color:#555">Freelance · Design</span></div>
    <div style="display:flex;gap:10px"><span style="color:#667eea">🔗</span><span style="font-size:14px;color:#667eea">toni.design</span></div>
  </div>
  <div style="margin:0 16px 80px;background:white;border-radius:16px;padding:16px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="font-weight:600;color:#1a1a2e;margin-bottom:12px">Progetti Recenti</div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between"><span style="font-size:14px;color:#333">App Dashboard</span><span style="font-size:12px;color:#667eea">In corso</span></div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between"><span style="font-size:14px;color:#333">E-commerce Redesign</span><span style="font-size:12px;color:#999">Completato</span></div>
    <div style="padding:10px 0;display:flex;justify-content:space-between"><span style="font-size:14px;color:#333">Sito Portfolio</span><span style="font-size:12px;color:#667eea">Revisione</span></div>
  </div>
</div>`,

  Notifiche: `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;padding:16px">
  <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0 0 4px">Notifiche</h1>
  <p style="font-size:13px;color:#999;margin:0 0 16px">Le tue ultime attività</p>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:16px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;gap:12px;align-items:flex-start">
      <div style="width:40px;height:40px;border-radius:50%;background:#e8f4fd;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">📊</div>
      <div><div style="font-size:14px;color:#333">Il tuo report settimanale è pronto</div><div style="font-size:11px;color:#999">2 minuti fa</div></div>
    </div>
    <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;gap:12px;align-items:flex-start">
      <div style="width:40px;height:40px;border-radius:50%;background:#fce8e8;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">❤️</div>
      <div><div style="font-size:14px;color:#333">Marco ha messo like al tuo progetto</div><div style="font-size:11px;color:#999">15 minuti fa</div></div>
    </div>
    <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;gap:12px;align-items:flex-start">
      <div style="width:40px;height:40px;border-radius:50%;background:#e8fce8;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">✅</div>
      <div><div style="font-size:14px;color:#333">Task "Review design" completato</div><div style="font-size:11px;color:#999">1 ora fa</div></div>
    </div>
    <div style="padding:12px 16px;display:flex;gap:12px;align-items:flex-start">
      <div style="width:40px;height:40px;border-radius:50%;background:#f0e8fc;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">💬</div>
      <div><div style="font-size:14px;color:#333">Nuovo commento sul task "Homepage"</div><div style="font-size:11px;color:#999">3 ore fa</div></div>
    </div>
  </div>
  <div style="height:80px"></div>
</div>`,

  'Task List': `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;padding:16px">
  <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0 0 4px">Task List</h1>
  <p style="font-size:13px;color:#999;margin:0 0 16px">5 task da completare</p>
  <div style="display:flex;gap:8px;margin-bottom:16px;overflow-x:auto">
    <button style="background:#667eea;color:white;border:none;border-radius:20px;padding:8px 16px;font-size:13px;font-family:Inter,sans-serif;cursor:pointer;white-space:nowrap">Tutti</button>
    <button style="background:white;color:#555;border:1px solid #ddd;border-radius:20px;padding:8px 16px;font-size:13px;font-family:Inter,sans-serif;cursor:pointer;white-space:nowrap">Oggi</button>
    <button style="background:white;color:#555;border:1px solid #ddd;border-radius:20px;padding:8px 16px;font-size:13px;font-family:Inter,sans-serif;cursor:pointer;white-space:nowrap">Settimana</button>
  </div>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:16px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
      <input type="checkbox" style="width:20px;height:20px;accent-color:#667eea">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333">Review design system</div><div style="font-size:11px;color:#999">Oggi · Alta</div></div>
      <span style="background:#fee;color:#e55;padding:4px 8px;border-radius:6px;font-size:11px">Urgente</span>
    </div>
    <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
      <input type="checkbox" style="width:20px;height:20px;accent-color:#667eea">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333">Preparare report utenti</div><div style="font-size:11px;color:#999">Domani · Media</div></div>
      <span style="background:#efe;color:#484;padding:4px 8px;border-radius:6px;font-size:11px">In corso</span>
    </div>
    <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
      <input type="checkbox" style="width:20px;height:20px;accent-color:#667eea">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333">Call con developer</div><div style="font-size:11px;color:#999">Giovedì · Media</div></div>
    </div>
    <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
      <input type="checkbox" style="width:20px;height:20px;accent-color:#667eea">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333">Aggiornare roadmap</div><div style="font-size:11px;color:#999">Venerdì · Bassa</div></div>
    </div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px">
      <input type="checkbox" checked style="width:20px;height:20px;accent-color:#667eea">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333;text-decoration:line-through;opacity:0.6">Onboarding cliente</div><div style="font-size:11px;color:#999">Completato</div></div>
    </div>
  </div>
  <div style="position:fixed;bottom:24px;right:24px;width:56px;height:56px;background:#667eea;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;box-shadow:0 4px 16px rgba(102,126,234,0.4);cursor:pointer">+</div>
  <div style="height:80px"></div>
</div>`,

  Impostazioni: `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;padding:16px">
  <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0 0 16px">Impostazioni</h1>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="font-size:12px;font-weight:600;color:#999;padding:8px 16px;text-transform:uppercase">Account</div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0"><span style="font-size:18px">👤</span><div style="flex:1"><div style="font-size:14px;color:#333">Nome</div><div style="font-size:12px;color:#999">Toni Rossi</div></div><span style="color:#ccc">›</span></div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0"><span style="font-size:18px">📧</span><div style="flex:1"><div style="font-size:14px;color:#333">Email</div><div style="font-size:12px;color:#999">toni@esempio.it</div></div><span style="color:#ccc">›</span></div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0"><span style="font-size:18px">🔒</span><div style="flex:1"><div style="font-size:14px;color:#333">Password</div><div style="font-size:12px;color:#999">Ultimo cambio 2 mesi fa</div></div><span style="color:#ccc">›</span></div>
  </div>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="font-size:12px;font-weight:600;color:#999;padding:8px 16px;text-transform:uppercase">Notifiche</div>
    <div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f0f0f0">
      <div style="display:flex;align-items:center;gap:12px"><span style="font-size:18px">🔔</span><span style="font-size:14px;color:#333">Notifiche push</span></div>
      <label style="position:relative;display:inline-block;width:44px;height:24px"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#667eea;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transform:translateX(20px)"></span></label>
    </div>
    <div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f0f0f0">
      <div style="display:flex;align-items:center;gap:12px"><span style="font-size:18px">📧</span><span style="font-size:14px;color:#333">Email promozionali</span></div>
      <label style="position:relative;display:inline-block;width:44px;height:24px"><input type="checkbox" style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#ddd;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%"></span></label>
    </div>
  </div>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="font-size:12px;font-weight:600;color:#999;padding:8px 16px;text-transform:uppercase">Preferenze</div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0"><span style="font-size:18px">🌐</span><div style="flex:1"><div style="font-size:14px;color:#333">Lingua</div><div style="font-size:12px;color:#999">Italiano</div></div><span style="color:#ccc">›</span></div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0"><span style="font-size:18px">🎨</span><div style="flex:1"><div style="font-size:14px;color:#333">Tema</div><div style="font-size:12px;color:#999">Chiaro</div></div><span style="color:#ccc">›</span></div>
  </div>
  <div style="margin-top:24px;padding:0 16px"><button style="width:100%;background:#fee;color:#e55;border:none;border-radius:14px;padding:14px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">🚪 Esci</button></div>
  <div style="height:80px"></div>
</div>`,

  Onboarding: `
<div style="font-family:Inter,sans-serif;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center">
  <div style="font-size:64px;margin-bottom:16px">🎉</div>
  <h1 style="color:white;font-size:30px;font-weight:800;margin:0 0 12px">Benvenuto nella<br>tua nuova App</h1>
  <p style="color:rgba(255,255,255,0.8);font-size:15px;line-height:1.6;max-width:300px;margin:0 0 40px">Un'esperienza semplice e potente per gestire tutto in un unico posto.</p>
  <div style="display:flex;gap:16px;margin-bottom:32px">
    <div style="width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.4)"></div>
    <div style="width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.4)"></div>
    <div style="width:10px;height:10px;border-radius:50%;background:white"></div>
    <div style="width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.4)"></div>
  </div>
  <button style="width:100%;max-width:300px;background:white;color:#667eea;border:none;border-radius:14px;padding:16px;font-size:16px;font-weight:700;font-family:Inter,sans-serif;cursor:pointer">Inizia Ora</button>
  <a style="color:rgba(255,255,255,0.6);font-size:13px;margin-top:12px;text-decoration:none">Salta introduzione</a>
</div>`,
};

// —————————————————————————————————————
// 5. CREA PAGINE PREFINITE (FORZA FRESCO)
// —————————————————————————————————————
function createDefaultPages() {
  const names = ['Dashboard', 'Login', 'Profilo', 'Notifiche', 'Task List', 'Impostazioni', 'Onboarding'];

  // Svuota TUTTE le pagine esistenti (così non si accumulano con localStorage)
  const existing = pages.getAll();
  existing.forEach(p => { try { pages.remove(p); } catch(e) {} });

  // Crea tutte le pagine da capo
  names.forEach(name => {
    pages.add({
      id: 'page-' + name.toLowerCase().replace(/\s+/g, '-'),
      name: name,
      component: pageTemplates[name],
    });
  });

  // Seleziona Dashboard
  const all = pages.getAll();
  if (all.length > 0) pages.select(all[0]);
  renderPageTabs();

  // Forza salvataggio in localStorage per sovrascrivere eventuali dati vecchi
  try { editor.store(); } catch(e) {}
}

// —————————————————————————————————————
// 6. TEMI (chiaro, scuro, corporate)
// —————————————————————————————————————
const themes = {
  light: { bg:'#f5f7fa', card:'#ffffff', text:'#1a1a2e', textSec:'#555', textMuted:'#999', primary:'#667eea', border:'#f0f0f0', headerBg:'#ffffff' },
  dark:  { bg:'#0f0f23', card:'#1a1a2e', text:'#e8e8e8', textSec:'#aaa', textMuted:'#666', primary:'#818cf8', border:'#2d2d4a', headerBg:'#1a1a2e' },
  corporate: { bg:'#f8f9fa', card:'#ffffff', text:'#212529', textSec:'#495057', textMuted:'#868e96', primary:'#0d6efd', border:'#dee2e6', headerBg:'#212529' },
};

function applyTheme(name) {
  const t = themes[name];
  if (!t) return;
  const css = `
    body { background:${t.bg}!important; }
    .gjs-cv-canvas { background:${t.bg}; }
    .gjs-frame, .gjs-frame-wrapper { background:transparent; }
    .gjs-pn-views-container { background:${t.card}; border-color:${t.border}; }
    .gjs-pn-views { background:${t.bg}; }
    .gjs-block { background:${t.card}; color:${t.text}; border-color:${t.border}; }
    .gjs-block-label { color:${t.textSec}; }
    .gjs-category-title { color:${t.text}; }
    .gjs-title { color:${t.text}; border-color:${t.border}; }
    .gjs-btn-prim { background:${t.primary}; }
    .gjs-pn-btn { color:${t.textSec}; }
    .gjs-toolbar { background:${t.card}; border-color:${t.border}; }
    .gjs-selector { color:${t.text}; }
    .gjs-composites { color:${t.text}; }
    .gjs-field { background:${t.bg}; color:${t.text}; }
    .gjs-label { color:${t.textSec}; }
    #page-tabs { background:${t.headerBg}; border-color:${t.border}; }
    .page-tab { color:${t.textMuted}; }
    .page-tab.active { color:${t.primary}; border-bottom-color:${t.primary}; }
    #custom-toolbar { background:${t.card}; border-color:${t.border}; }
    .toolbar-brand { color:${t.text}; }
    .tb-btn { color:${t.textSec}; }
    .tb-btn:hover { background:${t.bg}; }
    .tb-btn.active { background:${t.primary}; color:white; }
  `;
  let el = document.getElementById('theme-style');
  if (!el) { el = document.createElement('style'); el.id = 'theme-style'; document.head.appendChild(el); }
  el.textContent = css;

  document.querySelectorAll('[data-theme]').forEach(b => b.classList.toggle('active', b.dataset.theme === name));
}

document.querySelectorAll('[data-theme]').forEach(btn => {
  btn.onclick = () => applyTheme(btn.dataset.theme);
});

// —————————————————————————————————————
// 7. EXPORT
// —————————————————————————————————————
function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.getElementById('btn-export-html').onclick = () => {
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>${editor.getCss()}</style></head><body>${editor.getHtml()}</body></html>`;
  const pageName = (pages.getSelected()?.get('name') || 'pagina').replace(/\s+/g, '-');
  downloadFile(html, `${pageName}.html`, 'text/html');
};

document.getElementById('btn-export-all').onclick = () => {
  const all = pages.getAll();
  let html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Export Completo</title><style>body{font-family:Inter,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f7fa}h1{color:#1a1a2e}pre{background:white;border-radius:8px;padding:12px;overflow-x:auto;font-size:13px}hr{border:none;border-top:1px solid #eee;margin:24px 0}</style></head><body>';
  html += '<h1>📦 UI Builder Pro — Export Completo</h1>';
  all.forEach(p => {
    pages.select(p);
    const name = p.get('name') || p.get('id');
    html += `<h2>📄 ${name}</h2>`;
    html += `<h3>HTML</h3><pre>${escapeHtml(editor.getHtml())}</pre>`;
    html += `<h3>CSS</h3><pre>${escapeHtml(editor.getCss())}</pre>`;
    html += '<hr>';
  });
  html += '</body></html>';
  pages.select(all[0]);
  downloadFile(html, 'export-completo.html', 'text/html');
};

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// —————————————————————————————————————
// 8. AVVIO
// —————————————————————————————————————
applyTheme('light');
createDefaultPages();

console.log('✅ UI Builder Pro — ' + pages.getAll().length + ' pagine, ' + Object.keys(bm.getAll()).length + ' blocchi');
