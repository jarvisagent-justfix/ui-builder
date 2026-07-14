/* =====================================================
   task-list.js — Card Task e Lista Task
   ===================================================== */

// Singola task card (configurabile)
const taskCard = {
  category: 'Task List',
  content: `
    <div style="background: white; border-radius: 16px; padding: 14px; margin: 0 20px 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); font-family: 'Inter', sans-serif;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        <div style="font-size: 14px; font-weight: 600; color: #2D3436;">Dashboard design for admin</div>
        <span style="color: #B2BEC3; font-size: 14px;">⋯</span>
      </div>
      <div style="display: flex; gap: 6px; margin-bottom: 10px; flex-wrap: wrap;">
        <span style="font-size: 11px; font-weight: 600; color: white; background: #E84393; padding: 2px 8px; border-radius: 4px;">High</span>
        <span style="font-size: 11px; font-weight: 600; color: #6C5CE7; background: #E8D5FF; padding: 2px 8px; border-radius: 4px;">On Track</span>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 12px; color: #B2BEC3;">14 oct 2022</span>
          <span style="font-size: 12px; color: #B2BEC3; display: flex; align-items: center; gap: 4px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            5
          </span>
          <span style="font-size: 12px; color: #B2BEC3; display: flex; align-items: center; gap: 4px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            5
          </span>
        </div>
        <div style="display: flex;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#DFE6E9" stroke="white" stroke-width="2"><circle cx="9" cy="12" r="4"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#6C5CE7" stroke="white" stroke-width="2" style="margin-left: -8px;"><circle cx="9" cy="12" r="4"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#00B894" stroke="white" stroke-width="2" style="margin-left: -8px;"><circle cx="9" cy="12" r="4"/></svg>
        </div>
      </div>
    </div>
  `
};

// Lista di task completa
const taskListBlock = {
  category: 'Task List',
  content: `
    <div style="background: #F5F6FA; font-family: 'Inter', sans-serif; padding-bottom: 20px;">
      <!-- Task 1 -->
      <div style="background: white; border-radius: 16px; padding: 14px; margin: 0 20px 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div style="font-size: 14px; font-weight: 600; color: #2D3436;">Dashboard design for admin</div>
          <span style="color: #B2BEC3; font-size: 14px;">⋯</span>
        </div>
        <div style="display: flex; gap: 6px; margin-bottom: 10px;">
          <span style="font-size: 11px; font-weight: 600; color: white; background: #E84393; padding: 2px 8px; border-radius: 4px;">High</span>
          <span style="font-size: 11px; font-weight: 600; color: #6C5CE7; background: #E8D5FF; padding: 2px 8px; border-radius: 4px;">On Track</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 12px; color: #B2BEC3;">14 oct 2022</span>
            <span style="font-size: 12px; color: #B2BEC3;">👁 5</span>
            <span style="font-size: 12px; color: #B2BEC3;">💬 5</span>
          </div>
          <div style="display: flex;">
            <div style="width: 22px; height: 22px; background: #DFE6E9; border-radius: 50%; border: 2px solid white;"></div>
            <div style="width: 22px; height: 22px; background: #6C5CE7; border-radius: 50%; border: 2px solid white; margin-left: -8px;"></div>
            <div style="width: 22px; height: 22px; background: #00B894; border-radius: 50%; border: 2px solid white; margin-left: -8px;"></div>
          </div>
        </div>
      </div>

      <!-- Task 2 -->
      <div style="background: white; border-radius: 16px; padding: 14px; margin: 0 20px 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div style="font-size: 14px; font-weight: 600; color: #2D3436;">Konom web application</div>
          <span style="color: #B2BEC3; font-size: 14px;">⋯</span>
        </div>
        <div style="display: flex; gap: 6px; margin-bottom: 10px;">
          <span style="font-size: 11px; font-weight: 600; color: white; background: #00B894; padding: 2px 8px; border-radius: 4px;">Low</span>
          <span style="font-size: 11px; font-weight: 600; color: #6C5CE7; background: #E8D5FF; padding: 2px 8px; border-radius: 4px;">Meeting</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 12px; color: #B2BEC3;">14 Nov 2022</span>
            <span style="font-size: 12px; color: #B2BEC3;">👁 2</span>
            <span style="font-size: 12px; color: #B2BEC3;">💬 4</span>
          </div>
          <div style="display: flex;">
            <div style="width: 22px; height: 22px; background: #DFE6E9; border-radius: 50%; border: 2px solid white;"></div>
            <div style="width: 22px; height: 22px; background: #E84393; border-radius: 50%; border: 2px solid white; margin-left: -8px;"></div>
            <div style="width: 22px; height: 22px; background: #F39C12; border-radius: 50%; border: 2px solid white; margin-left: -8px;"></div>
          </div>
        </div>
      </div>

      <!-- Task 3 (evidenziata verde) -->
      <div style="background: #00B894; border-radius: 16px; padding: 14px; margin: 0 20px 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div style="font-size: 14px; font-weight: 600; color: white;">Research and development</div>
          <span style="color: rgba(255,255,255,0.6); font-size: 14px;">⋯</span>
        </div>
        <div style="display: flex; gap: 6px; margin-bottom: 10px;">
          <span style="font-size: 11px; font-weight: 600; color: #2D3436; background: white; padding: 2px 8px; border-radius: 4px;">Medium</span>
          <span style="font-size: 11px; font-weight: 600; color: #2D3436; background: rgba(255,255,255,0.8); padding: 2px 8px; border-radius: 4px;">At Risk</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 12px; color: rgba(255,255,255,0.7);">14 oct 2022</span>
            <span style="font-size: 12px; color: rgba(255,255,255,0.7);">👁 6</span>
            <span style="font-size: 12px; color: rgba(255,255,255,0.7);">💬 2</span>
          </div>
          <div style="display: flex;">
            <div style="width: 22px; height: 22px; background: rgba(255,255,255,0.4); border-radius: 50%; border: 2px solid white;"></div>
            <div style="width: 22px; height: 22px; background: white; border-radius: 50%; border: 2px solid white; margin-left: -8px;"></div>
            <div style="width: 22px; height: 22px; background: #F39C12; border-radius: 50%; border: 2px solid white; margin-left: -8px;"></div>
          </div>
        </div>
      </div>

      <!-- Task 4 -->
      <div style="background: white; border-radius: 16px; padding: 14px; margin: 0 20px 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div style="font-size: 14px; font-weight: 600; color: #2D3436;">Event booking application</div>
          <span style="color: #B2BEC3; font-size: 14px;">⋯</span>
        </div>
        <div style="display: flex; gap: 6px; margin-bottom: 10px;">
          <span style="font-size: 11px; font-weight: 600; color: white; background: #F39C12; padding: 2px 8px; border-radius: 4px;">Medium</span>
          <span style="font-size: 11px; font-weight: 600; color: #6C5CE7; background: #E8D5FF; padding: 2px 8px; border-radius: 4px;">Meeting</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 12px; color: #B2BEC3;">14 oct 2022</span>
            <span style="font-size: 12px; color: #B2BEC3;">👁 5</span>
            <span style="font-size: 12px; color: #B2BEC3;">💬 5</span>
          </div>
          <div style="display: flex;">
            <div style="width: 22px; height: 22px; background: #DFE6E9; border-radius: 50%; border: 2px solid white;"></div>
            <div style="width: 22px; height: 22px; background: #6C5CE7; border-radius: 50%; border: 2px solid white; margin-left: -8px;"></div>
            <div style="width: 22px; height: 22px; background: #00B894; border-radius: 50%; border: 2px solid white; margin-left: -8px;"></div>
          </div>
        </div>
      </div>
    </div>
  `
};
