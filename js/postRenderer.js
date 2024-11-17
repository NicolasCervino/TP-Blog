import posts from './data/posts.js';

function getPostIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id'));
}

function renderPost(post) {
  const template = `
    <article class="blog-post">
      <div class="post-header">
        <span class="category">${post.category}</span>
        <h1>${post.title}</h1>
        <div class="post-meta">
          <div class="author">
            <img src="${post.author.image}" alt="${post.author.name}">
            <span>${post.author.name}</span>
          </div>
          <span class="date">${post.date}</span>
        </div>
      </div>

      <div class="featured-image">
        <img src="${post.featuredImage}" alt="${post.title}">
      </div>

      <div class="post-content">
        ${renderContent(post.content)}
      </div>
    </article>
  `;

  document.getElementById('post-content').innerHTML = template;
}

function renderContent(content) {
  return content.map(block => {
    switch (block.type) {
      case 'paragraph':
        return `<p>${block.text}</p>`;
      case 'heading':
        return `<h2>${block.text}</h2>`;
      case 'figure':
        return `
          <figure>
            <img src="${block.image}" alt="${block.caption}">
            <figcaption>${block.caption}</figcaption>
          </figure>
        `;
      default:
        return '';
    }
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const postId = getPostIdFromUrl();
  const post = posts[postId];

  if (post) {
    renderPost(post);
    document.title = `Rev | Line - ${post.title}`;
  } else {
    document.getElementById('post-content').innerHTML = '<h1>Post no encontrado</h1>';
  }
});