function safe(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function renderPosts() {
  const posts = getPosts();
  const list = document.getElementById('postsList');
  const emptyMsg = document.getElementById('emptyMsg');

  document.getElementById('postCount').textContent = posts.length ? `(${posts.length})` : '';
  list.innerHTML = '';
  emptyMsg.classList.toggle('hidden', posts.length > 0);

  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <h3>${safe(post.title)}</h3>
      <div class="post-meta">${post.createdAt}</div>
      <p>${safe(post.content)}</p>
      <button class="delete-btn" data-id="${post.id}">Delete</button>
    `;
    list.appendChild(card);
  });
}

document.getElementById('addPostBtn').addEventListener('click', () => {
  const title   = document.getElementById('postTitle').value.trim();
  const content = document.getElementById('postContent').value.trim();
  const errorEl = document.getElementById('formError');

  if (!title || !content) {
    errorEl.textContent = 'Title and content are required.';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  addPost(title, content);
  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';
  renderPosts();
});

document.getElementById('postsList').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    deletePost(e.target.dataset.id);
    renderPosts();
  }
});

renderPosts();
