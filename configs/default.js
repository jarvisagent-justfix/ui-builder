// ============================================
// Configurazione di default — 7 pagine predefinite
// ============================================
window.__appConfig = {
  name: 'App Base',
  description: 'Pagine predefinite per iniziare una qualsiasi app',
  icon: '🚀',
  pages: {
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
  }
};
