// References
const header = document.querySelector('header');
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const contactForm = document.querySelector('#contactForm');
const buttonMailTo = document.querySelector('#mailTo');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
});

const toggleMenu = () => {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(contactForm);
  buttonMailTo.setAttribute('href', `mailTo:cesarmauricio.arellano@gmail.com?subject=Hello, I'm ${form.get('name')}, I want to contact you&body=Email: ${form.get('email')}, Message: ${form.get('message')}`);
  buttonMailTo.click();
});

