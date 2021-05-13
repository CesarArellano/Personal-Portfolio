// References
const header = document.querySelector('header');
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
});

const toggleMenu = () => {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
};
