// ============================================
// Configurazione: Task Manager App
// ============================================
window.__appConfig = {
  name: 'Task Manager',
  description: 'App per gestire task, scadenze e progetti',
  icon: '✅',
  pages: {
    'Registrazione': `
<div style="font-family:Inter,sans-serif;min-height:100vh;background:linear-gradient(135deg,#43e97b,#38f9d7);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px">
  <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:16px">✅</div>
  <h1 style="color:#1a1a2e;font-size:28px;font-weight:800;margin:0 0 4px 0">Crea Account</h1>
  <p style="color:rgba(26,26,46,0.6);font-size:14px;margin:0 0 32px 0">Inizia a gestire i tuoi task</p>
  <div style="width:100%;max-width:340px">
    <div style="background:rgba(255,255,255,0.8);border-radius:14px;padding:14px 16px;margin-bottom:12px;display:flex;align-items:center;gap:10px">
      <span style="color:#999">👤</span>
      <input type="text" placeholder="Nome completo" style="background:none;border:none;color:#333;font-size:15px;width:100%;outline:none;font-family:Inter,sans-serif">
    </div>
    <div style="background:rgba(255,255,255,0.8);border-radius:14px;padding:14px 16px;margin-bottom:12px;display:flex;align-items:center;gap:10px">
      <span style="color:#999">📧</span>
      <input type="email" placeholder="Email" style="background:none;border:none;color:#333;font-size:15px;width:100%;outline:none;font-family:Inter,sans-serif">
    </div>
    <div style="background:rgba(255,255,255,0.8);border-radius:14px;padding:14px 16px;margin-bottom:20px;display:flex;align-items:center;gap:10px">
      <span style="color:#999">🔒</span>
      <input type="password" placeholder="Password" style="background:none;border:none;color:#333;font-size:15px;width:100%;outline:none;font-family:Inter,sans-serif">
    </div>
    <button style="width:100%;background:#1a1a2e;color:white;border:none;border-radius:14px;padding:16px;font-size:16px;font-weight:700;font-family:Inter,sans-serif;cursor:pointer">Registrati</button>
    <p style="text-align:center;color:rgba(26,26,46,0.5);font-size:13px;margin-top:14px">Hai già un account? <a style="color:#1a1a2e;font-weight:600;text-decoration:none">Accedi</a></p>
  </div>
</div>`,
    'Dashboard Task': `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;padding:16px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
    <div>
      <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0">Ciao, Marco 👋</h1>
      <p style="font-size:13px;color:#999;margin:4px 0 0">Hai 4 task da completare oggi</p>
    </div>
    <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#43e97b,#38f9d7);display:flex;align-items:center;justify-content:center;color:#1a1a2e;font-size:18px;font-weight:700">M</div>
  </div>
  <div style="display:flex;gap:12px;margin-bottom:20px;overflow-x:auto">
    <div style="background:white;border-radius:14px;padding:14px;min-width:100px;box-shadow:0 1px 6px rgba(0,0,0,0.04);text-align:center">
      <div style="font-size:24px;font-weight:700;color:#1a1a2e">12</div>
      <div style="font-size:11px;color:#999">Task Totali</div>
    </div>
    <div style="background:white;border-radius:14px;padding:14px;min-width:100px;box-shadow:0 1px 6px rgba(0,0,0,0.04);text-align:center">
      <div style="font-size:24px;font-weight:700;color:#43e97b">8</div>
      <div style="font-size:11px;color:#999">Completati</div>
    </div>
    <div style="background:white;border-radius:14px;padding:14px;min-width:100px;box-shadow:0 1px 6px rgba(0,0,0,0.04);text-align:center">
      <div style="font-size:24px;font-weight:700;color:#f5576c">4</div>
      <div style="font-size:11px;color:#999">In Sospeso</div>
    </div>
  </div>
  <div style="background:white;border-radius:16px;padding:16px;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <span style="font-weight:600;color:#1a1a2e">Task di Oggi</span>
      <span style="font-size:13px;color:#43e97b">Vedi tutti →</span>
    </div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
      <input type="checkbox" style="width:20px;height:20px;accent-color:#43e97b">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333">Review documentazione</div><div style="font-size:11px;color:#999">Ore 10:00</div></div>
      <span style="background:#fee;color:#e55;padding:2px 8px;border-radius:6px;font-size:11px">Alta</span>
    </div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px">
      <input type="checkbox" style="width:20px;height:20px;accent-color:#43e97b">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333">Preparare slides riunione</div><div style="font-size:11px;color:#999">Ore 14:30</div></div>
      <span style="background:#efe;color:#484;padding:2px 8px;border-radius:6px;font-size:11px">Media</span>
    </div>
    <div style="padding:10px 0;display:flex;align-items:center;gap:12px">
      <input type="checkbox" style="width:20px;height:20px;accent-color:#43e97b">
      <div style="flex:1"><div style="font-size:14px;font-weight:500;color:#333">Call con developer</div><div style="font-size:11px;color:#999">Ore 16:00</div></div>
      <span style="background:#e8f4fd;color:#48b;padding:2px 8px;border-radius:6px;font-size:11px">Bassa</span>
    </div>
  </div>
  <div style="background:white;border-radius:16px;padding:16px;margin-bottom:80px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="font-weight:600;color:#1a1a2e;margin-bottom:12px">Andamento Settimanale</div>
    <div style="display:flex;align-items:flex-end;gap:6px;height:60px">
      <div style="flex:1;background:linear-gradient(180deg,#43e97b,#38f9d7);border-radius:4px 4px 0 0;height:30px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#43e97b,#38f9d7);border-radius:4px 4px 0 0;height:45px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#43e97b,#38f9d7);border-radius:4px 4px 0 0;height:55px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#43e97b,#38f9d7);border-radius:4px 4px 0 0;height:35px"></div>
      <div style="flex:1;background:linear-gradient(180deg,#43e97b,#38f9d7);border-radius:4px 4px 0 0;height:60px"></div>
    </div>
  </div>
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0;border-top:1px solid #eee;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#43e97b"><div style="font-size:20px">🏠</div><div style="font-size:10px">Home</div></div>
    <div style="text-align:center;color:#999"><div style="font-size:20px">➕</div><div style="font-size:10px">Nuovo</div></div>
    <div style="text-align:center;color:#999"><div style="font-size:20px">📊</div><div style="font-size:10px">Stats</div></div>
    <div style="text-align:center;color:#999"><div style="font-size:20px">👤</div><div style="font-size:10px">Profilo</div></div>
  </div>
</div>`,
    'Nuovo Task': `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh;padding:16px">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px">
    <span style="font-size:24px;color:#43e97b;cursor:pointer;font-weight:300">‹</span>
    <h1 style="font-size:22px;font-weight:700;color:#1a1a2e;margin:0">Nuovo Task</h1>
  </div>
  <div style="background:white;border-radius:16px;padding:16px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="margin-bottom:16px">
      <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:6px">Titolo</label>
      <input type="text" placeholder="Inserisci titolo task..." style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box">
    </div>
    <div style="margin-bottom:16px">
      <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:6px">Descrizione</label>
      <textarea placeholder="Descrivi il task..." rows="4" style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;resize:vertical;box-sizing:border-box"></textarea>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
      <div>
        <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:6px">Priorità</label>
        <select style="width:100%;padding:12px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box;background:white">
          <option>Bassa</option>
          <option>Media</option>
          <option>Alta</option>
        </select>
      </div>
      <div>
        <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:6px">Data</label>
        <input type="date" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:10px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box">
      </div>
    </div>
    <div style="margin-bottom:16px">
      <label style="font-size:13px;font-weight:500;color:#555;display:block;margin-bottom:6px">Categoria</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <span style="background:#e8fce8;color:#2a7;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer">Lavoro</span>
        <span style="background:#e8f4fd;color:#48b;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer">Personale</span>
        <span style="background:#fce8e8;color:#e55;padding:6px 14px;border-radius:20px;font-size:13px;cursor:pointer">Urgente</span>
      </div>
    </div>
    <button style="width:100%;background:#43e97b;color:#1a1a2e;border:none;border-radius:14px;padding:16px;font-size:16px;font-weight:700;font-family:Inter,sans-serif;cursor:pointer">✅ Crea Task</button>
  </div>
  <div style="height:80px"></div>
</div>`,
    'Profilo': `
<div style="font-family:Inter,sans-serif;background:#f5f7fa;min-height:100vh">
  <div style="background:linear-gradient(135deg,#43e97b,#38f9d7);padding:40px 20px 60px;text-align:center">
    <div style="width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.4);margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:36px;color:#1a1a2e;font-weight:700">M</div>
    <h2 style="color:#1a1a2e;margin:0;font-size:22px">Marco Bianchi</h2>
    <p style="color:rgba(26,26,46,0.6);margin:4px 0 0;font-size:13px">marco@esempio.it</p>
  </div>
  <div style="margin:-30px 16px 16px;background:white;border-radius:16px;padding:16px;display:flex;gap:8px;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
    <div style="flex:1;text-align:center"><div style="font-size:20px;font-weight:700;color:#1a1a2e">12</div><div style="font-size:11px;color:#999">Task</div></div>
    <div style="flex:1;text-align:center"><div style="font-size:20px;font-weight:700;color:#1a1a2e">8</div><div style="font-size:11px;color:#999">Fatti</div></div>
    <div style="flex:1;text-align:center"><div style="font-size:20px;font-weight:700;color:#1a1a2e">4</div><div style="font-size:11px;color:#999">Da fare</div></div>
  </div>
  <div style="margin:0 16px 80px;background:white;border-radius:16px;padding:16px;box-shadow:0 1px 8px rgba(0,0,0,0.04)">
    <div style="font-weight:600;color:#1a1a2e;margin-bottom:12px">Impostazioni</div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:14px;color:#333">🔔 Notifiche</span>
      <label style="width:44px;height:24px;position:relative"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#43e97b;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transform:translateX(20px)"></span></label>
    </div>
    <div style="padding:10px 0;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:14px;color:#333">📧 Report settimanali</span>
      <label style="width:44px;height:24px;position:relative"><input type="checkbox" style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#ddd;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%"></span></label>
    </div>
    <div style="padding:10px 0;display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:14px;color:#e55">🚪 Esci</span>
    </div>
  </div>
</div>`,
  }
};
