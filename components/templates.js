/* =====================================================
   templates.js — Schermate predefinite complete
   Trascina un template per caricare l'intera schermata
   ===================================================== */

// =========================================
// TEMPLATE: Dashboard Completa
// =========================================
const templateDashboard = {
  category: '🎯 Template',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" fill="#6C5CE7" opacity="0.15"/><rect x="6" y="6" width="5" height="4" rx="1" fill="#6C5CE7"/><rect x="13" y="6" width="5" height="4" rx="1" fill="#E84393"/><rect x="6" y="12" width="5" height="4" rx="1" fill="#F39C12"/><rect x="13" y="12" width="5" height="4" rx="1" fill="#00B894"/></svg>`,
  content: `
<div style="font-family: 'Inter', sans-serif; background: #F5F6FA; min-height: 100vh;">
  <!-- HEADER -->
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
    <h1 style="font-size: 24px; font-weight: 700; color: #2D3436; margin: 0;">Dashboard</h1>
    <div style="width: 36px; height: 36px; background: #DFE6E9; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#636E72" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    </div>
  </div>

  <!-- STATS GRID -->
  <div style="padding: 0 20px 20px;">
    <div style="font-size: 14px; font-weight: 600; color: #2D3436; margin-bottom: 12px;">Project Summary</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div style="background: #E8D5FF; border-radius: 16px; padding: 16px; position: relative; overflow: hidden;">
        <div style="display: flex; justify-content: space-between;"><div><div style="font-size: 28px; font-weight: 700; color: #6C5CE7;">24</div><div style="font-size: 13px; color: #636E72; font-weight: 500;">In Progress</div></div><span style="color: #B2BEC3;">⋯</span></div>
        <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 24px; opacity: 0.12;" viewBox="0 0 140 24"><path d="M0,12 C35,0 70,24 105,12 C122.5,6 140,12 140,12 L140,24 L0,24 Z" fill="#6C5CE7"/></svg>
      </div>
      <div style="background: #FFD5F0; border-radius: 16px; padding: 16px; position: relative; overflow: hidden;">
        <div style="display: flex; justify-content: space-between;"><div><div style="font-size: 28px; font-weight: 700; color: #E84393;">56</div><div style="font-size: 13px; color: #636E72; font-weight: 500;">In Review</div></div><span style="color: #B2BEC3;">⋯</span></div>
        <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 24px; opacity: 0.12;" viewBox="0 0 140 24"><path d="M0,12 C35,0 70,24 105,12 C122.5,6 140,12 140,12 L140,24 L0,24 Z" fill="#E84393"/></svg>
      </div>
      <div style="background: #FFE8D5; border-radius: 16px; padding: 16px; position: relative; overflow: hidden;">
        <div style="display: flex; justify-content: space-between;"><div><div style="font-size: 28px; font-weight: 700; color: #F39C12;">16</div><div style="font-size: 13px; color: #636E72; font-weight: 500;">On Hold</div></div><span style="color: #B2BEC3;">⋯</span></div>
        <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 24px; opacity: 0.12;" viewBox="0 0 140 24"><path d="M0,12 C35,0 70,24 105,12 C122.5,6 140,12 140,12 L140,24 L0,24 Z" fill="#F39C12"/></svg>
      </div>
      <div style="background: #D5FFE8; border-radius: 16px; padding: 16px; position: relative; overflow: hidden;">
        <div style="display: flex; justify-content: space-between;"><div><div style="font-size: 28px; font-weight: 700; color: #00B894;">45</div><div style="font-size: 13px; color: #636E72; font-weight: 500;">Completed</div></div><span style="color: #B2BEC3;">⋯</span></div>
        <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 24px; opacity: 0.12;" viewBox="0 0 140 24"><path d="M0,12 C35,0 70,24 105,12 C122.5,6 140,12 140,12 L140,24 L0,24 Z" fill="#00B894"/></svg>
      </div>
    </div>
  </div>

  <!-- CHART + STATS -->
  <div style="padding: 0 20px 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <div style="font-size: 14px; font-weight: 600; color: #2D3436;">Project Statistics</div>
      <span style="color: #B2BEC3;">⋯</span>
    </div>
    <div style="background: white; border-radius: 16px; padding: 20px;">
      <div style="display: flex; align-items: flex-end; gap: 6px; height: 100px;">
        <div style="display: flex;flex-direction:column;align-items:flex-end;padding-right:4px;gap:20px;font-size:11px;color:#B2BEC3;"><span>100</span><span>50</span><span>0</span></div>
        ${'SMWTFS'.split('').map((d,i) => {
          const hp = 40 + Math.sin(i*0.8)*30 + 20;
          const hr = 30 + Math.cos(i*1.2)*20 + 15;
          const hc = 20 + Math.sin(i*0.5+1)*25 + 15;
          return `<div style="flex:1;display:flex;justify-content:center;gap:2px;align-items:flex-end;height:100px;">
            <div style="width:10px;background:#6C5CE7;border-radius:3px 3px 0 0;height:${hp}px"></div>
            <div style="width:10px;background:#E84393;border-radius:3px 3px 0 0;height:${hr}px"></div>
            <div style="width:10px;background:#00B894;border-radius:3px 3px 0 0;height:${hc}px"></div>
          </div>`;
        }).join('')}
      </div>
      <div style="display:flex;gap:6px;margin-top:8px;margin-left:32px;">${'SMWTFS'.split('').map(d => `<div style="flex:1;text-align:center;font-size:11px;color:#B2BEC3;">${d}</div>`).join('')}</div>
      <div style="display:flex;gap:16px;justify-content:center;margin-top:12px;padding-top:12px;border-top:1px solid #F0F0F0;">
        <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#636E72;"><span style="width:8px;height:8px;background:#6C5CE7;border-radius:2px"></span> Progress</div>
        <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#636E72;"><span style="width:8px;height:8px;background:#E84393;border-radius:2px"></span> Reviewed</div>
        <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#636E72;"><span style="width:8px;height:8px;background:#00B894;border-radius:2px"></span> Complete</div>
      </div>
    </div>
  </div>

  <!-- BOTTOM STATS + NAV -->
  <div style="padding: 0 20px 10px;">
    <div style="display: flex; gap: 12px;">
      <div style="flex:1;background:white;border-radius:16px;padding:14px;"><div style="font-size:12px;color:#636E72;margin-bottom:4px;">Working hour</div><div style="display:flex;justify-content:space-between;"><span style="font-size:18px;font-weight:700;color:#2D3436;">50:25:06</span><span style="font-size:11px;font-weight:600;color:white;background:#00B894;padding:2px 8px;border-radius:20px;">34%</span></div></div>
      <div style="flex:1;background:white;border-radius:16px;padding:14px;"><div style="font-size:12px;color:#636E72;margin-bottom:4px;">Task activity</div><div style="display:flex;justify-content:space-between;"><span style="font-size:18px;font-weight:700;color:#2D3436;">125 Task</span><span style="font-size:11px;font-weight:600;color:white;background:#6C5CE7;padding:2px 8px;border-radius:20px;">50%</span></div></div>
    </div>
  </div>
  <div style="display:flex;justify-content:space-around;padding:10px 20px;background:white;border-top:1px solid #F0F0F0;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B2BEC3" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
    <div style="display:flex;align-items:center;gap:6px;background:#2D3436;padding:6px 16px;border-radius:20px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span style="font-size:13px;font-weight:600;color:white;">Task</span></div>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B2BEC3" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#B2BEC3"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-8 8-8s8 4 8 8"/></svg>
  </div>
</div>`
};

// =========================================
// TEMPLATE: Login Screen
// =========================================
const templateLogin = {
  category: '🎯 Template',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" fill="#6C5CE7" opacity="0.12"/><circle cx="12" cy="8" r="3" fill="#6C5CE7"/><rect x="7" y="13" width="10" height="2" rx="1" fill="#6C5CE7" opacity="0.5"/></svg>`,
  content: `
<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:linear-gradient(135deg,#6C5CE7,#A29BFE);padding:40px 24px;font-family:'Inter',sans-serif;">
  <div style="width:80px;height:80px;background:rgba(255,255,255,0.2);border-radius:20px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  </div>
  <h1 style="font-size:28px;font-weight:700;color:white;margin:0 0 4px 0;">Benvenuto</h1>
  <p style="font-size:14px;color:rgba(255,255,255,0.7);margin:0 0 32px 0;">Accedi al tuo account</p>
  <div style="width:100%;max-width:340px;">
    <div style="background:rgba(255,255,255,0.15);border-radius:12px;padding:14px 16px;margin-bottom:12px;display:flex;align-items:center;gap:10px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <input type="text" placeholder="Email" style="background:transparent;border:none;outline:none;color:white;font-size:14px;width:100%;font-family:'Inter',sans-serif;" placeholder="Email">
    </div>
    <div style="background:rgba(255,255,255,0.15);border-radius:12px;padding:14px 16px;margin-bottom:24px;display:flex;align-items:center;gap:10px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <input type="password" placeholder="Password" style="background:transparent;border:none;outline:none;color:white;font-size:14px;width:100%;font-family:'Inter',sans-serif;">
    </div>
    <button style="width:100%;background:white;color:#6C5CE7;border:none;padding:14px;border-radius:12px;font-size:16px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;">Accedi</button>
    <p style="text-align:center;color:rgba(255,255,255,0.6);font-size:13px;margin-top:16px;">Password dimenticata?</p>
  </div>
</div>`
};

// =========================================
// TEMPLATE: Profilo Utente
// =========================================
const templateProfile = {
  category: '🎯 Template',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="#6C5CE7"/><rect x="4" y="16" width="16" height="2" rx="1" fill="#6C5CE7" opacity="0.3"/></svg>`,
  content: `
<div style="background:#F5F6FA;min-height:100vh;font-family:'Inter',sans-serif;">
  <!-- Cover + Avatar -->
  <div style="background:linear-gradient(135deg,#6C5CE7,#A29BFE);height:140px;border-radius:0 0 24px 24px;position:relative;">
    <div style="position:absolute;bottom:-40px;left:50%;transform:translateX(-50%);">
      <div style="width:80px;height:80px;background:white;border-radius:50%;padding:3px;">
        <div style="width:100%;height:100%;background:linear-gradient(135deg,#6C5CE7,#A29BFE);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;color:white;font-weight:700;">M</div>
      </div>
    </div>
  </div>
  <!-- Info -->
  <div style="text-align:center;padding:50px 20px 20px;">
    <h2 style="font-size:22px;font-weight:700;color:#2D3436;margin:0;">Mario Rossi</h2>
    <p style="font-size:14px;color:#636E72;margin:4px 0 16px 0;">mario.rossi@email.com</p>
    <div style="display:flex;justify-content:center;gap:12px;">
      <div style="flex:1;background:white;border-radius:16px;padding:14px;text-align:center;"><div style="font-size:22px;font-weight:700;color:#6C5CE7;">128</div><div style="font-size:12px;color:#636E72;">Progetti</div></div>
      <div style="flex:1;background:white;border-radius:16px;padding:14px;text-align:center;"><div style="font-size:22px;font-weight:700;color:#E84393;">56</div><div style="font-size:12px;color:#636E72;">Task</div></div>
      <div style="flex:1;background:white;border-radius:16px;padding:14px;text-align:center;"><div style="font-size:22px;font-weight:700;color:#00B894;">34</div><div style="font-size:12px;color:#636E72;">Team</div></div>
    </div>
  </div>
  <!-- About -->
  <div style="padding:20px;">
    <h3 style="font-size:16px;font-weight:600;color:#2D3436;margin:0 0 12px 0;">Informazioni</h3>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;justify-content:space-between;padding:12px 16px;background:white;border-radius:12px;"><span style="color:#636E72;font-size:14px;">Posizione</span><span style="color:#2D3436;font-size:14px;font-weight:500;">Designer</span></div>
      <div style="display:flex;justify-content:space-between;padding:12px 16px;background:white;border-radius:12px;"><span style="color:#636E72;font-size:14px;">Luogo</span><span style="color:#2D3436;font-size:14px;font-weight:500;">Milano, Italia</span></div>
      <div style="display:flex;justify-content:space-between;padding:12px 16px;background:white;border-radius:12px;"><span style="color:#636E72;font-size:14px;">Membro dal</span><span style="color:#2D3436;font-size:14px;font-weight:500;">Gen 2024</span></div>
    </div>
  </div>
</div>`
};

// =========================================
// TEMPLATE: Schermata Settings
// =========================================
const templateSettings = {
  category: '🎯 Template',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="#6C5CE7"/><path d="M12 1l2 3h4l1 4 3 2-1 4 1 4-3 2-1 4h-4l-2 3-2-3H6l-1-4-3-2 1-4-1-4 3-2 1-4h4z" stroke="#6C5CE7" stroke-width="1.5" fill="none"/></svg>`,
  content: `
<div style="background:#F5F6FA;min-height:100vh;font-family:'Inter',sans-serif;">
  <div style="display:flex;align-items:center;padding:20px;gap:12px;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D3436" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    <h1 style="font-size:22px;font-weight:700;color:#2D3436;margin:0;">Impostazioni</h1>
  </div>

  <!-- Sezione Account -->
  <div style="padding:0 20px;margin-bottom:20px;">
    <div style="font-size:13px;font-weight:600;color:#B2BEC3;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">Account</div>
    <div style="background:white;border-radius:16px;overflow:hidden;">
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid #F0F0F0;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636E72" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-8 8-8s8 4 8 8"/></svg><span style="flex:1;margin-left:12px;font-size:14px;color:#2D3436;">Profilo</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B2BEC3" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></div>
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid #F0F0F0;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636E72" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span style="flex:1;margin-left:12px;font-size:14px;color:#2D3436;">Password</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B2BEC3" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></div>
      <div style="display:flex;align-items:center;padding:14px 16px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636E72" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span style="flex:1;margin-left:12px;font-size:14px;color:#2D3436;">Email</span><span style="font-size:14px;color:#B2BEC3;">mario@email.com</span></div>
    </div>
  </div>

  <!-- Sezione Notifiche -->
  <div style="padding:0 20px;margin-bottom:20px;">
    <div style="font-size:13px;font-weight:600;color:#B2BEC3;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">Notifiche</div>
    <div style="background:white;border-radius:16px;overflow:hidden;">
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid #F0F0F0;"><span style="flex:1;font-size:14px;color:#2D3436;">Notifiche push</span><label style="position:relative;display:inline-block;width:44px;height:24px;"><input type="checkbox" checked style="opacity:0;width:0;height:0;"><span style="position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#6C5CE7;border-radius:12px;"><span style="position:absolute;height:18px;width:18px;right:3px;top:3px;background:white;border-radius:50%;"></span></span></label></div>
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid #F0F0F0;"><span style="flex:1;font-size:14px;color:#2D3436;">Email settimanale</span><label style="position:relative;display:inline-block;width:44px;height:24px;"><input type="checkbox" style="opacity:0;width:0;height:0;"><span style="position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#DFE6E9;border-radius:12px;"><span style="position:absolute;height:18px;width:18px;left:3px;top:3px;background:white;border-radius:50%;"></span></span></label></div>
      <div style="display:flex;align-items:center;padding:14px 16px;"><span style="flex:1;font-size:14px;color:#2D3436;">SMS promozionali</span><label style="position:relative;display:inline-block;width:44px;height:24px;"><input type="checkbox" style="opacity:0;width:0;height:0;"><span style="position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#DFE6E9;border-radius:12px;"><span style="position:absolute;height:18px;width:18px;left:3px;top:3px;background:white;border-radius:50%;"></span></span></label></div>
    </div>
  </div>
</div>`
};

// =========================================
// TEMPLATE: Schermata Task List
// =========================================
const templateTaskList = {
  category: '🎯 Template',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="6" y="3" width="12" height="18" rx="2" fill="#6C5CE7" opacity="0.12"/><rect x="9" y="7" width="6" height="2" rx="1" fill="#6C5CE7"/><rect x="9" y="11" width="6" height="2" rx="1" fill="#6C5CE7" opacity="0.6"/></svg>`,
  content: `
<div style="background:#F5F6FA;min-height:100vh;font-family:'Inter',sans-serif;">
  <div style="display:flex;align-items:center;justify-content:space-between;padding:20px 20px 12px;">
    <div style="display:flex;align-items:center;gap:12px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D3436" stroke-width="2"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 3v18"/></svg>
      <h1 style="font-size:22px;font-weight:700;color:#2D3436;margin:0;">Task List</h1>
    </div>
    <div style="display:flex;gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636E72" stroke-width="2"><circle cx="18" cy="5" r="3"/><path d="M10.88 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6.88"/><path d="M3 17l4-4 3 3 8-8"/></svg>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636E72" stroke-width="2"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
    </div>
  </div>

  <!-- Filtri -->
  <div style="padding:0 20px 16px;display:flex;gap:8px;">
    <div style="background:#2D3436;color:white;padding:6px 16px;border-radius:20px;display:flex;align-items:center;gap:6px;font-size:13px;font-weight:500;">
      <span style="width:18px;height:18px;background:#00B894;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;">✓</span> Complete <span style="color:#B2BEC3;font-weight:400;">65</span>
    </div>
    <div style="background:white;color:#636E72;padding:6px 16px;border-radius:20px;display:flex;align-items:center;gap:6px;font-size:13px;font-weight:500;border:1px solid #DFE6E9;">
      <span style="width:18px;height:18px;background:#DFE6E9;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;color:#636E72;">45</span> To Do
    </div>
    <div style="background:white;color:#636E72;padding:6px 16px;border-radius:20px;display:flex;align-items:center;gap:6px;font-size:13px;font-weight:500;border:1px solid #DFE6E9;">
      <span style="width:18px;height:18px;background:#FFD5F0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;color:#E84393;">3</span> In Review
    </div>
  </div>

  <!-- Tasks -->
  ${[
    {title:'Dashboard design for admin',tags:[{l:'High',c:'#E84393',b:'white'},{l:'On Track',c:'#6C5CE7',b:'#E8D5FF'}], date:'14 oct 2022', v:5, c:5, bg:'white'},
    {title:'Konom web application',tags:[{l:'Low',c:'white',b:'#00B894'},{l:'Meeting',c:'#6C5CE7',b:'#E8D5FF'}], date:'14 Nov 2022', v:2, c:4, bg:'white'},
    {title:'Research and development',tags:[{l:'Medium',c:'#2D3436',b:'white'},{l:'At Risk',c:'#2D3436',b:'rgba(255,255,255,0.8)'}], date:'14 oct 2022', v:6, c:2, bg:'#00B894', tc:'white'},
    {title:'Event booking application',tags:[{l:'Medium',c:'white',b:'#F39C12'},{l:'Meeting',c:'#6C5CE7',b:'#E8D5FF'}], date:'14 oct 2022', v:5, c:5, bg:'white'},
  ].map((t,i) => `
    <div style="background:${t.bg};border-radius:16px;padding:14px;margin:0 20px 10px;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div style="font-size:14px;font-weight:600;color:${t.tc || '#2D3436'};">${t.title}</div>
        <span style="color:${t.tc ? 'rgba(255,255,255,0.6)' : '#B2BEC3'};font-size:14px;">⋯</span>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;">
        ${t.tags.map(tag => `<span style="font-size:11px;font-weight:600;color:${tag.c};background:${tag.b};padding:2px 8px;border-radius:4px;">${tag.l}</span>`).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:12px;color:${t.tc ? 'rgba(255,255,255,0.7)' : '#B2BEC3'};">${t.date}</span>
          <span style="font-size:12px;color:${t.tc ? 'rgba(255,255,255,0.7)' : '#B2BEC3'};">👁 ${t.v}</span>
          <span style="font-size:12px;color:${t.tc ? 'rgba(255,255,255,0.7)' : '#B2BEC3'};">💬 ${t.c}</span>
        </div>
        <div style="display:flex;">
          ${['#DFE6E9','#6C5CE7','#00B894'].map((c,j) => `<div style="width:22px;height:22px;background:${c};border-radius:50%;border:2px solid ${t.bg};${j>0?'margin-left:-8px;':''}"></div>`).join('')}
        </div>
      </div>
    </div>
  `).join('')}

  <!-- FAB -->
  <div style="position:fixed;bottom:80px;right:20px;width:56px;height:56px;background:#6C5CE7;border-radius:16px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(108,92,231,0.4);">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  </div>
</div>`
};
