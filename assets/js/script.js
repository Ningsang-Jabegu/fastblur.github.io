const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
