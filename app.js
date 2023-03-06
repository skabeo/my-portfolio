const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
})

closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
})

menu.addEventListener('click',(event) =>{
  if (event.target.tagName === 'A') {
    menu.style.display = 'none'
  }
})