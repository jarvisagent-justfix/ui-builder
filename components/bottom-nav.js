/* =====================================================
   bottom-nav.js — Bottom navigation bar
   ===================================================== */

const bottomNav = {
  category: 'Componenti',
  content: `
    <div style="display: flex; justify-content: space-around; align-items: center; padding: 10px 20px; background: white; border-top: 1px solid #F0F0F0; font-family: 'Inter', sans-serif; position: sticky; bottom: 0;">
      <!-- Grid icon -->
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B2BEC3" stroke-width="2">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>

      <!-- Task attivo -->
      <div style="display: flex; align-items: center; gap: 6px; background: #2D3436; padding: 6px 16px; border-radius: 20px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span style="font-size: 13px; font-weight: 600; color: white;">Task</span>
      </div>

      <!-- Chart icon -->
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B2BEC3" stroke-width="2">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>

      <!-- Profile icon -->
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#B2BEC3">
        <circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-8 8-8s8 4 8 8"/>
      </svg>
    </div>
  `
};
