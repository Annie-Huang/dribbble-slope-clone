const menuToggle = document.querySelector('.menu-toggle');
const mainGrid = document.querySelector('.main-grid');

menuToggle.addEventListener('click', () => {
  mainGrid.toggleAttribute('data-big-nav-open');
});
