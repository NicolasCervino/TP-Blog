document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent immediate navigation
      const href = link.getAttribute('href');

      hamburger.classList.remove('active');
      navMenu.classList.remove('active');

      // Wait for the transition to complete before navigating
      setTimeout(() => {
        window.location.href = href;
      }, 300); // Match the CSS transition time
    });
  });
});