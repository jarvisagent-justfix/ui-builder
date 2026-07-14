/* =====================================================
   themes.js — Cambio tema (Chiaro / Scuro / Aziendale)
   ===================================================== */

const themes = {
  light: {
    name: 'Chiaro',
    bg: '#F5F6FA',
    surface: '#FFFFFF',
    text: '#2D3436',
    textSecondary: '#636E72',
    border: '#F0F0F0',
    primary: '#6C5CE7',
    toolbarBg: '#1a1a2e',
    cardBg: '#FFFFFF',
    iconColor: '#B2BEC3',
  },
  dark: {
    name: 'Scuro',
    bg: '#0D0D1A',
    surface: '#1A1A2E',
    text: '#EAEAEA',
    textSecondary: '#A0A0B0',
    border: '#2A2A3E',
    primary: '#A29BFE',
    toolbarBg: '#0D0D1A',
    cardBg: '#1A1A2E',
    iconColor: '#555570',
  },
  corporate: {
    name: 'Aziendale',
    bg: '#F0F4F8',
    surface: '#FFFFFF',
    text: '#1A2332',
    textSecondary: '#5A6978',
    border: '#E2E8F0',
    primary: '#2563EB',
    toolbarBg: '#1A2332',
    cardBg: '#FFFFFF',
    iconColor: '#94A3B8',
  },
};

function applyTheme(themeName) {
  const t = themes[themeName] || themes.light;
  // Li applichiamo via CSS variables
  document.body.style.setProperty('--app-bg', t.bg);
  document.body.style.setProperty('--app-surface', t.surface);
  document.body.style.setProperty('--app-text', t.text);
  document.body.style.setProperty('--app-text-secondary', t.textSecondary);
  document.body.style.setProperty('--app-border', t.border);
  document.body.style.setProperty('--app-primary', t.primary);
  document.body.style.setProperty('--app-card-bg', t.cardBg);
  document.body.style.setProperty('--app-icon', t.iconColor);
  localStorage.setItem('ui-builder-theme', themeName);
}
