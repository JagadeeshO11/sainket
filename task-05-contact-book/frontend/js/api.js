const BASE_URL = 'http://localhost:3005/api/contacts';

async function apiGetContacts(search = '') {
  const url = search ? `${BASE_URL}?search=${encodeURIComponent(search)}` : BASE_URL;
  const res = await fetch(url);
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}

async function apiAddContact(name, phone, email) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, email })
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}

async function apiDeleteContact(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
}
