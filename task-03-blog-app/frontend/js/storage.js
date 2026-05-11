// All data stored in localStorage — no backend needed
const STORAGE_KEY = 'blog_posts';

function getPosts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function addPost(title, content) {
  const posts = getPosts();
  const post = { id: Date.now().toString(), title, content, createdAt: new Date().toLocaleString() };
  posts.unshift(post);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  return post;
}

function deletePost(id) {
  const updated = getPosts().filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
