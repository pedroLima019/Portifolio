
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-content');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

