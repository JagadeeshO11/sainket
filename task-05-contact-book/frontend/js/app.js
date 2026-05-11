function safe(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function validate(name, phone, email) {
  if (!name || !phone || !email) return 'All fields are required.';
  if (!/^\d{7,15}$/.test(phone)) return 'Phone must be 7–15 digits only.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email.';
  return null;
}

async function loadContacts(search = '') {
  document.getElementById('loader').classList.remove('hidden');
  try {
    const contacts = await apiGetContacts(search);
    renderContacts(contacts);
  } catch (err) {
    alert('Error loading contacts: ' + err.message);
  } finally {
    document.getElementById('loader').classList.add('hidden');
  }
}

function renderContacts(contacts) {
  const list = document.getElementById('contactsList');
  const emptyMsg = document.getElementById('emptyMsg');

  document.getElementById('contactCount').textContent = contacts.length ? `(${contacts.length})` : '';
  list.innerHTML = '';
  emptyMsg.classList.toggle('hidden', contacts.length > 0);

  contacts.forEach(c => {
    const card = document.createElement('div');
    card.className = 'contact-card';
    card.innerHTML = `
      <div class="avatar">${safe(c.name.charAt(0).toUpperCase())}</div>
      <div class="contact-info">
        <strong>${safe(c.name)}</strong>
        <span>${safe(c.phone)} · ${safe(c.email)}</span>
      </div>
      <button class="del-btn" data-id="${c._id}">Delete</button>
    `;
    list.appendChild(card);
  });
}

document.getElementById('addBtn').addEventListener('click', async () => {
  const name  = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const errorEl = document.getElementById('formError');

  const error = validate(name, phone, email);
  if (error) {
    errorEl.textContent = error;
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  try {
    await apiAddContact(name, phone, email);
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    loadContacts();
  } catch (err) {
    errorEl.textContent = err.message;
    errorEl.classList.remove('hidden');
  }
});

let searchTimer;
document.getElementById('searchInput').addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  const query = e.target.value.trim();
  const countEl = document.getElementById('searchCount');
  searchTimer = setTimeout(async () => {
    await loadContacts(query);
    if (query) {
      const contacts = await apiGetContacts(query);
      countEl.textContent = `${contacts.length} result(s) for "${query}"`;
      countEl.classList.remove('hidden');
    } else {
      countEl.classList.add('hidden');
    }
  }, 300);
});

document.getElementById('contactsList').addEventListener('click', async (e) => {
  if (e.target.classList.contains('del-btn')) {
    try {
      await apiDeleteContact(e.target.dataset.id);
      loadContacts(document.getElementById('searchInput').value.trim());
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  }
});

loadContacts();
