/* ============================================================
   UI Builder Pro — Completo con Page Manager
   GrapesJS 0.23.2 — Multi-pagina, 50+ blocchi, 6 template
   ============================================================ */

// —————————————————————————————————————
// 1. INIZIALIZZA EDITOR
// —————————————————————————————————————
var editor = grapesjs.init({
  container: '#gjs',
  width: 'auto',
  height: 'calc(100vh - 86px)',

  // Page manager built-in
  pages: {
    type: 'page',
  },

  storageManager: {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
  },

  blockManager: { blocks: [] },

  deviceManager: {
    devices: [
      { name: 'Telefono',  width: '390',  height: '844' },
      { name: 'Tablet',    width: '768',  height: '1024' },
      { name: 'Desktop',   width: '1440', height: '900' },
    ]
  },

  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ],
  },

  // UI personalizzata
  panels: { defaults: [] },
});

// —————————————————————————————————————
// 2. PAGE MANAGER — UI tabs personalizzati
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
    tab.onclick = () => {
      pages.select(p);
      renderPageTabs();
    };
    pageTabsEl.appendChild(tab);
  });
}

// Listen for page changes
editor.on('page', renderPageTabs);

// Add new page
document.getElementById('btn-add-page').onclick = () => {
  const name = prompt('Nome nuova pagina:', 'Nuova Pagina');
  if (!name) return;
  const id = 'page-' + Date.now();
  pages.add({
    id: id,
    name: name,
    component: `<div style="padding:20px;font-family:Inter,sans-serif;color:#333;">
      <h2>${name}</h2>
      <p>Trascina i blocchi qui</p>
    </div>`,
  });
  // Select the new page
  pages.select(id);
  renderPageTabs();
};

// Delete current page
document.getElementById('btn-del-page').onclick = () => {
  const all = pages.getAll();
  if (all.length <= 1) {
    alert('Devi tenere almeno una pagina!');
    return;
  }
  const current = pages.getSelected();
  const name = current.get('name') || current.get('id');
  if (!confirm(`Eliminare "${name}"?`)) return;
  pages.remove(current);
  renderPageTabs();
};

// —————————————————————————————————————
// 3. PAGINE PREFINITE
// —————————————————————————————————————
function createDefaultPages() {
  // Prima pagina: rinomina in "Dashboard"
  const first = pages.getAll()[0];
  if (first) {
    first.set('name', 'Dashboard');
    first.set('component', pageContent_Dashboard);
  }

  // Aggiungi le altre pagine
  const pageDefs = [
    { id: 'page-login',     name: 'Login',     content: pageContent_Login },
    { id: 'page-profilo',   name: 'Profilo',   content: pageContent_Profilo },
    { id: 'page-notifiche', name: 'Notifiche', content: pageContent_Notifiche },
    { id: 'page-tasklist',  name: 'Task List', content: pageContent_TaskList },
    { id: 'page-impostazioni', name: 'Impostazioni', content: pageContent_Impostazioni },
  ];

  pageDefs.forEach(p => {
    pages.add({ id: p.id, name: p.name, component: p.content });
  });

  // Torna alla prima pagina
  pages.select(first || pages.getAll()[0]);
  renderPageTabs();
}

// —————————————————————————————————————
// 4. CONTENUTO PAGINE PREFINITE
// —————————————————————————————————————
const pageContent_Dashboard = `
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
      <div style="font-size:12px;opacity:0.8">↑ 12% questa settimana</div>
    </div>
    <div style="background:linear-gradient(135deg,#4facfe,#00f2fe);color:white;border-radius:16px;padding:16px">
      <div style="font-size:13px;opacity:0.9">Ordini</div>
      <div style="font-size:28px;font-weight:800">89</div>
      <div style="font-size:12px;opacity:0.8">+12 in arrivo</div>
    </div>
    <div style="background:linear-gradient(135deg,#43e97b,#38f9d7);color:#1a1a2e;border-radius:16px;padding:16px">
      <div style="font-size:13px;opacity:0.7">Revenue</div>
      <div style="font-size:28px;font-weight:800">€12.4k</div>
      <div style="font-size:12px;opacity:0.7">↑ 8% vs mese scorso</div>
    </div>
  </div>
  <div style="background:white;border-radius:16px;padding:16px;margin-bottom:16px">
    <div style="display:flex;justify-content:space-between;margin-bottom:12px">
      <span style="font-weight:600;color:#1a1a2e">Andamento Settimanale</span>
      <span style="color:#667eea;font-size:13px">Dettaglio →</span>
    </div>
    <div style="display:flex;align-items:flex-end;gap:8px;height:100px">
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:50px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:70px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:90px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:60px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:80px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:100px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:8px 8px 0 0;height:75px"></div>
    </div>
    <div style="display:flex;gap:8px;margin-top:4px">
      <span style="flex:1;text-align:center;font-size:10px;color:#999">Lun</span>
      <span style="flex:1;text-align:center;font-size:10px;color:#999">Mar</span>
      <span style="flex:1;text-align:center;font-size:10px;color:#999">Mer</span>
      <span style="flex:1;text-align:center;font-size:10px;color:#999">Gio</span>
      <span style="flex:1;text-align:center;font-size:10px;color:#999">Ven</span>
      <span style="flex:1;text-align:center;font-size:10px;color:#999">Sab</span>
      <span style="flex:1;text-align:center;font-size:10px;color:#999">Dom</span>
    </div>
  </div>
  <div style="display:flex;gap:12px;margin-bottom:16px">
    <div style="flex:1;background:white;border-radius:12px;padding:12px;text-align:center">
      <div style="font-size:20px;font-weight:700;color:#1a1a2e">85%</div>
      <div style="font-size:11px;color:#999">Completamento</div>
    </div>
    <div style="flex:1;background:white;border-radius:12px;padding:12px;text-align:center">
      <div style="font-size:20px;font-weight:700;color:#1a1a2e">4.8</div>
      <div style="font-size:11px;color:#999">Valutazione</div>
    </div>
  </div>
  <div style="background:white;border-radius:16px;padding:16px;margin-bottom:80px">
    <div style="font-weight:600;color:#1a1a2e;margin-bottom:12px">Task Recenti</div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:10px">
      <input type="checkbox" checked style="width:18px;height:18px;accent-color:#667eea">
      <div><div style="font-size:14px;color:#333;text-decoration:line-through;opacity:0.6">Review design</div><div style="font-size:11px;color:#999">Scaduto ieri</div></div>
    </div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:10px">
      <input type="checkbox" style="width:18px;height:18px;accent-color:#667eea">
      <div><div style="font-size:14px;color:#333">Preparare report</div><div style="font-size:11px;color:#999">Domani</div></div>
    </div>
    <div style="padding:10px 0;display:flex;align-items:center;gap:10px">
      <input type="checkbox" style="width:18px;height:18px;accent-color:#667eea">
      <div><div style="font-size:14px;color:#333">Call team developer</div><div style="font-size:11px;color:#999">Tra 3 giorni</div></div>
    </div>
  </div>
  <!-- Bottom Nav -->
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0;border-top:1px solid #eee;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#667eea"><div style="font-size:20px">🏠</div><div style="font-size:10px">Home</div></div>
    <div style="text-align:center;color:#999"><div style="font-size:20px">📊</div><div style="font-size:10px">Analytics</div></div>
    <div style="text-align:center;color:#999"><div style="font-size:20px">🔔</div><div style="font-size:10px">Notifiche</div></div>
    <div style="text-align:center;color:#999"><div style="font-size:20px">👤</div><div style="font-size:10px">Profilo</div></div>
  </div>
</div>`;

const pageContent_Login = `
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
    <div style="display:flex;justify-content:space-between;margin-top:16px">
      <a style="color:rgba(255,255,255,0.7);font-size:13px;text-decoration:none">Password dimenticata?</a>
      <a style="color:rgba(255,255,255,0.7);font-size:13px;text-decoration:none">Registrati</a>
    </div>
  </div>
  <div style="margin-top:40px;width:100%;max-width:340px">
    <div style="text-align:center;color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:16px">oppure continua con</div>
    <div style="display:flex;gap:12px">
      <button style="flex:1;background:rgba(255,255,255,0.15);border:none;border-radius:12px;padding:12px;color:white;font-size:20px;cursor:pointer">🔵</button>
      <button style="flex:1;background:rgba(255,255,255,0.15);border:none;border-radius:12px;padding:12px;color:white;font-size:20px;cursor:pointer">⚫</button>
      <button style="flex:1;background:rgba(255,255,255,0.15);border:none;border-radius:12px;padding:12px;color:white;font-size:20px;cursor:pointer">🍎</button>
    </div>
  </div>
</div>`;

const pageContent_Profilo = `
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
  <div style="margin:0 16px 16px;background:white;border-radius:16px;padding:16px">
    <div style="font-weight:600;color:#1a1a2e;margin-bottom:12px">Informazioni</div>
    <div style="display:flex;gap:12px;margin-bottom:10px"><span style="color:#667eea">📍</span><span style="font-size:14px;color:#555">Milano, Italia</span></div>
    <div style="display:flex;gap:12px;margin-bottom:10px"><span style="color:#667eea">💼</span><span style="font-size:14px;color:#555">Freelance · Design</span></div>
    <div style="display:flex;gap:12px;margin-bottom:10px"><span style="color:#667eea">🎂</span><span style="font-size:14px;color:#555">Compleanno: 15 Marzo</span></div>
    <div style="display:flex;gap:12px"><span style="color:#667eea">🔗</span><span style="font-size:14px;color:#667eea">toni.design</span></div>
  </div>
  <div style="margin:0 16px 80px;background:white;border-radius:16px;padding:16px">
    <div style="font-weight:600;color:#1a1a2e;margin-bottom:12px">Progetti Recenti</div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between">
      <span style="font-size:14px;color:#333">App Dashboard</span>
      <span style="font-size:12px;color:#667eea">In corso</span>
    </div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between">
      <span style="font-size:14px;color:#333">E-commerce Redesign</span>
      <span style="font-size:12px;color:#999">Completato</span>
    </div>
    <div style="padding:10px 0;display:flex;justify-content:space-between">
      <span style="font-size:14px;color:#333">Sito Portfolio</span>
      <span style="font-size:12px;color:#667eea">Revisione</span>
    </div>
  </div>
</div>`;

const pageContent_Notifiche = `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;padding:16px">
  <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0 0 4px">Notifiche</h1>
  <p style="font-size:13px;color:#999;margin:0 0 16px">Le tue ultime attività</p>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:16px">
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
    <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;gap:12px;align-items:flex-start">
      <div style="width:40px;height:40px;border-radius:50%;background:#f0e8fc;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">💬</div>
      <div><div style="font-size:14px;color:#333">Nuovo commento sul task "Homepage"</div><div style="font-size:11px;color:#999">3 ore fa</div></div>
    </div>
    <div style="padding:12px 16px;display:flex;gap:12px;align-items:flex-start">
      <div style="width:40px;height:40px;border-radius:50%;background:#fce8e8;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">⚠️</div>
      <div><div style="font-size:14px;color:#333">Il pagamento €350 è in sospeso</div><div style="font-size:11px;color:#999">1 giorno fa</div></div>
    </div>
  </div>
  <button style="width:100%;background:none;border:1px solid #ddd;border-radius:12px;padding:12px;color:#667eea;font-size:14px;font-family:Inter,sans-serif;cursor:pointer">Segna tutte come lette</button>
  <div style="height:80px"></div>
</div>`;

const pageContent_TaskList = `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;padding:16px">
  <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0 0 4px">Task List</h1>
  <p style="font-size:13px;color:#999;margin:0 0 16px">5 task da completare</p>
  <div style="display:flex;gap:8px;margin-bottom:16px;overflow-x:auto">
    <button style="background:#667eea;color:white;border:none;border-radius:20px;padding:8px 16px;font-size:13px;font-family:Inter,sans-serif;cursor:pointer;white-space:nowrap">Tutti</button>
    <button style="background:white;color:#555;border:1px solid #ddd;border-radius:20px;padding:8px 16px;font-size:13px;font-family:Inter,sans-serif;cursor:pointer;white-space:nowrap">Oggi</button>
    <button style="background:white;color:#555;border:1px solid #ddd;border-radius:20px;padding:8px 16px;font-size:13px;font-family:Inter,sans-serif;cursor:pointer;white-space:nowrap">Questa settimana</button>
    <button style="background:white;color:#555;border:1px solid #ddd;border-radius:20px;padding:8px 16px;font-size:13px;font-family:Inter,sans-serif;cursor:pointer;white-space:nowrap">Importanti</button>
  </div>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:16px">
    <div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
      <input type="checkbox" style="width:20px;height:20px;accent-color:#667eea">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333">Review design system</div><div style="font-size:11px;color:#999">Oggi · Alta priorità</div></div>
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
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333;text-decoration:line-through;opacity:0.6">Onboarding nuovo cliente</div><div style="font-size:11px;color:#999">Completato ieri</div></div>
      <span style="background:#e8f4fd;color:#48b;padding:4px 8px;border-radius:6px;font-size:11px">✅ Fatto</span>
    </div>
  </div>
  <div style="position:fixed;bottom:24px;right:24px;width:56px;height:56px;background:#667eea;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;box-shadow:0 4px 16px rgba(102,126,234,0.4);cursor:pointer">+</div>
  <div style="height:80px"></div>
</div>`;

const pageContent_Impostazioni = `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;padding:16px">
  <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0 0 16px">Impostazioni</h1>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:12px">
    <div style="font-size:13px;font-weight:600;color:#999;padding:8px 16px;text-transform:uppercase;letter-spacing:0.5px">Account</div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0">
      <span style="font-size:18px">👤</span>
      <div style="flex:1"><div style="font-size:14px;color:#333">Nome</div><div style="font-size:12px;color:#999">Toni Rossi</div></div>
      <span style="color:#ccc">›</span>
    </div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0">
      <span style="font-size:18px">📧</span>
      <div style="flex:1"><div style="font-size:14px;color:#333">Email</div><div style="font-size:12px;color:#999">toni@esempio.it</div></div>
      <span style="color:#ccc">›</span>
    </div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0">
      <span style="font-size:18px">🔒</span>
      <div style="flex:1"><div style="font-size:14px;color:#333">Password</div><div style="font-size:12px;color:#999">Ultimo cambio 2 mesi fa</div></div>
      <span style="color:#ccc">›</span>
    </div>
  </div>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:12px">
    <div style="font-size:13px;font-weight:600;color:#999;padding:8px 16px;text-transform:uppercase;letter-spacing:0.5px">Notifiche</div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0">
      <span style="font-size:18px">🔔</span>
      <div style="flex:1"><div style="font-size:14px;color:#333">Notifiche push</div></div>
      <label style="position:relative;display:inline-block;width:44px;height:24px"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#667eea;border-radius:24px;transition:0.3s"></span><span style="position:absolute;content:'';height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transition:0.3s;transform:translateX(20px)"></span></label>
    </div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0">
      <span style="font-size:18px">📧</span>
      <div style="flex:1"><div style="font-size:14px;color:#333">Email promozionali</div></div>
      <label style="position:relative;display:inline-block;width:44px;height:24px"><input type="checkbox" style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#ddd;border-radius:24px;transition:0.3s"></span><span style="position:absolute;content:'';height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transition:0.3s"></span></label>
    </div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0">
      <span style="font-size:18px">📊</span>
      <div style="flex:1"><div style="font-size:14px;color:#333">Report settimanali</div></div>
      <label style="position:relative;display:inline-block;width:44px;height:24px"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#667eea;border-radius:24px;transition:0.3s"></span><span style="position:absolute;content:'';height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transition:0.3s;transform:translateX(20px)"></span></label>
    </div>
  </div>
  <div style="background:white;border-radius:16px;padding:8px 0;margin-bottom:12px">
    <div style="font-size:13px;font-weight:600;color:#999;padding:8px 16px;text-transform:uppercase;letter-spacing:0.5px">Preferenze</div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0">
      <span style="font-size:18px">🌐</span>
      <div style="flex:1"><div style="font-size:14px;color:#333">Lingua</div><div style="font-size:12px;color:#999">Italiano</div></div>
      <span style="color:#ccc">›</span>
    </div>
    <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f0f0f0">
      <span style="font-size:18px">🎨</span>
      <div style="flex:1"><div style="font-size:14px;color:#333">Tema</div><div style="font-size:12px;color:#999">Chiaro</div></div>
      <span style="color:#ccc">›</span>
    </div>
  </div>
  <div style="margin-top:24px"><button style="width:100%;background:#fee;color:#e55;border:none;border-radius:14px;padding:14px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">🚪 Esci dall'account</button></div>
  <div style="height:80px"></div>
</div>`;


// —————————————————————————————————————
// 5. TUTTI I BLOCCHI (50+)
// —————————————————————————————————————
const bm = editor.BlockManager;
function reg(blocks) {
  blocks.forEach(b => bm.add(b.id, {
    label: b.label,
    content: b.content,
    category: b.cat,
    media: b.media || '',
  }));
}

/* ---- Helper HTML ---- */
const h = (tag, attrs, inner) =>
  `<${tag} ${Object.entries(attrs||{}).map(([k,v]) => `${k}="${v}"`).join(' ')}>${inner||''}</${tag}>`;

// ——— DASHBOARD ———
const dashboardBlocks = [
  {
    id:'dash-header', label:'Header Dashboard', cat:'📊 Dashboard',
    content:'<div style="display:flex;justify-content:space-between;align-items:center;padding:16px;font-family:Inter,sans-serif"><h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0">Dashboard</h1><div style="background:#667eea;color:white;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:600">T</div></div>'
  },
  {
    id:'stat-grid', label:'Stat Grid 2×2', cat:'📊 Dashboard',
    content:'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:16px;font-family:Inter,sans-serif">' +
      '<div style="background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:16px;padding:16px"><div style="font-size:13px;opacity:0.9">Vendite</div><div style="font-size:28px;font-weight:800">€4.350</div><div style="font-size:12px;opacity:0.8">↑ 23%</div></div>' +
      '<div style="background:linear-gradient(135deg,#f093fb,#f5576c);color:white;border-radius:16px;padding:16px"><div style="font-size:13px;opacity:0.9">Utenti</div><div style="font-size:28px;font-weight:800">1.280</div><div style="font-size:12px;opacity:0.8">↑ 12%</div></div>' +
      '<div style="background:linear-gradient(135deg,#4facfe,#00f2fe);color:white;border-radius:16px;padding:16px"><div style="font-size:13px;opacity:0.9">Ordini</div><div style="font-size:28px;font-weight:800">89</div><div style="font-size:12px;opacity:0.8">+12 in arrivo</div></div>' +
      '<div style="background:linear-gradient(135deg,#43e97b,#38f9d7);color:#1a1a2e;border-radius:16px;padding:16px"><div style="font-size:13px;font-size:13px;opacity:0.7">Revenue</div><div style="font-size:28px;font-weight:800">€12.4k</div><div style="font-size:12px;opacity:0.7">↑ 8%</div></div></div>'
  },
  {
    id:'bar-chart', label:'Bar Chart', cat:'📊 Dashboard',
    content:'<div style="background:white;border-radius:16px;padding:16px;margin:0 16px 16px;font-family:Inter,sans-serif">' +
      '<div style="display:flex;justify-content:space-between;margin-bottom:12px"><span style="font-weight:600;color:#1a1a2e">Andamento</span><span style="color:#667eea;font-size:13px">Dettaglio →</span></div>' +
      '<div style="display:flex;align-items:flex-end;gap:8px;height:80px">' +
      '<div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:40px"></div>' +
      '<div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:60px"></div>' +
      '<div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:80px"></div>' +
      '<div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:50px"></div>' +
      '<div style="flex:1;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:6px 6px 0 0;height:70px"></div></div></div>'
  },
  {
    id:'working-hours', label:'Working Hours', cat:'📊 Dashboard',
    content:'<div style="display:flex;gap:12px;padding:0 16px 16px;font-family:Inter,sans-serif">' +
      '<div style="flex:1;background:white;border-radius:12px;padding:12px;text-align:center"><div style="font-size:20px;font-weight:700;color:#1a1a2e">85%</div><div style="font-size:11px;color:#999">Completamento</div></div>' +
      '<div style="flex:1;background:white;border-radius:12px;padding:12px;text-align:center"><div style="font-size:20px;font-weight:700;color:#1a1a2e">4.8</div><div style="font-size:11px;color:#999">Valutazione</div></div></div>'
  },
];
reg(dashboardBlocks);

// ——— ELEMENTI BASE ———
const baseBlocks = [
  {
    id:'base-heading', label:'Titolo H1', cat:'🔤 Elementi Base',
    content:'<h1 style="font-family:Inter,sans-serif;font-size:28px;font-weight:700;color:#1a1a2e;margin:0">Titolo Principale</h1>'
  },
  {
    id:'base-heading2', label:'Sottotitolo H2', cat:'🔤 Elementi Base',
    content:'<h2 style="font-family:Inter,sans-serif;font-size:22px;font-weight:600;color:#333;margin:0">Sottotitolo</h2>'
  },
  {
    id:'base-paragraph', label:'Paragrafo', cat:'🔤 Elementi Base',
    content:'<p style="font-family:Inter,sans-serif;font-size:15px;color:#555;line-height:1.6;margin:0">Testo descrittivo. Puoi modificarlo cliccando sopra.</p>'
  },
  {
    id:'base-card', label:'Card', cat:'🔤 Elementi Base',
    content:'<div style="background:white;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);font-family:Inter,sans-serif"><h3 style="margin:0 0 8px;font-size:16px;color:#333">Titolo Card</h3><p style="margin:0;font-size:14px;color:#666">Contenuto della card. Clicca per modificare.</p></div>'
  },
  {
    id:'base-button', label:'Bottone', cat:'🔤 Elementi Base',
    content:'<button style="background:#667eea;color:white;border:none;border-radius:12px;padding:14px 24px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">Bottone</button>'
  },
  {
    id:'base-button-outline', label:'Bottone Outline', cat:'🔤 Elementi Base',
    content:'<button style="background:none;color:#667eea;border:2px solid #667eea;border-radius:12px;padding:14px 24px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">Bottone Outline</button>'
  },
  {
    id:'base-divider', label:'Divisore', cat:'🔤 Elementi Base',
    content:'<hr style="border:none;border-top:1px solid #eee;margin:16px 0">'
  },
  {
    id:'base-spacer', label:'Spaziatore', cat:'🔤 Elementi Base',
    content:'<div style="height:16px"></div>'
  },
  {
    id:'base-container', label:'Contenitore', cat:'🔤 Elementi Base',
    content:'<div style="padding:16px;background:#f9f9f9;border-radius:12px;min-height:60px;font-family:Inter,sans-serif"><p style="color:#999;font-size:14px">Contenitore vuoto</p></div>'
  },
];
reg(baseBlocks);

// ——— FORM ———
const formBlocks = [
  {
    id:'form-input', label:'Campo Testo', cat:'📝 Form',
    content:'<div style="font-family:Inter,sans-serif;margin-bottom:12px"><label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Etichetta</label><input type="text" placeholder="Inserisci testo..." style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box"></div>'
  },
  {
    id:'form-email', label:'Campo Email', cat:'📝 Form',
    content:'<div style="font-family:Inter,sans-serif;margin-bottom:12px"><label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Email</label><input type="email" placeholder="nome@esempio.it" style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box"></div>'
  },
  {
    id:'form-password', label:'Campo Password', cat:'📝 Form',
    content:'<div style="font-family:Inter,sans-serif;margin-bottom:12px"><label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Password</label><input type="password" placeholder="••••••••" style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box"></div>'
  },
  {
    id:'form-textarea', label:'Area Testo', cat:'📝 Form',
    content:'<div style="font-family:Inter,sans-serif;margin-bottom:12px"><label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Messaggio</label><textarea placeholder="Scrivi qui..." rows="4" style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;resize:vertical;box-sizing:border-box"></textarea></div>'
  },
  {
    id:'form-select', label:'Menu a Tendina', cat:'📝 Form',
    content:'<div style="font-family:Inter,sans-serif;margin-bottom:12px"><label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:4px">Scegli opzione</label><select style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box;background:white"><option>Opzione 1</option><option>Opzione 2</option><option>Opzione 3</option></select></div>'
  },
  {
    id:'form-checkbox', label:'Checkbox', cat:'📝 Form',
    content:'<label style="display:flex;align-items:center;gap:8px;font-family:Inter,sans-serif;font-size:14px;color:#555;cursor:pointer"><input type="checkbox" style="width:18px;height:18px;accent-color:#667eea"> Accetta i termini</label>'
  },
  {
    id:'form-submit', label:'Bottone Submit', cat:'📝 Form',
    content:'<button style="width:100%;background:#667eea;color:white;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">Invia</button>'
  },
];
reg(formBlocks);

// ——— NAVIGAZIONE ———
const navBlocks = [
  {
    id:'nav-bottom', label:'Bottom Tab Bar', cat:'🧭 Navigazione',
    content:'<div style="display:flex;justify-content:space-around;padding:12px 0;background:white;border-top:1px solid #eee;font-family:Inter,sans-serif">' +
      '<div style="text-align:center;color:#667eea"><div style="font-size:20px">🏠</div><div style="font-size:10px">Home</div></div>' +
      '<div style="text-align:center;color:#999"><div style="font-size:20px">📊</div><div style="font-size:10px">Analytics</div></div>' +
      '<div style="text-align:center;color:#999"><div style="font-size:20px">🔔</div><div style="font-size:10px">Notifiche</div></div>' +
      '<div style="text-align:center;color:#999"><div style="font-size:20px">👤</div><div style="font-size:10px">Profilo</div></div></div>'
  },
  {
    id:'nav-header-search', label:'Header + Search', cat:'🧭 Navigazione',
    content:'<div style="padding:16px 16px 8px;font-family:Inter,sans-serif"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0">Cerca</h1><span style="color:#667eea;font-size:20px">🔔</span></div><div style="display:flex;align-items:center;gap:8px;background:#f0f2f5;border-radius:12px;padding:10px 14px"><span style="color:#999">🔍</span><input type="text" placeholder="Cerca..." style="background:none;border:none;font-size:14px;color:#333;width:100%;outline:none;font-family:Inter,sans-serif"></div></div>'
  },
  {
    id:'nav-back', label:'Back Button', cat:'🧭 Navigazione',
    content:'<div style="display:flex;align-items:center;gap:8px;padding:12px 16px;font-family:Inter,sans-serif"><span style="font-size:20px;color:#667eea;cursor:pointer">‹</span><span style="font-size:16px;font-weight:500;color:#333">Indietro</span></div>'
  },
];
reg(navBlocks);

// ——— GRAFICI & DATI ———
const chartBlocks = [
  {
    id:'chart-line', label:'Line Chart', cat:'📈 Grafici & Dati',
    content:'<div style="background:white;border-radius:14px;padding:16px;margin:0 16px;font-family:Inter,sans-serif">' +
      '<div style="font-weight:600;color:#1a1a2e;margin-bottom:8px">Andamento ↑</div>' +
      '<svg viewBox="0 0 200 60" style="width:100%;height:80px"><polyline points="0,50 20,45 40,30 60,35 80,20 100,25 120,10 140,15 160,5 180,8 200,12" fill="none" stroke="#667eea" stroke-width="2.5"/><polyline points="0,50 20,45 40,30 60,35 80,20 100,25 120,10 140,15 160,5 180,8 200,12" fill="none" stroke="#764ba2" stroke-width="1.5" stroke-dasharray="4,3" transform="translate(0,8)" opacity="0.5"/></svg>' +
      '<div style="display:flex;justify-content:space-between;font-size:10px;color:#999"><span>Gen</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mag</span><span>Giu</span></div></div>'
  },
  {
    id:'chart-pie', label:'Pie Chart', cat:'📈 Grafici & Dati',
    content:'<div style="display:flex;align-items:center;gap:16px;background:white;border-radius:14px;padding:16px;margin:0 16px;font-family:Inter,sans-serif">' +
      '<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="40" fill="none" stroke="#667eea" stroke-width="20" stroke-dasharray="125 126" stroke-dashoffset="0"/><circle cx="50" cy="50" r="40" fill="none" stroke="#764ba2" stroke-width="20" stroke-dasharray="80 171" stroke-dashoffset="-125"/><circle cx="50" cy="50" r="40" fill="none" stroke="#f093fb" stroke-width="20" stroke-dasharray="47 204" stroke-dashoffset="-205"/></svg>' +
      '<div><div style="display:flex;align-items:center;gap:6px;margin-bottom:4px"><span style="width:10px;height:10px;border-radius:3px;background:#667eea;display:inline-block"></span><span style="font-size:12px;color:#555">Design (48%)</span></div>' +
      '<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px"><span style="width:10px;height:10px;border-radius:3px;background:#764ba2;display:inline-block"></span><span style="font-size:12px;color:#555">Dev (32%)</span></div>' +
      '<div style="display:flex;align-items:center;gap:6px"><span style="width:10px;height:10px;border-radius:3px;background:#f093fb;display:inline-block"></span><span style="font-size:12px;color:#555">Marketing (20%)</span></div></div></div>'
  },
  {
    id:'data-stats-row', label:'Stats Row', cat:'📈 Grafici & Dati',
    content:'<div style="display:flex;gap:8px;padding:0 16px;font-family:Inter,sans-serif">' +
      '<div style="flex:1;background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 1px 6px rgba(0,0,0,0.04)"><div style="font-size:11px;color:#999">Views</div><div style="font-size:22px;font-weight:700;color:#1a1a2e">2,847</div><div style="font-size:11px;color:#43e97b">↑ 12%</div></div>' +
      '<div style="flex:1;background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 1px 6px rgba(0,0,0,0.04)"><div style="font-size:11px;color:#999">Clicks</div><div style="font-size:22px;font-weight:700;color:#1a1a2e">384</div><div style="font-size:11px;color:#e55">↓ 3%</div></div></div>'
  },
  {
    id:'data-progress-bar', label:'Barra Progresso', cat:'📈 Grafici & Dati',
    content:'<div style="padding:0 16px;font-family:Inter,sans-serif"><div style="display:flex;justify-content:space-between;font-size:13px;color:#555;margin-bottom:4px"><span>Avanzamento</span><span>75%</span></div><div style="width:100%;height:8px;background:#eee;border-radius:8px;overflow:hidden"><div style="width:75%;height:100%;background:linear-gradient(90deg,#667eea,#764ba2);border-radius:8px"></div></div></div>'
  },
];
reg(chartBlocks);

// ——— COMMERCE ———
const commerceBlocks = [
  {
    id:'prod-card', label:'Product Card', cat:'🛒 Commerce',
    content:'<div style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin:0 16px;font-family:Inter,sans-serif">' +
      '<div style="height:120px;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white;font-size:36px">🛍️</div>' +
      '<div style="padding:12px"><div style="font-weight:600;color:#1a1a2e;font-size:15px">Prodotto Premium</div><div style="font-size:12px;color:#999;margin:2px 0 8px">Categoria</div><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:20px;font-weight:700;color:#667eea">€29,99</span><span style="font-size:13px;color:#666">★★★★☆</span></div></div></div>'
  },
  {
    id:'rating-stars', label:'Rating Stelle', cat:'🛒 Commerce',
    content:'<div style="display:flex;gap:4px;padding:8px 16px;font-size:22px;font-family:Inter,sans-serif"><span style="color:#f5a623">★</span><span style="color:#f5a623">★</span><span style="color:#f5a623">★</span><span style="color:#f5a623">★</span><span style="color:#ddd">★</span><span style="font-size:13px;color:#666;margin-left:6px">4.0</span></div>'
  },
  {
    id:'price-tag', label:'Prezzo', cat:'🛒 Commerce',
    content:'<div style="padding:0 16px;font-family:Inter,sans-serif"><span style="font-size:28px;font-weight:800;color:#667eea">€29,99</span> <span style="font-size:14px;color:#999;text-decoration:line-through">€49,99</span> <span style="background:#fee;color:#e55;padding:2px 6px;border-radius:4px;font-size:11px">-40%</span></div>'
  },
];
reg(commerceBlocks);

// ——— SOCIAL ———
const socialBlocks = [
  {
    id:'social-post', label:'Post Card', cat:'👥 Social',
    content:'<div style="background:white;border-radius:14px;padding:14px;margin:0 16px;box-shadow:0 1px 8px rgba(0,0,0,0.04);font-family:Inter,sans-serif">' +
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">' +
      '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:600">T</div>' +
      '<div><div style="font-size:14px;font-weight:600;color:#333">Toni Rossi</div><div style="font-size:11px;color:#999">2 ore fa</div></div></div>' +
      '<p style="font-size:14px;color:#444;margin:0 0 10px;line-height:1.5">Stiamo lavorando a qualcosa di incredibile! 🚀</p>' +
      '<div style="display:flex;gap:16px;font-size:13px;color:#999"><span>❤️ 24</span><span>💬 8</span><span>↗️ 3</span></div></div>'
  },
  {
    id:'social-notification', label:'Notifica Social', cat:'👥 Social',
    content:'<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;font-family:Inter,sans-serif;border-bottom:1px solid #f0f0f0">' +
      '<div style="width:40px;height:40px;border-radius:50%;background:#e8f4fd;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">❤️</div>' +
      '<div><div style="font-size:14px;color:#333">A Marco piace il tuo post</div><div style="font-size:11px;color:#999">15 min fa</div></div></div>'
  },
  {
    id:'avatar', label:'Avatar', cat:'👥 Social',
    content:'<div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:600;font-family:Inter,sans-serif">T</div>'
  },
];
reg(socialBlocks);

// ——— CALENDARIO ———
const calendarBlocks = [
  {
    id:'calendar-mini', label:'Mini Calendario', cat:'📅 Calendario',
    content:'<div style="background:white;border-radius:16px;padding:16px;margin:0 16px;box-shadow:0 1px 8px rgba(0,0,0,0.04);font-family:Inter,sans-serif">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="font-weight:600;color:#333">Luglio 2026</span><span style="color:#667eea;font-size:18px;cursor:pointer">›</span></div>' +
      '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;font-size:12px">' +
      '<span style="color:#999;font-weight:500">L</span><span style="color:#999;font-weight:500">M</span><span style="color:#999;font-weight:500">M</span><span style="color:#999;font-weight:500">G</span><span style="color:#999;font-weight:500">V</span><span style="color:#999;font-weight:500;color:#e55">S</span><span style="color:#999;font-weight:500;color:#e55">D</span>' +
      '<span></span><span></span><span></span><span>1</span><span>2</span><span style="color:#e55">3</span><span style="color:#e55">4</span>' +
      '<span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span style="color:#e55">10</span><span style="color:#e55">11</span>' +
      '<span>12</span><span>13</span><span style="background:#667eea;color:white;border-radius:50%;width:24px;height:24px;margin:auto;line-height:24px">14</span><span>15</span><span>16</span><span style="color:#e55">17</span><span style="color:#e55">18</span>' +
      '</div></div>'
  },
  {
    id:'event-card', label:'Event Card', cat:'📅 Calendario',
    content:'<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;font-family:Inter,sans-serif">' +
      '<div style="text-align:center;background:#f0f2f5;border-radius:10px;padding:6px 12px;width:45px;flex-shrink:0"><div style="font-size:10px;color:#999;text-transform:uppercase">Lug</div><div style="font-size:20px;font-weight:700;color:#1a1a2e">14</div></div>' +
      '<div><div style="font-size:14px;font-weight:500;color:#333">Review Design Sprint</div><div style="font-size:12px;color:#999">10:00 - 11:30</div></div>' +
      '<div style="margin-left:auto;width:8px;height:8px;border-radius:50%;background:#667eea"></div></div>'
  },
];
reg(calendarBlocks);

// ——— TEMPLATE PREFINITI ———
const templateBlocks = [
  {
    id:'tpl-dashboard', label:'Dashboard Completa', cat:'🎯 Template',
    content: pageContent_Dashboard,
    media: '<div style="font-size:30px">📊</div>',
  },
  {
    id:'tpl-login', label:'Schermata Login', cat:'🎯 Template',
    content: pageContent_Login,
    media: '<div style="font-size:30px">🔐</div>',
  },
  {
    id:'tpl-profilo', label:'Profilo Utente', cat:'🎯 Template',
    content: pageContent_Profilo,
    media: '<div style="font-size:30px">👤</div>',
  },
  {
    id:'tpl-notifiche', label:'Notifiche', cat:'🎯 Template',
    content: pageContent_Notifiche,
    media: '<div style="font-size:30px">🔔</div>',
  },
  {
    id:'tpl-tasklist', label:'Task List', cat:'🎯 Template',
    content: pageContent_TaskList,
    media: '<div style="font-size:30px">✅</div>',
  },
  {
    id:'tpl-impostazioni', label:'Impostazioni', cat:'🎯 Template',
    content: pageContent_Impostazioni,
    media: '<div style="font-size:30px">⚙️</div>',
  },
];
reg(templateBlocks);

// —————————————————————————————————————
// 6. TEMA CHIARO / SCURO / CORPORATE
// —————————————————————————————————————
const themes = {
  light: {
    bg: '#f5f7fa',
    card: '#ffffff',
    text: '#1a1a2e',
    textSec: '#555555',
    textMuted: '#999999',
    primary: '#667eea',
    border: '#f0f0f0',
    headerBg: '#ffffff',
  },
  dark: {
    bg: '#0f0f23',
    card: '#1a1a2e',
    text: '#e8e8e8',
    textSec: '#aaaaaa',
    textMuted: '#666666',
    primary: '#818cf8',
    border: '#2d2d4a',
    headerBg: '#1a1a2e',
  },
  corporate: {
    bg: '#f8f9fa',
    card: '#ffffff',
    text: '#212529',
    textSec: '#495057',
    textMuted: '#868e96',
    primary: '#0d6efd',
    border: '#dee2e6',
    headerBg: '#212529',
  },
};

function applyTheme(name) {
  const t = themes[name];
  if (!t) return;
  const css = `
    body { background: ${t.bg} !important; }
    #gjs, .gjs-frame-wrapper * { transition: background 0.3s, color 0.3s, border-color 0.3s; }
    .gjs-cv-canvas { background: ${t.bg}; }
    .gjs-frame, .gjs-frame-wrapper { background: transparent; }
    .gjs-pn-views-container { background: ${t.card}; border-color: ${t.border}; }
    .gjs-pn-views { background: ${t.bg}; }
    .gjs-block { background: ${t.card}; color: ${t.text}; border-color: ${t.border}; }
    .gjs-block-label { color: ${t.text}; }
    .gjs-category-title { color: ${t.text}; }
    .gjs-title { color: ${t.text}; }
    .gjs-btn-prim { background: ${t.primary}; }
    .gjs-pn-btn { color: ${t.text}; }
    .gjs-toolbar { background: ${t.card}; border-color: ${t.border}; }
    .gjs-selector { color: ${t.text}; }
    #page-tabs { background: ${t.headerBg}; }
    .page-tab { color: ${t.textMuted}; }
    .page-tab.active { color: ${t.primary}; border-bottom-color: ${t.primary}; }
    .gjs-composites { color: ${t.text}; }
    .gjs-field { background: ${t.bg}; color: ${t.text}; }
    .gjs-label { color: ${t.textSec}; }
  `;

  let styleEl = document.getElementById('theme-style');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'theme-style';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = css;

  // Toolbar buttons
  document.querySelectorAll('[data-theme]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === name);
  });
}

document.querySelectorAll('[data-theme]').forEach(btn => {
  btn.onclick = () => applyTheme(btn.dataset.theme);
});

// —————————————————————————————————————
// 7. EXPORT
// —————————————————————————————————————
document.getElementById('btn-export-html').onclick = () => {
  const html = editor.getHtml();
  const css = editor.getCss();
  const full = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>${css}</style></head><body>${html}</body></html>`;
  const w = window.open('', '_blank');
  w.document.write(full);
  w.document.close();
};

document.getElementById('btn-export-pwa').onclick = () => {
  const html = editor.getHtml();
  const css = editor.getCss();
  const pwaHtml = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="theme-color" content="#667eea"><link rel="manifest" href="manifest.json"><title>My App</title><style>${css}</style></head><body>${html}<script>if('serviceWorker'in navigator){navigator.serviceWorker.register('sw.js')}</script></body></html>`;
  const w = window.open('', '_blank');
  w.document.write(pwaHtml);
  w.document.close();
};

document.getElementById('btn-export-all').onclick = () => {
  const allPages = pages.getAll();
  let exportDoc = '# UI Builder Pro — Esportazione Completa\n\n';
  allPages.forEach(p => {
    const name = p.get('name') || p.get('id');
    pages.select(p);
    const html = editor.getHtml();
    const css = editor.getCss();
    exportDoc += `## Pagina: ${name}\n\n`;
    exportDoc += `### HTML\n\`\`\`html\n${html}\n\`\`\`\n\n`;
    exportDoc += `### CSS\n\`\`\`css\n${css}\n\`\`\`\n\n---\n\n`;
  });
  // Select first page again
  pages.select(allPages[0]);
  const w = window.open('', '_blank');
  w.document.write(`<html><head><title>Export Tutte le Pagine</title><meta charset="UTF-8"><style>body{font-family:monospace;white-space:pre-wrap;padding:20px;font-size:13px}</style></head><body>${exportDoc.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>')}</body></html>`);
  w.document.close();
};

// —————————————————————————————————————
// 8. AVVIO
// —————————————————————————————————————
// Tema iniziale: chiaro
applyTheme('light');

// Crea pagine predefinite
createDefaultPages();

// Log di conferma
console.log('✅ UI Builder Pro caricato con ' + pages.getAll().length + ' pagine e ' + Object.keys(bm.getAll()).length + ' blocchi');
