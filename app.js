const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-btn');
const links = document.querySelectorAll('.links a');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
});

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    menu.style.display = 'none';
    const targetSection = document.querySelector(event.target.hash);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    event.preventDefault();
  });
});