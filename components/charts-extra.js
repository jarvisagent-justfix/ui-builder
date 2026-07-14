/* =====================================================
   charts-extra.js — Grafici extra, Commerce, Social, Calendar
   ===================================================== */

// =========================================
// CHART EXTRA: Line Chart
// =========================================
const blockLineChart = {
  category: 'Grafici',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polyline points="3,18 7,10 12,14 17,6 21,10" stroke="#6C5CE7" stroke-width="2" fill="none"/></svg>`,
  content: `
<div style="background:white;border-radius:16px;padding:20px;margin:8px;font-family:'Inter',sans-serif;">
  <div style="display:flex;justify-content:space-between;margin-bottom:16px;">
    <div><div style="font-size:14px;font-weight:600;color:#2D3436;">Andamento</div><div style="font-size:11px;color:#B2BEC3;">Ultimi 7 giorni</div></div>
    <div style="text-align:right;"><div style="font-size:20px;font-weight:700;color:#2D3436;">+12.5%</div><div style="font-size:11px;color:#00B894;">vs settimana scorsa</div></div>
  </div>
  <svg width="100%" height="100" viewBox="0 0 280 100" preserveAspectRatio="none">
    <path d="M0,80 C20,75 40,60 60,50 C80,40 100,45 120,30 C140,15 160,35 180,25 C200,15 220,40 240,20 C260,10 280,30 280,30" stroke="#6C5CE7" stroke-width="2.5" fill="none"/>
    <path d="M0,80 C20,75 40,60 60,50 C80,40 100,45 120,30 C140,15 160,35 180,25 C200,15 220,40 240,20 C260,10 280,30 280,30 L280,100 L0,100 Z" fill="#6C5CE7" opacity="0.08"/>
    <circle cx="140" cy="30" r="4" fill="#6C5CE7" stroke="white" stroke-width="2"/>
  </svg>
  <div style="display:flex;justify-content:space-between;font-size:10px;color:#B2BEC3;margin-top:4px;">
    <span>Lun</span><span>Mar</span><span>Mer</span><span>Gio</span><span>Ven</span><span>Sab</span><span>Dom</span>
  </div>
</div>`
};

// =========================================
// CHART EXTRA: Pie Chart
// =========================================
const blockPieChart = {
  category: 'Grafici',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#6C5CE7" opacity="0.15"/><path d="M12 4a8 8 0 0 1 6.93 4L12 12V4z" fill="#6C5CE7"/><path d="M12 12l5.73 3.3A8 8 0 0 1 12 20v-8z" fill="#E84393"/></svg>`,
  content: `
<div style="display:flex;align-items:center;gap:20px;background:white;border-radius:16px;padding:20px;margin:8px;font-family:'Inter',sans-serif;">
  <svg width="80" height="80" viewBox="0 0 36 36">
    <path d="M18 2a16 16 0 0 1 13.86 8L18 18V2z" fill="#6C5CE7"/>
    <path d="M18 18l8.66 5A16 16 0 0 1 10 33.9V18h8z" fill="#E84393"/>
    <path d="M10 18v15.9A16 16 0 0 1 2 18h8z" fill="#00B894"/>
    <path d="M18 18l-8 15.9A16 16 0 0 1 18 2v16z" fill="#F39C12"/>
  </svg>
  <div>
    <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#636E72;margin-bottom:6px;"><span style="width:10px;height:10px;background:#6C5CE7;border-radius:2px;"></span> Progress <span style="font-weight:600;color:#2D3436;">40%</span></div>
    <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#636E72;margin-bottom:6px;"><span style="width:10px;height:10px;background:#E84393;border-radius:2px;"></span> Review <span style="font-weight:600;color:#2D3436;">25%</span></div>
    <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#636E72;margin-bottom:6px;"><span style="width:10px;height:10px;background:#00B894;border-radius:2px;"></span> Done <span style="font-weight:600;color:#2D3436;">20%</span></div>
    <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#636E72;"><span style="width:10px;height:10px;background:#F39C12;border-radius:2px;"></span> Hold <span style="font-weight:600;color:#2D3436;">15%</span></div>
  </div>
</div>`
};

// =========================================
// COMMERCE: Product Card + Price
// =========================================
const blockProductCard = {
  category: 'Commerce',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="10" rx="3" fill="#6C5CE7" opacity="0.12"/><rect x="6" y="16" width="5" height="1.5" rx=".75" fill="#636E72"/><rect x="6" y="19" width="8" height="1.5" rx=".75" fill="#6C5CE7"/></svg>`,
  content: `
<div style="background:white;border-radius:16px;overflow:hidden;margin:8px;box-shadow:0 2px 12px rgba(0,0,0,0.06);font-family:'Inter',sans-serif;">
  <div style="height:120px;background:linear-gradient(135deg,#6C5CE7,#A29BFE);display:flex;align-items:center;justify-content:center;">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)"><rect x="4" y="2" width="16" height="20" rx="3"/><circle cx="12" cy="12" r="4"/></svg>
  </div>
  <div style="padding:14px;">
    <div style="font-size:16px;font-weight:600;color:#2D3436;margin-bottom:4px;">Prodotto Premium</div>
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#6C5CE7;">€29,99</span>
      <span style="font-size:12px;color:#00B894;font-weight:600;">In offerta</span>
    </div>
  </div>
</div>`
};

const blockRating = {
  category: 'Commerce',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="12,2 15,9 22,9 16.5,14 18.5,22 12,17.5 5.5,22 7.5,14 2,9 9,9" fill="#F39C12"/></svg>`,
  content: `<div style="display:flex;align-items:center;gap:4px;padding:8px;font-family:'Inter',sans-serif;">
    ${[1,2,3,4,5].map(i => `<svg width="18" height="18" viewBox="0 0 24 24" fill="${i<=4?'#F39C12':'#DFE6E9'}"><polygon points="12,2 15,9 22,9 16.5,14 18.5,22 12,17.5 5.5,22 7.5,14 2,9 9,9"/></svg>`).join('')}
    <span style="font-size:12px;color:#636E72;margin-left:4px;">(128 recensioni)</span>
  </div>`
};

// =========================================
// SOCIAL: Post Card + Comment
// =========================================
const blockPostCard = {
  category: 'Social',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" fill="#6C5CE7"/><rect x="3" y="13" width="18" height="2" rx="1" fill="#6C5CE7" opacity="0.2"/><rect x="3" y="17" width="14" height="2" rx="1" fill="#6C5CE7" opacity="0.12"/></svg>`,
  content: `
<div style="background:white;border-radius:16px;padding:16px;margin:8px;font-family:'Inter',sans-serif;">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
    <div style="width:36px;height:36px;background:#6C5CE7;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:16px;">M</div>
    <div><div style="font-size:14px;font-weight:600;color:#2D3436;">Mario Rossi</div><div style="font-size:12px;color:#B2BEC3;">2 ore fa</div></div>
  </div>
  <p style="font-size:14px;color:#2D3436;line-height:1.5;margin:0 0 12px 0;">Grande giornata di lavoro! 🚀 Progetto completato con successo.</p>
  <div style="display:flex;gap:20px;">
    <span style="display:flex;align-items:center;gap:4px;font-size:13px;color:#636E72;">❤️ 24</span>
    <span style="display:flex;align-items:center;gap:4px;font-size:13px;color:#636E72;">💬 8</span>
    <span style="display:flex;align-items:center;gap:4px;font-size:13px;color:#636E72;">↗️ 3</span>
  </div>
</div>`
};

const blockNotification = {
  category: 'Social',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="20" cy="5" r="3" fill="#E84393"/><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#636E72" stroke-width="1.5" fill="none"/></svg>`,
  content: `
<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;margin:4px 8px;background:#F0F4FF;border-radius:12px;font-family:'Inter',sans-serif;">
  <div style="width:40px;height:40px;background:#6C5CE7;border-radius:10px;display:flex;align-items:center;justify-content:center;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
  </div>
  <div><div style="font-size:14px;font-weight:600;color:#2D3436;">Nuovo task assegnato</div><div style="font-size:12px;color:#636E72;">5 minuti fa</div></div>
  <span style="margin-left:auto;width:8px;height:8px;background:#E84393;border-radius:50%;"></span>
</div>`
};

// =========================================
// CALENDAR: Mini Calendar + Event Card
// =========================================
const blockMiniCalendar = {
  category: 'Calendario',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="14" rx="3" fill="#6C5CE7" opacity="0.1"/><rect x="3" y="6" width="18" height="4" rx="2" fill="#6C5CE7"/><rect x="7" y="14" width="4" height="2" rx="1" fill="#636E72"/></svg>`,
  content: `
<div style="background:white;border-radius:16px;padding:16px;margin:8px;font-family:'Inter',sans-serif;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#636E72" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
    <span style="font-size:15px;font-weight:600;color:#2D3436;">Luglio 2026</span>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#636E72" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  </div>
  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;font-size:12px;">
    ${['L','M','M','G','V','S','D'].map(d => `<div style="font-weight:600;color:#B2BEC3;padding:4px 0;">${d}</div>`).join('')}
    ${[29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2].map((n,i) => {
      const today = n === 14;
      return `<div style="padding:6px 0;${today?'background:#6C5CE7;color:white;border-radius:50%;width:32px;margin:0 auto;':''}${n===29||n===30||n>31?'color:#DFE6E9;':''}font-weight:${today?'700':'400'};">${n}</div>`;
    }).join('')}
  </div>
</div>`
};

const blockEventCard = {
  category: 'Calendario',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="4" height="16" rx="1" fill="#6C5CE7"/><rect x="11" y="7" width="4" height="13" rx="1" fill="#E84393"/><rect x="17" y="10" width="4" height="10" rx="1" fill="#00B894"/></svg>`,
  content: `
<div style="display:flex;align-items:center;gap:12px;padding:14px;margin:4px 8px;background:white;border-radius:12px;border-left:4px solid #6C5CE7;font-family:'Inter',sans-serif;">
  <div style="text-align:center;min-width:36px;">
    <div style="font-size:18px;font-weight:700;color:#2D3436;">14</div>
    <div style="font-size:11px;color:#636E72;">Lug</div>
  </div>
  <div><div style="font-size:14px;font-weight:600;color:#2D3436;">Review di progetto</div><div style="font-size:12px;color:#636E72;">10:00 - 11:30</div></div>
  <div style="margin-left:auto;width:8px;height:8px;background:#6C5CE7;border-radius:50%;"></div>
</div>`
};
