const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav').querySelector('ul');
const navLinks = nav.querySelectorAll('a');

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

// Lógica de rolagem para os botões de projetos e experiência
const projectsGrid = document.querySelector('#projects .grid');
const experienceGrid = document.querySelector('#experience .grid');
const projectsButtons = document.getElementById('projects-buttons');
const experienceButtons = document.getElementById('experience-buttons');

if (projectsButtons && projectsGrid) {
 projectsButtons.querySelector('.right-arrow').addEventListener('click', () => {
  const cardWidth = projectsGrid.querySelector('.card').offsetWidth + 24; // Adiciona o gap
  projectsGrid.scrollLeft += cardWidth;
 });
 projectsButtons.querySelector('.left-arrow').addEventListener('click', () => {
  const cardWidth = projectsGrid.querySelector('.card').offsetWidth + 24; // Adiciona o gap
  projectsGrid.scrollLeft -= cardWidth;
 });
}

if (experienceButtons && experienceGrid) {
 experienceButtons.querySelector('.right-arrow').addEventListener('click', () => {
  const cardWidth = experienceGrid.querySelector('.card').offsetWidth + 24; // Adiciona o gap
  experienceGrid.scrollLeft += cardWidth;
 });
 experienceButtons.querySelector('.left-arrow').addEventListener('click', () => {
  const cardWidth = experienceGrid.querySelector('.card').offsetWidth + 24; // Adiciona o gap
  experienceGrid.scrollLeft -= cardWidth;
 });
}