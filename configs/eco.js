// ============================================
// ECO v2 — Preserva le voci
// Design rivisto: timeline, FAB, bottom sheet, mini-player
// Ispirato a: Day One, WhatsApp, Apple Voice Memos, Spotify
// ============================================
window.__appConfig = {
  name: 'ECO',
  description: 'Preserva le voci di chi ami. Ogni giorno.',
  icon: '🌿',
  pages: {

    // ——————————————————————————
    // TAB 1: RECENTI (Timeline)
    // ——————————————————————————
    'Recenti': `
<div style="font-family:Inter,sans-serif;background:#F5F7FA;min-height:100vh;padding:0 0 80px">
  <!-- Header minimalista -->
  <div style="padding:20px 20px 12px;display:flex;justify-content:space-between;align-items:center">
    <div>
      <div style="font-size:13px;color:#999;font-weight:500">Benvenuto</div>
      <h1 style="font-size:24px;font-weight:700;color:#1a1a2e;margin:2px 0 0">I tuoi ricordi</h1>
    </div>
    <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;color:white;font-size:18px;font-weight:700">T</div>
  </div>

  <!-- Timeline dei ricordi -->
  <div style="padding:0 16px">
    <!-- Oggi -->
    <div style="display:flex;align-items:center;gap:8px;margin:12px 0 8px">
      <div style="width:4px;height:4px;border-radius:50%;background:#2A9D8F"></div>
      <span style="font-size:12px;font-weight:600;color:#2A9D8F;text-transform:uppercase;letter-spacing:0.5px">Oggi</span>
      <div style="flex:1;height:1px;background:#E8ECF0"></div>
    </div>

    <!-- Card ricordo 1 -->
    <div style="background:white;border-radius:18px;padding:16px;margin-bottom:10px;box-shadow:0 2px 16px rgba(0,0,0,0.04);cursor:pointer;transition:0.2s">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#f4a261,#e76f51);display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:700;flex-shrink:0">C</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:14px;font-weight:600;color:#1a1a2e">Nonna Carla</span>
            <span style="font-size:11px;color:#999">2 ore fa</span>
          </div>
          <div style="font-size:13px;color:#555;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Quando avevo la tua età, il paese era..."</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:6px">
            <span style="background:#f0faf5;color:#2A9D8F;font-size:10px;padding:2px 8px;border-radius:12px;font-weight:500">🕊️ Nostalgia</span>
            <span style="font-size:10px;color:#999">3:24</span>
          </div>
          <!-- Waveform stilizzata -->
          <div style="display:flex;align-items:center;gap:2px;height:20px;margin-top:6px">
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:12px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:18px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:14px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:20px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:10px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:16px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:8px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:14px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:18px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:12px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#2A9D8F,#2A9D8F40);border-radius:2px;height:6px"></div>
          </div>
        </div>
        <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;color:white;font-size:16px;flex-shrink:0">▶</div>
      </div>
    </div>

    <!-- Card ricordo 2 -->
    <div style="background:white;border-radius:18px;padding:16px;margin-bottom:10px;box-shadow:0 2px 16px rgba(0,0,0,0.04);cursor:pointer;transition:0.2s">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:700;flex-shrink:0">P</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:14px;font-weight:600;color:#1a1a2e">Papà</span>
            <span style="font-size:11px;color:#999">Ieri</span>
          </div>
          <div style="font-size:13px;color:#555;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Il segreto è non avere fretta. Lascia che..."</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:6px">
            <span style="background:#fef6e6;color:#b8942e;font-size:10px;padding:2px 8px;border-radius:12px;font-weight:500">😊 Gioia</span>
            <span style="font-size:10px;color:#999">1:48</span>
          </div>
          <div style="display:flex;align-items:center;gap:2px;height:20px;margin-top:6px">
            <div style="width:3px;background:linear-gradient(180deg,#E9C46A,#E9C46A40);border-radius:2px;height:10px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#E9C46A,#E9C46A40);border-radius:2px;height:16px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#E9C46A,#E9C46A40);border-radius:2px;height:20px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#E9C46A,#E9C46A40);border-radius:2px;height:14px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#E9C46A,#E9C46A40);border-radius:2px;height:8px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#E9C46A,#E9C46A40);border-radius:2px;height:12px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#E9C46A,#E9C46A40);border-radius:2px;height:18px"></div>
          </div>
        </div>
        <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#E9C46A,#f4a261);display:flex;align-items:center;justify-content:center;color:white;font-size:16px;flex-shrink:0">▶</div>
      </div>
    </div>

    <!-- Card ricordo 3 (preferito) -->
    <div style="background:white;border-radius:18px;padding:16px;margin-bottom:10px;box-shadow:0 2px 16px rgba(0,0,0,0.04);cursor:pointer;transition:0.2s;border:1px solid rgba(42,157,143,0.12)">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#e9c46a,#f4a261);display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:700;flex-shrink:0">M</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:14px;font-weight:600;color:#1a1a2e">Mamma</span>
            <span style="display:flex;align-items:center;gap:4px"><span style="font-size:11px;color:#999">3 giorni fa</span><span style="color:#E9C46A;font-size:14px">💛</span></span>
          </div>
          <div style="font-size:13px;color:#555;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Sono così orgogliosa di te, lo sai?"</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:6px">
            <span style="background:#f0f0ff;color:#6c63ff;font-size:10px;padding:2px 8px;border-radius:12px;font-weight:500">🥰 Amore</span>
            <span style="font-size:10px;color:#999">2:05</span>
          </div>
          <div style="display:flex;align-items:center;gap:2px;height:20px;margin-top:6px">
            <div style="width:3px;background:linear-gradient(180deg,#a8dadc,#a8dadc40);border-radius:2px;height:16px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#a8dadc,#a8dadc40);border-radius:2px;height:20px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#a8dadc,#a8dadc40);border-radius:2px;height:12px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#a8dadc,#a8dadc40);border-radius:2px;height:18px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#a8dadc,#a8dadc40);border-radius:2px;height:8px"></div>
            <div style="width:3px;background:linear-gradient(180deg,#a8dadc,#a8dadc40);border-radius:2px;height:14px"></div>
          </div>
        </div>
        <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#a8dadc,#457b9d);display:flex;align-items:center;justify-content:center;color:white;font-size:16px;flex-shrink:0">▶</div>
      </div>
    </div>

    <!-- Ieri -->
    <div style="display:flex;align-items:center;gap:8px;margin:16px 0 8px">
      <div style="width:4px;height:4px;border-radius:50%;background:#ccc"></div>
      <span style="font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.5px">Ieri</span>
      <div style="flex:1;height:1px;background:#E8ECF0"></div>
    </div>

    <!-- Mini preview (come Apple Voice Memos) -->
    <div style="background:white;border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:10px;margin-bottom:8px;box-shadow:0 1px 8px rgba(0,0,0,0.03)">
      <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#a8dadc,#457b9d);display:flex;align-items:center;justify-content:center;color:white;font-size:16px;flex-shrink:0">G</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:500;color:#1a1a2e">Nonno Giovanni</div>
        <div style="font-size:11px;color:#999">Ieri · 4:02 · 📖 Racconto</div>
      </div>
      <span style="color:#999;font-size:14px">▶</span>
    </div>
  </div>

  <!-- Mini-player (fisso in basso sopra la nav, come Spotify) -->
  <div style="position:fixed;bottom:60px;left:8px;right:8px;max-width:404px;margin:0 auto;background:#1a1a2e;border-radius:14px;padding:10px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 4px 24px rgba(0,0,0,0.15);z-index:200">
    <div style="width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#f4a261,#e76f51);display:flex;align-items:center;justify-content:center;color:white;font-size:16px;font-weight:700;flex-shrink:0">C</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:12px;font-weight:600;color:white">Nonna Carla</div>
      <div style="display:flex;gap:2px;align-items:center;height:16px;margin-top:2px">
        <div style="width:2px;background:#ffffff60;border-radius:2px;height:8px"></div>
        <div style="width:2px;background:#ffffff60;border-radius:2px;height:12px"></div>
        <div style="width:2px;background:white;border-radius:2px;height:16px"></div>
        <div style="width:2px;background:white;border-radius:2px;height:14px"></div>
        <div style="width:2px;background:#ffffff60;border-radius:2px;height:10px"></div>
        <div style="width:2px;background:#ffffff60;border-radius:2px;height:6px"></div>
        <span style="color:#ffffff80;font-size:10px;margin-left:4px">1:24 / 3:24</span>
      </div>
    </div>
    <div style="display:flex;gap:12px;align-items:center">
      <span style="color:white;font-size:18px;opacity:0.6">⏮</span>
      <span style="color:white;font-size:22px">⏸</span>
      <span style="color:white;font-size:18px;opacity:0.6">⏭</span>
    </div>
  </div>

  <!-- FAB centrale (registra) sempre visibile -->
  <div style="position:fixed;bottom:68px;left:50%;transform:translateX(-50%);width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#e76f51,#f4a261);display:flex;align-items:center;justify-content:center;color:white;font-size:26px;box-shadow:0 6px 20px rgba(231,111,81,0.4);z-index:300;cursor:pointer">🎤</div>

  <!-- Bottom Nav a 3 voci -->
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0 14px;border-top:1px solid #f0f0f0;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#2A9D8F"><div style="font-size:22px">📋</div><div style="font-size:10px;font-weight:600">Recenti</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">👥</div><div style="font-size:10px">Persone</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">⚙️</div><div style="font-size:10px">Impost.</div></div>
  </div>
</div>`,

    // ——————————————————————————
    // TAB 2: PERSONE
    // ——————————————————————————
    'Persone': `
<div style="font-family:Inter,sans-serif;background:#F5F7FA;min-height:100vh;padding:0 0 80px">
  <div style="padding:20px 20px 12px">
    <h1 style="font-size:24px;font-weight:700;color:#1a1a2e;margin:0">Le tue persone</h1>
    <p style="font-size:13px;color:#999;margin:4px 0 0">4 persone · 30 ricordi</p>
  </div>

  <div style="padding:0 16px;display:flex;flex-direction:column;gap:10px">
    <div style="background:white;border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,0.04);cursor:pointer">
      <div style="width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#f4a261,#e76f51);display:flex;align-items:center;justify-content:center;color:white;font-size:22px;font-weight:700;flex-shrink:0">C</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:600;color:#1a1a2e">Nonna Carla</div>
        <div style="display:flex;gap:8px;margin-top:4px;font-size:12px;color:#666">
          <span>🎙️ 12 audio</span>
          <span>💛 8 preferiti</span>
        </div>
      </div>
      <span style="background:#f0faf5;color:#2A9D8F;font-size:11px;padding:4px 10px;border-radius:20px;font-weight:500">🕊️ Nostalgia</span>
    </div>

    <div style="background:white;border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,0.04);cursor:pointer">
      <div style="width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;color:white;font-size:22px;font-weight:700;flex-shrink:0">P</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:600;color:#1a1a2e">Papà</div>
        <div style="display:flex;gap:8px;margin-top:4px;font-size:12px;color:#666">
          <span>🎙️ 8 audio</span>
          <span>💛 5 preferiti</span>
        </div>
      </div>
      <span style="background:#fef6e6;color:#b8942e;font-size:11px;padding:4px 10px;border-radius:20px;font-weight:500">😊 Gioia</span>
    </div>

    <div style="background:white;border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,0.04);cursor:pointer">
      <div style="width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#e9c46a,#f4a261);display:flex;align-items:center;justify-content:center;color:white;font-size:22px;font-weight:700;flex-shrink:0">M</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:600;color:#1a1a2e">Mamma</div>
        <div style="display:flex;gap:8px;margin-top:4px;font-size:12px;color:#666">
          <span>🎙️ 6 audio</span>
          <span>💛 4 preferiti</span>
        </div>
      </div>
      <span style="background:#f0f0ff;color:#6c63ff;font-size:11px;padding:4px 10px;border-radius:20px;font-weight:500">🥰 Amore</span>
    </div>

    <div style="background:white;border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,0.04);cursor:pointer">
      <div style="width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#a8dadc,#457b9d);display:flex;align-items:center;justify-content:center;color:white;font-size:22px;font-weight:700;flex-shrink:0">G</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:600;color:#1a1a2e">Nonno Giovanni</div>
        <div style="display:flex;gap:8px;margin-top:4px;font-size:12px;color:#666">
          <span>🎙️ 4 audio</span>
          <span>💛 3 preferiti</span>
        </div>
      </div>
      <span style="background:#fef0e6;color:#e76f51;font-size:11px;padding:4px 10px;border-radius:20px;font-weight:500">📖 Racconto</span>
    </div>
  </div>

  <!-- Bottom sheet simulato per aggiungere persona -->
  <div style="position:fixed;bottom:80px;left:16px;right:16px;max-width:392px;margin:0 auto;background:white;border-radius:20px;padding:20px;box-shadow:0 8px 40px rgba(0,0,0,0.1);z-index:200;display:none">
    <div style="font-size:16px;font-weight:600;color:#1a1a2e;margin-bottom:14px">Nuova persona</div>
    <div style="display:flex;gap:12px">
      <div style="width:48px;height:48px;border-radius:50%;background:#f0f2f5;display:flex;align-items:center;justify-content:center;color:#999;font-size:24px;flex-shrink:0">📷</div>
      <div style="flex:1">
        <input type="text" placeholder="Nome completo" style="width:100%;padding:12px 14px;border:1px solid #eee;border-radius:12px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box">
        <div style="display:flex;gap:6px;margin-top:8px">
          <span style="flex:1;text-align:center;background:#f0faf5;padding:6px;border-radius:10px;font-size:12px;color:#2A9D8F;cursor:pointer;border:1px solid #2A9D8F">Nonna/o</span>
          <span style="flex:1;text-align:center;background:white;padding:6px;border-radius:10px;font-size:12px;color:#999;cursor:pointer;border:1px solid #eee">Genitore</span>
          <span style="flex:1;text-align:center;background:white;padding:6px;border-radius:10px;font-size:12px;color:#999;cursor:pointer;border:1px solid #eee">Fratello</span>
          <span style="flex:1;text-align:center;background:white;padding:6px;border-radius:10px;font-size:12px;color:#999;cursor:pointer;border:1px solid #eee">Amico</span>
        </div>
        <button style="width:100%;margin-top:12px;background:#2A9D8F;color:white;border:none;border-radius:12px;padding:12px;font-size:14px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">Salva persona</button>
      </div>
    </div>
  </div>

  <!-- FAB + Nav uguali alla Home -->
  <div style="position:fixed;bottom:68px;left:50%;transform:translateX(-50%);width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#e76f51,#f4a261);display:flex;align-items:center;justify-content:center;color:white;font-size:26px;box-shadow:0 6px 20px rgba(231,111,81,0.4);z-index:300;cursor:pointer">🎤</div>
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0 14px;border-top:1px solid #f0f0f0;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">📋</div><div style="font-size:10px">Recenti</div></div>
    <div style="text-align:center;color:#2A9D8F"><div style="font-size:22px">👥</div><div style="font-size:10px;font-weight:600">Persone</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">⚙️</div><div style="font-size:10px">Impost.</div></div>
  </div>
</div>`,

    // ——————————————————————————
    // TAB 3: IMPOSTAZIONI (più leggere)
    // ——————————————————————————
    'Impostazioni': `
<div style="font-family:Inter,sans-serif;background:#F5F7FA;min-height:100vh;padding:0 0 80px">
  <div style="padding:20px 20px 12px">
    <h1 style="font-size:24px;font-weight:700;color:#1a1a2e;margin:0">Impostazioni</h1>
  </div>

  <div style="padding:0 16px;display:flex;flex-direction:column;gap:12px">
    <!-- Profilo -->
    <div style="background:white;border-radius:18px;padding:16px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:700">T</div>
      <div style="flex:1">
        <div style="font-size:15px;font-weight:600;color:#1a1a2e">Toni</div>
        <div style="font-size:12px;color:#999">toni@esempio.it</div>
      </div>
      <span style="color:#ccc;font-size:18px">›</span>
    </div>

    <!-- Sezioni impostazioni -->
    <div style="background:white;border-radius:18px;padding:8px 0;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #f5f5f5">
        <span style="font-size:18px">🔔</span>
        <div style="flex:1"><div style="font-size:14px;color:#333">Ricordo del giorno</div><div style="font-size:12px;color:#999">Notifica quotidiana con un ricordo</div></div>
        <label style="width:44px;height:24px;position:relative;flex-shrink:0"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#2A9D8F;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transform:translateX(20px)"></span></label>
      </div>
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #f5f5f5">
        <span style="font-size:18px">🎂</span>
        <div style="flex:1"><div style="font-size:14px;color:#333">Compleanni</div><div style="font-size:12px;color:#999">Ricorda i compleanni delle tue persone</div></div>
        <label style="width:44px;height:24px;position:relative;flex-shrink:0"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#2A9D8F;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transform:translateX(20px)"></span></label>
      </div>
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #f5f5f5">
        <span style="font-size:18px">☁️</span>
        <div style="flex:1"><div style="font-size:14px;color:#333">Backup automatico</div><div style="font-size:12px;color:#999">Salva i tuoi ricordi sul cloud</div></div>
        <label style="width:44px;height:24px;position:relative;flex-shrink:0"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#2A9D8F;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transform:translateX(20px)"></span></label>
      </div>
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #f5f5f5">
        <span style="font-size:18px">🔒</span>
        <div style="flex:1"><div style="font-size:14px;color:#333">Blocco privacy</div><div style="font-size:12px;color:#999">Richiede Face ID per aprire l'app</div></div>
        <span style="color:#ccc;font-size:18px">›</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px">
        <span style="font-size:18px">📤</span>
        <div style="flex:1"><div style="font-size:14px;color:#333">Esporta dati</div><div style="font-size:12px;color:#999">Scarica un archivio dei tuoi ricordi</div></div>
        <span style="color:#ccc;font-size:18px">›</span>
      </div>
    </div>

    <!-- Info app -->
    <div style="background:white;border-radius:18px;padding:8px 0;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #f5f5f5">
        <span style="font-size:18px">🌿</span>
        <div style="flex:1"><div style="font-size:14px;color:#333">Versione</div></div>
        <span style="font-size:13px;color:#999">1.0.0</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #f5f5f5">
        <span style="font-size:18px">📖</span>
        <div style="flex:1"><div style="font-size:14px;color:#333">Termini e privacy</div></div>
        <span style="color:#ccc;font-size:18px">›</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;color:#e55">
        <span style="font-size:18px">🗑️</span>
        <span style="font-size:14px;font-weight:500">Elimina tutti i dati</span>
      </div>
    </div>

    <div style="text-align:center;padding:16px;color:#bbb;font-size:12px">
      🌿 ECO v1.0 · Made with 💚
    </div>
  </div>

  <!-- FAB + Nav -->
  <div style="position:fixed;bottom:68px;left:50%;transform:translateX(-50%);width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#e76f51,#f4a261);display:flex;align-items:center;justify-content:center;color:white;font-size:26px;box-shadow:0 6px 20px rgba(231,111,81,0.4);z-index:300;cursor:pointer">🎤</div>
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0 14px;border-top:1px solid #f0f0f0;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">📋</div><div style="font-size:10px">Recenti</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">👥</div><div style="font-size:10px">Persone</div></div>
    <div style="text-align:center;color:#2A9D8F"><div style="font-size:22px">⚙️</div><div style="font-size:10px;font-weight:600">Impost.</div></div>
  </div>
</div>`,
  }
};
