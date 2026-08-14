// ===== SmartSpend — vanilla JS expense tracker =====
// data model: { id, title, amount, type, category, date }

const STORAGE_KEY = 'smartspend.tx.v1';
const THEME_KEY = 'smartspend.theme';

// ---- state ----
let txs = load();
let filter = { type: 'all', cat: 'all', q: '' };

// ---- DOM refs ----
const $ = (s) => document.querySelector(s);