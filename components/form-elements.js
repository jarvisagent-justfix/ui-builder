/* =====================================================
   form-elements.js — Elementi form
   ===================================================== */

const blockInput = {
  category: 'Form',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="10" rx="4" fill="#F0F0F0" stroke="#DFE6E9" stroke-width="1"/><rect x="6" y="10" width="10" height="4" rx="2" fill="#B2BEC3" opacity="0.3"/></svg>`,
  content: `
    <div style="padding: 8px; font-family: 'Inter', sans-serif;">
      <label style="font-size: 13px; font-weight: 500; color: #636E72; display: block; margin-bottom: 6px;">Etichetta</label>
      <input type="text" placeholder="Inserisci testo..." style="width: 100%; padding: 10px 14px; border: 1.5px solid #DFE6E9; border-radius: 10px; font-size: 14px; font-family: 'Inter', sans-serif; outline: none; transition: border 0.2s;"/>
    </div>`
};

const blockTextarea = {
  category: 'Form',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="4" fill="#F0F0F0" stroke="#DFE6E9" stroke-width="1"/><rect x="6" y="8" width="12" height="3" rx="1.5" fill="#B2BEC3" opacity="0.3"/><rect x="6" y="13" width="9" height="3" rx="1.5" fill="#B2BEC3" opacity="0.2"/></svg>`,
  content: `
    <div style="padding: 8px; font-family: 'Inter', sans-serif;">
      <label style="font-size: 13px; font-weight: 500; color: #636E72; display: block; margin-bottom: 6px;">Descrizione</label>
      <textarea placeholder="Scrivi qui..." rows="3" style="width: 100%; padding: 10px 14px; border: 1.5px solid #DFE6E9; border-radius: 10px; font-size: 14px; font-family: 'Inter', sans-serif; outline: none; resize: vertical;"></textarea>
    </div>`
};

const blockSelect = {
  category: 'Form',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="10" rx="4" fill="#F0F0F0" stroke="#DFE6E9" stroke-width="1"/><path d="M16 12l-4 4-4-4" stroke="#636E72" stroke-width="1.5" fill="none"/></svg>`,
  content: `
    <div style="padding: 8px; font-family: 'Inter', sans-serif;">
      <label style="font-size: 13px; font-weight: 500; color: #636E72; display: block; margin-bottom: 6px;">Scegli opzione</label>
      <select style="width: 100%; padding: 10px 14px; border: 1.5px solid #DFE6E9; border-radius: 10px; font-size: 14px; font-family: 'Inter', sans-serif; outline: none; background: white; appearance: auto;">
        <option>Opzione 1</option>
        <option>Opzione 2</option>
        <option>Opzione 3</option>
      </select>
    </div>`
};

const blockToggle = {
  category: 'Form',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="8" rx="4" fill="#6C5CE7" opacity="0.3"/><circle cx="16" cy="12" r="4" fill="#6C5CE7"/></svg>`,
  content: `
    <div style="display: flex; align-items: center; gap: 10px; padding: 8px; font-family: 'Inter', sans-serif;">
      <label style="position: relative; display: inline-block; width: 44px; height: 24px;">
        <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;"/>
        <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #6C5CE7; border-radius: 12px; transition: 0.3s;">
          <span style="position: absolute; content: ''; height: 18px; width: 18px; right: 3px; top: 3px; background: white; border-radius: 50%; transition: 0.3s;"></span>
        </span>
      </label>
      <span style="font-size: 14px; color: #2D3436;">Notifiche</span>
    </div>`
};

const blockCheckbox = {
  category: 'Form',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="5" width="14" height="14" rx="3" fill="#6C5CE7" opacity="0.2" stroke="#6C5CE7" stroke-width="1.5"/><path d="M9 12l2 2 4-4" stroke="#6C5CE7" stroke-width="2" fill="none"/></svg>`,
  content: `
    <div style="display: flex; align-items: center; gap: 8px; padding: 8px; font-family: 'Inter', sans-serif;">
      <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: #6C5CE7;"/>
      <label style="font-size: 14px; color: #2D3436;">Opzione selezionata</label>
    </div>`
};

const blockDatePicker = {
  category: 'Form',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="14" rx="3" fill="#F0F0F0" stroke="#DFE6E9" stroke-width="1"/><rect x="3" y="6" width="18" height="4" rx="2" fill="#6C5CE7" opacity="0.8"/><rect x="6" y="12" width="4" height="2" rx="1" fill="#B2BEC3"/><rect x="12" y="12" width="4" height="2" rx="1" fill="#B2BEC3"/></svg>`,
  content: `
    <div style="padding: 8px; font-family: 'Inter', sans-serif;">
      <label style="font-size: 13px; font-weight: 500; color: #636E72; display: block; margin-bottom: 6px;">Data</label>
      <input type="date" style="width: 100%; padding: 10px 14px; border: 1.5px solid #DFE6E9; border-radius: 10px; font-size: 14px; font-family: 'Inter', sans-serif; outline: none;"/>
    </div>`
};

const blockSearch = {
  category: 'Form',
  media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6" stroke="#636E72" stroke-width="2" fill="none"/><path d="M15 15l4 4" stroke="#636E72" stroke-width="2"/></svg>`,
  content: `
    <div style="padding: 8px; font-family: 'Inter', sans-serif;">
      <div style="display: flex; align-items: center; background: white; border: 1.5px solid #DFE6E9; border-radius: 10px; padding: 8px 14px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B2BEC3" stroke-width="2"><circle cx="10" cy="10" r="6"/><path d="M15 15l4 4"/></svg>
        <input type="text" placeholder="Cerca..." style="border: none; outline: none; font-size: 14px; font-family: 'Inter', sans-serif; margin-left: 8px; width: 100%;"/>
      </div>
    </div>`
};
