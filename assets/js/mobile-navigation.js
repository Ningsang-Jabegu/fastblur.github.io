/* This file is for navigation bar for the mobile devices and tablets */

// Every variable that is used in this file is decleared here
const threeLineIcon = document.querySelector(".nav-menu");
const navIcon = document.querySelector(".nav-menu i");
const navItems = document.querySelector(".nav-item");


/*-----------------------------------------------------------------------------------
This functions basically toggles the icons provided by the font awesome by just adding
and removing the class in this case it is "fa-bars" for the threeline icon and "fa-xmark"
for the cross sign.
-----------------------------------------------------------------------------------*/
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

