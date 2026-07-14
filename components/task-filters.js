/* =====================================================
   task-filters.js — Filtri Complete / To Do / In Review
   ===================================================== */

const taskFilters = {
  category: 'Task List',
  content: `
    <div style="padding: 0 20px 16px; background: #F5F6FA; font-family: 'Inter', sans-serif;">
      <div style="display: flex; gap: 8px;">
        <!-- Complete -->
        <div style="background: #2D3436; color: white; padding: 6px 16px; border-radius: 20px; display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500;">
          <span style="width: 18px; height: 18px; background: #00B894; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; color: white;">✓</span>
          Complete <span style="color: #B2BEC3; font-weight: 400;">65</span>
        </div>
        <!-- To Do -->
        <div style="background: white; color: #636E72; padding: 6px 16px; border-radius: 20px; display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; border: 1px solid #DFE6E9;">
          <span style="width: 18px; height: 18px; background: #DFE6E9; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #636E72;">45</span>
          To Do
        </div>
        <!-- In Review -->
        <div style="background: white; color: #636E72; padding: 6px 16px; border-radius: 20px; display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; border: 1px solid #DFE6E9;">
          <span style="width: 18px; height: 18px; background: #FFD5F0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #E84393;">3</span>
          In Review
        </div>
      </div>
    </div>
  `
};
