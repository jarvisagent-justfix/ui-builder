/* =====================================================
   progress-chart.js — Bar chart settimanale
   ===================================================== */

const progressChart = {
  category: 'Dashboard',
  content: `
    <div style="padding: 0 20px 20px; background: #F5F6FA; font-family: 'Inter', sans-serif;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="font-size: 14px; font-weight: 600; color: #2D3436;">Project Statistics</div>
        <span style="color: #B2BEC3; font-size: 16px;">⋯</span>
      </div>

      <!-- Bar chart -->
      <div style="background: white; border-radius: 16px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        <!-- Y axis label -->
        <div style="display: flex; align-items: flex-end; gap: 8px; height: 140px;">
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 20px; padding-right: 8px; font-size: 11px; color: #B2BEC3;">
            <span>100</span><span>50</span><span>0</span>
          </div>
          <!-- Bars per day -->
          ${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
            const hProgress = 40 + Math.sin(i * 0.8) * 30 + 20;
            const hReviewed = 30 + Math.cos(i * 1.2) * 20 + 15;
            const hComplete = 20 + Math.sin(i * 0.5 + 1) * 25 + 15;
            return `
              <div style="flex: 1; display: flex; justify-content: center; gap: 3px; align-items: flex-end; height: 140px;">
                <div style="width: 12px; background: #6C5CE7; border-radius: 4px 4px 0 0; height: ${hProgress}px; transition: height 0.3s;"></div>
                <div style="width: 12px; background: #E84393; border-radius: 4px 4px 0 0; height: ${hReviewed}px; transition: height 0.3s;"></div>
                <div style="width: 12px; background: #00B894; border-radius: 4px 4px 0 0; height: ${hComplete}px; transition: height 0.3s;"></div>
              </div>
            `;
          }).join('')}
        </div>
        <!-- Giorni -->
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <div style="flex: 1; text-align: center; font-size: 11px; color: #B2BEC3;">S</div>
          <div style="flex: 1; text-align: center; font-size: 11px; color: #B2BEC3;">M</div>
          <div style="flex: 1; text-align: center; font-size: 11px; color: #B2BEC3;">T</div>
          <div style="flex: 1; text-align: center; font-size: 11px; color: #B2BEC3;">W</div>
          <div style="flex: 1; text-align: center; font-size: 11px; color: #B2BEC3;">T</div>
          <div style="flex: 1; text-align: center; font-size: 11px; color: #B2BEC3;">F</div>
          <div style="flex: 1; text-align: center; font-size: 11px; color: #636E72; font-weight: 600;">S</div>
        </div>
        <!-- Legenda -->
        <div style="display: flex; gap: 16px; justify-content: center; margin-top: 14px; padding-top: 12px; border-top: 1px solid #F0F0F0;">
          <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: #636E72;">
            <span style="width: 8px; height: 8px; background: #6C5CE7; border-radius: 2px;"></span> Progress
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: #636E72;">
            <span style="width: 8px; height: 8px; background: #E84393; border-radius: 2px;"></span> Reviewed
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: #636E72;">
            <span style="width: 8px; height: 8px; background: #00B894; border-radius: 2px;"></span> Complete
          </div>
        </div>
      </div>

      <!-- Callout "30 Task" -->
      <div style="display: flex; gap: 12px; margin-top: 12px;">
        <div style="flex: 1; background: white; border-radius: 16px; padding: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <div style="font-size: 12px; color: #636E72; margin-bottom: 4px;">Total working hour</div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 18px; font-weight: 700; color: #2D3436;">50:25:06</span>
            <span style="font-size: 11px; font-weight: 600; color: white; background: #00B894; padding: 2px 8px; border-radius: 20px;">34%</span>
          </div>
        </div>
        <div style="flex: 1; background: white; border-radius: 16px; padding: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <div style="font-size: 12px; color: #636E72; margin-bottom: 4px;">Total task activity</div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 18px; font-weight: 700; color: #2D3436;">125 Task</span>
            <span style="font-size: 11px; font-weight: 600; color: white; background: #6C5CE7; padding: 2px 8px; border-radius: 20px;">50%</span>
          </div>
        </div>
      </div>
    </div>
  `
};
