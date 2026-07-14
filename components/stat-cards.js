/* =====================================================
   stat-cards.js — Card statistiche e griglia 2×2
   ===================================================== */

// Genera una stat card con parametri personalizzabili
function statCardFn(bg, color, label, number) {
  return {
    category: 'Dashboard',
    content: `
      <div style="background: ${bg}; border-radius: 16px; padding: 16px; min-width: 140px; font-family: 'Inter', sans-serif; position: relative; overflow: hidden;">
        <!-- Wave decorativa -->
        <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 30px; opacity: 0.15;" viewBox="0 0 144 30" preserveAspectRatio="none">
          <path d="M0,15 C36,0 72,30 108,15 C126,7.5 144,15 144,15 L144,30 L0,30 Z" fill="${color}"/>
        </svg>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; position: relative;">
          <div>
            <div style="font-size: 28px; font-weight: 700; color: ${color}; line-height: 1.2;">${number}</div>
            <div style="font-size: 13px; color: #636E72; font-weight: 500; margin-top: 4px;">${label}</div>
          </div>
          <button style="background: none; border: none; cursor: pointer; padding: 4px; color: #B2BEC3;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/>
            </svg>
          </button>
        </div>
      </div>
    `
  };
}

// Griglia 2×2 delle stat card
const statGrid = {
  category: 'Dashboard',
  content: `
    <div style="padding: 0 20px 20px; background: #F5F6FA; font-family: 'Inter', sans-serif;">
      <div style="font-size: 14px; font-weight: 600; color: #2D3436; margin-bottom: 12px;">Project Summary</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <!-- In Progress -->
        <div style="background: #E8D5FF; border-radius: 16px; padding: 16px; position: relative; overflow: hidden;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; position: relative;">
            <div><div style="font-size: 28px; font-weight: 700; color: #6C5CE7; line-height: 1.2;">24</div><div style="font-size: 13px; color: #636E72; font-weight: 500; margin-top: 4px;">In Progress</div></div>
            <span style="color: #B2BEC3; font-size: 16px;">⋯</span>
          </div>
          <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 24px; opacity: 0.12;" viewBox="0 0 140 24" preserveAspectRatio="none"><path d="M0,12 C35,0 70,24 105,12 C122.5,6 140,12 140,12 L140,24 L0,24 Z" fill="#6C5CE7"/></svg>
        </div>
        <!-- In Review -->
        <div style="background: #FFD5F0; border-radius: 16px; padding: 16px; position: relative; overflow: hidden;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; position: relative;">
            <div><div style="font-size: 28px; font-weight: 700; color: #E84393; line-height: 1.2;">56</div><div style="font-size: 13px; color: #636E72; font-weight: 500; margin-top: 4px;">In Review</div></div>
            <span style="color: #B2BEC3; font-size: 16px;">⋯</span>
          </div>
          <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 24px; opacity: 0.12;" viewBox="0 0 140 24" preserveAspectRatio="none"><path d="M0,12 C35,0 70,24 105,12 C122.5,6 140,12 140,12 L140,24 L0,24 Z" fill="#E84393"/></svg>
        </div>
        <!-- On Hold -->
        <div style="background: #FFE8D5; border-radius: 16px; padding: 16px; position: relative; overflow: hidden;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; position: relative;">
            <div><div style="font-size: 28px; font-weight: 700; color: #F39C12; line-height: 1.2;">16</div><div style="font-size: 13px; color: #636E72; font-weight: 500; margin-top: 4px;">On Hold</div></div>
            <span style="color: #B2BEC3; font-size: 16px;">⋯</span>
          </div>
          <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 24px; opacity: 0.12;" viewBox="0 0 140 24" preserveAspectRatio="none"><path d="M0,12 C35,0 70,24 105,12 C122.5,6 140,12 140,12 L140,24 L0,24 Z" fill="#F39C12"/></svg>
        </div>
        <!-- Completed -->
        <div style="background: #D5FFE8; border-radius: 16px; padding: 16px; position: relative; overflow: hidden;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; position: relative;">
            <div><div style="font-size: 28px; font-weight: 700; color: #00B894; line-height: 1.2;">45</div><div style="font-size: 13px; color: #636E72; font-weight: 500; margin-top: 4px;">Completed</div></div>
            <span style="color: #B2BEC3; font-size: 16px;">⋯</span>
          </div>
          <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 24px; opacity: 0.12;" viewBox="0 0 140 24" preserveAspectRatio="none"><path d="M0,12 C35,0 70,24 105,12 C122.5,6 140,12 140,12 L140,24 L0,24 Z" fill="#00B894"/></svg>
        </div>
      </div>
    </div>
  `
};
