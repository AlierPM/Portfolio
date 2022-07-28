const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navMenu = document.querySelector('.navMenu');
const navLink = document.querySelectorAll('.navLink');
const line = document.querySelector('.hamburgerLine')
function mobileMenu() {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
}
hamburgerMenu.addEventListener('click', mobileMenu);

function closeMenu() {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}

navLink.forEach((n) => n.addEventListener('click', closeMenu));
