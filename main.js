const menuToggle = document.querySelector('.menu-toggle');
const navGrid = document.querySelector('.nav-grid');
const byWhite = document.querySelector('.bg-white');

menuToggle.addEventListener('click', () => {
  navGrid.classList.toggle('closed-clip-path');
  byWhite.classList.toggle('closed-clip-path');
});
