const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.6)';
    navbar.style.backdropFilter = 'blur(15px)';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.3)';
    navbar.style.backdropFilter = 'blur(10px)';
  }
});
