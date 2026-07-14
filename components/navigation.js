/* =====================================================
   navigation.js — Blocchi di navigazione
   ===================================================== */

const blockTabBar = {
  category: 'Navigazione',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="8" rx="4" fill="#6C5CE7" opacity="0.12"/><rect x="5" y="10" width="5" height="4" rx="2" fill="#6C5CE7"/><rect x="12" y="10" width="3" height="4" rx="2" fill="#B2BEC3"/><rect x="17" y="10" width="3" height="4" rx="2" fill="#B2BEC3"/></svg>`,
  content: `<div style="display:flex;background:white;border-radius:12px;padding:4px;margin:8px;font-family:'Inter',sans-serif;">
    <div style="flex:1;padding:8px;text-align:center;background:#6C5CE7;color:white;border-radius:8px;font-size:13px;font-weight:600;">Tab 1</div>
    <div style="flex:1;padding:8px;text-align:center;color:#636E72;font-size:13px;font-weight:500;">Tab 2</div>
    <div style="flex:1;padding:8px;text-align:center;color:#636E72;font-size:13px;font-weight:500;">Tab 3</div>
  </div>`
};

const blockSearchNav = {
  category: 'Navigazione',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="10" rx="4" fill="#6C5CE7" opacity="0.08"/><circle cx="9" cy="10" r="2.5" stroke="#636E72" stroke-width="1.5" fill="none"/><path d="M11 11l2 2" stroke="#636E72" stroke-width="1.5"/></svg>`,
  content: `<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:white;font-family:'Inter',sans-serif;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D3436" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    <h1 style="font-size:20px;font-weight:700;color:#2D3436;margin:0;flex:1;">Titolo</h1>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636E72" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></svg>
  </div>`
};

const blockBackButton = {
  category: 'Navigazione',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="#6C5CE7" opacity="0.1"/><path d="M14 8l-4 4 4 4" stroke="#6C5CE7" stroke-width="2" fill="none"/></svg>`,
  content: `<div style="display:flex;align-items:center;gap:8px;padding:8px;font-family:'Inter',sans-serif;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D3436" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    <span style="font-size:16px;font-weight:600;color:#2D3436;">Indietro</span>
  </div>`
};
