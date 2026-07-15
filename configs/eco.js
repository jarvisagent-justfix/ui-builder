// ============================================
// ECO — Identico al mockup interattivo
// App completa con JS funzionante
// 4 schermate + 4 modali come da design
// ============================================
window.__appConfig = {
  name: 'ECO',
  description: 'Preserva le voci di chi ami.',
  icon: '🌿',
  pages: {

    // ===== ECO — APP COMPLETA =====
    '🏠 ECO': `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
:root{
  --bg:#0b0b0d; --panel:#141416; --panel-2:#1c1c1f; --stroke:rgba(255,255,255,0.08);
  --text:#f5f4f2; --text-dim:#9a9a9e; --accent:#ff7a45; --accent-2:#ffb199;
  --accent-soft:rgba(255,122,69,0.14); --star:#ffcc4d;
  --joy:#ffb84d; --nostalgia:#7aa7ff; --love:#ff6b8b; --gratitude:#5fd9a4;
  --danger:#ff5c5c;
  --radius-lg:28px; --radius-md:18px; --radius-sm:12px;
  font-family:'Inter',-apple-system,'SF Pro Display',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
.eco-app{background:#000;display:flex;justify-content:center;min-height:100vh;color:var(--text);}
.eco-device{width:390px;background:var(--bg);border-radius:52px;border:2px solid #2a2a2d;box-shadow:0 40px 100px rgba(0,0,0,0.6),inset 0 0 0 1px rgba(255,255,255,0.04);overflow:hidden;position:relative;display:flex;flex-direction:column;min-height:844px;}
.eco-notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:120px;height:28px;background:#000;border-radius:0 0 20px 20px;z-index:50;}
.eco-statusbar{height:24px;flex-shrink:0;z-index:40;}
.eco-screens{flex:1;position:relative;overflow:hidden;}
.eco-screen{position:absolute;inset:0;padding:20px 22px 110px;overflow-y:auto;scrollbar-width:none;opacity:0;pointer-events:none;transform:translateY(8px);transition:opacity .28s ease,transform .28s ease;}
.eco-screen::-webkit-scrollbar{display:none;}
.eco-screen.active{opacity:1;pointer-events:auto;transform:translateY(0);}
.eco-h1{font-size:30px;font-weight:800;letter-spacing:-0.5px;color:var(--text);}
.eco-sub{font-size:14px;color:var(--text-dim);margin-top:4px;}
.eco-section-label{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--text-dim);margin:26px 0 12px;}
.eco-section-label-row{display:flex;justify-content:space-between;align-items:center;margin:26px 0 12px;}
.eco-section-label-row .eco-section-label{margin:0;}
.eco-section-link{font-size:11.5px;color:var(--accent-2);font-weight:700;cursor:pointer;}
.eco-avatar-mini{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-2));display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;overflow:hidden;}
.eco-home-top{display:flex;justify-content:space-between;align-items:center;}
.eco-home-date{font-size:12px;color:var(--text-dim);font-weight:600;}
.eco-home-greeting{font-size:26px;font-weight:800;letter-spacing:-0.4px;margin-top:2px;}
.eco-home-avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-2));display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;box-shadow:0 6px 16px rgba(255,122,69,0.35);}
.eco-hero-card{margin-top:20px;border-radius:26px;padding:0;position:relative;overflow:hidden;background:linear-gradient(150deg,#26170f 0%,#160f0c 55%,#0e0b0a 100%);border:1px solid var(--stroke);}
.eco-hero-glow{position:absolute;width:260px;height:260px;background:radial-gradient(circle,rgba(255,122,69,0.28),transparent 70%);top:-100px;right:-90px;pointer-events:none;}
.eco-hero-glow2{position:absolute;width:180px;height:180px;background:radial-gradient(circle,rgba(122,167,255,0.16),transparent 70%);bottom:-60px;left:-60px;pointer-events:none;}
.eco-hero-inner{position:relative;z-index:2;padding:22px 20px 20px;}
.eco-hero-tag{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:800;color:var(--accent-2);background:rgba(255,122,69,0.15);padding:5px 11px;border-radius:20px;letter-spacing:.5px;text-transform:uppercase;}
.eco-hero-quote{font-size:20px;font-weight:600;line-height:1.42;margin-top:16px;font-style:italic;letter-spacing:-0.2px;color:var(--text);}
.eco-hero-from{display:flex;align-items:center;justify-content:space-between;margin-top:18px;}
.eco-hero-from-left{display:flex;align-items:center;gap:9px;}
.eco-hero-from-left .eco-avatar-mini{width:28px;height:28px;font-size:10px;}
.eco-hero-from-left span{font-size:11.5px;color:var(--text-dim);font-weight:500;}
.eco-hero-play-btn{width:38px;height:38px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:14px;color:#1a0f08;box-shadow:0 6px 16px rgba(255,122,69,0.4);cursor:pointer;}
.eco-hero-wave-strip{display:flex;align-items:center;gap:2px;height:22px;margin-top:14px;}
.eco-hero-wave-strip span{width:2.5px;border-radius:2px;background:rgba(255,177,153,0.35);}
.eco-metric-row{display:flex;gap:10px;margin-top:18px;}
.eco-metric-card{flex:1;background:var(--panel);border:1px solid var(--stroke);border-radius:20px;padding:14px 12px;display:flex;flex-direction:column;gap:8px;}
.eco-metric-icon{width:30px;height:30px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;}
.eco-metric-val{font-size:19px;font-weight:800;letter-spacing:-0.3px;color:var(--text);}
.eco-metric-lbl{font-size:10px;color:var(--text-dim);font-weight:600;text-transform:uppercase;letter-spacing:.3px;margin-top:2px;}
.eco-people-row-scroll{display:flex;gap:12px;overflow-x:auto;scrollbar-width:none;padding:2px 2px 6px;}
.eco-people-row-scroll::-webkit-scrollbar{display:none;}
.eco-people-card-mini{flex-shrink:0;width:104px;background:var(--panel);border:1px solid var(--stroke);border-radius:18px;padding:14px 12px;display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;}
.eco-people-card-mini .eco-avatar-lg{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;color:#fff;}
.eco-pname{font-size:12px;font-weight:700;text-align:center;color:var(--text);}
.eco-pcount{font-size:9.5px;color:var(--text-dim);font-weight:600;}
.eco-add-mini{background:var(--panel-2);border:1.5px dashed var(--stroke);}
.eco-add-mini .eco-avatar-lg{background:none!important;color:var(--accent-2);font-size:22px;}
.eco-recent-row{display:flex;align-items:center;gap:12px;background:var(--panel);border:1px solid var(--stroke);border-radius:18px;padding:13px;margin-bottom:10px;border-left:3px solid transparent;}
.eco-recent-row .eco-avatar-lg{width:42px;height:42px;font-size:14px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;}
.eco-recent-meta{flex:1;min-width:0;}
.eco-rname{font-size:13.5px;font-weight:700;color:var(--text);}
.eco-rsub{font-size:11.5px;color:var(--text-dim);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.eco-recent-tag{font-size:9.5px;font-weight:700;padding:4px 9px;border-radius:20px;flex-shrink:0;}
.eco-nav-header{display:flex;justify-content:space-between;align-items:center;}
.eco-nav-title-block{display:flex;flex-direction:column;}
.eco-nav-title-block .eco-h1{font-size:32px;font-weight:800;letter-spacing:-0.6px;margin:0;}
.eco-nav-caption{font-size:12.5px;color:var(--text-dim);margin-top:2px;font-weight:500;}
.eco-nav-add-btn{width:34px;height:34px;border-radius:50%;background:var(--panel);border:1px solid var(--stroke);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:var(--accent-2);flex-shrink:0;cursor:pointer;}
.eco-filter-tabs{display:flex;gap:8px;margin-top:18px;background:var(--panel);border:1px solid var(--stroke);border-radius:16px;padding:5px;}
.eco-filter-tab{flex:1;text-align:center;padding:9px 0;font-size:13px;font-weight:600;color:var(--text-dim);border-radius:12px;cursor:pointer;}
.eco-filter-tab.active{background:var(--accent);color:#1a0f08;}
.eco-person-list{display:flex;flex-direction:column;gap:14px;margin-top:18px;}
.eco-person-card-h{background:var(--panel);border:1px solid var(--stroke);border-radius:var(--radius-md);padding:16px;position:relative;cursor:pointer;}
.eco-star-btn{position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:14px;color:var(--text-dim);border:none;cursor:pointer;z-index:5;}
.eco-star-btn.fav{color:var(--star);background:rgba(255,204,77,0.14);}
.eco-card-h-top{display:flex;gap:12px;align-items:flex-start;padding-right:34px;}
.eco-avatar-wrap{position:relative;flex-shrink:0;}
.eco-avatar-round{width:56px;height:56px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;color:#fff;box-shadow:0 6px 14px rgba(0,0,0,0.3);}
.eco-avatar-lg{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;color:#fff;}
.eco-edit-badge{position:absolute;bottom:-3px;right:-3px;width:22px;height:22px;border-radius:50%;background:var(--panel-2);border:2px solid var(--panel);display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--text);cursor:pointer;z-index:6;}
.eco-card-h-info{flex:1;min-width:0;}
.eco-card-h-name{font-size:15.5px;font-weight:700;color:var(--text);}
.eco-card-h-rel{font-size:11.5px;color:var(--accent-2);font-weight:600;margin-top:1px;}
.eco-card-h-desc{font-size:12px;color:var(--text-dim);line-height:1.4;margin-top:8px;padding-right:2px;}
.eco-card-h-footer{display:flex;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid var(--stroke);}
.eco-mini-stat{flex:1;text-align:center;}
.eco-mini-stat .mv{font-size:14px;font-weight:800;color:var(--text);}
.eco-mini-stat .ml{font-size:9.5px;color:var(--text-dim);margin-top:1px;text-transform:uppercase;letter-spacing:.3px;}
.eco-mini-divider{width:1px;background:var(--stroke);margin:2px 0;}
.eco-detail-top-actions{display:flex;justify-content:space-between;align-items:center;}
.eco-follow-btn{background:rgba(255,255,255,0.08);color:var(--text);font-size:12.5px;font-weight:700;padding:9px 16px;border-radius:20px;border:none;display:flex;align-items:center;gap:6px;cursor:pointer;}
.eco-follow-btn.fav{background:var(--star);color:#1a0f08;}
.eco-detail-avatar-wrap{display:flex;flex-direction:column;align-items:center;margin-top:28px;position:relative;z-index:5;}
.eco-avatar-ring{width:96px;height:96px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:conic-gradient(from 0deg,var(--joy),var(--love),var(--nostalgia),var(--gratitude),var(--joy));padding:3px;position:relative;}
.eco-avatar-ring .eco-avatar-lg{width:100%;height:100%;font-size:26px;margin:0;border:3px solid var(--bg);}
.eco-detail-edit-badge{position:absolute;bottom:-2px;right:-2px;width:28px;height:28px;border-radius:50%;background:var(--panel-2);border:2px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;z-index:8;}
.eco-detail-name{font-size:19px;font-weight:800;margin-top:10px;color:var(--text);}
.eco-detail-desc{font-size:12.5px;color:var(--text-dim);text-align:center;margin-top:4px;max-width:280px;line-height:1.4;}
.eco-detail-dates{font-size:11px;color:var(--text-dim);margin-top:6px;display:flex;gap:12px;justify-content:center;}
.eco-detail-stats-new{display:flex;margin-top:18px;background:var(--panel);border:1px solid var(--stroke);border-radius:var(--radius-md);padding:14px 4px;}
.eco-filter-row-detail{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin-top:20px;padding-bottom:4px;}
.eco-filter-row-detail::-webkit-scrollbar{display:none;}
.eco-filter-chip{flex-shrink:0;font-size:12px;font-weight:600;padding:8px 14px;border-radius:20px;background:var(--panel);border:1px solid var(--stroke);color:var(--text-dim);cursor:pointer;display:flex;align-items:center;gap:6px;}
.eco-filter-chip.active{background:var(--accent);color:#1a0f08;border-color:var(--accent);}
.eco-filter-chip .fdot{width:7px;height:7px;border-radius:50%;}
.eco-memory-card{background:var(--panel);border:1px solid var(--stroke);border-radius:var(--radius-md);padding:16px;margin-bottom:12px;position:relative;cursor:pointer;}
.eco-memory-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-right:30px;}
.eco-memory-date{font-size:11px;color:var(--text-dim);}
.eco-memory-emotion{display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;padding:4px 9px;border-radius:20px;}
.eco-memory-star{position:absolute;top:14px;right:14px;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--text-dim);border:none;cursor:pointer;z-index:3;}
.eco-memory-star.fav{color:var(--star);background:rgba(255,204,77,0.14);}
.eco-memory-wave-row{display:flex;align-items:center;gap:12px;}
.eco-memory-play{width:38px;height:38px;border-radius:50%;background:var(--accent-soft);color:var(--accent-2);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;border:none;cursor:pointer;}
.eco-memory-wave{flex:1;display:flex;align-items:center;gap:2px;height:26px;}
.eco-memory-wave span{width:2.5px;border-radius:2px;background:rgba(255,255,255,0.18);}
.eco-memory-dur{font-size:11px;color:var(--text-dim);flex-shrink:0;}
.eco-memory-transcript{margin-top:12px;font-size:12.5px;color:var(--text-dim);line-height:1.5;padding-top:10px;border-top:1px solid var(--stroke);}
.eco-back-btn{width:36px;height:36px;border-radius:50%;background:var(--panel);border:1px solid var(--stroke);display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;cursor:pointer;}
.eco-record-screen{display:flex;flex-direction:column;align-items:center;padding-top:50px;}
.eco-record-circle-big{width:190px;height:190px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:54px;margin:20px 0 24px;animation:ecoPulseBig 2.2s infinite;position:relative;cursor:pointer;}
@keyframes ecoPulseBig{0%{box-shadow:0 0 0 0 rgba(255,122,69,0.35)}70%{box-shadow:0 0 0 30px rgba(255,122,69,0)}100%{box-shadow:0 0 0 0 rgba(255,122,69,0)}}
@keyframes ecoWaveAnim{0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)}}
.eco-rec-timer-big{font-size:36px;font-weight:800;letter-spacing:1px;color:var(--text);}
.eco-rec-hint{font-size:13px;color:var(--text-dim);margin-top:8px;text-align:center;max-width:270px;}
.eco-rec-waves{display:flex;align-items:center;justify-content:center;gap:3px;height:44px;margin-top:20px;opacity:0;}
.eco-rec-waves.show{opacity:1;}
.eco-rec-waves span{width:4px;border-radius:3px;background:var(--accent-2);animation:ecoWaveAnim 1s ease-in-out infinite;}
.eco-rec-tips{width:100%;margin-top:44px;background:var(--panel);border:1px solid var(--stroke);border-radius:var(--radius-md);padding:16px;}
.eco-tip-title{font-size:12px;font-weight:700;color:var(--accent-2);margin-bottom:8px;}
.eco-tip{font-size:12.5px;color:var(--text-dim);margin-bottom:6px;line-height:1.4;}
.eco-tabbar{position:absolute;bottom:0;left:0;right:0;height:74px;background:rgba(20,20,22,0.85);backdrop-filter:blur(20px);border-top:1px solid var(--stroke);display:flex;align-items:flex-start;padding-top:8px;z-index:60;}
.eco-tab-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;color:var(--text-dim);cursor:pointer;padding-top:2px;}
.eco-tab-item .eco-tab-icon{font-size:19px;}
.eco-tab-item.active{color:var(--accent-2);}
.eco-tab-record{flex:1;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;margin-top:-22px;}
.eco-tab-record-circle{width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a);display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;box-shadow:0 8px 20px rgba(255,122,69,0.5),0 0 0 5px rgba(255,122,69,0.16),0 0 0 1px var(--bg);border:3px solid var(--bg);}
.eco-overlay{position:absolute;inset:0;background:rgba(0,0,0,0.65);display:none;align-items:flex-end;justify-content:center;z-index:200;backdrop-filter:blur(3px);}
.eco-overlay.active{display:flex;}
.eco-sheet{width:100%;max-height:88%;background:var(--panel);border-radius:28px 28px 0 0;padding:20px 22px 30px;overflow-y:auto;scrollbar-width:none;border-top:1px solid var(--stroke);}
.eco-sheet::-webkit-scrollbar{display:none;}
.eco-sheet-handle{width:40px;height:4px;background:var(--stroke);border-radius:4px;margin:0 auto 16px;}
.eco-sheet-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;}
.eco-sheet-header h2{font-size:18px;font-weight:800;color:var(--text);}
.eco-sheet-close{width:30px;height:30px;border-radius:50%;background:var(--panel-2);border:none;color:var(--text-dim);font-size:14px;cursor:pointer;}
.eco-form-photo-picker{display:flex;flex-direction:column;align-items:center;margin-bottom:20px;}
.eco-photo-circle{width:88px;height:88px;border-radius:50%;background:var(--panel-2);border:2px dashed var(--stroke);display:flex;align-items:center;justify-content:center;font-size:26px;color:var(--text-dim);cursor:pointer;overflow:hidden;}
.eco-photo-circle img{width:100%;height:100%;object-fit:cover;}
.eco-photo-hint{font-size:11.5px;color:var(--text-dim);margin-top:8px;}
.eco-field{margin-bottom:14px;}
.eco-field label{font-size:11.5px;color:var(--text-dim);display:block;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.3px;}
.eco-field-row{display:flex;gap:10px;}
.eco-field-row .eco-field{flex:1;}
.eco-field input,.eco-field select,.eco-field textarea{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--stroke);background:var(--panel-2);color:var(--text);font-size:14px;outline:none;font-family:inherit;box-sizing:border-box;}
.eco-field input:focus,.eco-field select:focus,.eco-field textarea:focus{border-color:var(--accent);}
.eco-field textarea{resize:none;min-height:110px;line-height:1.5;}
.eco-field-hint{font-size:10.5px;color:var(--text-dim);margin-top:4px;}
.eco-sheet-footer{display:flex;gap:10px;margin-top:8px;}
.eco-btn{flex:1;padding:14px;border-radius:14px;border:none;font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit;}
.eco-btn-primary{background:var(--accent);color:#1a0f08;}
.eco-btn-secondary{background:var(--panel-2);color:var(--text);}
.eco-btn-danger{background:var(--danger);color:#fff;}
.eco-memory-detail-emotion{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;padding:6px 12px;border-radius:20px;margin-bottom:14px;}
.eco-memory-detail-transcript{background:var(--panel-2);border-radius:14px;padding:14px;font-size:13.5px;line-height:1.55;color:var(--text);margin-bottom:16px;}
.eco-memory-detail-meta-row{display:flex;justify-content:space-between;font-size:12px;color:var(--text-dim);margin-bottom:18px;}
.eco-action-row{display:flex;flex-direction:column;gap:10px;margin-top:6px;}
.eco-action-item{display:flex;align-items:center;gap:12px;padding:14px;border-radius:14px;background:var(--panel-2);cursor:pointer;font-size:14px;font-weight:600;}
.eco-action-item.danger{color:var(--danger);}
.eco-action-item .ai-icon{font-size:16px;width:20px;text-align:center;}
.eco-move-picker{display:none;flex-direction:column;gap:8px;margin-top:12px;}
.eco-move-picker.show{display:flex;}
.eco-move-option{display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:12px;background:var(--panel-2);cursor:pointer;font-size:13px;font-weight:600;}
.eco-move-option .eco-avatar-round{width:32px;height:32px;font-size:11px;}
.eco-move-option.selected{background:var(--accent-soft);border:1px solid var(--accent);}
.eco-toast{position:absolute;bottom:110px;left:50%;transform:translateX(-50%);background:var(--panel-2);color:var(--text);padding:12px 20px;border-radius:14px;font-size:12.5px;font-weight:600;box-shadow:0 10px 24px rgba(0,0,0,0.4);opacity:0;pointer-events:none;z-index:300;border:1px solid var(--stroke);}
.eco-toast.show{opacity:1;transform:translateX(-50%) translateY(-6px);}
.eco-confirm-overlay{position:absolute;inset:0;background:rgba(0,0,0,0.55);display:none;align-items:center;justify-content:center;z-index:400;backdrop-filter:blur(4px);}
.eco-confirm-overlay.active{display:flex;}
.eco-confirm-box{width:270px;background:#2a2a2d;border-radius:18px;overflow:hidden;text-align:center;}
.eco-confirm-title{font-size:15px;font-weight:700;padding:20px 20px 6px;color:var(--text);}
.eco-confirm-text{font-size:12.5px;color:var(--text-dim);padding:0 20px 18px;line-height:1.4;}
.eco-confirm-actions{display:flex;border-top:1px solid rgba(255,255,255,0.1);}
.eco-confirm-btn{flex:1;padding:13px;font-size:14px;font-weight:600;cursor:pointer;border:none;background:none;color:var(--text);}
.eco-confirm-btn.delete{color:var(--danger);font-weight:700;border-left:1px solid rgba(255,255,255,0.1);}

/* Override GrapesJS canvas to show the phone mockup properly */
.gjs-frame .eco-app{min-height:100vh;padding:0;}
</style>

<div class="eco-app">
<div class="eco-device">
  <div class="eco-notch"></div>
  <div class="eco-statusbar"></div>

  <div class="eco-screens">

    <!-- HOME -->
    <div class="eco-screen active" id="eco-screen-home">
      <div class="eco-home-top">
        <div>
          <div class="eco-home-date" id="ecoHomeDate">Mercoledì, 15 luglio</div>
          <div class="eco-home-greeting">Ciao, Antonino</div>
        </div>
        <div class="eco-home-avatar">AP</div>
      </div>

      <div class="eco-hero-card">
        <div class="eco-hero-glow"></div>
        <div class="eco-hero-glow2"></div>
        <div class="eco-hero-inner">
          <span class="eco-hero-tag">✨ Ricordo del giorno</span>
          <div class="eco-hero-quote">"Sono orgogliosa di te, ricordalo sempre."</div>
          <div class="eco-hero-wave-strip" id="ecoWaveHome"></div>
          <div class="eco-hero-from">
            <div class="eco-hero-from-left">
              <div class="eco-avatar-mini" style="background:linear-gradient(135deg,#7aa7ff,#5fd9a4)">NC</div>
              <span>Nonna Carla · 0:18 · 3 anni fa</span>
            </div>
            <div class="eco-hero-play-btn">&#9654;</div>
          </div>
        </div>
      </div>

      <div class="eco-metric-row">
        <div class="eco-metric-card">
          <div class="eco-metric-icon" style="background:rgba(255,122,69,0.16);color:var(--accent-2)">&#127897;</div>
          <div class="eco-metric-val">47</div>
          <div class="eco-metric-lbl">Ricordi</div>
        </div>
        <div class="eco-metric-card">
          <div class="eco-metric-icon" style="background:rgba(122,167,255,0.16);color:var(--nostalgia)">&#128101;</div>
          <div class="eco-metric-val">6</div>
          <div class="eco-metric-lbl">Persone</div>
        </div>
        <div class="eco-metric-card">
          <div class="eco-metric-icon" style="background:rgba(95,217,164,0.16);color:var(--gratitude)">&#9201;</div>
          <div class="eco-metric-val">2h 14m</div>
          <div class="eco-metric-lbl">Voce custodita</div>
        </div>
      </div>

      <div class="eco-section-label-row">
        <div class="eco-section-label">Le tue persone</div>
        <div class="eco-section-link" onclick="ecoShowScreen('persone')">Vedi tutte</div>
      </div>
      <div class="eco-people-row-scroll" id="ecoHomePeopleScroll"></div>

      <div class="eco-section-label-row">
        <div class="eco-section-label">Ricordi recenti</div>
      </div>
      <div id="ecoHomeRecentList"></div>
    </div>

    <!-- PERSONE -->
    <div class="eco-screen" id="eco-screen-persone">
      <div class="eco-nav-header">
        <div class="eco-nav-title-block">
          <h1 style="font-size:32px;font-weight:800;letter-spacing:-0.6px;color:var(--text);margin:0">Persone</h1>
          <div class="eco-nav-caption" id="ecoPersoneCaption">6 persone custodite</div>
        </div>
        <button class="eco-nav-add-btn" onclick="ecoOpenProfileModal('create')">+</button>
      </div>

      <div class="eco-filter-tabs">
        <div class="eco-filter-tab active" data-filter="tutti" onclick="ecoSetPeopleFilter('tutti')">Tutti</div>
        <div class="eco-filter-tab" data-filter="preferiti" onclick="ecoSetPeopleFilter('preferiti')">&#11088; Preferiti</div>
      </div>

      <div class="eco-person-list" id="ecoPeopleList"></div>
    </div>

    <!-- DETTAGLIO PERSONA -->
    <div class="eco-screen" id="eco-screen-detail">
      <div class="eco-detail-top-actions">
        <div class="eco-back-btn" onclick="ecoShowScreen('persone')">&#8592;</div>
        <button class="eco-follow-btn" id="ecoDetailFollowBtn" onclick="ecoToggleDetailFav()">&#11088; Preferito</button>
      </div>
      <div class="eco-detail-avatar-wrap">
        <div class="eco-avatar-ring">
          <div class="eco-avatar-lg" id="ecoDetailAvatar" style="background:#7aa7ff">NC</div>
          <div class="eco-detail-edit-badge" onclick="ecoOpenProfileModal('edit', ecoCurrentPersonId)">&#9998;</div>
        </div>
        <div class="eco-detail-name" id="ecoDetailName">Nonna Carla</div>
        <div class="eco-detail-desc" id="ecoDetailDesc">Racconta sempre storie della sua gioventù in campagna.</div>
        <div class="eco-detail-dates" id="ecoDetailDates"></div>
      </div>
      <div class="eco-detail-stats-new" id="ecoDetailStats"></div>

      <div class="eco-filter-row-detail" id="ecoDetailFilters"></div>

      <div class="eco-section-label">Tutti i ricordi</div>
      <div id="ecoDetailMemories"></div>
    </div>

    <!-- REGISTRA -->
    <div class="eco-screen" id="eco-screen-registra">
      <div class="eco-record-screen">
        <h1 style="font-size:30px;font-weight:800;letter-spacing:-0.5px;color:var(--text);margin:0">Registra</h1>
        <p class="eco-sub" style="text-align:center;">Premi, parla, salva un ricordo</p>
        <div class="eco-record-circle-big" id="ecoBigRecordCircle" onclick="ecoToggleBigRecord()">&#127897;</div>
        <div class="eco-rec-timer-big" id="ecoBigTimer">00:00</div>
        <div class="eco-rec-waves" id="ecoRecWaves"></div>
        <div class="eco-rec-hint" id="ecoBigHint">Tocca il microfono per iniziare a registrare.</div>
        <div class="eco-rec-tips">
          <div class="eco-tip-title">&#128161; Suggerimenti</div>
          <div class="eco-tip">&#8226; Chiedi di raccontare un ricordo d'infanzia</div>
          <div class="eco-tip">&#8226; Fai cantare una canzone che amava cantare</div>
          <div class="eco-tip">&#8226; Registra un semplice "ti amo" o "sono fiero di te"</div>
        </div>
      </div>
    </div>

  </div>

  <div class="eco-tabbar">
    <div class="eco-tab-item active" data-tab="home" onclick="ecoShowScreen('home')"><div class="eco-tab-icon">&#127968;</div>Home</div>
    <div class="eco-tab-record" data-tab="registra" onclick="ecoShowScreen('registra')">
      <div class="eco-tab-record-circle">&#127897;</div>
    </div>
    <div class="eco-tab-item" data-tab="persone" onclick="ecoShowScreen('persone')"><div class="eco-tab-icon">&#128101;</div>Persone</div>
  </div>

  <!-- MODAL: PROFILO -->
  <div class="eco-overlay" id="ecoModalProfile">
    <div class="eco-sheet">
      <div class="eco-sheet-handle"></div>
      <div class="eco-sheet-header">
        <h2 id="ecoProfileModalTitle">Nuova persona</h2>
        <button class="eco-sheet-close" onclick="ecoCloseModal('ecoModalProfile')">&#10005;</button>
      </div>
      <div class="eco-form-photo-picker">
        <div class="eco-photo-circle" id="ecoPhotoCirclePreview" onclick="document.getElementById('ecoPhotoInput').click()">&#128247;</div>
        <input type="file" id="ecoPhotoInput" accept="image/*" style="display:none">
        <div class="eco-photo-hint">Tocca per aggiungere una foto</div>
      </div>
      <div class="eco-field-row">
        <div class="eco-field"><label>Nome</label><input type="text" id="ecoPfNome" placeholder="Carla"></div>
        <div class="eco-field"><label>Cognome</label><input type="text" id="ecoPfCognome" placeholder="Rossi"></div>
      </div>
      <div class="eco-field">
        <label>Descrizione</label>
        <textarea id="ecoPfDescrizione" placeholder="Racconta qualcosa di lei o di lui..."></textarea>
      </div>
      <div class="eco-field">
        <label>Relazione</label>
        <select id="ecoPfRelazione">
          <option>Nonna</option><option>Nonno</option><option>Madre</option><option>Padre</option>
          <option>Fratello</option><option>Sorella</option><option>Zia</option><option>Zio</option>
          <option>Amico/a</option><option>Altro</option>
        </select>
      </div>
      <div class="eco-field-row">
        <div class="eco-field"><label>Data di nascita</label><input type="date" id="ecoPfNascita"></div>
        <div class="eco-field">
          <label>Per sempre nel cuore</label>
          <input type="date" id="ecoPfMemoria">
          <div class="eco-field-hint">Lascia vuoto se la persona è ancora con te</div>
        </div>
      </div>
      <div class="eco-sheet-footer">
        <button class="eco-btn eco-btn-secondary" onclick="ecoCloseModal('ecoModalProfile')">Annulla</button>
        <button class="eco-btn eco-btn-primary" onclick="ecoSaveProfile()">Salva</button>
      </div>
    </div>
  </div>

  <!-- MODAL: DETTAGLIO RICORDO -->
  <div class="eco-overlay" id="ecoModalMemory">
    <div class="eco-sheet">
      <div class="eco-sheet-handle"></div>
      <div class="eco-sheet-header">
        <h2>Dettaglio ricordo</h2>
        <button class="eco-sheet-close" onclick="ecoCloseModal('ecoModalMemory')">&#10005;</button>
      </div>
      <div id="ecoMemoryDetailEmotion"></div>
      <div class="eco-memory-wave-row" style="margin-bottom:16px;">
        <button class="eco-memory-play">&#9654;</button>
        <div class="eco-memory-wave" id="ecoMemoryDetailWave"></div>
        <span class="eco-memory-dur" id="ecoMemoryDetailDur">0:18</span>
      </div>
      <div class="eco-memory-detail-meta-row">
        <span id="ecoMemoryDetailDate">12 lug 2026</span>
        <span id="ecoMemoryDetailPerson">Nonna Carla</span>
      </div>
      <div class="eco-memory-detail-transcript" id="ecoMemoryDetailTranscript"></div>

      <div class="eco-action-row" id="ecoMemoryActionsDefault">
        <div class="eco-action-item" onclick="ecoShowMemoryEditForm()"><span class="ai-icon">&#9998;</span>Modifica ricordo</div>
        <div class="eco-action-item" onclick="ecoShowMovePicker()"><span class="ai-icon">&#8599;</span>Sposta ad un'altra persona</div>
        <div class="eco-action-item danger" onclick="ecoAskDeleteConfirm()"><span class="ai-icon">&#128465;</span>Elimina ricordo</div>
      </div>

      <div class="eco-move-picker" id="ecoMovePickerBox"></div>
      <div class="eco-sheet-footer" id="ecoMoveConfirmFooter" style="display:none;">
        <button class="eco-btn eco-btn-secondary" onclick="ecoHideMovePicker()">Annulla</button>
        <button class="eco-btn eco-btn-primary" onclick="ecoConfirmMove()">Conferma spostamento</button>
      </div>

      <div id="ecoMemoryEditForm" style="display:none;">
        <div class="eco-field">
          <label>Emozione</label>
          <select id="ecoEditEmotion">
            <option value="joy">Gioia</option><option value="nostalgia">Nostalgia</option>
            <option value="love">Amore</option><option value="gratitude">Gratitudine</option>
          </select>
        </div>
        <div class="eco-field"><label>Trascrizione</label><textarea id="ecoEditTranscript"></textarea></div>
        <div class="eco-sheet-footer">
          <button class="eco-btn eco-btn-secondary" onclick="ecoHideMemoryEditForm()">Annulla</button>
          <button class="eco-btn eco-btn-primary" onclick="ecoSaveMemoryEdit()">Salva modifiche</button>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: SCEGLI PERSONA DOPO REGISTRAZIONE -->
  <div class="eco-overlay" id="ecoModalAssignPerson">
    <div class="eco-sheet">
      <div class="eco-sheet-handle"></div>
      <div class="eco-sheet-header">
        <h2>A chi appartiene questo ricordo?</h2>
        <button class="eco-sheet-close" onclick="ecoCloseModal('ecoModalAssignPerson')">&#10005;</button>
      </div>
      <p style="font-size:14px;color:var(--text-dim);margin-bottom:14px;">Seleziona la persona a cui associare l'audio registrato.</p>
      <div class="eco-move-picker show" id="ecoAssignPersonList"></div>
      <div class="eco-sheet-footer">
        <button class="eco-btn eco-btn-secondary" onclick="ecoDiscardRecording()">Scarta audio</button>
        <button class="eco-btn eco-btn-primary" onclick="ecoConfirmAssignRecording()">Salva ricordo</button>
      </div>
    </div>
  </div>

  <!-- CONFIRM DELETE DIALOG -->
  <div class="eco-confirm-overlay" id="ecoConfirmDeleteOverlay">
    <div class="eco-confirm-box">
      <div class="eco-confirm-title">Eliminare questo ricordo?</div>
      <div class="eco-confirm-text">Questa azione non può essere annullata. L'audio e la trascrizione andranno persi per sempre.</div>
      <div class="eco-confirm-actions">
        <button class="eco-confirm-btn" onclick="ecoCloseConfirmDelete()">Annulla</button>
        <button class="eco-confirm-btn delete" onclick="ecoDeleteMemoryConfirmed()">Elimina</button>
      </div>
    </div>
  </div>

  <div class="eco-toast" id="ecoToast"></div>
</div>
</div>

<script>
const ecoEmotionColors = {joy:"var(--joy)",nostalgia:"var(--nostalgia)",love:"var(--love)",gratitude:"var(--gratitude)"};
const ecoEmotionLabels = {joy:"Gioia",nostalgia:"Nostalgia",love:"Amore",gratitude:"Gratitudine"};

let ecoPeople = [
  {id:1,firstName:"Carla",lastName:"",name:"Nonna Carla",rel:"Nonna",color:"#7aa7ff",count:4,duration:"22 min",init:"NC",fav:true,photo:null,desc:"Racconta sempre storie della sua gioventù in campagna, con quella voce calda che mette il cuore in pace.",birth:"1948-03-12",death:""},
  {id:2,firstName:"Papà",lastName:"",name:"Papà",rel:"Padre",color:"#ff7a45",count:14,duration:"38 min",init:"P",fav:false,photo:null,desc:"La sua risata contagiosa e i consigli sul lavoro sono i ricordi più preziosi che custodisco.",birth:"1970-07-02",death:""},
  {id:3,firstName:"Mamma",lastName:"",name:"Mamma",rel:"Madre",color:"#ff6b8b",count:11,duration:"29 min",init:"M",fav:true,photo:null,desc:"Le sue ricette della domenica raccontate a voce, con tutti i piccoli segreti che solo lei conosce.",birth:"1972-11-19",death:""},
  {id:4,firstName:"Aldo",lastName:"",name:"Nonno Aldo",rel:"Nonno",color:"#5fd9a4",count:2,duration:"16 min",init:"NA",fav:false,photo:null,desc:"Frasi brevi ma piene di saggezza, dette sempre con lo stesso tono pacato e rassicurante.",birth:"1940-05-08",death:"2025-01-14"},
  {id:5,firstName:"Rosa",lastName:"",name:"Zia Rosa",rel:"Zia",color:"#ffb84d",count:3,duration:"7 min",init:"ZR",fav:false,photo:null,desc:"Poche registrazioni ma tutte piene di affetto, sempre pronta a farsi sentire nei momenti giusti.",birth:"1965-09-25",death:""},
  {id:6,firstName:"Marco",lastName:"",name:"Marco",rel:"Fratello",color:"#c99aff",count:5,duration:"12 min",init:"M",fav:false,photo:null,desc:"I nostri scherzi di famiglia e le battute che solo noi due capiamo davvero.",birth:"1995-02-17",death:""},
];
let ecoMemories = {
  1:[
    {id:101,date:"12 lug 2026",emotion:"love",dur:"0:18",fav:true,transcript:"Sono orgogliosa di te, ricordalo sempre. Non importa cosa succede, io sarò sempre qui con te, nel cuore."},
    {id:102,date:"3 giu 2026",emotion:"nostalgia",dur:"1:42",fav:false,transcript:"Quando avevo la tua età vivevamo in campagna, ti racconto sempre della vecchia casa con il fico..."},
    {id:103,date:"20 mag 2026",emotion:"joy",dur:"0:34",fav:false,transcript:"Ridevamo sempre a tavola, tuo nonno raccontava le barzellette più assurde..."},
    {id:104,date:"2 apr 2026",emotion:"gratitude",dur:"0:51",fav:true,transcript:"Grazie per essere venuto a trovarmi oggi, mi hai fatto una gran gioia."},
  ],
  4:[
    {id:401,date:"14 gen 2025",emotion:"love",dur:"0:09",fav:true,transcript:"Occhi aperti e cuore leggero, ricordalo sempre prima di uscire."},
    {id:402,date:"2 dic 2024",emotion:"nostalgia",dur:"2:10",fav:false,transcript:"Ai miei tempi si andava a scuola a piedi, sei chilometri, con la neve..."},
  ],
  2:[],3:[],5:[],6:[]
};

let ecoCurrentPersonId = 1;
let ecoPeopleFilter = 'tutti';
let ecoDetailFilter = 'tutte';
let ecoProfileModalMode = 'create';
let ecoEditingProfileId = null;
let ecoActiveMemoryRef = null;
let ecoSelectedMoveTargetId = null;
let ecoRecSeconds = 0;
let ecoRecInterval = null;
let ecoRecording = false;
let ecoPendingRecordingDuration = "0:00";

function ecoInit(name){return name.split(" ").map(function(w){return w[0]}).slice(0,2).join("").toUpperCase();}
function ecoAvatarContent(p){return p.photo ? '<img src="'+p.photo+'">' : ecoInit(p.name);}
function ecoMakeWave(count, height){
  height = height || 20;
  var html="";
  for(var i=0;i<count;i++){var h=4+Math.round(Math.random()*height);html+='<span style="height:'+h+'px"></span>';}
  return html;
}
function ecoShowToast(msg){
  var t=document.getElementById("ecoToast");
  t.textContent=msg; t.classList.add("show");
  setTimeout(function(){t.classList.remove("show");},2400);
}

function ecoRenderHome(){
  var w=document.getElementById("ecoWaveHome");
  if(w) w.innerHTML = ecoMakeWave(34,14);
  var scroll=document.getElementById("ecoHomePeopleScroll");
  if(scroll) scroll.innerHTML = ecoPeople.map(function(p){return '<div class="eco-people-card-mini" onclick="ecoOpenDetail('+p.id+')"><div class="eco-avatar-lg" style="background:'+p.color+'">'+ecoAvatarContent(p)+'</div><div class="eco-pname">'+p.name.split(" ")[0]+'</div><div class="eco-pcount">'+p.count+' ricordi</div></div>';}).join("")+'<div class="eco-people-card-mini eco-add-mini" onclick="ecoShowScreen(\'registra\')"><div class="eco-avatar-lg">+</div><div class="eco-pname">Nuovo</div></div>';
  var rl=document.getElementById("ecoHomeRecentList");
  if(!rl) return;
  var recents=[
    {name:"Nonno Aldo",text:'"Occhi aperti e cuore leggero..."',emotion:"love",color:"#5fd9a4",init:"NA"},
    {name:"Papà",text:'"Ricordo ancora il giorno del tuo primo passo..."',emotion:"nostalgia",color:"#ff7a45",init:"P"},
    {name:"Mamma",text:'"Sono felicissima di come sei diventato..."',emotion:"joy",color:"#ff6b8b",init:"M"},
  ];
  rl.innerHTML = recents.map(function(r){return '<div class="eco-recent-row" style="border-left-color:'+ecoEmotionColors[r.emotion]+'"><div class="eco-avatar-lg" style="background:'+r.color+'">'+r.init+'</div><div class="eco-recent-meta"><div class="eco-rname">'+r.name+'</div><div class="eco-rsub">'+r.text+'</div></div><div class="eco-recent-tag" style="background:'+ecoEmotionColors[r.emotion]+'22;color:'+ecoEmotionColors[r.emotion]+'">'+ecoEmotionLabels[r.emotion]+'</div></div>';}).join("");
}

function ecoSetPeopleFilter(f){
  ecoPeopleFilter = f;
  var tabs=document.querySelectorAll("#eco-screen-persone .eco-filter-tab");
  tabs.forEach(function(t){t.classList.remove("active");});
  var act=document.querySelector('#eco-screen-persone .eco-filter-tab[data-filter="'+f+'"]');
  if(act) act.classList.add("active");
  ecoRenderPersone();
}

function ecoRenderPersone(){
  var cap=document.getElementById("ecoPersoneCaption");
  if(cap) cap.textContent = ecoPeople.length+' persone custodite';
  var list=document.getElementById("ecoPeopleList");
  if(!list) return;
  var filtered = ecoPeopleFilter === 'preferiti' ? ecoPeople.filter(function(p){return p.fav;}) : ecoPeople;
  if(filtered.length===0){list.innerHTML='<div style="text-align:center;color:var(--text-dim);font-size:13px;padding:60px 0;">Nessun preferito ancora.<br>Tocca la stella su una persona per aggiungerla.</div>';return;}
  list.innerHTML = filtered.map(function(p){return '<div class="eco-person-card-h" onclick="ecoOpenDetail('+p.id+')"><button class="eco-star-btn '+(p.fav?"fav":"")+'" onclick="event.stopPropagation(); ecoToggleFav('+p.id+')">&#9733;</button><div class="eco-card-h-top"><div class="eco-avatar-wrap"><div class="eco-avatar-round" style="background:'+p.color+'">'+ecoAvatarContent(p)+'</div><div class="eco-edit-badge" onclick="event.stopPropagation(); ecoOpenProfileModal(\'edit\','+p.id+')">&#9998;</div></div><div class="eco-card-h-info"><div class="eco-card-h-name">'+p.name+'</div><div class="eco-card-h-rel">'+p.rel+'</div><div class="eco-card-h-desc">'+p.desc+'</div></div></div><div class="eco-card-h-footer"><div class="eco-mini-stat"><div class="mv">'+p.count+'</div><div class="ml">Ricordi</div></div><div class="eco-mini-divider"></div><div class="eco-mini-stat"><div class="mv">'+p.duration+'</div><div class="ml">Durata tot.</div></div><div class="eco-mini-divider"></div><div class="eco-mini-stat"><div class="mv">'+(p.fav?'&#11088;':'&mdash;')+'</div><div class="ml">Preferito</div></div></div></div>';}).join("");
}

function ecoToggleFav(id){
  var p=ecoPeople.find(function(x){return x.id===id;});
  if(p) p.fav=!p.fav; ecoRenderPersone();
}

function ecoFormatDate(iso){
  if(!iso) return "&mdash;";
  var parts=iso.split("-"); var y=parts[0],m=parseInt(parts[1]),d=parseInt(parts[2]);
  var months=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];
  return d+' '+months[m-1]+' '+y;
}

function ecoOpenDetail(id){
  ecoCurrentPersonId = id; ecoDetailFilter = 'tutte';
  var p=ecoPeople.find(function(x){return x.id===id;});
  if(!p) return;
  var av=document.getElementById("ecoDetailAvatar");
  if(av){av.style.background=p.color;av.innerHTML=ecoAvatarContent(p);}
  var dn=document.getElementById("ecoDetailName");
  if(dn) dn.textContent=p.name;
  var dd=document.getElementById("ecoDetailDesc");
  if(dd) dd.textContent=p.desc;

  var datesEl=document.getElementById("ecoDetailDates");
  if(datesEl){
    var datesHtml='<span>&#127874; '+ecoFormatDate(p.birth)+'</span>';
    if(p.death) datesHtml+='<span>&#10024; Per sempre nel cuore dal '+ecoFormatDate(p.death)+'</span>';
    datesEl.innerHTML=datesHtml;
  }

  var fb=document.getElementById("ecoDetailFollowBtn");
  if(fb){fb.classList.toggle("fav",p.fav);fb.innerHTML=p.fav?'&#11088; Preferito':'&#9734; Aggiungi';}

  var stats=document.getElementById("ecoDetailStats");
  if(stats) stats.innerHTML='<div class="eco-mini-stat"><div class="mv">'+p.count+'</div><div class="ml">Ricordi</div></div><div class="eco-mini-divider"></div><div class="eco-mini-stat"><div class="mv">'+p.duration+'</div><div class="ml">Durata tot.</div></div><div class="eco-mini-divider"></div><div class="eco-mini-stat"><div class="mv">'+p.rel+'</div><div class="ml">Relazione</div></div>';

  ecoRenderDetailFilters();
  ecoRenderDetailMemories();
  ecoShowScreen('detail');
}

function ecoToggleDetailFav(){
  var p=ecoPeople.find(function(x){return x.id===ecoCurrentPersonId;});
  if(!p) return;
  p.fav=!p.fav;
  var fb=document.getElementById("ecoDetailFollowBtn");
  if(fb){fb.classList.toggle("fav",p.fav);fb.innerHTML=p.fav?'&#11088; Preferito':'&#9734; Aggiungi';}
}

function ecoRenderDetailFilters(){
  var filters=[
    {key:'tutte',label:'Tutte',dot:null},
    {key:'preferiti',label:'Preferiti',dot:'#ffcc4d'},
    {key:'joy',label:'Gioia',dot:'#ffb84d'},
    {key:'nostalgia',label:'Nostalgia',dot:'#7aa7ff'},
    {key:'love',label:'Amore',dot:'#ff6b8b'},
    {key:'gratitude',label:'Gratitudine',dot:'#5fd9a4'},
  ];
  var el=document.getElementById("ecoDetailFilters");
  if(!el) return;
  el.innerHTML = filters.map(function(f){return '<div class="eco-filter-chip '+(ecoDetailFilter===f.key?'active':'')+'" onclick="ecoSetDetailFilter(\''+f.key+'\')">'+(f.dot?'<div class="fdot" style="background:'+f.dot+'"></div>':'')+f.label+'</div>';}).join("");
}

function ecoSetDetailFilter(key){ecoDetailFilter=key;ecoRenderDetailFilters();ecoRenderDetailMemories();}

function ecoGetVisibleMemories(){
  var mems=ecoMemories[ecoCurrentPersonId]||[];
  if(ecoDetailFilter==='preferiti') mems=mems.filter(function(m){return m.fav;});
  else if(ecoDetailFilter!=='tutte') mems=mems.filter(function(m){return m.emotion===ecoDetailFilter;});
  return mems;
}

function ecoRenderDetailMemories(){
  var mems=ecoGetVisibleMemories();
  var el=document.getElementById("ecoDetailMemories");
  if(!el) return;
  if(mems.length===0){el.innerHTML='<div style="text-align:center;color:var(--text-dim);font-size:13px;padding:40px 0;">Nessun ricordo trovato per questo filtro.</div>';return;}
  el.innerHTML = mems.map(function(m){return '<div class="eco-memory-card" onclick="ecoOpenMemoryDetail('+m.id+')"><button class="eco-memory-star '+(m.fav?'fav':'')+'" onclick="event.stopPropagation(); ecoToggleMemoryFav('+m.id+')">&#9733;</button><div class="eco-memory-top"><div class="eco-memory-date">'+m.date+'</div><div class="eco-memory-emotion" style="background:'+ecoEmotionColors[m.emotion]+'22;color:'+ecoEmotionColors[m.emotion]+'"><div style="width:7px;height:7px;border-radius:50%;background:'+ecoEmotionColors[m.emotion]+';display:inline-block;margin-right:4px"></div>'+ecoEmotionLabels[m.emotion]+'</div></div><div class="eco-memory-wave-row"><button class="eco-memory-play">&#9654;</button><div class="eco-memory-wave">'+ecoMakeWave(28,16)+'</div><span class="eco-memory-dur">'+m.dur+'</span></div><div class="eco-memory-transcript">"'+m.transcript+'"</div></div>';}).join("");
}

function ecoToggleMemoryFav(memId){
  var mems=ecoMemories[ecoCurrentPersonId]||[];
  var t=mems.find(function(x){return x.id===memId;});
  if(t) t.fav=!t.fav; ecoRenderDetailMemories();
}

function ecoShowScreen(name){
  document.querySelectorAll(".eco-screen").forEach(function(s){s.classList.remove("active");});
  var target=document.getElementById("eco-screen-"+name);
  if(target) target.classList.add("active");
  document.querySelectorAll(".eco-tab-item, .eco-tab-record").forEach(function(t){t.classList.remove("active");});
  var map={home:"home",persone:"persone",detail:"persone",registra:"registra"};
  var tab=document.querySelector('[data-tab="'+map[name]+'"]');
  if(tab) tab.classList.add("active");
}

function ecoOpenModal(id){
  var el=document.getElementById(id);
  if(el) el.classList.add("active");
}
function ecoCloseModal(id){
  var el=document.getElementById(id);
  if(el) el.classList.remove("active");
}

function ecoOpenProfileModal(mode,personId){
  ecoProfileModalMode=mode; ecoEditingProfileId=personId||null;
  var titleEl=document.getElementById("ecoProfileModalTitle");
  if(titleEl) titleEl.textContent=mode==='create'?'Nuova persona':'Modifica persona';
  var photoPreview=document.getElementById("ecoPhotoCirclePreview");
  if(mode==='edit'){
    var p=ecoPeople.find(function(x){return x.id===personId;});
    if(!p) return;
    setValue("ecoPfNome",p.firstName||p.name);
    setValue("ecoPfCognome",p.lastName||"");
    setValue("ecoPfRelazione",p.rel);
    setValue("ecoPfNascita",p.birth||"");
    setValue("ecoPfMemoria",p.death||"");
    setValue("ecoPfDescrizione",p.desc||"");
    if(photoPreview) photoPreview.innerHTML=p.photo?'<img src="'+p.photo+'">':"&#128247;";
  } else {
    setValue("ecoPfNome",""); setValue("ecoPfCognome","");
    setValue("ecoPfRelazione","Nonna"); setValue("ecoPfNascita","");
    setValue("ecoPfMemoria",""); setValue("ecoPfDescrizione","");
    if(photoPreview) photoPreview.innerHTML="&#128247;";
  }
  ecoOpenModal("ecoModalProfile");
}

function setValue(id,val){
  var el=document.getElementById(id);
  if(el) el.value=val;
}

document.addEventListener("change",function(e){
  if(e.target && e.target.id==="ecoPhotoInput"){
    var file=e.target.files[0];
    if(file){
      var reader=new FileReader();
      reader.onload=function(ev){var pp=document.getElementById("ecoPhotoCirclePreview");if(pp) pp.innerHTML='<img src="'+ev.target.result+'">';};
      reader.readAsDataURL(file);
    }
  }
});

var ecoPalette=["#ff7a45","#7aa7ff","#ff6b8b","#5fd9a4","#ffb84d","#c99aff"];

function ecoSaveProfile(){
  var nome=document.getElementById("ecoPfNome");
  if(!nome || !nome.value.trim()){ecoShowToast("Inserisci almeno il nome");return;}
  var cognome=getVal("ecoPfCognome");
  var rel=getVal("ecoPfRelazione");
  var birth=getVal("ecoPfNascita");
  var death=getVal("ecoPfMemoria");
  var desc=getVal("ecoPfDescrizione");
  var pp=document.getElementById("ecoPhotoCirclePreview");
  var photoImg=pp?pp.querySelector("img"):null;
  var photo=photoImg?photoImg.src:null;
  var fullName=cognome?nome.value.trim()+" "+cognome:nome.value.trim();

  if(ecoProfileModalMode==='create'){
    var id=Date.now();
    ecoPeople.push({id:id,firstName:nome.value.trim(),lastName:cognome,name:fullName,rel:rel,color:ecoPalette[ecoPeople.length%ecoPalette.length],count:0,duration:"0 min",init:ecoInit(fullName),fav:false,photo:photo,desc:desc,birth:birth,death:death});
    ecoMemories[id]=[];
    ecoShowToast('Profilo "'+fullName+'" creato');
  } else {
    var p=ecoPeople.find(function(x){return x.id===ecoEditingProfileId;});
    if(!p) return;
    p.firstName=nome.value.trim(); p.lastName=cognome; p.name=fullName; p.rel=rel; p.birth=birth; p.death=death;
    p.desc=desc; if(photo) p.photo=photo; p.init=ecoInit(fullName);
    ecoShowToast('Profilo "'+fullName+'" aggiornato');
    if(ecoCurrentPersonId===ecoEditingProfileId) ecoOpenDetail(ecoEditingProfileId);
  }
  ecoCloseModal("ecoModalProfile");
  ecoRenderPersone(); ecoRenderHome();
}

function getVal(id){var el=document.getElementById(id);return el?el.value:"";}

function ecoOpenMemoryDetail(memId){
  var mems=ecoMemories[ecoCurrentPersonId]||[];
  var m=mems.find(function(x){return x.id===memId;});
  if(!m) return;
  var p=ecoPeople.find(function(x){return x.id===ecoCurrentPersonId;});
  ecoActiveMemoryRef={personId:ecoCurrentPersonId,memId:memId};

  var emoEl=document.getElementById("ecoMemoryDetailEmotion");
  if(emoEl) emoEl.innerHTML='<div class="eco-memory-detail-emotion" style="background:'+ecoEmotionColors[m.emotion]+'22;color:'+ecoEmotionColors[m.emotion]+'"><div style="width:7px;height:7px;border-radius:50%;background:'+ecoEmotionColors[m.emotion]+';display:inline-block;margin-right:4px"></div>'+ecoEmotionLabels[m.emotion]+(m.fav?' &middot; &#11088; Preferito':'')+'</div>';

  var wEl=document.getElementById("ecoMemoryDetailWave");
  if(wEl) wEl.innerHTML=ecoMakeWave(30,18);
  setText("ecoMemoryDetailDur",m.dur);
  setText("ecoMemoryDetailDate",m.date);
  setText("ecoMemoryDetailPerson",p?p.name:"");
  setText("ecoMemoryDetailTranscript",'"'+m.transcript+'"');

  var def=document.getElementById("ecoMemoryActionsDefault");
  if(def) def.style.display="flex";
  var mp=document.getElementById("ecoMovePickerBox");
  if(mp) mp.classList.remove("show");
  var mcf=document.getElementById("ecoMoveConfirmFooter");
  if(mcf) mcf.style.display="none";
  var ef=document.getElementById("ecoMemoryEditForm");
  if(ef) ef.style.display="none";

  ecoOpenModal("ecoModalMemory");
}

function setText(id,txt){var el=document.getElementById(id);if(el) el.textContent=txt;}

function ecoShowMemoryEditForm(){
  var mems=ecoMemories[ecoActiveMemoryRef.personId];
  var m=mems.find(function(x){return x.id===ecoActiveMemoryRef.memId;});
  if(!m) return;
  setValue("ecoEditEmotion",m.emotion);
  setValue("ecoEditTranscript",m.transcript);
  var def=document.getElementById("ecoMemoryActionsDefault");
  if(def) def.style.display="none";
  var ef=document.getElementById("ecoMemoryEditForm");
  if(ef) ef.style.display="block";
}
function ecoHideMemoryEditForm(){
  var def=document.getElementById("ecoMemoryActionsDefault");
  if(def) def.style.display="flex";
  var ef=document.getElementById("ecoMemoryEditForm");
  if(ef) ef.style.display="none";
}
function ecoSaveMemoryEdit(){
  var mems=ecoMemories[ecoActiveMemoryRef.personId];
  var m=mems.find(function(x){return x.id===ecoActiveMemoryRef.memId;});
  if(!m) return;
  m.emotion=getVal("ecoEditEmotion");
  m.transcript=getVal("ecoEditTranscript");
  ecoCloseModal("ecoModalMemory");
  ecoRenderDetailMemories();
  ecoShowToast("Ricordo aggiornato");
}

function ecoShowMovePicker(){
  var box=document.getElementById("ecoMovePickerBox");
  if(!box) return;
  ecoSelectedMoveTargetId=null;
  box.innerHTML=ecoPeople.filter(function(p){return p.id!==ecoActiveMemoryRef.personId;}).map(function(p){return '<div class="eco-move-option" data-id="'+p.id+'" onclick="ecoSelectMoveTarget('+p.id+')"><div class="eco-avatar-round" style="background:'+p.color+'">'+ecoAvatarContent(p)+'</div>'+p.name+'</div>';}).join("");
  box.classList.add("show");
  var def=document.getElementById("ecoMemoryActionsDefault");
  if(def) def.style.display="none";
  var mcf=document.getElementById("ecoMoveConfirmFooter");
  if(mcf) mcf.style.display="flex";
}
function ecoHideMovePicker(){
  var box=document.getElementById("ecoMovePickerBox");
  if(box) box.classList.remove("show");
  var mcf=document.getElementById("ecoMoveConfirmFooter");
  if(mcf) mcf.style.display="none";
  var def=document.getElementById("ecoMemoryActionsDefault");
  if(def) def.style.display="flex";
}
function ecoSelectMoveTarget(id){
  ecoSelectedMoveTargetId=id;
  document.querySelectorAll(".eco-move-option").forEach(function(el){el.classList.remove("selected");});
  var sel=document.querySelector('.eco-move-option[data-id="'+id+'"]');
  if(sel) sel.classList.add("selected");
}
function ecoConfirmMove(){
  if(!ecoSelectedMoveTargetId){ecoShowToast("Seleziona una persona");return;}
  var fromMems=ecoMemories[ecoActiveMemoryRef.personId];
  var idx=fromMems.findIndex(function(x){return x.id===ecoActiveMemoryRef.memId;});
  var mem=fromMems.splice(idx,1)[0];
  ecoMemories[ecoSelectedMoveTargetId].push(mem);
  var fromP=ecoPeople.find(function(x){return x.id===ecoActiveMemoryRef.personId;});
  var toP=ecoPeople.find(function(x){return x.id===ecoSelectedMoveTargetId;});
  if(fromP) fromP.count=ecoMemories[fromP.id].length;
  if(toP) toP.count=ecoMemories[toP.id].length;
  ecoCloseModal("ecoModalMemory");
  ecoRenderDetailMemories(); ecoRenderPersone();
  ecoShowToast('Ricordo spostato su "'+(toP?toP.name:'')+'"');
}

function ecoAskDeleteConfirm(){
  var el=document.getElementById("ecoConfirmDeleteOverlay");
  if(el) el.classList.add("active");
}
function ecoCloseConfirmDelete(){
  var el=document.getElementById("ecoConfirmDeleteOverlay");
  if(el) el.classList.remove("active");
}
function ecoDeleteMemoryConfirmed(){
  var mems=ecoMemories[ecoActiveMemoryRef.personId];
  var idx=mems.findIndex(function(x){return x.id===ecoActiveMemoryRef.memId;});
  if(idx>-1) mems.splice(idx,1);
  var p=ecoPeople.find(function(x){return x.id===ecoActiveMemoryRef.personId;});
  if(p) p.count=mems.length;
  ecoCloseConfirmDelete();
  ecoCloseModal("ecoModalMemory");
  ecoRenderDetailMemories(); ecoRenderPersone();
  ecoShowToast("Ricordo eliminato");
}

function ecoToggleBigRecord(){
  var circle=document.getElementById("ecoBigRecordCircle");
  var hint=document.getElementById("ecoBigHint");
  var waves=document.getElementById("ecoRecWaves");
  if(!ecoRecording){
    ecoRecording=true; ecoRecSeconds=0;
    if(circle){circle.style.background="radial-gradient(circle at 35% 30%,#c99aff,#7a4cbf)";circle.textContent="&#9209;";}
    if(hint) hint.textContent="Sto ascoltando... parla con naturalezza.";
    if(waves){waves.innerHTML=Array.from({length:24}).map(function(_,i){return '<span style="height:'+(10+Math.random()*28)+'px;animation-delay:'+(i*0.05)+'s"></span>';}).join("");waves.classList.add("show");}
    ecoRecInterval=setInterval(function(){
      ecoRecSeconds++;
      var m=String(Math.floor(ecoRecSeconds/60)).padStart(2,"0");
      var s=String(ecoRecSeconds%60).padStart(2,"0");
      var t=document.getElementById("ecoBigTimer");
      if(t) t.textContent=m+":"+s;
    },1000);
  } else {
    ecoRecording=false;
    clearInterval(ecoRecInterval);
    if(circle){circle.style.background="radial-gradient(circle at 35% 30%,#ff8f5c,#e0532a)";circle.textContent="&#127897;";}
    if(waves) waves.classList.remove("show");
    var m=String(Math.floor(ecoRecSeconds/60)).padStart(2,"0");
    var s=String(ecoRecSeconds%60).padStart(2,"0");
    ecoPendingRecordingDuration=m+":"+s;
    if(hint) hint.textContent="Registrazione completata. Scegli a chi appartiene.";
    ecoOpenAssignPersonModal();
  }
}

function ecoOpenAssignPersonModal(){
  ecoSelectedMoveTargetId=null;
  var list=document.getElementById("ecoAssignPersonList");
  if(!list) return;
  list.innerHTML=ecoPeople.map(function(p){return '<div class="eco-move-option" data-id="'+p.id+'" onclick="ecoSelectAssignTarget('+p.id+')"><div class="eco-avatar-round" style="background:'+p.color+'">'+ecoAvatarContent(p)+'</div>'+p.name+'</div>';}).join("");
  ecoOpenModal("ecoModalAssignPerson");
}
function ecoSelectAssignTarget(id){
  ecoSelectedMoveTargetId=id;
  document.querySelectorAll("#ecoAssignPersonList .eco-move-option").forEach(function(el){el.classList.remove("selected");});
  var sel=document.querySelector('#ecoAssignPersonList .eco-move-option[data-id="'+id+'"]');
  if(sel) sel.classList.add("selected");
}
function ecoConfirmAssignRecording(){
  if(!ecoSelectedMoveTargetId){ecoShowToast("Seleziona una persona");return;}
  var p=ecoPeople.find(function(x){return x.id===ecoSelectedMoveTargetId;});
  var newMem={id:Date.now(),date:"15 lug 2026",emotion:"gratitude",dur:ecoPendingRecordingDuration,fav:false,transcript:"Nuova registrazione in attesa di trascrizione automatica."};
  ecoMemories[p.id].push(newMem);
  p.count=ecoMemories[p.id].length;
  ecoCloseModal("ecoModalAssignPerson");
  ecoResetRecordScreen();
  ecoRenderPersone(); ecoRenderHome();
  ecoShowToast('Ricordo salvato per "'+p.name+'"');
}
function ecoDiscardRecording(){
  ecoCloseModal("ecoModalAssignPerson");
  ecoResetRecordScreen();
  ecoShowToast("Registrazione scartata");
}
function ecoResetRecordScreen(){
  var t=document.getElementById("ecoBigTimer");
  if(t) t.textContent="00:00";
  var h=document.getElementById("ecoBigHint");
  if(h) h.textContent="Tocca il microfono per iniziare a registrare.";
  ecoRecSeconds=0;
}

ecoRenderHome();
ecoRenderPersone();
</script>`
  }
};
// rebuild trigger 1784119911
