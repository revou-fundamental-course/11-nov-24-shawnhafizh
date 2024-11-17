const navbar = document.querySelector('.main-header');
const scrollThreshold = 65; // Adjust this value as needed

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});