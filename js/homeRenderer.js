import posts from './data/posts.js';

function getHeroPost() {
  console.log('Posts disponibles:', posts); // Debug
  return posts[1];
}

function getPostCards() {
  return Object.entries(posts)
    .filter(([id]) => id !== '1')
    .map(([id, post]) => ({
      id,
      ...post
    }));
}


// Renderiza el post destacado (hero)
function renderHero() {
  const heroPost = getHeroPost();
  const template = `
    <div class="hero-card">
      <a href="post.html?id=1">
        <img src="${heroPost.featuredImage}" alt="${heroPost.title}">
        <div class="hero-card-content">
          <span class="category">${heroPost.category}</span>
          <h1>${heroPost.title}</h1>
          <div class="post-meta">
            <div class="author">
              <img src="${heroPost.author.image}" alt="${heroPost.author.name}">
              <span>${heroPost.author.name}</span>
            </div>
            <span class="date">${heroPost.date}</span>
          </div>
        </div>
      </a>
    </div>
  `;

  document.getElementById('hero-section').innerHTML = template;
}

// Renderiza las tarjetas de posts
function renderPostCards() {
  const postsList = getPostCards();
  const cardsHTML = postsList.map(post => `
    <div class="post-card">
      <a href="post.html?id=${post.id}">
        <img src="${post.featuredImage}" alt="${post.title}">
        <div class="post-content">
          <span class="category">${post.category}</span>
          <h3>${post.title}</h3>
          <div class="post-meta">
            <div class="author">
              <img src="${post.author.image}" alt="${post.author.name}">
              <span>${post.author.name}</span>
            </div>
            <span class="date">${post.date}</span>
          </div>
        </div>
      </a>
    </div>
  `).join('');

  document.getElementById('posts-grid').innerHTML = cardsHTML;
}

// Inicializa la página
document.addEventListener('DOMContentLoaded', () => {
  try {
    renderHero();
    renderPostCards();
  } catch (error) {
    console.error('Error en la inicialización:', error);
  }
});