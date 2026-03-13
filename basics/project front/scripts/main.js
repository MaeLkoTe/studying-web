const menuToggle = document.getElementById('menuToggle');
const overlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
document.body.classList.toggle('menu-open');
});

overlay.addEventListener('click', () => {
document.body.classList.remove('menu-open');
});

const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const age = prompt("Введите Ваш возраст", "25")
