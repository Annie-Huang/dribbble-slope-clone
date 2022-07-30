const menuToggle = document.querySelector('.menu-toggle');
const mainGrid = document.querySelector('.main-grid');

menuToggle.addEventListener('click', () => {
  mainGrid.toggleAttribute('data-big-nav-open');

  const menuState = menuToggle.getAttribute('aria-expanded');
  console.log(menuState);
  if (menuState == 'false') {
    menuToggle.setAttribute('aria-expanded', true);
  } else {
    menuToggle.setAttribute('aria-expanded', false);
  }
});
