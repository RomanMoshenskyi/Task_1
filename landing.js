const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('open');
});
const accordionItems = document.querySelectorAll('.accordion-item');
