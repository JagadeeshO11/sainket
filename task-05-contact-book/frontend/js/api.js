// Auto-detects backend URL — works locally and on Vercel
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3005'
  : 'https://task-05-contact-book.vercel.app'; // ← replace with your Vercel backend URL after deploy

async function apiGetContacts(search = '') {
  const url = search ? `${API_BASE}/api/contacts?search=${encodeURIComponent(search)}` : `${API_BASE}/api/contacts`;
  const res = await fetch(url);
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}

async function apiAddContact(name, phone, email) {
  const res = await fetch(`${API_BASE}/api/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, email })
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}

async function apiDeleteContact(id) {
  const res = await fetch(`${API_BASE}/api/contacts/${id}`, { method: 'DELETE' });
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
}
