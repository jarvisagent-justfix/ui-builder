// ============================================
// ECO — Identico al mockup originale
// Tema scuro, tutte le schermate, tab bar uguale
// ============================================
window.__appConfig = {
  name: 'ECO',
  description: 'Preserva le voci di chi ami. Ogni giorno.',
  icon: '🌿',
  pages: {

    // ===== HOME =====
    '🏠 Home': `
<style>
@keyframes pulseBig{0%{box-shadow:0 0 0 0 rgba(255,122,69,0.35)}70%{box-shadow:0 0 0 30px rgba(255,122,69,0)}100%{box-shadow:0 0 0 0 rgba(255,122,69,0)}}
@keyframes waveAnim{0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)}}
</style>
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 0 110px;color:#f5f4f2">
  <div style="height:48px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 28px 6px;font-size:14px;font-weight:600"><span>9:41</span><span>🔋 100%</span></div>
  <div style="padding:0 22px">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;padding-top:6px">
      <div><div style="font-size:13px;color:#9a9a9e">Buongiorno, <b style="color:#f5f4f2">Antonino</b></div><h1 style="font-size:30px;font-weight:800;letter-spacing:-0.5px;margin:2px 0 0;color:#f5f4f2">ECO</h1></div>
      <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#ff7a45,#ffb199);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">AP</div>
    </div>
    <!-- Echo card -->
    <div style="margin-top:22px;border-radius:28px;padding:26px 22px;background:linear-gradient(155deg,#241a15,#171012 60%);border:1px solid rgba(255,255,255,0.08);position:relative;overflow:hidden">
      <div style="position:absolute;width:220px;height:220px;background:radial-gradient(circle,rgba(255,122,69,0.14),transparent 70%);top:-80px;right:-80px"></div>
      <div style="display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:#ffb199;background:rgba(255,122,69,0.12);padding:5px 10px;border-radius:20px">✨ Ricordo del giorno</div>
      <div style="font-size:19px;font-weight:600;line-height:1.4;margin-top:14px;font-style:italic;position:relative;z-index:2">"Sono orgogliosa di te, ricordalo sempre."</div>
      <div style="display:flex;align-items:center;gap:10px;margin-top:18px;position:relative;z-index:2">
        <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#7aa7ff,#5fd9a4);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px">NC</div>
        <span style="font-size:12px;color:#9a9a9e">Nonna Carla · 3 anni fa</span>
      </div>
      <div style="margin-top:16px;display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.06);border-radius:16px;padding:10px 14px;position:relative;z-index:2">
        <div style="width:34px;height:34px;border-radius:50%;background:#ff7a45;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">▶</div>
        <div style="display:flex;align-items:center;gap:2px;flex:1;height:20px">
          <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:8px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:14px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:10px"></span>
          <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:18px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:12px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:6px"></span>
          <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:16px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:10px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:14px"></span>
          <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:8px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:16px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:12px"></span>
          <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:6px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:14px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:18px"></span>
          <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:10px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:8px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.35);height:14px"></span>
        </div>
        <span style="font-size:11px;color:#9a9a9e">0:18</span>
      </div>
    </div>
    <!-- Stat strip -->
    <div style="display:flex;gap:10px;margin-top:22px">
      <div style="flex:1;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;text-align:center"><div style="font-size:19px;font-weight:800">47</div><div style="font-size:10.5px;color:#9a9a9e;margin-top:2px">Ricordi salvati</div></div>
      <div style="flex:1;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;text-align:center"><div style="font-size:19px;font-weight:800">6</div><div style="font-size:10.5px;color:#9a9a9e;margin-top:2px">Persone</div></div>
      <div style="flex:1;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;text-align:center"><div style="font-size:19px;font-weight:800">2h 14m</div><div style="font-size:10.5px;color:#9a9a9e;margin-top:2px">Voce custodita</div></div>
    </div>
    <!-- Section persone -->
    <div style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9a9a9e;margin:26px 0 12px">Le tue persone</div>
    <div style="display:flex;gap:14px;overflow-x:auto;padding:2px 2px 8px">
      <div style="flex-shrink:0;width:78px;text-align:center"><div style="width:64px;height:64px;border-radius:50%;background:#7aa7ff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;box-shadow:0 8px 18px rgba(0,0,0,0.35);margin:0 auto 8px">NC</div><div style="font-size:12px;font-weight:600">Nonna</div><div style="font-size:10px;color:#9a9a9e">4 audio</div></div>
      <div style="flex-shrink:0;width:78px;text-align:center"><div style="width:64px;height:64px;border-radius:50%;background:#ff7a45;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;box-shadow:0 8px 18px rgba(0,0,0,0.35);margin:0 auto 8px">P</div><div style="font-size:12px;font-weight:600">Papà</div><div style="font-size:10px;color:#9a9a9e">14 audio</div></div>
      <div style="flex-shrink:0;width:78px;text-align:center"><div style="width:64px;height:64px;border-radius:50%;background:#ff6b8b;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;box-shadow:0 8px 18px rgba(0,0,0,0.35);margin:0 auto 8px">M</div><div style="font-size:12px;font-weight:600">Mamma</div><div style="font-size:10px;color:#9a9a9e">11 audio</div></div>
      <div style="flex-shrink:0;width:78px;text-align:center"><div style="width:64px;height:64px;border-radius:50%;background:#5fd9a4;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;box-shadow:0 8px 18px rgba(0,0,0,0.35);margin:0 auto 8px">NA</div><div style="font-size:12px;font-weight:600">Nonno</div><div style="font-size:10px;color:#9a9a9e">2 audio</div></div>
    </div>
    <!-- Section recenti -->
    <div style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9a9a9e;margin:20px 0 12px">Aggiunti di recente</div>
    <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;margin-bottom:10px">
      <div style="width:44px;height:44px;border-radius:50%;background:#5fd9a4;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;flex-shrink:0">NA</div>
      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">Nonno Aldo</div><div style="font-size:12px;color:#9a9a9e;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Occhi aperti e cuore leggero..."</div></div>
      <div style="width:9px;height:9px;border-radius:50%;background:#ff6b8b;flex-shrink:0"></div>
    </div>
    <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;margin-bottom:10px">
      <div style="width:44px;height:44px;border-radius:50%;background:#ff7a45;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;flex-shrink:0">P</div>
      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">Papà</div><div style="font-size:12px;color:#9a9a9e;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Ricordo ancora il giorno del tuo primo passo..."</div></div>
      <div style="width:9px;height:9px;border-radius:50%;background:#7aa7ff;flex-shrink:0"></div>
    </div>
    <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px">
      <div style="width:44px;height:44px;border-radius:50%;background:#ff6b8b;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;flex-shrink:0">M</div>
      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600">Mamma</div><div style="font-size:12px;color:#9a9a9e;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"Sono felicissima di come sei diventato..."</div></div>
      <div style="width:9px;height:9px;border-radius:50%;background:#ffb84d;flex-shrink:0"></div>
    </div>
  </div>
  <!-- Tab bar identica al mockup -->
  <div style="position:fixed;bottom:0;left:0;right:0;height:96px;background:rgba(20,20,22,0.85);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:flex-start;padding-top:10px;z-index:60;max-width:420px;margin:0 auto">
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#ffb199;padding-top:2px"><div style="font-size:19px">🏠</div>Home</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px"><div style="font-size:19px">👥</div>Persone</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;font-weight:700;color:#ffb199;position:relative;margin-top:-28px">
      <div style="width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 8px 20px rgba(255,122,69,0.5),0 0 0 5px rgba(255,122,69,0.16),0 0 0 1px #0b0b0d;border:3px solid #0b0b0d">🎙️</div>
      Registra
    </div>
  </div>
</div>`,

    // ===== PERSONE =====
    '👥 Persone': `
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 0 110px;color:#f5f4f2">
  <div style="height:48px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 28px 6px;font-size:14px;font-weight:600"><span>9:41</span><span>🔋 100%</span></div>
  <div style="padding:0 22px">
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:8px">
      <div><h1 style="font-size:32px;font-weight:800;letter-spacing:-0.6px;margin:0">Persone</h1><div style="font-size:12.5px;color:#9a9a9e;margin-top:2px;font-weight:500">6 persone custodite</div></div>
      <div style="width:34px;height:34px;border-radius:50%;background:#141416;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#ffb199;flex-shrink:0">+</div>
    </div>
    <!-- Filter tabs -->
    <div style="display:flex;gap:8px;margin-top:18px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:5px">
      <div style="flex:1;text-align:center;padding:9px 0;font-size:13px;font-weight:600;background:#ff7a45;color:#1a0f08;border-radius:12px">Tutti</div>
      <div style="flex:1;text-align:center;padding:9px 0;font-size:13px;font-weight:600;color:#9a9a9e;border-radius:12px">⭐ Preferiti</div>
    </div>
    <!-- Person card 1 -->
    <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-top:18px;position:relative">
      <div style="position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;background:rgba(255,204,77,0.14);display:flex;align-items:center;justify-content:center;font-size:14px;color:#ffcc4d">★</div>
      <div style="display:flex;gap:12px;align-items:flex-start;padding-right:34px">
        <div style="position:relative;flex-shrink:0">
          <div style="width:56px;height:56px;border-radius:50%;background:#7aa7ff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;box-shadow:0 6px 14px rgba(0,0,0,0.3)">NC</div>
          <div style="position:absolute;bottom:-3px;right:-3px;width:22px;height:22px;border-radius:50%;background:#1c1c1f;border:2px solid #141416;display:flex;align-items:center;justify-content:center;font-size:10px;cursor:pointer">✏️</div>
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:15.5px;font-weight:700">Nonna Carla</div>
          <div style="font-size:11.5px;color:#ffb199;font-weight:600;margin-top:1px">Nonna</div>
          <div style="font-size:12px;color:#9a9a9e;line-height:1.4;margin-top:8px">Racconta sempre storie della sua gioventù in campagna, con quella voce calda che mette il cuore in pace.</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
        <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800">4</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Ricordi</div></div>
        <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
        <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800">22 min</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Durata tot.</div></div>
        <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
        <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800">⭐</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Preferito</div></div>
      </div>
    </div>
    <!-- Person card 2 -->
    <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-top:14px;position:relative">
      <div style="position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:14px;color:#9a9a9e">★</div>
      <div style="display:flex;gap:12px;align-items:flex-start;padding-right:34px">
        <div style="position:relative;flex-shrink:0">
          <div style="width:56px;height:56px;border-radius:50%;background:#ff7a45;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;box-shadow:0 6px 14px rgba(0,0,0,0.3)">P</div>
          <div style="position:absolute;bottom:-3px;right:-3px;width:22px;height:22px;border-radius:50%;background:#1c1c1f;border:2px solid #141416;display:flex;align-items:center;justify-content:center;font-size:10px;cursor:pointer">✏️</div>
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:15.5px;font-weight:700">Papà</div>
          <div style="font-size:11.5px;color:#ffb199;font-weight:600;margin-top:1px">Padre</div>
          <div style="font-size:12px;color:#9a9a9e;line-height:1.4;margin-top:8px">La sua risata contagiosa e i consigli sul lavoro sono i ricordi più preziosi che custodisco.</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
        <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800">14</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Ricordi</div></div>
        <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
        <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800">38 min</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Durata tot.</div></div>
        <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
        <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800">—</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Preferito</div></div>
      </div>
    </div>
    <!-- Person card 3 -->
    <div style="background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-top:14px;position:relative">
      <div style="position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;background:rgba(255,204,77,0.14);display:flex;align-items:center;justify-content:center;font-size:14px;color:#ffcc4d">★</div>
      <div style="display:flex;gap:12px;align-items:flex-start;padding-right:34px">
        <div style="position:relative;flex-shrink:0">
          <div style="width:56px;height:56px;border-radius:50%;background:#ff6b8b;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;box-shadow:0 6px 14px rgba(0,0,0,0.3)">M</div>
          <div style="position:absolute;bottom:-3px;right:-3px;width:22px;height:22px;border-radius:50%;background:#1c1c1f;border:2px solid #141416;display:flex;align-items:center;justify-content:center;font-size:10px;cursor:pointer">✏️</div>
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:15.5px;font-weight:700">Mamma</div>
          <div style="font-size:11.5px;color:#ffb199;font-weight:600;margin-top:1px">Madre</div>
          <div style="font-size:12px;color:#9a9a9e;line-height:1.4;margin-top:8px">Le sue ricette della domenica raccontate a voce, con tutti i piccoli segreti che solo lei conosce.</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
        <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800">11</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Ricordi</div></div>
        <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
        <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800">29 min</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Durata tot.</div></div>
        <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
        <div style="flex:1;text-align:center"><div style="font-size:14px;font-weight:800">⭐</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Preferito</div></div>
      </div>
    </div>
  </div>
  <!-- Tab bar -->
  <div style="position:fixed;bottom:0;left:0;right:0;height:96px;background:rgba(20,20,22,0.85);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:flex-start;padding-top:10px;z-index:60;max-width:420px;margin:0 auto">
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px"><div style="font-size:19px">🏠</div>Home</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#ffb199;padding-top:2px"><div style="font-size:19px">👥</div>Persone</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;font-weight:700;color:#9a9a9e;position:relative;margin-top:-28px"><div style="width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 8px 20px rgba(255,122,69,0.5),0 0 0 5px rgba(255,122,69,0.16),0 0 0 1px #0b0b0d;border:3px solid #0b0b0d">🎙️</div>Registra</div>
  </div>
</div>`,

    // ===== DETTAGLIO PERSONA =====
    '👤 Dettaglio': `
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 22px 110px;color:#f5f4f2">
  <div style="height:48px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 28px 6px;font-size:14px;font-weight:600"><span>9:41</span><span>🔋 100%</span></div>
  <div style="display:flex;justify-content:space-between;align-items:center;padding-top:6px">
    <div style="width:36px;height:36px;border-radius:50%;background:#141416;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0">←</div>
    <div style="background:rgba(255,255,255,0.08);font-size:12.5px;font-weight:700;padding:9px 16px;border-radius:20px;display:flex;align-items:center;gap:6px">⭐ Preferito</div>
  </div>
  <!-- Cover -->
  <div style="width:100%;height:120px;border-radius:20px;margin-top:14px;background:linear-gradient(160deg,#2a2a2f,#17171a);position:relative;overflow:hidden">
    <div style="position:absolute;inset:0;background:radial-gradient(circle at 30% 20%,rgba(255,122,69,0.25),transparent 60%)"></div>
  </div>
  <!-- Avatar ring -->
  <div style="display:flex;flex-direction:column;align-items:center;margin-top:-42px;position:relative;z-index:5">
    <div style="width:96px;height:96px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:conic-gradient(from 0deg,#ffb84d,#ff6b8b,#7aa7ff,#5fd9a4,#ffb84d);padding:3px;position:relative">
      <div style="width:100%;height:100%;border-radius:50%;background:#7aa7ff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:26px;border:3px solid #0b0b0d">NC</div>
      <div style="position:absolute;bottom:-2px;right:-2px;width:28px;height:28px;border-radius:50%;background:#1c1c1f;border:2px solid #0b0b0d;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer">✏️</div>
    </div>
    <div style="font-size:19px;font-weight:800;margin-top:10px">Nonna Carla</div>
    <div style="font-size:12.5px;color:#9a9a9e;text-align:center;margin-top:4px;max-width:280px;line-height:1.4">Racconta sempre storie della sua gioventù in campagna.</div>
    <div style="font-size:11px;color:#9a9a9e;margin-top:6px;display:flex;gap:12px"><span>🎂 12 mar 1948</span></div>
  </div>
  <!-- Stats -->
  <div style="display:flex;margin-top:18px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px 4px">
    <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:800">4</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Ricordi</div></div>
    <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
    <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:800">22 min</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Durata tot.</div></div>
    <div style="width:1px;background:rgba(255,255,255,0.08);margin:2px 0"></div>
    <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:800">Nonna</div><div style="font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase;letter-spacing:.3px">Relazione</div></div>
  </div>
  <!-- Filter chips -->
  <div style="display:flex;gap:8px;overflow-x:auto;margin-top:20px;padding-bottom:4px">
    <div style="flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:#ff7a45;color:#1a0f08;display:flex;align-items:center;gap:6px">Tutte</div>
    <div style="flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:#141416;border:1px solid rgba(255,255,255,0.08);color:#9a9a9e;display:flex;align-items:center;gap:6px"><div style="width:7px;height:7px;border-radius:50%;background:#ffcc4d"></div>Preferiti</div>
    <div style="flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:#141416;border:1px solid rgba(255,255,255,0.08);color:#9a9a9e;display:flex;align-items:center;gap:6px"><div style="width:7px;height:7px;border-radius:50%;background:#ffb84d"></div>Gioia</div>
    <div style="flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:#141416;border:1px solid rgba(255,255,255,0.08);color:#9a9a9e;display:flex;align-items:center;gap:6px"><div style="width:7px;height:7px;border-radius:50%;background:#7aa7ff"></div>Nostalgia</div>
  </div>
  <!-- Memories section -->
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
      <div style="flex:1;display:flex;align-items:center;gap:2px;height:26px"><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:10px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:16px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:8px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:20px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:12px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:18px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:6px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:14px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:10px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:16px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:12px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:8px"></span></div>
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
      <div style="flex:1;display:flex;align-items:center;gap:2px;height:26px"><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:12px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:18px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:8px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:16px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:10px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:20px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:14px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:6px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:12px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:16px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:10px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:14px"></span></div>
      <span style="font-size:11px;color:#9a9a9e;flex-shrink:0">1:42</span>
    </div>
    <div style="margin-top:12px;font-size:12.5px;color:#9a9a9e;line-height:1.5;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)">"Quando avevo la tua età vivevamo in campagna, ti racconto sempre della vecchia casa con il fico..."</div>
  </div>
  <!-- Tab bar -->
  <div style="position:fixed;bottom:0;left:0;right:0;height:96px;background:rgba(20,20,22,0.85);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:flex-start;padding-top:10px;z-index:60;max-width:420px;margin:0 auto">
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px"><div style="font-size:19px">🏠</div>Home</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px"><div style="font-size:19px">👥</div>Persone</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;font-weight:700;color:#9a9a9e;position:relative;margin-top:-28px"><div style="width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 8px 20px rgba(255,122,69,0.5),0 0 0 5px rgba(255,122,69,0.16),0 0 0 1px #0b0b0d;border:3px solid #0b0b0d">🎙️</div>Registra</div>
  </div>
</div>`,

    // ===== REGISTRA =====
    '🎤 Registra': `
<style>
@keyframes pulseBig2{0%{box-shadow:0 0 0 0 rgba(255,122,69,0.35)}70%{box-shadow:0 0 0 30px rgba(255,122,69,0)}100%{box-shadow:0 0 0 0 rgba(255,122,69,0)}}
@keyframes waveAnim2{0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)}}
</style>
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 0 110px;color:#f5f4f2;display:flex;flex-direction:column;align-items:center">
  <div style="height:48px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 28px 6px;font-size:14px;font-weight:600;width:100%"><span>9:41</span><span>🔋 100%</span></div>
  <div style="padding:0 22px;width:100%;display:flex;flex-direction:column;align-items:center;padding-top:50px">
    <h1 style="font-size:30px;font-weight:800;letter-spacing:-0.5px;margin:0">Registra</h1>
    <p style="font-size:14px;color:#9a9a9e;margin-top:4px;text-align:center">Premi, parla, salva un ricordo</p>
    <!-- Record circle with pulse animation -->
    <div style="width:190px;height:190px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:54px;margin:20px 0 24px;animation:pulseBig2 2.2s infinite;position:relative">🎙️</div>
    <!-- Timer -->
    <div style="font-size:36px;font-weight:800;letter-spacing:1px">00:00</div>
    <!-- Recording waves hidden -->
    <div style="display:flex;align-items:center;justify-content:center;gap:3px;height:44px;margin-top:20px;opacity:0">
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0s"></span>
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0.05s"></span>
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0.1s"></span>
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0.15s"></span>
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0.2s"></span>
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0.25s"></span>
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0.3s"></span>
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0.35s"></span>
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0.4s"></span>
      <span style="width:4px;border-radius:3px;background:#ffb199;animation:waveAnim2 1s ease-in-out infinite;animation-delay:0.45s"></span>
    </div>
    <!-- Hint -->
    <div style="font-size:13px;color:#9a9a9e;margin-top:8px;text-align:center;max-width:270px">Tocca il microfono per iniziare a registrare.</div>
    <!-- Tips -->
    <div style="width:100%;margin-top:44px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px">
      <div style="font-size:12px;font-weight:700;color:#ffb199;margin-bottom:8px">💡 Suggerimenti</div>
      <div style="font-size:12.5px;color:#9a9a9e;margin-bottom:6px;line-height:1.4">• Chiedi di raccontare un ricordo d'infanzia</div>
      <div style="font-size:12.5px;color:#9a9a9e;margin-bottom:6px;line-height:1.4">• Fai cantare una canzone che amava cantare</div>
      <div style="font-size:12.5px;color:#9a9a9e;line-height:1.4">• Registra un semplice "ti amo" o "sono fiero di te"</div>
    </div>
  </div>
  <!-- Tab bar -->
  <div style="position:fixed;bottom:0;left:0;right:0;height:96px;background:rgba(20,20,22,0.85);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:flex-start;padding-top:10px;z-index:60;max-width:420px;margin:0 auto">
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px"><div style="font-size:19px">🏠</div>Home</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px"><div style="font-size:19px">👥</div>Persone</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;font-weight:700;color:#ffb199;position:relative;margin-top:-28px"><div style="width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 8px 20px rgba(255,122,69,0.5),0 0 0 5px rgba(255,122,69,0.16),0 0 0 1px #0b0b0d;border:3px solid #0b0b0d">🎙️</div>Registra</div>
  </div>
</div>`,

    // ===== NUOVA PERSONA =====
    '➕ Nuova Persona': `
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 0 110px;color:#f5f4f2;display:flex;flex-direction:column">
  <div style="height:48px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 28px 6px;font-size:14px;font-weight:600"><span>9:41</span><span>🔋 100%</span></div>
  <div style="padding:0 22px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
      <div><h1 style="font-size:18px;font-weight:800;margin:0" id="formTitle">Nuova persona</h1></div>
      <div style="width:30px;height:30px;border-radius:50%;background:#1c1c1f;display:flex;align-items:center;justify-content:center;font-size:14px;color:#9a9a9e;flex-shrink:0">✕</div>
    </div>
    <!-- Photo picker -->
    <div style="display:flex;flex-direction:column;align-items:center;margin-bottom:20px">
      <div style="width:88px;height:88px;border-radius:50%;background:#1c1c1f;border:2px dashed rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:26px;color:#9a9a9e;overflow:hidden">📷</div>
      <div style="font-size:11.5px;color:#9a9a9e;margin-top:8px">Tocca per aggiungere una foto</div>
    </div>
    <!-- Fields -->
    <div style="display:flex;gap:10px">
      <div style="flex:1;margin-bottom:14px">
        <label style="font-size:11.5px;color:#9a9a9e;display:block;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px">Nome</label>
        <input type="text" placeholder="Carla" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:#1c1c1f;color:#f5f4f2;font-size:14px;outline:none;font-family:inherit;box-sizing:border-box">
      </div>
      <div style="flex:1;margin-bottom:14px">
        <label style="font-size:11.5px;color:#9a9a9e;display:block;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px">Cognome</label>
        <input type="text" placeholder="Rossi" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:#1c1c1f;color:#f5f4f2;font-size:14px;outline:none;font-family:inherit;box-sizing:border-box">
      </div>
    </div>
    <div style="margin-bottom:14px">
      <label style="font-size:11.5px;color:#9a9a9e;display:block;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px">Relazione</label>
      <select style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:#1c1c1f;color:#f5f4f2;font-size:14px;outline:none;font-family:inherit;box-sizing:border-box">
        <option>Nonna</option><option>Nonno</option><option>Madre</option><option>Padre</option><option>Fratello</option><option>Sorella</option><option>Zia</option><option>Zio</option>
        <option>Amico/a</option><option>Altro</option>
      </select>
    </div>
    <div style="display:flex;gap:10px">
      <div style="flex:1;margin-bottom:14px">
        <label style="font-size:11.5px;color:#9a9a9e;display:block;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px">Data di nascita</label>
        <input type="date" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:#1c1c1f;color:#f5f4f2;font-size:14px;outline:none;font-family:inherit;box-sizing:border-box">
      </div>
      <div style="flex:1;margin-bottom:14px">
        <label style="font-size:11.5px;color:#9a9a9e;display:block;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px">Per sempre nel cuore dal</label>
        <input type="date" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:#1c1c1f;color:#f5f4f2;font-size:14px;outline:none;font-family:inherit;box-sizing:border-box">
        <div style="font-size:10.5px;color:#9a9a9e;margin-top:4px">Lascia vuoto se la persona è ancora con te</div>
      </div>
    </div>
    <div style="margin-bottom:14px">
      <label style="font-size:11.5px;color:#9a9a9e;display:block;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px">Descrizione</label>
      <textarea placeholder="Racconta qualcosa di lei o di lui..." rows="3" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:#1c1c1f;color:#f5f4f2;font-size:14px;outline:none;font-family:inherit;box-sizing:border-box;resize:none"></textarea>
    </div>
    <!-- Buttons -->
    <div style="display:flex;gap:10px;margin-top:8px">
      <button style="flex:1;padding:14px;border-radius:14px;border:none;font-size:14.5px;font-weight:700;cursor:pointer;background:#1c1c1f;color:#f5f4f2;font-family:inherit">Annulla</button>
      <button style="flex:1;padding:14px;border-radius:14px;border:none;font-size:14.5px;font-weight:700;cursor:pointer;background:#ff7a45;color:#1a0f08;font-family:inherit">Salva</button>
    </div>
  </div>
</div>`,

    // ===== DETTAGLIO RICORDO =====
    '📖 Dettaglio Ricordo': `
<div style="font-family:Inter,sans-serif;background:#0b0b0d;min-height:100vh;padding:0 22px 110px;color:#f5f4f2">
  <div style="height:48px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 28px 6px;font-size:14px;font-weight:600"><span>9:41</span><span>🔋 100%</span></div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;padding-top:6px">
    <h2 style="font-size:18px;font-weight:800;margin:0">Dettaglio ricordo</h2>
    <div style="width:30px;height:30px;border-radius:50%;background:#1c1c1f;display:flex;align-items:center;justify-content:center;font-size:14px;color:#9a9a9e;flex-shrink:0">✕</div>
  </div>
  <!-- Emotion badge -->
  <div style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;padding:6px 12px;border-radius:20px;background:rgba(255,107,139,0.13);color:#ff6b8b;margin-bottom:14px">
    <div style="width:7px;height:7px;border-radius:50%;background:#ff6b8b"></div>Amore · ⭐ Preferito
  </div>
  <!-- Player -->
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
    <div style="width:38px;height:38px;border-radius:50%;background:rgba(255,122,69,0.14);color:#ffb199;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">▶</div>
    <div style="flex:1;display:flex;align-items:center;gap:2px;height:26px">
      <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:10px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:16px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:8px"></span>
      <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:20px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:12px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:18px"></span>
      <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:6px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:14px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:10px"></span>
      <span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:16px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:12px"></span><span style="width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);height:8px"></span>
    </div>
    <span style="font-size:11px;color:#9a9a9e;flex-shrink:0">0:18</span>
  </div>
  <!-- Meta -->
  <div style="display:flex;justify-content:space-between;font-size:12px;color:#9a9a9e;margin-bottom:18px">
    <span>12 lug 2026</span>
    <span>Nonna Carla</span>
  </div>
  <!-- Transcript -->
  <div style="background:#1c1c1f;border-radius:14px;padding:14px;font-size:13.5px;line-height:1.55;margin-bottom:16px">"Sono orgogliosa di te, ricordalo sempre. Non importa cosa succede, io sarò sempre qui con te, nel cuore."</div>
  <!-- Actions -->
  <div style="display:flex;flex-direction:column;gap:10px">
    <div style="display:flex;align-items:center;gap:12px;padding:14px;border-radius:14px;background:#1c1c1f;font-size:14px;font-weight:600;cursor:pointer"><span style="font-size:16px;width:20px;text-align:center">✏️</span>Modifica ricordo</div>
    <div style="display:flex;align-items:center;gap:12px;padding:14px;border-radius:14px;background:#1c1c1f;font-size:14px;font-weight:600;cursor:pointer"><span style="font-size:16px;width:20px;text-align:center">↗️</span>Sposta ad un'altra persona</div>
    <div style="display:flex;align-items:center;gap:12px;padding:14px;border-radius:14px;background:#1c1c1f;font-size:14px;font-weight:600;color:#ff5c5c;cursor:pointer"><span style="font-size:16px;width:20px;text-align:center">🗑️</span>Elimina ricordo</div>
  </div>
  <!-- Tab bar -->
  <div style="position:fixed;bottom:0;left:0;right:0;height:96px;background:rgba(20,20,22,0.85);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:flex-start;padding-top:10px;z-index:60;max-width:420px;margin:0 auto">
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px"><div style="font-size:19px">🏠</div>Home</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px"><div style="font-size:19px">👥</div>Persone</div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;font-weight:700;color:#9a9a9e;position:relative;margin-top:-28px"><div style="width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 8px 20px rgba(255,122,69,0.5),0 0 0 5px rgba(255,122,69,0.16),0 0 0 1px #0b0b0d;border:3px solid #0b0b0d">🎙️</div>Registra</div>
  </div>
</div>`,
  }
};
