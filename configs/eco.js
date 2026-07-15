// ============================================
// ECO — App completa divisa in pagine editabili
// 6 pagine nel page manager — ognuna modificabile
// ============================================
window.__appConfig = {
  name: 'ECO',
  description: 'Preserva le voci di chi ami.',
  icon: '🌿',
  pages: {

    // ===== 1. HOME =====
    '🏠 Home': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-root{font-family:'Inter',sans-serif;background:#0b0b0d;min-height:100vh;color:#f5f4f2;padding:0 0 110px}
.eco-root *{box-sizing:border-box;margin:0;padding:0}
.eco-home-top{display:flex;justify-content:space-between;align-items:center;padding:20px 22px 0}
.eco-home-date{font-size:12px;color:#9a9a9e;font-weight:600}
.eco-home-greeting{font-size:26px;font-weight:800;letter-spacing:-0.4px;margin-top:2px}
.eco-home-avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#ff7a45,#ffb199);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;box-shadow:0 6px 16px rgba(255,122,69,0.35)}
.eco-hero-card{margin:20px 22px 0;border-radius:26px;padding:22px 20px;background:linear-gradient(150deg,#26170f,#160f0c 55%,#0e0b0a);border:1px solid rgba(255,255,255,0.08)}
.eco-hero-tag{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:800;color:#ffb199;background:rgba(255,122,69,0.15);padding:5px 11px;border-radius:20px;text-transform:uppercase}
.eco-hero-quote{font-size:20px;font-weight:600;line-height:1.42;margin-top:16px;font-style:italic}
.eco-hero-from{display:flex;align-items:center;justify-content:space-between;margin-top:18px}
.eco-hero-from-left{display:flex;align-items:center;gap:9px}
.eco-hero-avatar-mini{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:10px;flex-shrink:0}
.eco-hero-from-left span{font-size:11.5px;color:#9a9a9e;font-weight:500}
.eco-hero-play-btn{width:38px;height:38px;border-radius:50%;background:#ff7a45;display:flex;align-items:center;justify-content:center;font-size:14px;color:#1a0f08;box-shadow:0 6px 16px rgba(255,122,69,0.4)}
.eco-hero-wave{display:flex;align-items:center;gap:2px;height:22px;margin-top:14px}
.eco-hero-wave span{width:2.5px;border-radius:2px;background:rgba(255,177,153,0.35)}
.eco-metric-row{display:flex;gap:10px;padding:0 22px;margin-top:18px}
.eco-metric-card{flex:1;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:14px 12px}
.eco-metric-val{font-size:19px;font-weight:800}
.eco-metric-lbl{font-size:10px;color:#9a9a9e;font-weight:600;text-transform:uppercase;margin-top:2px}
.eco-section-label{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9a9a9e;margin:26px 22px 12px}
.eco-section-label-row{display:flex;justify-content:space-between;align-items:center;margin:26px 22px 12px}
.eco-section-link{font-size:11.5px;color:#ffb199;font-weight:700}
.eco-people-scroll{display:flex;gap:12px;overflow-x:auto;padding:0 22px 6px;scrollbar-width:none}
.eco-people-card{flex-shrink:0;width:104px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px 12px;display:flex;flex-direction:column;align-items:center;gap:8px}
.eco-people-avatar{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;color:#fff}
.eco-people-name{font-size:12px;font-weight:700;text-align:center}
.eco-people-count{font-size:9.5px;color:#9a9a9e;font-weight:600}
.eco-add-card{background:#1c1c1f;border:1.5px dashed rgba(255,255,255,0.08)}
.eco-recent-row{display:flex;align-items:center;gap:12px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:13px;margin:0 22px 10px;border-left:3px solid transparent}
.eco-recent-avatar{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;color:#fff}
.eco-recent-meta{flex:1;min-width:0}
.eco-recent-name{font-size:13.5px;font-weight:700}
.eco-recent-text{font-size:11.5px;color:#9a9a9e;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.eco-recent-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.eco-tabbar{position:fixed;bottom:0;left:0;right:0;height:74px;background:rgba(20,20,22,0.85);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:flex-start;padding-top:8px;z-index:60}
.eco-tab-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px}
.eco-tab-item.active{color:#ffb199}
.eco-tab-icon{font-size:19px}
.eco-tab-record{flex:1;display:flex;align-items:center;justify-content:center;margin-top:-22px}
.eco-tab-record-circle{width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;box-shadow:0 8px 20px rgba(255,122,69,0.5),0 0 0 5px rgba(255,122,69,0.16),0 0 0 1px #0b0b0d;border:3px solid #0b0b0d}
</style>

<div class="eco-root">
  <!-- Status bar -->
  <div style="display:flex;justify-content:space-between;padding:12px 28px 0;font-size:12px;color:#9a9a9e"><span>9:41</span><span>🔋 100%</span></div>

  <!-- Header -->
  <div class="eco-home-top">
    <div>
      <div class="eco-home-date">Mercoledì, 15 luglio</div>
      <div class="eco-home-greeting">Ciao, Antonino</div>
    </div>
    <div class="eco-home-avatar">AP</div>
  </div>

  <!-- Hero card -->
  <div class="eco-hero-card">
    <div class="eco-hero-tag">✨ Ricordo del giorno</div>
    <div class="eco-hero-quote">"Sono orgogliosa di te, ricordalo sempre."</div>
    <div class="eco-hero-wave"><span style="height:8px"></span><span style="height:14px"></span><span style="height:10px"></span><span style="height:18px"></span><span style="height:12px"></span><span style="height:6px"></span><span style="height:16px"></span><span style="height:10px"></span><span style="height:14px"></span><span style="height:8px"></span><span style="height:16px"></span><span style="height:12px"></span></div>
    <div class="eco-hero-from">
      <div class="eco-hero-from-left">
        <div class="eco-hero-avatar-mini" style="background:linear-gradient(135deg,#7aa7ff,#5fd9a4)">NC</div>
        <span>Nonna Carla · 0:18 · 3 anni fa</span>
      </div>
      <div class="eco-hero-play-btn">▶</div>
    </div>
  </div>

  <!-- Metrics -->
  <div class="eco-metric-row">
    <div class="eco-metric-card"><div style="font-size:26px;margin-bottom:6px">🎙️</div><div class="eco-metric-val">47</div><div class="eco-metric-lbl">Ricordi</div></div>
    <div class="eco-metric-card"><div style="font-size:26px;margin-bottom:6px">👥</div><div class="eco-metric-val">6</div><div class="eco-metric-lbl">Persone</div></div>
    <div class="eco-metric-card"><div style="font-size:26px;margin-bottom:6px">⏱️</div><div class="eco-metric-val">2h 14m</div><div class="eco-metric-lbl">Voce custodita</div></div>
  </div>

  <!-- People section -->
  <div class="eco-section-label-row">
    <div class="eco-section-label">Le tue persone</div>
    <div class="eco-section-link">Vedi tutte</div>
  </div>
  <div class="eco-people-scroll">
    <div class="eco-people-card"><div class="eco-people-avatar" style="background:#7aa7ff">NC</div><div class="eco-people-name">Nonna</div><div class="eco-people-count">4 ricordi</div></div>
    <div class="eco-people-card"><div class="eco-people-avatar" style="background:#ff7a45">P</div><div class="eco-people-name">Papà</div><div class="eco-people-count">14 ricordi</div></div>
    <div class="eco-people-card"><div class="eco-people-avatar" style="background:#ff6b8b">M</div><div class="eco-people-name">Mamma</div><div class="eco-people-count">11 ricordi</div></div>
    <div class="eco-people-card"><div class="eco-people-avatar" style="background:#5fd9a4">NA</div><div class="eco-people-name">Nonno</div><div class="eco-people-count">2 ricordi</div></div>
    <div class="eco-people-card eco-add-card"><div class="eco-people-avatar" style="background:transparent;font-size:22px;color:#ffb199">+</div><div class="eco-people-name">Aggiungi</div></div>
  </div>

  <!-- Recent memories -->
  <div class="eco-section-label">Ricordi recenti</div>

  <div class="eco-recent-row" style="border-left-color:#ff6b8b">
    <div class="eco-recent-avatar" style="background:#5fd9a4">NA</div>
    <div class="eco-recent-meta"><div class="eco-recent-name">Nonno Aldo</div><div class="eco-recent-text">"Occhi aperti e cuore leggero..."</div></div>
    <div class="eco-recent-dot" style="background:#ff6b8b"></div>
  </div>

  <div class="eco-recent-row" style="border-left-color:#7aa7ff">
    <div class="eco-recent-avatar" style="background:#ff7a45">P</div>
    <div class="eco-recent-meta"><div class="eco-recent-name">Papà</div><div class="eco-recent-text">"Ricordo ancora il giorno del tuo primo passo..."</div></div>
    <div class="eco-recent-dot" style="background:#7aa7ff"></div>
  </div>

  <div class="eco-recent-row" style="border-left-color:#ffb84d">
    <div class="eco-recent-avatar" style="background:#ff6b8b">M</div>
    <div class="eco-recent-meta"><div class="eco-recent-name">Mamma</div><div class="eco-recent-text">"Sono felicissima di come sei diventato..."</div></div>
    <div class="eco-recent-dot" style="background:#ffb84d"></div>
  </div>

  <!-- Tab bar -->
  <div class="eco-tabbar">
    <div class="eco-tab-item active"><div class="eco-tab-icon">🏠</div>Home</div>
    <div class="eco-tab-record"><div class="eco-tab-record-circle">🎙️</div></div>
    <div class="eco-tab-item"><div class="eco-tab-icon">👥</div>Persone</div>
  </div>
</div>`,

    // ===== 2. PERSONE =====
    '👥 Persone': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-root{font-family:'Inter',sans-serif;background:#0b0b0d;min-height:100vh;color:#f5f4f2;padding:0 22px 110px}
.eco-root *{box-sizing:border-box;margin:0;padding:0}
.eco-nav-header{display:flex;justify-content:space-between;align-items:center;padding-top:20px}
.eco-nav-title{font-size:32px;font-weight:800;letter-spacing:-0.6px}
.eco-nav-caption{font-size:12.5px;color:#9a9a9e;margin-top:2px;font-weight:500}
.eco-add-btn{width:34px;height:34px;border-radius:50%;background:#141416;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#ffb199;flex-shrink:0}
.eco-filter-tabs{display:flex;gap:8px;margin-top:18px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:5px}
.eco-filter-tab{flex:1;text-align:center;padding:9px 0;font-size:13px;font-weight:600;color:#9a9a9e;border-radius:12px}
.eco-filter-tab.active{background:#ff7a45;color:#1a0f08}
.eco-person-card{background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-top:14px;position:relative}
.eco-star-btn{position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:none;z-index:5}
.eco-star-btn.fav{background:rgba(255,204,77,0.14);color:#ffcc4d}
.eco-star-btn.nofav{background:rgba(255,255,255,0.05);color:#9a9a9e}
.eco-card-top{display:flex;gap:12px;align-items:flex-start;padding-right:34px}
.eco-avatar-wrap{position:relative;flex-shrink:0}
.eco-avatar-round{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;color:#fff;box-shadow:0 6px 14px rgba(0,0,0,0.3)}
.eco-edit-badge{position:absolute;bottom:-3px;right:-3px;width:22px;height:22px;border-radius:50%;background:#1c1c1f;border:2px solid #141416;display:flex;align-items:center;justify-content:center;font-size:10px;cursor:pointer}
.eco-card-info{flex:1;min-width:0}
.eco-card-name{font-size:15.5px;font-weight:700}
.eco-card-rel{font-size:11.5px;color:#ffb199;font-weight:600;margin-top:1px}
.eco-card-desc{font-size:12px;color:#9a9a9e;line-height:1.4;margin-top:8px}
.eco-card-footer{display:flex;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)}
.eco-mini-stat{flex:1;text-align:center}
.eco-mini-stat .mv{font-size:14px;font-weight:800}
.eco-mini-stat .ml{font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase}
.eco-mini-div{width:1px;background:rgba(255,255,255,0.08);margin:2px 0}
.eco-tabbar{position:fixed;bottom:0;left:0;right:0;height:74px;background:rgba(20,20,22,0.85);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:flex-start;padding-top:8px;z-index:60}
.eco-tab-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px}
.eco-tab-item.active{color:#ffb199}
.eco-tab-icon{font-size:19px}
.eco-tab-record{flex:1;display:flex;align-items:center;justify-content:center;margin-top:-22px}
.eco-tab-record-circle{width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;box-shadow:0 8px 20px rgba(255,122,69,0.5),0 0 0 5px rgba(255,122,69,0.16),0 0 0 1px #0b0b0d;border:3px solid #0b0b0d}
</style>

<div class="eco-root">
  <!-- Status bar -->
  <div style="display:flex;justify-content:space-between;padding:12px 0 0;font-size:12px;color:#9a9a9e"><span>9:41</span><span>🔋 100%</span></div>

  <!-- Header -->
  <div class="eco-nav-header">
    <div>
      <div class="eco-nav-title">Persone</div>
      <div class="eco-nav-caption">6 persone custodite</div>
    </div>
    <div class="eco-add-btn">+</div>
  </div>

  <!-- Filter tabs -->
  <div class="eco-filter-tabs">
    <div class="eco-filter-tab active">Tutti</div>
    <div class="eco-filter-tab">⭐ Preferiti</div>
  </div>

  <!-- Persona 1 -->
  <div class="eco-person-card">
    <div class="eco-star-btn fav">★</div>
    <div class="eco-card-top">
      <div class="eco-avatar-wrap">
        <div class="eco-avatar-round" style="background:#7aa7ff">NC</div>
        <div class="eco-edit-badge">✏️</div>
      </div>
      <div class="eco-card-info">
        <div class="eco-card-name">Nonna Carla</div>
        <div class="eco-card-rel">Nonna</div>
        <div class="eco-card-desc">Racconta sempre storie della sua gioventù in campagna, con quella voce calda che mette il cuore in pace.</div>
      </div>
    </div>
    <div class="eco-card-footer">
      <div class="eco-mini-stat"><div class="mv">4</div><div class="ml">Ricordi</div></div>
      <div class="eco-mini-div"></div>
      <div class="eco-mini-stat"><div class="mv">22 min</div><div class="ml">Durata tot.</div></div>
      <div class="eco-mini-div"></div>
      <div class="eco-mini-stat"><div class="mv">⭐</div><div class="ml">Preferito</div></div>
    </div>
  </div>

  <!-- Persona 2 -->
  <div class="eco-person-card">
    <div class="eco-star-btn nofav">★</div>
    <div class="eco-card-top">
      <div class="eco-avatar-wrap">
        <div class="eco-avatar-round" style="background:#ff7a45">P</div>
        <div class="eco-edit-badge">✏️</div>
      </div>
      <div class="eco-card-info">
        <div class="eco-card-name">Papà</div>
        <div class="eco-card-rel">Padre</div>
        <div class="eco-card-desc">La sua risata contagiosa e i consigli sul lavoro sono i ricordi più preziosi che custodisco.</div>
      </div>
    </div>
    <div class="eco-card-footer">
      <div class="eco-mini-stat"><div class="mv">14</div><div class="ml">Ricordi</div></div>
      <div class="eco-mini-div"></div>
      <div class="eco-mini-stat"><div class="mv">38 min</div><div class="ml">Durata tot.</div></div>
      <div class="eco-mini-div"></div>
      <div class="eco-mini-stat"><div class="mv">—</div><div class="ml">Preferito</div></div>
    </div>
  </div>

  <!-- Persona 3 -->
  <div class="eco-person-card">
    <div class="eco-star-btn fav">★</div>
    <div class="eco-card-top">
      <div class="eco-avatar-wrap">
        <div class="eco-avatar-round" style="background:#ff6b8b">M</div>
        <div class="eco-edit-badge">✏️</div>
      </div>
      <div class="eco-card-info">
        <div class="eco-card-name">Mamma</div>
        <div class="eco-card-rel">Madre</div>
        <div class="eco-card-desc">Le sue ricette della domenica raccontate a voce, con tutti i piccoli segreti che solo lei conosce.</div>
      </div>
    </div>
    <div class="eco-card-footer">
      <div class="eco-mini-stat"><div class="mv">11</div><div class="ml">Ricordi</div></div>
      <div class="eco-mini-div"></div>
      <div class="eco-mini-stat"><div class="mv">29 min</div><div class="ml">Durata tot.</div></div>
      <div class="eco-mini-div"></div>
      <div class="eco-mini-stat"><div class="mv">⭐</div><div class="ml">Preferito</div></div>
    </div>
  </div>

  <!-- Persona 4 -->
  <div class="eco-person-card">
    <div class="eco-star-btn nofav">★</div>
    <div class="eco-card-top">
      <div class="eco-avatar-wrap">
        <div class="eco-avatar-round" style="background:#5fd9a4">NA</div>
        <div class="eco-edit-badge">✏️</div>
      </div>
      <div class="eco-card-info">
        <div class="eco-card-name">Nonno Aldo</div>
        <div class="eco-card-rel">Nonno</div>
        <div class="eco-card-desc">Frasi brevi ma piene di saggezza, dette sempre con lo stesso tono pacato e rassicurante.</div>
      </div>
    </div>
    <div class="eco-card-footer">
      <div class="eco-mini-stat"><div class="mv">2</div><div class="ml">Ricordi</div></div>
      <div class="eco-mini-div"></div>
      <div class="eco-mini-stat"><div class="mv">16 min</div><div class="ml">Durata tot.</div></div>
      <div class="eco-mini-div"></div>
      <div class="eco-mini-stat"><div class="mv">—</div><div class="ml">Preferito</div></div>
    </div>
  </div>

  <!-- Tab bar -->
  <div class="eco-tabbar">
    <div class="eco-tab-item"><div class="eco-tab-icon">🏠</div>Home</div>
    <div class="eco-tab-record"><div class="eco-tab-record-circle">🎙️</div></div>
    <div class="eco-tab-item active"><div class="eco-tab-icon">👥</div>Persone</div>
  </div>
</div>`,

    // ===== 3. DETTAGLIO PERSONA =====
    '👤 Dettaglio': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-root{font-family:'Inter',sans-serif;background:#0b0b0d;min-height:100vh;color:#f5f4f2;padding:0 22px 110px}
.eco-root *{box-sizing:border-box;margin:0;padding:0}
.eco-top-actions{display:flex;justify-content:space-between;align-items:center;padding-top:20px}
.eco-back-btn{width:36px;height:36px;border-radius:50%;background:#141416;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:15px}
.eco-follow-btn{background:rgba(255,255,255,0.08);font-size:12.5px;font-weight:700;padding:9px 16px;border-radius:20px;border:none;display:flex;align-items:center;gap:6px;cursor:pointer;color:#f5f4f2}
.eco-follow-btn.fav{background:#ffcc4d;color:#1a0f08}
.eco-avatar-section{display:flex;flex-direction:column;align-items:center;margin-top:28px}
.eco-avatar-ring{width:96px;height:96px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:conic-gradient(from 0deg,#ffb84d,#ff6b8b,#7aa7ff,#5fd9a4,#ffb84d);padding:3px;position:relative}
.eco-avatar-big{width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:26px;border:3px solid #0b0b0d;color:#fff}
.eco-detail-edit{position:absolute;bottom:-2px;right:-2px;width:28px;height:28px;border-radius:50%;background:#1c1c1f;border:2px solid #0b0b0d;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer}
.eco-detail-name{font-size:19px;font-weight:800;margin-top:10px}
.eco-detail-desc{font-size:12.5px;color:#9a9a9e;text-align:center;margin-top:4px;max-width:280px;line-height:1.4}
.eco-detail-dates{font-size:11px;color:#9a9a9e;margin-top:6px;display:flex;gap:12px;justify-content:center}
.eco-stats-row{display:flex;margin-top:18px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:14px 4px}
.eco-mini-stat{flex:1;text-align:center}
.eco-mini-stat .mv{font-size:15px;font-weight:800}
.eco-mini-stat .ml{font-size:9.5px;color:#9a9a9e;margin-top:1px;text-transform:uppercase}
.eco-mini-div{width:1px;background:rgba(255,255,255,0.08);margin:2px 0}
.eco-filter-row{display:flex;gap:8px;overflow-x:auto;margin-top:20px;padding-bottom:4px;scrollbar-width:none}
.eco-filter-chip{flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:#141416;border:1px solid rgba(255,255,255,0.08);color:#9a9a9e;display:flex;align-items:center;gap:6px}
.eco-filter-chip.active{background:#ff7a45;color:#1a0f08;border-color:#ff7a45}
.eco-filter-dot{width:7px;height:7px;border-radius:50%}
.eco-section-label{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9a9a9e;margin:20px 0 12px}
.eco-memory-card{background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;margin-bottom:12px;position:relative}
.eco-memory-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-right:30px}
.eco-memory-date{font-size:11px;color:#9a9a9e}
.eco-memory-emotion{display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;padding:4px 9px;border-radius:20px}
.eco-memory-star{position:absolute;top:14px;right:14px;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;border:none;z-index:3}
.eco-memory-star.fav{background:rgba(255,204,77,0.14);color:#ffcc4d}
.eco-memory-star.nofav{background:rgba(255,255,255,0.05);color:#9a9a9e}
.eco-memory-row{display:flex;align-items:center;gap:12px}
.eco-memory-play{width:38px;height:38px;border-radius:50%;background:rgba(255,122,69,0.14);color:#ffb199;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;border:none}
.eco-memory-wave{flex:1;display:flex;align-items:center;gap:2px;height:26px}
.eco-memory-wave span{width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18)}
.eco-memory-dur{font-size:11px;color:#9a9a9e;flex-shrink:0}
.eco-memory-text{margin-top:12px;font-size:12.5px;color:#9a9a9e;line-height:1.5;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)}
</style>

<div class="eco-root">
  <!-- Top actions -->
  <div class="eco-top-actions">
    <div class="eco-back-btn">←</div>
    <div class="eco-follow-btn fav">⭐ Preferito</div>
  </div>

  <!-- Avatar section -->
  <div class="eco-avatar-section">
    <div class="eco-avatar-ring">
      <div class="eco-avatar-big" style="background:#7aa7ff">NC</div>
      <div class="eco-detail-edit">✏️</div>
    </div>
    <div class="eco-detail-name">Nonna Carla</div>
    <div class="eco-detail-desc">Racconta sempre storie della sua gioventù in campagna.</div>
    <div class="eco-detail-dates">
      <span>🎂 12 mar 1948</span>
    </div>
  </div>

  <!-- Stats -->
  <div class="eco-stats-row">
    <div class="eco-mini-stat"><div class="mv">4</div><div class="ml">Ricordi</div></div>
    <div class="eco-mini-div"></div>
    <div class="eco-mini-stat"><div class="mv">22 min</div><div class="ml">Durata tot.</div></div>
    <div class="eco-mini-div"></div>
    <div class="eco-mini-stat"><div class="mv">Nonna</div><div class="ml">Relazione</div></div>
  </div>

  <!-- Filter chips -->
  <div class="eco-filter-row">
    <div class="eco-filter-chip active">Tutte</div>
    <div class="eco-filter-chip"><div class="eco-filter-dot" style="background:#ffcc4d"></div>Preferiti</div>
    <div class="eco-filter-chip"><div class="eco-filter-dot" style="background:#ffb84d"></div>Gioia</div>
    <div class="eco-filter-chip"><div class="eco-filter-dot" style="background:#7aa7ff"></div>Nostalgia</div>
    <div class="eco-filter-chip"><div class="eco-filter-dot" style="background:#ff6b8b"></div>Amore</div>
    <div class="eco-filter-chip"><div class="eco-filter-dot" style="background:#5fd9a4"></div>Gratitudine</div>
  </div>

  <!-- Section -->
  <div class="eco-section-label">Tutti i ricordi</div>

  <!-- Memory 1 -->
  <div class="eco-memory-card">
    <div class="eco-memory-star fav">★</div>
    <div class="eco-memory-top">
      <div class="eco-memory-date">12 lug 2026</div>
      <div class="eco-memory-emotion" style="background:rgba(255,107,139,0.13);color:#ff6b8b"><div style="width:7px;height:7px;border-radius:50%;background:#ff6b8b"></div>Amore</div>
    </div>
    <div class="eco-memory-row">
      <div class="eco-memory-play">▶</div>
      <div class="eco-memory-wave"><span style="height:10px"></span><span style="height:16px"></span><span style="height:8px"></span><span style="height:20px"></span><span style="height:12px"></span><span style="height:18px"></span><span style="height:6px"></span><span style="height:14px"></span><span style="height:10px"></span><span style="height:16px"></span><span style="height:12px"></span><span style="height:8px"></span></div>
      <span class="eco-memory-dur">0:18</span>
    </div>
    <div class="eco-memory-text">"Sono orgogliosa di te, ricordalo sempre. Non importa cosa succede, io sarò sempre qui con te, nel cuore."</div>
  </div>

  <!-- Memory 2 -->
  <div class="eco-memory-card">
    <div class="eco-memory-star nofav">★</div>
    <div class="eco-memory-top">
      <div class="eco-memory-date">3 giu 2026</div>
      <div class="eco-memory-emotion" style="background:rgba(122,167,255,0.13);color:#7aa7ff"><div style="width:7px;height:7px;border-radius:50%;background:#7aa7ff"></div>Nostalgia</div>
    </div>
    <div class="eco-memory-row">
      <div class="eco-memory-play">▶</div>
      <div class="eco-memory-wave"><span style="height:12px"></span><span style="height:18px"></span><span style="height:8px"></span><span style="height:16px"></span><span style="height:10px"></span><span style="height:20px"></span><span style="height:14px"></span><span style="height:6px"></span><span style="height:12px"></span><span style="height:16px"></span><span style="height:10px"></span><span style="height:14px"></span></div>
      <span class="eco-memory-dur">1:42</span>
    </div>
    <div class="eco-memory-text">"Quando avevo la tua età vivevamo in campagna, ti racconto sempre della vecchia casa con il fico..."</div>
  </div>

  <!-- Memory 3 -->
  <div class="eco-memory-card">
    <div class="eco-memory-star nofav">★</div>
    <div class="eco-memory-top">
      <div class="eco-memory-date">20 mag 2026</div>
      <div class="eco-memory-emotion" style="background:rgba(255,184,77,0.13);color:#ffb84d"><div style="width:7px;height:7px;border-radius:50%;background:#ffb84d"></div>Gioia</div>
    </div>
    <div class="eco-memory-row">
      <div class="eco-memory-play">▶</div>
      <div class="eco-memory-wave"><span style="height:14px"></span><span style="height:8px"></span><span style="height:18px"></span><span style="height:10px"></span><span style="height:16px"></span><span style="height:12px"></span><span style="height:6px"></span><span style="height:20px"></span><span style="height:14px"></span><span style="height:10px"></span><span style="height:16px"></span><span style="height:8px"></span></div>
      <span class="eco-memory-dur">0:34</span>
    </div>
    <div class="eco-memory-text">"Ridevamo sempre a tavola, tuo nonno raccontava le barzellette più assurde..."</div>
  </div>
</div>`,

    // ===== 4. REGISTRA =====
    '🎤 Registra': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-root{font-family:'Inter',sans-serif;background:#0b0b0d;min-height:100vh;color:#f5f4f2;display:flex;flex-direction:column;align-items:center;padding:0 22px 110px}
.eco-root *{box-sizing:border-box;margin:0;padding:0}
.eco-page-title{font-size:30px;font-weight:800;letter-spacing:-0.5px;margin-top:50px}
.eco-page-sub{font-size:14px;color:#9a9a9e;margin-top:4px;text-align:center}
.eco-record-circle{width:190px;height:190px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:54px;margin:20px 0 24px;position:relative;animation:ecoPulse 2.2s infinite}
@keyframes ecoPulse{0%{box-shadow:0 0 0 0 rgba(255,122,69,0.35)}70%{box-shadow:0 0 0 30px rgba(255,122,69,0)}100%{box-shadow:0 0 0 0 rgba(255,122,69,0)}}
.eco-timer{font-size:36px;font-weight:800;letter-spacing:1px}
.eco-waves{display:flex;align-items:center;justify-content:center;gap:3px;height:44px;margin-top:20px;opacity:0.3}
.eco-waves span{width:4px;border-radius:3px;background:#ffb199;animation:ecoWave 1s ease-in-out infinite}
@keyframes ecoWave{0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)}}
.eco-hint{font-size:13px;color:#9a9a9e;margin-top:8px;text-align:center;max-width:270px}
.eco-tips{width:100%;margin-top:44px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px}
.eco-tip-title{font-size:12px;font-weight:700;color:#ffb199;margin-bottom:8px}
.eco-tip{font-size:12.5px;color:#9a9a9e;margin-bottom:6px;line-height:1.4}
.eco-tabbar{position:fixed;bottom:0;left:0;right:0;height:74px;background:rgba(20,20,22,0.85);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:flex-start;padding-top:8px;z-index:60}
.eco-tab-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:#9a9a9e;padding-top:2px}
.eco-tab-item.active{color:#ffb199}
.eco-tab-icon{font-size:19px}
.eco-tab-record{flex:1;display:flex;align-items:center;justify-content:center;margin-top:-22px}
.eco-tab-record-circle{width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;box-shadow:0 8px 20px rgba(255,122,69,0.5),0 0 0 5px rgba(255,122,69,0.16),0 0 0 1px #0b0b0d;border:3px solid #0b0b0d}
</style>

<div class="eco-root">
  <!-- Status bar -->
  <div style="display:flex;justify-content:space-between;width:100%;padding:12px 6px 0;font-size:12px;color:#9a9a9e"><span>9:41</span><span>🔋 100%</span></div>

  <div style="display:flex;flex-direction:column;align-items:center;width:100%">
    <h1 class="eco-page-title">Registra</h1>
    <p class="eco-page-sub">Premi, parla, salva un ricordo</p>

    <!-- Record button -->
    <div class="eco-record-circle">🎙️</div>

    <!-- Timer -->
    <div class="eco-timer">00:00</div>

    <!-- Waves -->
    <div class="eco-waves">
      <span style="animation-delay:0s;height:12px"></span>
      <span style="animation-delay:0.05s;height:18px"></span>
      <span style="animation-delay:0.1s;height:14px"></span>
      <span style="animation-delay:0.15s;height:8px"></span>
      <span style="animation-delay:0.2s;height:20px"></span>
      <span style="animation-delay:0.25s;height:10px"></span>
      <span style="animation-delay:0.3s;height:16px"></span>
      <span style="animation-delay:0.35s;height:12px"></span>
      <span style="animation-delay:0.4s;height:14px"></span>
      <span style="animation-delay:0.45s;height:18px"></span>
      <span style="animation-delay:0.5s;height:10px"></span>
      <span style="animation-delay:0.55s;height:16px"></span>
    </div>

    <!-- Hint -->
    <p class="eco-hint">Tocca il microfono per iniziare a registrare.</p>

    <!-- Tips -->
    <div class="eco-tips">
      <div class="eco-tip-title">💡 Suggerimenti</div>
      <div class="eco-tip">• Chiedi di raccontare un ricordo d'infanzia</div>
      <div class="eco-tip">• Fai cantare una canzone che amava cantare</div>
      <div class="eco-tip">• Registra un semplice "ti amo" o "sono fiero di te"</div>
    </div>
  </div>

  <!-- Tab bar -->
  <div class="eco-tabbar">
    <div class="eco-tab-item"><div class="eco-tab-icon">🏠</div>Home</div>
    <div class="eco-tab-record active"><div class="eco-tab-record-circle">🎙️</div></div>
    <div class="eco-tab-item"><div class="eco-tab-icon">👥</div>Persone</div>
  </div>
</div>`,

    // ===== 5. NUOVA PERSONA (Modale) =====
    '➕ Nuova Persona': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-modal-root{font-family:'Inter',sans-serif;background:#141416;border-radius:28px 28px 0 0;padding:20px 22px 30px;color:#f5f4f2;max-width:390px;margin:0 auto;border-top:1px solid rgba(255,255,255,0.08)}
.eco-modal-root *{box-sizing:border-box;margin:0;padding:0}
.eco-modal-handle{width:40px;height:4px;background:rgba(255,255,255,0.08);border-radius:4px;margin:0 auto 16px}
.eco-modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.eco-modal-title{font-size:18px;font-weight:800}
.eco-modal-close{width:30px;height:30px;border-radius:50%;background:#1c1c1f;border:none;color:#9a9a9e;font-size:14px;display:flex;align-items:center;justify-content:center}
.eco-photo-picker{display:flex;flex-direction:column;align-items:center;margin-bottom:20px}
.eco-photo-circle{width:88px;height:88px;border-radius:50%;background:#1c1c1f;border:2px dashed rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:26px;color:#9a9a9e;overflow:hidden}
.eco-photo-hint{font-size:11.5px;color:#9a9a9e;margin-top:8px}
.eco-field{margin-bottom:14px}
.eco-field label{font-size:11.5px;color:#9a9a9e;display:block;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px}
.eco-field-row{display:flex;gap:10px}
.eco-field-row .eco-field{flex:1}
.eco-field input,.eco-field select,.eco-field textarea{width:100%;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:#1c1c1f;color:#f5f4f2;font-size:14px;outline:none;font-family:inherit;box-sizing:border-box}
.eco-field input:focus,.eco-field select:focus,.eco-field textarea:focus{border-color:#ff7a45}
.eco-field textarea{resize:none;min-height:110px;line-height:1.5}
.eco-field-hint{font-size:10.5px;color:#9a9a9e;margin-top:4px}
.eco-modal-footer{display:flex;gap:10px;margin-top:8px}
.eco-btn{flex:1;padding:14px;border-radius:14px;border:none;font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit}
.eco-btn-primary{background:#ff7a45;color:#1a0f08}
.eco-btn-secondary{background:#1c1c1f;color:#f5f4f2}
</style>

<div class="eco-modal-root">
  <div class="eco-modal-handle"></div>
  <div class="eco-modal-header">
    <h2 class="eco-modal-title">Nuova persona</h2>
    <div class="eco-modal-close">✕</div>
  </div>

  <!-- Photo picker -->
  <div class="eco-photo-picker">
    <div class="eco-photo-circle">📷</div>
    <div class="eco-photo-hint">Tocca per aggiungere una foto</div>
  </div>

  <!-- Name fields -->
  <div class="eco-field-row">
    <div class="eco-field">
      <label>Nome</label>
      <input type="text" placeholder="Carla">
    </div>
    <div class="eco-field">
      <label>Cognome</label>
      <input type="text" placeholder="Rossi">
    </div>
  </div>

  <!-- Description -->
  <div class="eco-field">
    <label>Descrizione</label>
    <textarea placeholder="Racconta qualcosa di lei o di lui..."></textarea>
  </div>

  <!-- Relation -->
  <div class="eco-field">
    <label>Relazione</label>
    <select>
      <option>Nonna</option><option>Nonno</option><option>Madre</option><option>Padre</option>
      <option>Fratello</option><option>Sorella</option><option>Zia</option><option>Zio</option>
      <option>Amico/a</option><option>Altro</option>
    </select>
  </div>

  <!-- Dates -->
  <div class="eco-field-row">
    <div class="eco-field">
      <label>Data di nascita</label>
      <input type="date">
    </div>
    <div class="eco-field">
      <label>Per sempre nel cuore</label>
      <input type="date">
      <div class="eco-field-hint">Lascia vuoto se la persona è ancora con te</div>
    </div>
  </div>

  <!-- Buttons -->
  <div class="eco-modal-footer">
    <button class="eco-btn eco-btn-secondary">Annulla</button>
    <button class="eco-btn eco-btn-primary">Salva</button>
  </div>
</div>`,

    // ===== 6. DETTAGLIO RICORDO (Modale) =====
    '📖 Dettaglio Ricordo': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-modal-root{font-family:'Inter',sans-serif;background:#141416;border-radius:28px 28px 0 0;padding:20px 22px 30px;color:#f5f4f2;max-width:390px;margin:0 auto;border-top:1px solid rgba(255,255,255,0.08)}
.eco-modal-root *{box-sizing:border-box;margin:0;padding:0}
.eco-modal-handle{width:40px;height:4px;background:rgba(255,255,255,0.08);border-radius:4px;margin:0 auto 16px}
.eco-modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.eco-modal-title{font-size:18px;font-weight:800}
.eco-modal-close{width:30px;height:30px;border-radius:50%;background:#1c1c1f;border:none;color:#9a9a9e;font-size:14px;display:flex;align-items:center;justify-content:center}
.eco-emotion-badge{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;padding:6px 12px;border-radius:20px;margin-bottom:14px}
.eco-emotion-dot{width:7px;height:7px;border-radius:50%}
.eco-player-row{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.eco-play-btn{width:38px;height:38px;border-radius:50%;background:rgba(255,122,69,0.14);color:#ffb199;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;border:none}
.eco-wave-bar{flex:1;display:flex;align-items:center;gap:2px;height:26px}
.eco-wave-bar span{width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18)}
.eco-dur-text{font-size:11px;color:#9a9a9e;flex-shrink:0}
.eco-meta-row{display:flex;justify-content:space-between;font-size:12px;color:#9a9a9e;margin-bottom:18px}
.eco-transcript-box{background:#1c1c1f;border-radius:14px;padding:14px;font-size:13.5px;line-height:1.55;margin-bottom:16px;color:#f5f4f2}
.eco-action-list{display:flex;flex-direction:column;gap:10px}
.eco-action-item{display:flex;align-items:center;gap:12px;padding:14px;border-radius:14px;background:#1c1c1f;font-size:14px;font-weight:600;cursor:pointer}
.eco-action-item.danger{color:#ff5c5c}
.eco-action-icon{font-size:16px;width:20px;text-align:center}
</style>

<div class="eco-modal-root">
  <div class="eco-modal-handle"></div>
  <div class="eco-modal-header">
    <h2 class="eco-modal-title">Dettaglio ricordo</h2>
    <div class="eco-modal-close">✕</div>
  </div>

  <!-- Emotion badge -->
  <div class="eco-emotion-badge" style="background:rgba(255,107,139,0.13);color:#ff6b8b">
    <div class="eco-emotion-dot" style="background:#ff6b8b"></div>
    Amore · ⭐ Preferito
  </div>

  <!-- Player -->
  <div class="eco-player-row">
    <div class="eco-play-btn">▶</div>
    <div class="eco-wave-bar">
      <span style="height:10px"></span><span style="height:16px"></span><span style="height:8px"></span>
      <span style="height:20px"></span><span style="height:12px"></span><span style="height:18px"></span>
      <span style="height:6px"></span><span style="height:14px"></span><span style="height:10px"></span>
      <span style="height:16px"></span><span style="height:12px"></span><span style="height:8px"></span>
    </div>
    <span class="eco-dur-text">0:18</span>
  </div>

  <!-- Meta -->
  <div class="eco-meta-row">
    <span>12 lug 2026</span>
    <span>Nonna Carla</span>
  </div>

  <!-- Transcript -->
  <div class="eco-transcript-box">"Sono orgogliosa di te, ricordalo sempre. Non importa cosa succede, io sarò sempre qui con te, nel cuore."</div>

  <!-- Actions -->
  <div class="eco-action-list">
    <div class="eco-action-item">
      <span class="eco-action-icon">✏️</span>Modifica ricordo
    </div>
    <div class="eco-action-item">
      <span class="eco-action-icon">↗️</span>Sposta ad un'altra persona
    </div>
    <div class="eco-action-item danger">
      <span class="eco-action-icon">🗑️</span>Elimina ricordo
    </div>
  </div>
</div>`,

    // ===== 7. ASSEGNA REGISTRAZIONE (Modale) =====
    '📋 Assegna Persona': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-modal-root{font-family:'Inter',sans-serif;background:#141416;border-radius:28px 28px 0 0;padding:20px 22px 30px;color:#f5f4f2;max-width:390px;margin:0 auto;border-top:1px solid rgba(255,255,255,0.08)}
.eco-modal-root *{box-sizing:border-box;margin:0;padding:0}
.eco-modal-handle{width:40px;height:4px;background:rgba(255,255,255,0.08);border-radius:4px;margin:0 auto 16px}
.eco-modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.eco-modal-title{font-size:18px;font-weight:800}
.eco-modal-close{width:30px;height:30px;border-radius:50%;background:#1c1c1f;border:none;color:#9a9a9e;font-size:14px;display:flex;align-items:center;justify-content:center}
.eco-assign-sub{font-size:14px;color:#9a9a9e;margin-bottom:14px}
.eco-person-option{display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:12px;background:#1c1c1f;cursor:pointer;font-size:13px;font-weight:600;margin-bottom:8px}
.eco-person-option.selected{background:rgba(255,122,69,0.14);border:1px solid #ff7a45}
.eco-option-avatar{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;flex-shrink:0;color:#fff}
.eco-modal-footer{display:flex;gap:10px;margin-top:8px}
.eco-btn{flex:1;padding:14px;border-radius:14px;border:none;font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit}
.eco-btn-primary{background:#ff7a45;color:#1a0f08}
.eco-btn-secondary{background:#1c1c1f;color:#f5f4f2}
</style>

<div class="eco-modal-root">
  <div class="eco-modal-handle"></div>
  <div class="eco-modal-header">
    <h2 class="eco-modal-title">A chi appartiene questo ricordo?</h2>
    <div class="eco-modal-close">✕</div>
  </div>

  <div class="eco-assign-sub">Seleziona la persona a cui associare l'audio registrato.</div>

  <!-- Person options -->
  <div class="eco-person-option selected">
    <div class="eco-option-avatar" style="background:#7aa7ff">NC</div>
    Nonna Carla
  </div>
  <div class="eco-person-option">
    <div class="eco-option-avatar" style="background:#ff7a45">P</div>
    Papà
  </div>
  <div class="eco-person-option">
    <div class="eco-option-avatar" style="background:#ff6b8b">M</div>
    Mamma
  </div>
  <div class="eco-person-option">
    <div class="eco-option-avatar" style="background:#5fd9a4">NA</div>
    Nonno Aldo
  </div>
  <div class="eco-person-option">
    <div class="eco-option-avatar" style="background:#ffb84d">ZR</div>
    Zia Rosa
  </div>
  <div class="eco-person-option">
    <div class="eco-option-avatar" style="background:#c99aff">M</div>
    Marco
  </div>

  <!-- Buttons -->
  <div class="eco-modal-footer">
    <button class="eco-btn eco-btn-secondary">Scarta audio</button>
    <button class="eco-btn eco-btn-primary">Salva ricordo</button>
  </div>
</div>`,

    // ===== 8. CONFERMA ELIMINA (Dialog) =====
    '⚠️ Conferma Elimina': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-dialog-root{font-family:'Inter',sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:rgba(0,0,0,0.55);backdrop-filter:blur(4px)}
.eco-dialog-root *{box-sizing:border-box;margin:0;padding:0}
.eco-dialog-box{width:270px;background:#2a2a2d;border-radius:18px;overflow:hidden;text-align:center}
.eco-dialog-title{font-size:15px;font-weight:700;padding:20px 20px 6px;color:#f5f4f2}
.eco-dialog-text{font-size:12.5px;color:#9a9a9e;padding:0 20px 18px;line-height:1.4}
.eco-dialog-actions{display:flex;border-top:1px solid rgba(255,255,255,0.1)}
.eco-dialog-btn{flex:1;padding:13px;font-size:14px;font-weight:600;cursor:pointer;border:none;background:none;color:#f5f4f2}
.eco-dialog-btn.delete{color:#ff5c5c;font-weight:700;border-left:1px solid rgba(255,255,255,0.1)}
</style>

<div class="eco-dialog-root">
  <div class="eco-dialog-box">
    <div class="eco-dialog-title">Eliminare questo ricordo?</div>
    <div class="eco-dialog-text">Questa azione non può essere annullata. L'audio e la trascrizione andranno persi per sempre.</div>
    <div class="eco-dialog-actions">
      <button class="eco-dialog-btn">Annulla</button>
      <button class="eco-dialog-btn delete">Elimina</button>
    </div>
  </div>
</div>`,

    // ===== 9. MODIFICA RICORDO (Form) =====
    '✏️ Modifica Ricordo': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-form-root{font-family:'Inter',sans-serif;background:#141416;border-radius:28px 28px 0 0;padding:20px 22px 30px;color:#f5f4f2;max-width:390px;margin:0 auto;border-top:1px solid rgba(255,255,255,0.08)}
.eco-form-root *{box-sizing:border-box;margin:0;padding:0}
.eco-form-handle{width:40px;height:4px;background:rgba(255,255,255,0.08);border-radius:4px;margin:0 auto 16px}
.eco-form-title{font-size:18px;font-weight:800;margin-bottom:18px}
.eco-field{margin-bottom:14px}
.eco-field label{font-size:11.5px;color:#9a9a9e;display:block;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px}
.eco-field select,.eco-field textarea{width:100%;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:#1c1c1f;color:#f5f4f2;font-size:14px;outline:none;font-family:inherit;box-sizing:border-box}
.eco-field select:focus,.eco-field textarea:focus{border-color:#ff7a45}
.eco-field textarea{resize:none;min-height:120px;line-height:1.5}
.eco-form-footer{display:flex;gap:10px;margin-top:8px}
.eco-btn{flex:1;padding:14px;border-radius:14px;border:none;font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit}
.eco-btn-primary{background:#ff7a45;color:#1a0f08}
.eco-btn-secondary{background:#1c1c1f;color:#f5f4f2}
</style>

<div class="eco-form-root">
  <div class="eco-form-handle"></div>
  <div class="eco-form-title">Modifica ricordo</div>

  <!-- Emotion -->
  <div class="eco-field">
    <label>Emozione</label>
    <select>
      <option value="joy">Gioia</option>
      <option value="nostalgia">Nostalgia</option>
      <option value="love" selected>Amore</option>
      <option value="gratitude">Gratitudine</option>
    </select>
  </div>

  <!-- Transcript -->
  <div class="eco-field">
    <label>Trascrizione</label>
    <textarea>Sono orgogliosa di te, ricordalo sempre. Non importa cosa succede, io sarò sempre qui con te, nel cuore.</textarea>
  </div>

  <!-- Buttons -->
  <div class="eco-form-footer">
    <button class="eco-btn eco-btn-secondary">Annulla</button>
    <button class="eco-btn eco-btn-primary">Salva modifiche</button>
  </div>
</div>`,

    // ===== 10. SPOSTA RICORDO (Picker) =====
    '↗️ Sposta Ricordo': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.eco-picker-root{font-family:'Inter',sans-serif;background:#141416;border-radius:28px 28px 0 0;padding:20px 22px 30px;color:#f5f4f2;max-width:390px;margin:0 auto;border-top:1px solid rgba(255,255,255,0.08)}
.eco-picker-root *{box-sizing:border-box;margin:0;padding:0}
.eco-picker-handle{width:40px;height:4px;background:rgba(255,255,255,0.08);border-radius:4px;margin:0 auto 16px}
.eco-picker-title{font-size:18px;font-weight:800;margin-bottom:14px}
.eco-picker-sub{font-size:13px;color:#9a9a9e;margin-bottom:14px}
.eco-person-option{display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:12px;background:#1c1c1f;cursor:pointer;font-size:13px;font-weight:600;margin-bottom:8px}
.eco-person-option.selected{background:rgba(255,122,69,0.14);border:1px solid #ff7a45}
.eco-option-avatar{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;flex-shrink:0;color:#fff}
.eco-picker-footer{display:flex;gap:10px;margin-top:8px}
.eco-btn{flex:1;padding:14px;border-radius:14px;border:none;font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit}
.eco-btn-primary{background:#ff7a45;color:#1a0f08}
.eco-btn-secondary{background:#1c1c1f;color:#f5f4f2}

/* Excluded person indicator */
.eco-excluded-note{font-size:11px;color:#ff6b8b;text-align:center;margin-bottom:10px;padding:8px;background:rgba(255,92,92,0.08);border-radius:10px}
</style>

<div class="eco-picker-root">
  <div class="eco-picker-handle"></div>
  <div class="eco-picker-title">Sposta ad un'altra persona</div>
  <div class="eco-picker-sub">Seleziona la persona a cui spostare questo ricordo.</div>

  <div class="eco-excluded-note">📍 Attualmente: Nonna Carla</div>

  <!-- Person options (excludes current person) -->
  <div class="eco-person-option selected">
    <div class="eco-option-avatar" style="background:#ff7a45">P</div>
    Papà
  </div>
  <div class="eco-person-option">
    <div class="eco-option-avatar" style="background:#ff6b8b">M</div>
    Mamma
  </div>
  <div class="eco-person-option">
    <div class="eco-option-avatar" style="background:#5fd9a4">NA</div>
    Nonno Aldo
  </div>
  <div class="eco-person-option">
    <div class="eco-option-avatar" style="background:#ffb84d">ZR</div>
    Zia Rosa
  </div>
  <div class="eco-person-option">
    <div class="eco-option-avatar" style="background:#c99aff">M</div>
    Marco
  </div>

  <!-- Buttons -->
  <div class="eco-picker-footer">
    <button class="eco-btn eco-btn-secondary">Annulla</button>
    <button class="eco-btn eco-btn-primary">Conferma spostamento</button>
  </div>
</div>`
  }
};
