// ============================================
// Configurazione: ECO — Preserva le voci
// Design System: verde acqua/teal, morbido, moderno
// ============================================
window.__appConfig = {
  name: 'ECO',
  description: 'Preserva le voci di chi ami. Ascolta il tuo cuore. Ogni giorno.',
  icon: '🌿',
  pages: {

    '🏠 Home': `
<div style="font-family:Inter,sans-serif;background:#F0F7F4;min-height:100vh;padding:0 0 80px">
  <!-- Header con saluto -->
  <div style="background:linear-gradient(135deg,#2A9D8F,#264653);padding:24px 20px 32px;border-radius:0 0 28px 28px;color:white">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <div>
        <div style="font-size:13px;opacity:0.8">Buongiorno 👋</div>
        <div style="font-size:22px;font-weight:700;margin-top:2px">Toni</div>
      </div>
      <div style="width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:20px;backdrop-filter:blur(4px)">T</div>
    </div>
    <!-- Stato d'animo rapido -->
    <div style="background:rgba(255,255,255,0.12);backdrop-filter:blur(8px);border-radius:16px;padding:14px 16px">
      <div style="font-size:13px;opacity:0.8;margin-bottom:10px">Come ti senti oggi?</div>
      <div style="display:flex;gap:12px;justify-content:space-between">
        <span style="font-size:28px;cursor:pointer;opacity:0.4;transition:0.2s">😢</span>
        <span style="font-size:28px;cursor:pointer;opacity:0.4;transition:0.2s">😐</span>
        <span style="font-size:28px;cursor:pointer;opacity:1;transition:0.2s;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2))">🙂</span>
        <span style="font-size:28px;cursor:pointer;opacity:0.4;transition:0.2s">😊</span>
        <span style="font-size:28px;cursor:pointer;opacity:0.4;transition:0.2s">🥰</span>
      </div>
    </div>
  </div>

  <!-- Ricordo del giorno -->
  <div style="margin:-12px 16px 0;position:relative;z-index:10">
    <div style="background:white;border-radius:20px;padding:18px;box-shadow:0 4px 24px rgba(42,157,143,0.12);border:1px solid rgba(42,157,143,0.08)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div style="display:flex;align-items:center;gap:6px">
          <span style="font-size:16px">💛</span>
          <span style="font-size:14px;font-weight:600;color:#264653">Ricordo del giorno</span>
        </div>
        <span style="font-size:12px;color:#999">12 Lug 2026</span>
      </div>
      <div style="background:linear-gradient(135deg,#f8fff9,#e8f5ed);border-radius:14px;padding:14px;display:flex;align-items:center;gap:14px;cursor:pointer">
        <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;font-size:22px;color:white;flex-shrink:0">🎙️</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;color:#264653">Nonna Carla</div>
          <div style="font-size:12px;color:#666;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Quando avevo la tua età, andavamo..."</div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:4px">
            <span style="font-size:10px;color:#2A9D8F">🕊️ Nostalgia</span>
            <span style="font-size:10px;color:#999">· 1:24</span>
          </div>
        </div>
        <span style="color:#2A9D8F;font-size:20px">▶</span>
      </div>
    </div>
  </div>

  <!-- Persone recenti -->
  <div style="margin:20px 16px 0">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <span style="font-size:16px;font-weight:700;color:#264653">Le tue persone</span>
      <span style="font-size:13px;color:#2A9D8F;font-weight:500">Vedi tutte →</span>
    </div>
    <div style="display:flex;gap:14px;overflow-x:auto;padding-bottom:4px">
      <div style="flex-shrink:0;text-align:center;width:72px;cursor:pointer">
        <div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#f4a261,#e76f51);margin:0 auto 6px;display:flex;align-items:center;justify-content:center;color:white;font-size:26px;font-weight:700;box-shadow:0 4px 12px rgba(231,111,81,0.3)">C</div>
        <div style="font-size:12px;font-weight:500;color:#333">Nonna Carla</div>
        <div style="font-size:10px;color:#999">12 audio</div>
      </div>
      <div style="flex-shrink:0;text-align:center;width:72px;cursor:pointer">
        <div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);margin:0 auto 6px;display:flex;align-items:center;justify-content:center;color:white;font-size:26px;font-weight:700;box-shadow:0 4px 12px rgba(42,157,143,0.3)">P</div>
        <div style="font-size:12px;font-weight:500;color:#333">Papà</div>
        <div style="font-size:10px;color:#999">8 audio</div>
      </div>
      <div style="flex-shrink:0;text-align:center;width:72px;cursor:pointer">
        <div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#e9c46a,#f4a261);margin:0 auto 6px;display:flex;align-items:center;justify-content:center;color:white;font-size:26px;font-weight:700;box-shadow:0 4px 12px rgba(233,196,106,0.3)">M</div>
        <div style="font-size:12px;font-weight:500;color:#333">Mamma</div>
        <div style="font-size:10px;color:#999">6 audio</div>
      </div>
      <div style="flex-shrink:0;text-align:center;width:72px;cursor:pointer">
        <div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#a8dadc,#457b9d);margin:0 auto 6px;display:flex;align-items:center;justify-content:center;color:white;font-size:26px;font-weight:700;box-shadow:0 4px 12px rgba(69,123,157,0.3)">G</div>
        <div style="font-size:12px;font-weight:500;color:#333">Nonno Giovanni</div>
        <div style="font-size:10px;color:#999">4 audio</div>
      </div>
    </div>
  </div>

  <!-- Diario rapido -->
  <div style="margin:20px 16px 0">
    <div style="background:white;border-radius:20px;padding:18px;box-shadow:0 2px 16px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.04)">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
        <span style="font-size:16px">📝</span>
        <span style="font-size:14px;font-weight:600;color:#264653">Diario di oggi</span>
        <span style="margin-left:auto;background:#E9C46A20;color:#b8942e;font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500">2/4 completato</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#f8fff9;border-radius:12px;border-left:3px solid #2A9D8F">
          <span style="font-size:18px;color:#2A9D8F">✅</span>
          <div style="flex:1;font-size:13px;color:#333"><strong>Come stai oggi?</strong> — Sereno, giornata produttiva</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#f8fff9;border-radius:12px;border-left:3px solid #2A9D8F">
          <span style="font-size:18px;color:#2A9D8F">✅</span>
          <div style="flex:1;font-size:13px;color:#333"><strong>Cosa è successo?</strong> — Riunione finale con il team</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:white;border-radius:12px;border-left:3px solid #ddd">
          <span style="font-size:18px;color:#ddd">⬜</span>
          <div style="flex:1;font-size:13px;color:#bbb"><strong>Cosa ti preoccupa?</strong> — Tocca per rispondere</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:white;border-radius:12px;border-left:3px solid #ddd">
          <span style="font-size:18px;color:#ddd">⬜</span>
          <div style="flex:1;font-size:13px;color:#bbb"><strong>Cosa ti ha reso felice?</strong> — Tocca per rispondere</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Nav -->
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0 14px;border-top:1px solid #f0f0f0;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#2A9D8F"><div style="font-size:22px">🏠</div><div style="font-size:10px;font-weight:600">Home</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">👥</div><div style="font-size:10px">Persone</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">🎤</div><div style="font-size:10px">Registra</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">📊</div><div style="font-size:10px">Stats</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">⚙️</div><div style="font-size:10px">Impost.</div></div>
  </div>
</div>`,

    '👥 Persone': `
<div style="font-family:Inter,sans-serif;background:#F0F7F4;min-height:100vh;padding:0 0 80px">
  <div style="background:linear-gradient(135deg,#2A9D8F,#264653);padding:24px 20px 28px;border-radius:0 0 28px 28px;color:white">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <h1 style="font-size:22px;font-weight:700;margin:0">Le tue persone</h1>
      <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer">➕</div>
    </div>
    <div style="margin-top:14px;background:rgba(255,255,255,0.1);border-radius:12px;padding:10px 14px;display:flex;align-items:center;gap:8px;backdrop-filter:blur(4px)">
      <span style="font-size:14px;opacity:0.7">🔍</span>
      <input type="text" placeholder="Cerca persona..." style="background:none;border:none;color:white;font-size:14px;width:100%;outline:none;font-family:Inter,sans-serif">
    </div>
  </div>

  <!-- Lista persone -->
  <div style="margin:16px;display:flex;flex-direction:column;gap:12px">
    <div style="background:white;border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,0.04);cursor:pointer">
      <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#f4a261,#e76f51);display:flex;align-items:center;justify-content:center;color:white;font-size:24px;font-weight:700;flex-shrink:0">C</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:600;color:#264653">Nonna Carla</div>
        <div style="display:flex;gap:10px;margin-top:4px;font-size:12px;color:#666">
          <span>🎙️ 12 audio</span>
          <span>💛 8 preferiti</span>
        </div>
      </div>
      <div style="text-align:right">
        <div style="background:#f0faf5;color:#2A9D8F;font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500">🕊️ Nostalgia</div>
        <div style="font-size:11px;color:#999;margin-top:4px">Ultimo: 2 giorni fa</div>
      </div>
      <span style="color:#ccc;font-size:18px">›</span>
    </div>

    <div style="background:white;border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,0.04);cursor:pointer">
      <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;color:white;font-size:24px;font-weight:700;flex-shrink:0">P</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:600;color:#264653">Papà</div>
        <div style="display:flex;gap:10px;margin-top:4px;font-size:12px;color:#666">
          <span>🎙️ 8 audio</span>
          <span>💛 5 preferiti</span>
        </div>
      </div>
      <div style="text-align:right">
        <div style="background:#fef6e6;color:#b8942e;font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500">😊 Gioia</div>
        <div style="font-size:11px;color:#999;margin-top:4px">Ultimo: 5 giorni fa</div>
      </div>
      <span style="color:#ccc;font-size:18px">›</span>
    </div>

    <div style="background:white;border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,0.04);cursor:pointer">
      <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#e9c46a,#f4a261);display:flex;align-items:center;justify-content:center;color:white;font-size:24px;font-weight:700;flex-shrink:0">M</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:600;color:#264653">Mamma</div>
        <div style="display:flex;gap:10px;margin-top:4px;font-size:12px;color:#666">
          <span>🎙️ 6 audio</span>
          <span>💛 4 preferiti</span>
        </div>
      </div>
      <div style="text-align:right">
        <div style="background:#f0f0ff;color:#6c63ff;font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500">🥰 Amore</div>
        <div style="font-size:11px;color:#999;margin-top:4px">Ultimo: 1 sett. fa</div>
      </div>
      <span style="color:#ccc;font-size:18px">›</span>
    </div>

    <div style="background:white;border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,0.04);cursor:pointer">
      <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#a8dadc,#457b9d);display:flex;align-items:center;justify-content:center;color:white;font-size:24px;font-weight:700;flex-shrink:0">G</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:600;color:#264653">Nonno Giovanni</div>
        <div style="display:flex;gap:10px;margin-top:4px;font-size:12px;color:#666">
          <span>🎙️ 4 audio</span>
          <span>💛 3 preferiti</span>
        </div>
      </div>
      <div style="text-align:right">
        <div style="background:#fef0e6;color:#e76f51;font-size:11px;padding:3px 10px;border-radius:20px;font-weight:500">📖 Racconto</div>
        <div style="font-size:11px;color:#999;margin-top:4px">Ultimo: 2 sett. fa</div>
      </div>
      <span style="color:#ccc;font-size:18px">›</span>
    </div>
  </div>

  <!-- Bottom Nav -->
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0 14px;border-top:1px solid #f0f0f0;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">🏠</div><div style="font-size:10px">Home</div></div>
    <div style="text-align:center;color:#2A9D8F"><div style="font-size:22px">👥</div><div style="font-size:10px;font-weight:600">Persone</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">🎤</div><div style="font-size:10px">Registra</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">📊</div><div style="font-size:10px">Stats</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">⚙️</div><div style="font-size:10px">Impost.</div></div>
  </div>
</div>`,

    '👤 Dettaglio Persona': `
<div style="font-family:Inter,sans-serif;background:#F0F7F4;min-height:100vh;padding-bottom:80px">
  <!-- Cover -->
  <div style="background:linear-gradient(135deg,#f4a261,#e76f51);padding:20px 20px 40px">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
      <span style="font-size:24px;color:white;cursor:pointer;opacity:0.8">‹</span>
      <span style="font-size:14px;color:rgba(255,255,255,0.8)">Tutte le persone</span>
    </div>
    <div style="text-align:center">
      <div style="width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,0.25);margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:36px;color:white;font-weight:700;backdrop-filter:blur(4px)">C</div>
      <h2 style="color:white;font-size:24px;font-weight:700;margin:0">Nonna Carla</h2>
      <p style="color:rgba(255,255,255,0.7);font-size:13px;margin:4px 0 0">12 audio · 8 preferiti · Ultimo ascolto 2 giorni fa</p>
    </div>
  </div>

  <!-- Stats cards -->
  <div style="margin:-20px 16px 16px;display:flex;gap:10px;position:relative;z-index:10">
    <div style="flex:1;background:white;border-radius:14px;padding:12px;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,0.06)">
      <div style="font-size:22px;font-weight:700;color:#2A9D8F">12</div>
      <div style="font-size:11px;color:#999">Audio</div>
    </div>
    <div style="flex:1;background:white;border-radius:14px;padding:12px;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,0.06)">
      <div style="font-size:22px;font-weight:700;color:#E9C46A">8</div>
      <div style="font-size:11px;color:#999">Preferiti</div>
    </div>
    <div style="flex:1;background:white;border-radius:14px;padding:12px;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,0.06)">
      <div style="font-size:22px;font-weight:700;color:#e76f51">💛</div>
      <div style="font-size:11px;color:#999">Nostalgia</div>
    </div>
  </div>

  <!-- Emozioni -->
  <div style="margin:0 16px 16px;background:white;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
    <div style="font-size:13px;font-weight:600;color:#264653;margin-bottom:10px">Emozioni prevalenti</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <span style="background:#f0faf5;color:#2A9D8F;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:500">🕊️ Nostalgia 45%</span>
      <span style="background:#fef6e6;color:#b8942e;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:500">😊 Gioia 30%</span>
      <span style="background:#f0f0ff;color:#6c63ff;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:500">🥰 Amore 25%</span>
    </div>
  </div>

  <!-- Timeline audio -->
  <div style="margin:0 16px">
    <div style="font-size:14px;font-weight:600;color:#264653;margin-bottom:12px">Tutti gli audio</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      <div style="background:white;border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:12px;box-shadow:0 1px 8px rgba(0,0,0,0.04);cursor:pointer">
        <div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;color:white;font-size:18px;flex-shrink:0">▶</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;color:#264653">La festa di paese</div>
          <div style="font-size:11px;color:#999;margin-top:2px">12 Lug 2026 · 3:24</div>
        </div>
        <span style="color:#E9C46A;font-size:16px">💛</span>
      </div>
      <div style="background:white;border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:12px;box-shadow:0 1px 8px rgba(0,0,0,0.04);cursor:pointer">
        <div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#f4a261,#e76f51);display:flex;align-items:center;justify-content:center;color:white;font-size:18px;flex-shrink:0">▶</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;color:#264653">Il segreto della pasta al forno</div>
          <div style="font-size:11px;color:#999;margin-top:2px">8 Lug 2026 · 2:15</div>
        </div>
        <span style="color:#ddd;font-size:16px">♡</span>
      </div>
      <div style="background:white;border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:12px;box-shadow:0 1px 8px rgba(0,0,0,0.04);cursor:pointer">
        <div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#e9c46a,#f4a261);display:flex;align-items:center;justify-content:center;color:white;font-size:18px;flex-shrink:0">▶</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;color:#264653">Quando ero piccola...</div>
          <div style="font-size:11px;color:#999;margin-top:2px">2 Lug 2026 · 4:05</div>
        </div>
        <span style="color:#E9C46A;font-size:16px">💛</span>
      </div>
    </div>
  </div>

  <!-- Bottom Nav -->
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0 14px;border-top:1px solid #f0f0f0;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">🏠</div><div style="font-size:10px">Home</div></div>
    <div style="text-align:center;color:#2A9D8F"><div style="font-size:22px">👥</div><div style="font-size:10px;font-weight:600">Persone</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">🎤</div><div style="font-size:10px">Registra</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">📊</div><div style="font-size:10px">Stats</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">⚙️</div><div style="font-size:10px">Impost.</div></div>
  </div>
</div>`,

    '🎤 Registra': `
<div style="font-family:Inter,sans-serif;background:#F0F7F4;min-height:100vh;padding:0 0 80px;display:flex;flex-direction:column;align-items:center">
  <div style="width:100%;background:linear-gradient(135deg,#2A9D8F,#264653);padding:24px 20px 32px;border-radius:0 0 28px 28px;color:white;text-align:center">
    <h1 style="font-size:22px;font-weight:700;margin:0">Registra un ricordo</h1>
    <p style="font-size:13px;opacity:0.7;margin-top:4px">Premi e parla. Conserva per sempre.</p>
  </div>

  <!-- Selezione persona -->
  <div style="width:100%;padding:16px 20px 0">
    <div style="font-size:13px;font-weight:500;color:#264653;margin-bottom:8px">A chi appartiene questa voce?</div>
    <div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:4px">
      <div style="flex-shrink:0;text-align:center;width:64px;cursor:pointer;opacity:0.5">
        <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#f4a261,#e76f51);margin:0 auto 4px;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:700">C</div>
        <div style="font-size:10px;color:#666">Nonna</div>
      </div>
      <div style="flex-shrink:0;text-align:center;width:64px;cursor:pointer;opacity:0.5">
        <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);margin:0 auto 4px;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:700">P</div>
        <div style="font-size:10px;color:#666">Papà</div>
      </div>
      <div style="flex-shrink:0;text-align:center;width:64px;cursor:pointer">
        <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#e9c46a,#f4a261);margin:0 auto 4px;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:700;box-shadow:0 0 0 3px #2A9D8F">M</div>
        <div style="font-size:10px;color:#2A9D8F;font-weight:600">Mamma</div>
      </div>
      <div style="flex-shrink:0;text-align:center;width:64px;cursor:pointer;opacity:0.5">
        <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#a8dadc,#457b9d);margin:0 auto 4px;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:700">G</div>
        <div style="font-size:10px;color:#666">Nonno</div>
      </div>
      <div style="flex-shrink:0;text-align:center;width:64px;cursor:pointer;opacity:0.5">
        <div style="width:48px;height:48px;border-radius:50%;background:#eee;margin:0 auto 4px;display:flex;align-items:center;justify-content:center;color:#999;font-size:20px;font-weight:700">+</div>
        <div style="font-size:10px;color:#666">Nuova</div>
      </div>
    </div>
  </div>

  <!-- Emozione -->
  <div style="width:100%;padding:16px 20px 0">
    <div style="font-size:13px;font-weight:500;color:#264653;margin-bottom:8px">Quale emozione provi ascoltando?</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <span style="background:#f0faf5;color:#2A9D8F;padding:6px 14px;border-radius:20px;font-size:12px;cursor:pointer;border:1px solid #2A9D8F;font-weight:500">🕊️ Nostalgia</span>
      <span style="background:white;color:#666;padding:6px 14px;border-radius:20px;font-size:12px;cursor:pointer;border:1px solid #eee">😊 Gioia</span>
      <span style="background:white;color:#666;padding:6px 14px;border-radius:20px;font-size:12px;cursor:pointer;border:1px solid #eee">🥰 Amore</span>
      <span style="background:white;color:#666;padding:6px 14px;border-radius:20px;font-size:12px;cursor:pointer;border:1px solid #eee">📖 Racconto</span>
      <span style="background:white;color:#666;padding:6px 14px;border-radius:20px;font-size:12px;cursor:pointer;border:1px solid #eee">😂 Risata</span>
    </div>
  </div>

  <!-- Pulsante record -->
  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px">
    <div style="position:relative;width:120px;height:120px;cursor:pointer">
      <div style="position:absolute;inset:0;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;font-size:44px;color:white;box-shadow:0 8px 32px rgba(42,157,143,0.35);transition:0.2s">🎤</div>
      <div style="position:absolute;inset:-8px;border-radius:50%;border:2px solid rgba(42,157,143,0.15);animation:pulse 2s infinite"></div>
    </div>
    <div style="margin-top:20px;font-size:15px;font-weight:600;color:#264653">Tocca per registrare</div>
    <div style="margin-top:6px;font-size:13px;color:#999">Tieni premuto per parlare</div>

    <!-- Timer registrazione (nascosto, mostrato durante registrazione) -->
    <div style="margin-top:20px;display:none">
      <div style="display:flex;align-items:center;gap:8px">
        <div style="width:10px;height:10px;border-radius:50%;background:#e76f51;animation:blink 1s infinite"></div>
        <span style="font-size:28px;font-weight:700;color:#264653">00:24</span>
      </div>
      <div style="width:200px;height:3px;background:#eee;border-radius:4px;margin-top:8px;overflow:hidden">
        <div style="width:30%;height:100%;background:linear-gradient(90deg,#2A9D8F,#e76f51);border-radius:4px"></div>
      </div>
    </div>
  </div>

  <!-- Bottom Nav -->
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0 14px;border-top:1px solid #f0f0f0;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">🏠</div><div style="font-size:10px">Home</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">👥</div><div style="font-size:10px">Persone</div></div>
    <div style="text-align:center;color:#2A9D8F"><div style="font-size:22px">🎤</div><div style="font-size:10px;font-weight:600">Registra</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">📊</div><div style="font-size:10px">Stats</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">⚙️</div><div style="font-size:10px">Impost.</div></div>
  </div>
</div>`,

    '📊 Stats': `
<div style="font-family:Inter,sans-serif;background:#F0F7F4;min-height:100vh;padding:0 0 80px">
  <div style="background:linear-gradient(135deg,#2A9D8F,#264653);padding:24px 20px 28px;border-radius:0 0 28px 28px;color:white">
    <h1 style="font-size:22px;font-weight:700;margin:0">Le tue statistiche</h1>
    <p style="font-size:13px;opacity:0.7;margin-top:4px">Il tuo viaggio emotivo</p>
  </div>

  <!-- Stats overview -->
  <div style="margin:16px;display:flex;gap:10px">
    <div style="flex:1;background:white;border-radius:14px;padding:14px;text-align:center;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="font-size:24px;font-weight:800;color:#2A9D8F">30</div>
      <div style="font-size:11px;color:#999;margin-top:2px">Audio totali</div>
    </div>
    <div style="flex:1;background:white;border-radius:14px;padding:14px;text-align:center;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="font-size:24px;font-weight:800;color:#E9C46A">4</div>
      <div style="font-size:11px;color:#999;margin-top:2px">Persone</div>
    </div>
    <div style="flex:1;background:white;border-radius:14px;padding:14px;text-align:center;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="font-size:24px;font-weight:800;color:#e76f51">12</div>
      <div style="font-size:11px;color:#999;margin-top:2px">Giorni</div>
    </div>
  </div>

  <!-- Grafico emozioni -->
  <div style="margin:0 16px 16px;background:white;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
    <div style="font-size:14px;font-weight:600;color:#264653;margin-bottom:14px">Emozioni questo mese</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:4px"><span>🕊️ Nostalgia</span><span>45%</span></div>
        <div style="height:8px;background:#f0f0f0;border-radius:8px;overflow:hidden"><div style="width:45%;height:100%;background:linear-gradient(90deg,#2A9D8F,#264653);border-radius:8px"></div></div>
      </div>
      <div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:4px"><span>😊 Gioia</span><span>30%</span></div>
        <div style="height:8px;background:#f0f0f0;border-radius:8px;overflow:hidden"><div style="width:30%;height:100%;background:linear-gradient(90deg,#e9c46a,#f4a261);border-radius:8px"></div></div>
      </div>
      <div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:4px"><span>🥰 Amore</span><span>25%</span></div>
        <div style="height:8px;background:#f0f0f0;border-radius:8px;overflow:hidden"><div style="width:25%;height:100%;background:linear-gradient(90deg,#a8dadc,#457b9d);border-radius:8px"></div></div>
      </div>
    </div>
  </div>

  <!-- Streak e attività -->
  <div style="margin:0 16px 16px;display:flex;gap:12px">
    <div style="flex:1;background:white;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="font-size:13px;font-weight:600;color:#264653;margin-bottom:10px">🔥 Streak</div>
      <div style="font-size:28px;font-weight:800;color:#e76f51">7 giorni</div>
      <div style="font-size:11px;color:#999;margin-top:2px">Record: 14 giorni</div>
    </div>
    <div style="flex:1;background:white;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="font-size:13px;font-weight:600;color:#264653;margin-bottom:10px">🏆 Diario</div>
      <div style="font-size:28px;font-weight:800;color:#2A9D8F">23</div>
      <div style="font-size:11px;color:#999;margin-top:2px">Risposte totali</div>
    </div>
  </div>

  <!-- Attività recente -->
  <div style="margin:0 16px;background:white;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
    <div style="font-size:14px;font-weight:600;color:#264653;margin-bottom:12px">Attività recente</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      <div style="width:32px;height:32px;border-radius:8px;background:#2A9D8F;display:flex;align-items:center;justify-content:center;color:white;font-size:12px">12</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#2A9D8F;display:flex;align-items:center;justify-content:center;color:white;font-size:12px">13</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#eee;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px">14</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#E9C46A;display:flex;align-items:center;justify-content:center;color:white;font-size:12px">15</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#E9C46A;display:flex;align-items:center;justify-content:center;color:white;font-size:12px">16</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#E9C46A;display:flex;align-items:center;justify-content:center;color:white;font-size:12px">17</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#eee;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px">18</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#eee;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px">19</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#eee;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px">20</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#eee;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px">21</div>
      <div style="width:32px;height:32px;border-radius:8px;background:#eee;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px">22</div>
    </div>
  </div>

  <!-- Bottom Nav -->
  <div style="position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:10px 0 14px;border-top:1px solid #f0f0f0;max-width:420px;margin:0 auto;z-index:100">
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">🏠</div><div style="font-size:10px">Home</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">👥</div><div style="font-size:10px">Persone</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">🎤</div><div style="font-size:10px">Registra</div></div>
    <div style="text-align:center;color:#2A9D8F"><div style="font-size:22px">📊</div><div style="font-size:10px;font-weight:600">Stats</div></div>
    <div style="text-align:center;color:#bbb"><div style="font-size:22px">⚙️</div><div style="font-size:10px">Impost.</div></div>
  </div>
</div>`,

    '⚙️ Impostazioni': `
<div style="font-family:Inter,sans-serif;background:#F0F7F4;min-height:100vh;padding:0 0 24px 0">
  <div style="background:linear-gradient(135deg,#2A9D8F,#264653);padding:24px 20px 28px;border-radius:0 0 28px 28px;color:white">
    <h1 style="font-size:22px;font-weight:700;margin:0">Impostazioni</h1>
  </div>

  <div style="margin:16px;display:flex;flex-direction:column;gap:12px">

    <!-- Profilo -->
    <div style="background:white;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="display:flex;align-items:center;gap:14px">
        <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#2A9D8F,#264653);display:flex;align-items:center;justify-content:center;color:white;font-size:24px;font-weight:700">T</div>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:600;color:#264653">Toni</div>
          <div style="font-size:12px;color:#999">toni@esempio.it</div>
        </div>
        <span style="color:#ccc;font-size:18px">›</span>
      </div>
    </div>

    <!-- Notifiche -->
    <div style="background:white;border-radius:16px;padding:8px 0;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="font-size:12px;font-weight:600;color:#999;padding:8px 16px 4px;text-transform:uppercase;letter-spacing:0.5px">Notifiche</div>
      <div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f5f5f5">
        <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">🔔</span><span style="font-size:14px;color:#333">Ricordo del giorno</span></div>
        <label style="width:44px;height:24px;position:relative"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#2A9D8F;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transform:translateX(20px)"></span></label>
      </div>
      <div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f5f5f5">
        <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">🎂</span><span style="font-size:14px;color:#333">Compleanni persone</span></div>
        <label style="width:44px;height:24px;position:relative"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#2A9D8F;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transform:translateX(20px)"></span></label>
      </div>
      <div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f5f5f5">
        <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">📝</span><span style="font-size:14px;color:#333">Promemoria diario serale</span></div>
        <label style="width:44px;height:24px;position:relative"><input type="checkbox" style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#ddd;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%"></span></label>
      </div>
    </div>

    <!-- Privacy -->
    <div style="background:white;border-radius:16px;padding:8px 0;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="font-size:12px;font-weight:600;color:#999;padding:8px 16px 4px;text-transform:uppercase;letter-spacing:0.5px">Privacy</div>
      <div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f5f5f5">
        <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">☁️</span><span style="font-size:14px;color:#333">Backup automatico</span></div>
        <label style="width:44px;height:24px;position:relative"><input type="checkbox" checked style="opacity:0;width:0;height:0"><span style="position:absolute;cursor:pointer;inset:0;background:#2A9D8F;border-radius:24px"></span><span style="position:absolute;height:20px;width:20px;left:2px;bottom:2px;background:white;border-radius:50%;transform:translateX(20px)"></span></label>
      </div>
      <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f5f5f5">
        <span style="font-size:18px">🔒</span><div style="flex:1"><div style="font-size:14px;color:#333">Blocco con Face ID</div><div style="font-size:12px;color:#999">Richiede autenticazione per aprire l'app</div></div>
        <span style="color:#ccc">›</span>
      </div>
      <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f5f5f5">
        <span style="font-size:18px">📤</span><div style="flex:1"><div style="font-size:14px;color:#333">Esporta tutti i dati</div><div style="font-size:12px;color:#999">Scarica un archivio dei tuoi ricordi</div></div>
        <span style="color:#ccc">›</span>
      </div>
    </div>

    <!-- Altro -->
    <div style="background:white;border-radius:16px;padding:8px 0;box-shadow:0 2px 12px rgba(0,0,0,0.04)">
      <div style="font-size:12px;font-weight:600;color:#999;padding:8px 16px 4px;text-transform:uppercase;letter-spacing:0.5px">Info</div>
      <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f5f5f5">
        <span style="font-size:18px">🌿</span><div style="flex:1"><div style="font-size:14px;color:#333">Versione ECO</div><div style="font-size:12px;color:#999">1.0.0</div></div>
        <span style="color:#ccc">›</span>
      </div>
      <div style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #f5f5f5">
        <span style="font-size:18px">📖</span><div style="flex:1;font-size:14px;color:#333">Termini e privacy</div>
        <span style="color:#ccc">›</span>
      </div>
    </div>

    <div style="margin-top:8px;text-align:center;padding:0 16px">
      <button style="width:100%;background:#fce8e8;color:#e55;border:none;border-radius:14px;padding:14px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">🗑️ Elimina tutti i dati</button>
    </div>

    <div style="text-align:center;padding:16px;color:#bbb;font-size:12px">
      🌿 ECO v1.0 · Made with 💚
    </div>
  </div>
</div>`,
  }
};
