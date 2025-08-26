const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav').querySelector('ul');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});
