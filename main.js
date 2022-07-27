const menuToggle = document.querySelector('.menu-toggle');
const navGrid = document.querySelector('.nav-grid');

menuToggle.addEventListener('click', () => {
  navGrid.classList.toggle('closed');
});
