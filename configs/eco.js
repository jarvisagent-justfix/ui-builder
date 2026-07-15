// ============================================
// ECO — Preserva le voci di chi ami
// Design ispirato al mockup: tema scuro, accenti arancio, moderno
// ============================================
window.__appConfig = {
  name: 'ECO',
  description: 'Preserva le voci di chi ami. Ogni giorno.',
  icon: '🌿',
  pages: {

    // ——————————————————————————
    // HOME
    // ——————————————————————————
    '🏠 Home': `
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 22px 100px;color:#f5f4f2">
  <!-- Top row -->
  <div style="display:flex;justify-content:space-between;align-items:flex-start;padding-top:10px">
    <div>
      <div style="font-size:13px;color:#9a9a9e">Buongiorno, <b style="color:#f5f4f2">Antonino</b></div>
      <h1 style="font-size:30px;font-weight:800;letter-spacing:-0.5px;margin:2px 0 0;color:#f5f4f2">ECO</h1>
    </div>
    <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#ff7a45,#ffb199);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;color:#fff;flex-shrink:0">AP</div>
  </div>

  <!-- Echo card (ricordo del giorno) -->
  <div style="margin-top:22px;border-radius:28px;padding:26px 22px;background:linear-gradient(155deg,#241a15,#171012 60%);border:1px solid rgba(255,255,255,0.08);position:relative;overflow:hidden">
    <div style="position:absolute;width:220px;height:220px;background:radial-gradient(circle,rgba(255,122,69,0.14),transparent 70%);top:-80px;right:-80px"></div>
    <div style="display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:#ffb199;background:rgba(255,122,69,0.12);padding:5px 10px;border-radius:20px">✨ Ricordo del giorno</div>
    <div style="font-size:19px;font-weight:600;line-height:1.4;margin-top:14px;font-style:italic;position:relative;z-index:2">"Sono orgogliosa di te, ricordalo sempre."</div>
    <div style="display:flex;align-items:center;gap:10px;margin-top:18px;position:relative;z-index:2">
      <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#7aa7ff,#5fd9a4);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;color:#fff">NC</div>
      <span style="font-size:12px;color:#9a9a9e">Nonna Carla · 3 anni fa</span>
    </div>
    <div style="margin-top:16px;display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.06);border-radius:16px;padding:10px 14px;position:relative;z-index:2">
      <div style="width:34px;height:34px;border-radius:50%;background:#ff7a45;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;flex-shrink:0">▶</div>
      <div style="display:flex;align-items:center;gap:2px;flex:1;height:20px" id="waveHome">${'<span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:'+h+'px"></span>'.repeat(0)}</div>
      <span style="font-size:11px;color:#9a9a9e">0:18</span>
    </div>
  </div>

  <!-- Stat strip -->
  <div style="display:flex;gap:10px;margin-top:22px">
    <div style="flex:1;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;text-align:center">
      <div style="font-size:19px;font-weight:800;color:#f5f4f2">47</div>
      <div style="font-size:10.5px;color:#9a9a9e;margin-top:2px">Ricordi salvati</div>
    </div>
    <div style="flex:1;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;text-align:center">
      <div style="font-size:19px;font-weight:800;color:#f5f4f2">6</div>
      <div style="font-size:10.5px;color:#9a9a9e;margin-top:2px">Persone</div>
    </div>
    <div style="flex:1;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;text-align:center">
      <div style="font-size:19px;font-weight:800;color:#f5f4f2">2h 14m</div>
      <div style="font-size:10.5px;color:#9a9a9e;margin-top:2px">Voce custodita</div>
    </div>
  </div>

  <!-- Le tue persone -->
  <div style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9a9a9e;margin:26px 0 12px">Le tue persone</div>
  <div style="display:flex;gap:14px;overflow-x:auto;padding:2px 2px 8px">
    <div style="flex-shrink:0;width:78px;text-align:center">
      <div style="width:64px;height:64px;border-radius:50%;background:#7aa7ff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;color:#fff;margin:0 auto 8px;box-shadow:0 8px 18px rgba(0,0,0,0.35)">NC</div>
      <div style="font-size:12px;font-weight:600;color:#f5f4f2">Nonna</div>
      <div style="font-size:10px;color:#9a9a9e">4 audio</div>
    </div>
    <div style="flex-shrink:0;width:78px;text-align:center">
      <div style="width:64px;height:64px;border-radius:50%;background:#ff7a45;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;color:#fff;margin:0 auto 8px;box-shadow:0 8px 18px rgba(0,0,0,0.35)">P</div>
      <div style="font-size:12px;font-weight:600;color:#f5f4f2">Papà</div>
      <div style="font-size:10px;color:#9a9a9e">14 audio</div>
    </div>
    <div style="flex-shrink:0;width:78px;text-align:center">
      <div style="width:64px;height:64px;border-radius:50%;background:#ff6b8b;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;color:#fff;margin:0 auto 8px;box-shadow:0 8px 18px rgba(0,0,0,0.35)">M</div>
      <div style="font-size:12px;font-weight:600;color:#f5f4f2">Mamma</div>
      <div style="font-size:10px;color:#9a9a9e">11 audio</div>
    </div>
    <div style="flex-shrink:0;width:78px;text-align:center">
      <div style="width:64px;height:64px;border-radius:50%;background:#5fd9a4;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;color:#fff;margin:0 auto 8px;box-shadow:0 8px 18px rgba(0,0,0,0.35)">NA</div>
      <div style="font-size:12px;font-weight:600;color:#f5f4f2">Nonno</div>
      <div style="font-size:10px;color:#9a9a9e">2 audio</div>
    </div>
  </div>

  <!-- Aggiunti di recente -->
  <div style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9a9a9e;margin:20px 0 12px">Aggiunti di recente</div>
  <div style="display:flex;align-items:center;gap:14px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;margin-bottom:10px">
    <div style="width:44px;height:44px;border-radius:50%;background:#5fd9a4;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#fff;flex-shrink:0">NA</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:14px;font-weight:600;color:#f5f4f2">Nonno Aldo</div>
      <div style="font-size:12px;color:#9a9a9e;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Occhi aperti e cuore leggero..."</div>
    </div>
    <div style="width:9px;height:9px;border-radius:50%;background:#ff6b8b;flex-shrink:0"></div>
  </div>
  <div style="display:flex;align-items:center;gap:14px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;margin-bottom:10px">
    <div style="width:44px;height:44px;border-radius:50%;background:#ff7a45;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#fff;flex-shrink:0">P</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:14px;font-weight:600;color:#f5f4f2">Papà</div>
      <div style="font-size:12px;color:#9a9a9e;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Ricordo ancora il giorno del tuo primo passo..."</div>
    </div>
    <div style="width:9px;height:9px;border-radius:50%;background:#7aa7ff;flex-shrink:0"></div>
  </div>
  <div style="display:flex;align-items:center;gap:14px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px">
    <div style="width:44px;height:44px;border-radius:50%;background:#ff6b8b;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#fff;flex-shrink:0">M</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:14px;font-weight:600;color:#f5f4f2">Mamma</div>
      <div style="font-size:12px;color:#9a9a9e;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Sono felicissima di come sei diventato..."</div>
    </div>
    <div style="width:9px;height:9px;border-radius:50%;background:#ffb84d;flex-shrink:0"></div>
  </div>
</div>`,

    // ——————————————————————————
    // PERSONE
    // ——————————————————————————
    '👥 Persone': `
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 22px 100px;color:#f5f4f2">
  <!-- Nav header -->
  <div style="display:flex;justify-content:space-between;align-items:center;padding-top:8px">
    <div>
      <h1 style="font-size:32px;font-weight:800;letter-spacing:-0.6px;margin:0;color:#f5f4f2">Persone</h1>
      <div style="font-size:12.5px;color:#9a9a9e;margin-top:2px;font-weight:500">6 persone custodite</div>
    </div>
    <div style="width:34px;height:34px;border-radius:50%;background:#141416;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#ffb199;flex-shrink:0;cursor:pointer">+</div>
  </div>

  <!-- Filter tabs -->
  <div style="display:flex;gap:8px;margin-top:18px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:5px">
    <div style="flex:1;text-align:center;padding:9px 0;font-size:13px;font-weight:600;background:#ff7a45;color:#1a0f08;border-radius:12px">Tutti</div>
    <div style="flex:1;text-align:center;padding:9px 0;font-size:13px;font-weight:600;color:#9a9a9e;border-radius:12px">⭐ Preferiti</div>
  </div>

  <!-- Person card 1 -->
  <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-top:18px;position:relative">
    <div style="position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:14px;color:#ffcc4d;background:rgba(255,204,77,0.14)">★</div>
    <div style="display:flex;gap:12px;align-items:flex-start;padding-right:34px">
      <div style="position:relative;flex-shrink:0">
        <div style="width:56px;height:56px;border-radius:50%;background:#7aa7ff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;color:#fff;box-shadow:0 6px 14px rgba(0,0,0,0.3)">NC</div>
        <div style="position:absolute;bottom:-3px;right:-3px;width:22px;height:22px;border-radius:50%;background:#1c1c1f;border:2px solid #141416;display:flex;align-items:center;justify-content:center;font-size:10px;color:#f5f4f2;cursor:pointer">✏️</div>
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15.5px;font-weight:700;color:#f5f4f2">Nonna Carla</div>
        <div style="font-size:11.5px;color:#ffb199;font-weight:600;margin-top:1px">Nonna</div>
        <div style="font-size:12px;color:#9a9a9e;line-height:1.4;margin-top:8px">Racconta sempre storie della sua gioventù in campagna, con quella voce calda che mette il cuore in pace.</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
      <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800;color:#f5f4f2">4</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Ricordi</div></div>
      <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
      <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800;color:#f5f4f2">22 min</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Durata tot.</div></div>
      <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
      <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800;color:#f5f4f2">⭐</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Preferito</div></div>
    </div>
  </div>

  <!-- Person card 2 -->
  <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-top:14px;position:relative">
    <div style="position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:14px;color:#9a9a9e">★</div>
    <div style="display:flex;gap:12px;align-items:flex-start;padding-right:34px">
      <div style="position:relative;flex-shrink:0">
        <div style="width:56px;height:56px;border-radius:50%;background:#ff7a45;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;color:#fff;box-shadow:0 6px 14px rgba(0,0,0,0.3)">P</div>
        <div style="position:absolute;bottom:-3px;right:-3px;width:22px;height:22px;border-radius:50%;background:#1c1c1f;border:2px solid #141416;display:flex;align-items:center;justify-content:center;font-size:10px;color:#f5f4f2;cursor:pointer">✏️</div>
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15.5px;font-weight:700;color:#f5f4f2">Papà</div>
        <div style="font-size:11.5px;color:#ffb199;font-weight:600;margin-top:1px">Padre</div>
        <div style="font-size:12px;color:#9a9a9e;line-height:1.4;margin-top:8px">La sua risata contagiosa e i consigli sul lavoro sono i ricordi più preziosi.</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
      <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800;color:#f5f4f2">14</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Ricordi</div></div>
      <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
      <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800;color:#f5f4f2">38 min</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Durata tot.</div></div>
      <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
      <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800;color:#f5f4f2">—</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Preferito</div></div>
    </div>
  </div>

  <!-- Person card 3 -->
  <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-top:14px;position:relative">
    <div style="position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;background:rgba(255,204,77,0.14);display:flex;align-items:center;justify-content:center;font-size:14px;color:#ffcc4d">★</div>
    <div style="display:flex;gap:12px;align-items:flex-start;padding-right:34px">
      <div style="position:relative;flex-shrink:0">
        <div style="width:56px;height:56px;border-radius:50%;background:#ff6b8b;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;color:#fff;box-shadow:0 6px 14px rgba(0,0,0,0.3)">M</div>
        <div style="position:absolute;bottom:-3px;right:-3px;width:22px;height:22px;border-radius:50%;background:#1c1c1f;border:2px solid #141416;display:flex;align-items:center;justify-content:center;font-size:10px;color:#f5f4f2;cursor:pointer">✏️</div>
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15.5px;font-weight:700;color:#f5f4f2">Mamma</div>
        <div style="font-size:11.5px;color:#ffb199;font-weight:600;margin-top:1px">Madre</div>
        <div style="font-size:12px;color:#9a9a9e;line-height:1.4;margin-top:8px">Le sue ricette della domenica raccontate a voce, con tutti i segreti che solo lei conosce.</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
      <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800;color:#f5f4f2">11</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Ricordi</div></div>
      <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
      <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800;color:#f5f4f2">29 min</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Durata tot.</div></div>
      <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
      <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800;color:#f5f4f2">⭐</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Preferito</div></div>
    </div>
  </div>
</div>`,

    // ——————————————————————————
    // DETTAGLIO PERSONA
    // ——————————————————————————
    '👤 Dettaglio': `
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 22px 100px;color:#f5f4f2">
  <!-- Top actions -->
  <div style="display:flex;justify-content:space-between;align-items:center;padding-top:6px">
    <div style="width:36px;height:36px;border-radius:50%;background:#141416;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:15px;color:#f5f4f2;flex-shrink:0">←</div>
    <div style="background:rgba(255,255,255,0.08);color:#f5f4f2;font-size:12.5px;font-weight:700;padding:9px 16px;border-radius:20px;display:flex;align-items:center;gap:6px">⭐ Preferito</div>
  </div>

  <!-- Cover -->
  <div style="width:100%;height:120px;border-radius:20px;margin-top:14px;background:linear-gradient(160deg,#2a2a2f,#17171a);position:relative;overflow:hidden">
    <div style="position:absolute;inset:0;background:radial-gradient(circle at 30% 20%,rgba(255,122,69,0.25),transparent 60%)"></div>
  </div>

  <!-- Avatar ring -->
  <div style="display:flex;flex-direction:column;align-items:center;margin-top:-42px;position:relative;z-index:5">
    <div style="width:96px;height:96px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:conic-gradient(from 0deg,#ffb84d,#ff6b8b,#7aa7ff,#5fd9a4,#ffb84d);padding:3px;position:relative">
      <div style="width:100%;height:100%;border-radius:50%;background:#7aa7ff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:26px;color:#fff;border:3px solid #0b0b0d">NC</div>
      <div style="position:absolute;bottom:-2px;right:-2px;width:28px;height:28px;border-radius:50%;background:#1c1c1f;border:2px solid #0b0b0d;display:flex;align-items:center;justify-content:center;font-size:12px;color:#f5f4f2;cursor:pointer">✏️</div>
    </div>
    <div style="font-size:19px;font-weight:800;margin-top:10px;color:#f5f4f2">Nonna Carla</div>
    <div style="font-size:12.5px;color:#9a9a9e;text-align:center;margin-top:4px;max-width:280px;line-height:1.4">Racconta sempre storie della sua gioventù in campagna.</div>
    <div style="font-size:11px;color:#9a9a9e;margin-top:6px;display:flex;gap:12px">
      <span>🎂 12 mar 1948</span>
    </div>
  </div>

  <!-- Detail stats -->
  <div style="display:flex;margin-top:18px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px 4px">
    <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:800;color:#f5f4f2">4</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Ricordi</div></div>
    <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
    <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:800;color:#f5f4f2">22 min</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Durata tot.</div></div>
    <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
    <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:800;color:#f5f4f2">Nonna</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Relazione</div></div>
  </div>

  <!-- Filter chips -->
  <div style="display:flex;gap:8px;overflow-x:auto;margin-top:20px;padding-bottom:4px">
    <div style="flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:#ff7a45;color:#1a0f08;border:none;display:flex;align-items:center;gap:6px">Tutte</div>
    <div style="flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:#141416;border:1px solid rgba(255,255,255,0.08);color:#9a9a9e;display:flex;align-items:center;gap:6px"><div style="width:7px;height:7px;border-radius:50%;background:#ffcc4d"></div>Preferiti</div>
    <div style="flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:#141416;border:1px solid rgba(255,255,255,0.08);color:#9a9a9e;display:flex;align-items:center;gap:6px"><div style="width:7px;height:7px;border-radius:50%;background:#ffb84d"></div>Gioia</div>
    <div style="flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:#141416;border:1px solid rgba(255,255,255,0.08);color:#9a9a9e;display:flex;align-items:center;gap:6px"><div style="width:7px;height:7px;border-radius:50%;background:#7aa7ff"></div>Nostalgia</div>
  </div>

  <!-- Tutti i ricordi -->
  <div style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9a9a9e;margin:20px 0 12px">Tutti i ricordi</div>

  <!-- Memory card 1 -->
  <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-bottom:12px;position:relative">
    <div style="position:absolute;top:14px;right:14px;width:26px;height:26px;border-radius:50%;background:rgba(255,204,77,0.14);display:flex;align-items:center;justify-content:center;font-size:12px;color:#ffcc4d">★</div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-right:30px">
      <div style="font-size:11px;color:#9a9a9e">12 lug 2026</div>
      <div style="display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;padding:4px 9px;border-radius:20px;background:rgba(255,107,139,0.13);color:#ff6b8b"><div style="width:7px;height:7px;border-radius:50%;background:#ff6b8b"></div>Amore</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px">
      <div style="width:38px;height:38px;border-radius:50%;background:rgba(255,122,69,0.14);color:#ffb199;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">▶</div>
      <div style="flex:1;display:flex;align-items:center;gap:2px;height:26px">${Array.from({length:20},(_,i)=>`<span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:${6+Math.round(Math.random()*14)}px"></span>`).join('')}</div>
      <span style="font-size:11px;color:#9a9a9e;flex-shrink:0">0:18</span>
    </div>
    <div style="margin-top:12px;font-size:12.5px;color:#9a9a9e;line-height:1.5;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)">"Sono orgogliosa di te, ricordalo sempre. Non importa cosa succede, io sarò sempre qui con te, nel cuore."</div>
  </div>

  <!-- Memory card 2 -->
  <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-bottom:12px;position:relative">
    <div style="position:absolute;top:14px;right:14px;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:12px;color:#9a9a9e">★</div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-right:30px">
      <div style="font-size:11px;color:#9a9a9e">3 giu 2026</div>
      <div style="display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;padding:4px 9px;border-radius:20px;background:rgba(122,167,255,0.13);color:#7aa7ff"><div style="width:7px;height:7px;border-radius:50%;background:#7aa7ff"></div>Nostalgia</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px">
      <div style="width:38px;height:38px;border-radius:50%;background:rgba(255,122,69,0.14);color:#ffb199;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">▶</div>
      <div style="flex:1;display:flex;align-items:center;gap:2px;height:26px">${Array.from({length:20},(_,i)=>`<span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:${6+Math.round(Math.random()*14)}px"></span>`).join('')}</div>
      <span style="font-size:11px;color:#9a9a9e;flex-shrink:0">1:42</span>
    </div>
    <div style="margin-top:12px;font-size:12.5px;color:#9a9a9e;line-height:1.5;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)">"Quando avevo la tua età vivevamo in campagna, ti racconto sempre della vecchia casa con il fico..."</div>
  </div>
</div>`,

    // ——————————————————————————
    // REGISTRA
    // ——————————————————————————
    '🎤 Registra': `
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 22px 100px;color:#f5f4f2;display:flex;flex-direction:column;align-items:center;padding-top:50px">
  <h1 style="font-size:30px;font-weight:800;letter-spacing:-0.5px;margin:0;color:#f5f4f2">Registra</h1>
  <p style="font-size:14px;color:#9a9a9e;margin-top:4px;text-align:center">Premi, parla, salva un ricordo</p>

  <!-- Record circle (pulsante) -->
  <div style="width:190px;height:190px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:54px;margin:20px 0 24px;box-shadow:0 0 0 0 rgba(255,122,69,0.4);position:relative">🎙️</div>

  <!-- Timer -->
  <div style="font-size:36px;font-weight:800;letter-spacing:1px;color:#f5f4f2">00:00</div>

  <!-- Recording waves (nascoste di default) -->
  <div style="display:flex;align-items:center;justify-content:center;gap:3px;height:44px;margin-top:20px;opacity:0">
    ${Array.from({length:20},(_,i)=>`<span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim 1s ease-in-out infinite;animation-delay:${i*0.05}s"></span>`).join('')}
  </div>

  <!-- Hint text -->
  <div style="font-size:13px;color:#9a9a9e;margin-top:8px;text-align:center;max-width:270px">Tocca il microfono per iniziare a registrare.</div>

  <!-- Tips -->
  <div style="width:100%;margin-top:44px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px">
    <div style="font-size:12px;font-weight:700;color:#ffb199;margin-bottom:8px">💡 Suggerimenti</div>
    <div style="font-size:12.5px;color:#9a9a9e;margin-bottom:6px;line-height:1.4">• Chiedi di raccontare un ricordo d'infanzia</div>
    <div style="font-size:12.5px;color:#9a9a9e;margin-bottom:6px;line-height:1.4">• Fai cantare una canzone che amava cantare</div>
    <div style="font-size:12.5px;color:#9a9a9e;line-height:1.4">• Registra un semplice "ti amo" o "sono fiero di te"</div>
  </div>
</div>`,
  }
};
