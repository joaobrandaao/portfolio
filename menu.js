const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav').querySelector('ul');
const navLinks = nav.querySelectorAll('a'); // Seleciona todos os links dentro do menu

// Abre e fecha o menu ao clicar no botão
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Fecha o menu quando um link é clicado
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});