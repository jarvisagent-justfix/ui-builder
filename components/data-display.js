/* =====================================================
   data-display.js — Visualizzazione dati
   ===================================================== */

const blockBadge = {
  category: 'Dati e Stati',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="8" width="16" height="8" rx="4" fill="#E8D5FF"/><text x="12" y="15" text-anchor="middle" font-size="9" fill="#6C5CE7" font-weight="bold">Tag</text></svg>`,
  content: `<div style="display: flex; gap: 6px; flex-wrap: wrap; padding: 8px; font-family: 'Inter', sans-serif;">
    <span style="font-size: 12px; font-weight: 600; color: white; background: #6C5CE7; padding: 4px 10px; border-radius: 6px;">Primary</span>
    <span style="font-size: 12px; font-weight: 600; color: #E84393; background: #FFD5F0; padding: 4px 10px; border-radius: 6px;">Pink</span>
    <span style="font-size: 12px; font-weight: 600; color: #00B894; background: #D5FFE8; padding: 4px 10px; border-radius: 6px;">Green</span>
    <span style="font-size: 12px; font-weight: 600; color: #F39C12; background: #FFE8D5; padding: 4px 10px; border-radius: 6px;">Orange</span>
  </div>`
};

const blockProgressBar = {
  category: 'Dati e Stati',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="4" rx="2" fill="#DFE6E9"/><rect x="3" y="10" width="12" height="4" rx="2" fill="#6C5CE7"/></svg>`,
  content: `
    <div style="padding: 8px; font-family: 'Inter', sans-serif;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
        <span style="font-size: 13px; color: #2D3436; font-weight: 500;">Progresso</span>
        <span style="font-size: 13px; color: #6C5CE7; font-weight: 600;">60%</span>
      </div>
      <div style="background: #F0F0F0; border-radius: 6px; height: 8px; overflow: hidden;">
        <div style="width: 60%; height: 100%; background: linear-gradient(90deg, #6C5CE7, #A29BFE); border-radius: 6px; transition: width 0.3s;"></div>
      </div>
    </div>`
};

const blockProfileCard = {
  category: 'Dati e Stati',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="#DFE6E9"/><rect x="4" y="16" width="16" height="4" rx="2" fill="#DFE6E9"/></svg>`,
  content: `
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border-radius: 12px; margin: 8px; font-family: 'Inter', sans-serif;">
      <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #6C5CE7, #A29BFE); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 18px;">M</div>
      <div>
        <div style="font-size: 15px; font-weight: 600; color: #2D3436;">Mario Rossi</div>
        <div style="font-size: 13px; color: #636E72;">mario@email.com</div>
      </div>
    </div>`
};

const blockAlert = {
  category: 'Dati e Stati',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="4" fill="#D5FFE8"/><circle cx="12" cy="12" r="3" fill="#00B894"/></svg>`,
  content: `
    <div style="display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: #D5FFE8; border-radius: 12px; margin: 8px; font-family: 'Inter', sans-serif;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B894" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span style="font-size: 14px; color: #00B894; font-weight: 500;">Operazione completata con successo</span>
    </div>`
};

const blockAlertError = {
  category: 'Dati e Stati',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="4" fill="#FFD5D5"/><circle cx="12" cy="12" r="3" fill="#E84393"/></svg>`,
  content: `
    <div style="display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: #FFD5D5; border-radius: 12px; margin: 8px; font-family: 'Inter', sans-serif;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E84393" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="15" y1="9" x2="9" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
      <span style="font-size: 14px; color: #E84393; font-weight: 500;">Errore: qualcosa non ha funzionato</span>
    </div>`
};

const blockEmptyState = {
  category: 'Dati e Stati',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="3" fill="#DFE6E9" opacity="0.5"/><circle cx="12" cy="10" r="3" fill="#B2BEC3"/><rect x="8" y="15" width="8" height="2" rx="1" fill="#B2BEC3" opacity="0.5"/></svg>`,
  content: `
    <div style="display: flex; flex-direction: column; align-items: center; padding: 32px 16px; font-family: 'Inter', sans-serif;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="#DFE6E9"><rect x="5" y="3" width="14" height="18" rx="3"/><circle cx="12" cy="10" r="3"/></svg>
      <p style="font-size: 16px; font-weight: 600; color: #2D3436; margin: 12px 0 4px 0;">Nessun dato</p>
      <p style="font-size: 13px; color: #636E72; margin: 0;">Non ci sono ancora elementi da mostrare</p>
    </div>`
};

const blockLoading = {
  category: 'Dati e Stati',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#DFE6E9" stroke-width="3" fill="none"/><path d="M12 4a8 8 0 0 1 8 8" stroke="#6C5CE7" stroke-width="3" fill="none"/></svg>`,
  content: `
    <div style="display: flex; flex-direction: column; align-items: center; padding: 24px; font-family: 'Inter', sans-serif;">
      <div style="width: 32px; height: 32px; border: 3px solid #F0F0F0; border-top: 3px solid #6C5CE7; border-radius: 50%; animation: spin 1s linear infinite;"></div>
      <p style="font-size: 14px; color: #636E72; margin-top: 12px;">Caricamento in corso...</p>
    </div>
    <style>@keyframes spin { to { transform: rotate(360deg); } }</style>`
};
