const threeLineIcon = document.querySelector(".nav-menu");
const navIcon = document.querySelector(".nav-menu i");
const navItems = document.querySelector(".nav-item");

threeLineIcon.addEventListener('click', () => {
  const style = navItems.style;

  if (style.display !== "flex") {
    style.display = "flex";
    navIcon.classList.remove('fa-bars');
    navIcon.classList.add('fa-xmark');
    document.body.style.overflow = "hidden"; // Prevent background scroll
  } else {
    style.display = "none";
    navIcon.classList.add('fa-bars');
    navIcon.classList.remove('fa-xmark');
    document.body.style.overflow = "auto"; // Restore background scroll
  }
});

