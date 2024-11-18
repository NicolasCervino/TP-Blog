import posts, { categories } from './data/posts.js';

function renderCategories() {
  const categoriesGrid = document.getElementById('categories-grid');

  Object.values(categories).forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    categoryCard.innerHTML = `
      <img src="${category.image}" alt="${category.title}">
      <h3>${category.title}</h3>
      <p>${category.description}</p>
    `;

    categoryCard.addEventListener('click', () => loadCategoryPosts(category.id));
    categoriesGrid.appendChild(categoryCard);
  });
}

function loadCategoryPosts(categoryId) {
  const categoryPostsSection = document.getElementById('category-posts');
  const category = categories[categoryId];

  // Filtramos los posts que pertenecen a esta categoría
  const categoryPosts = Object.entries(posts)
    .map(([id, post]) => ({ id, ...post }))
    .filter(post => post.category.toLowerCase() === categoryId);

  // Renderizamos el título de la sección y los posts
  const template = `
    <h2>Posts en ${category.title}</h2>
    <div class="posts-grid">
      ${categoryPosts.map(post => `
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
      `).join('')}
    </div>
  `;

  categoryPostsSection.innerHTML = template;

  // Hacemos scroll suave hasta la sección de posts
  categoryPostsSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', renderCategories);