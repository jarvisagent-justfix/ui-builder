/* =====================================================
   basic-elements.js — Elementi base UI
   ===================================================== */

const blockText = {
  category: 'Elementi Base',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" fill="#6C5CE7" opacity="0.15"/><text x="12" y="16" text-anchor="middle" font-size="12" fill="#6C5CE7" font-weight="bold">T</text></svg>`,
  content: `<div style="font-family: 'Inter', sans-serif; padding: 8px;">
    <h1 style="font-size: 24px; font-weight: 700; color: #2D3436; margin: 0 0 4px 0;">Titolo</h1>
    <p style="font-size: 14px; color: #636E72; margin: 0;">Testo descrittivo paragrafo</p>
  </div>`
};

const blockTitle = {
  category: 'Elementi Base',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="4" rx="2" fill="#6C5CE7" opacity="0.3"/><rect x="3" y="14" width="12" height="3" rx="1.5" fill="#6C5CE7" opacity="0.15"/></svg>`,
  content: `<h2 style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 600; color: #2D3436; margin: 0; padding: 8px;">Titolo Sezione</h2>`
};

const blockParagraph = {
  category: 'Elementi Base',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="3" rx="1.5" fill="#636E72" opacity="0.3"/><rect x="3" y="10" width="16" height="3" rx="1.5" fill="#636E72" opacity="0.2"/><rect x="3" y="16" width="14" height="3" rx="1.5" fill="#636E72" opacity="0.15"/></svg>`,
  content: `<p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #636E72; line-height: 1.6; padding: 8px; margin: 0;">Testo descrittivo. Puoi modificarlo con doppio click.</p>`
};

const blockButton = {
  category: 'Elementi Base',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="6" fill="#6C5CE7"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Btn</text></svg>`,
  content: `<button style="font-family: 'Inter', sans-serif; background: #6C5CE7; color: white; border: none; padding: 10px 24px; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;">Pulsante</button>`
};

const blockButtonOutline = {
  category: 'Elementi Base',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="6" stroke="#6C5CE7" stroke-width="2" fill="none"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#6C5CE7" font-weight="bold">Btn</text></svg>`,
  content: `<button style="font-family: 'Inter', sans-serif; background: transparent; color: #6C5CE7; border: 2px solid #6C5CE7; padding: 8px 24px; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer;">Outline</button>`
};

const blockImage = {
  category: 'Elementi Base',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="3" fill="#DFE6E9"/><circle cx="9" cy="11" r="3" fill="#B2BEC3"/><path d="M3 18l5-5 4 4 3-3 6 6" stroke="#B2BEC3" stroke-width="1.5" fill="none"/></svg>`,
  content: `<div style="background: #DFE6E9; border-radius: 12px; display: flex; align-items: center; justify-content: center; padding: 40px; margin: 8px;">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#B2BEC3"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="11" r="3"/><path d="M3 18l5-5 4 4 3-3 6 6" fill="none" stroke="white" stroke-width="1.5"/></svg>
  </div>`
};

const blockIcon = {
  category: 'Elementi Base',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="#E8D5FF"/><path d="M12 7v5l3 3" stroke="#6C5CE7" stroke-width="2" fill="none"/></svg>`,
  content: `<div style="display: flex; align-items: center; justify-content: center; padding: 12px;">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  </div>`
};

const blockDivider = {
  category: 'Elementi Base',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="2" rx="1" fill="#DFE6E9"/></svg>`,
  content: `<hr style="border: none; border-top: 1px solid #DFE6E9; margin: 16px 0; width: 100%;"/>`
};

const blockSpacer = {
  category: 'Elementi Base',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="8" y="3" width="8" height="18" rx="2" fill="#DFE6E9" opacity="0.5"/></svg>`,
  content: `<div style="height: 16px; width: 100%;"></div>`
};
