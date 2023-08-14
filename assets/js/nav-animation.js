/* This file is for navigation bar animation when scrolle down */

const nav = document.querySelector('nav');
const liOfNav = document.querySelectorAll('.nav-list-item');
const imgOfNav = document.querySelector('.nav-logo img');
const iOfNav = document.querySelector('.nav-menu i');


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    nav.classList.add('sticky');
    nav.style.background = "#0D0630";
    imgOfNav.src ="/assets/images/Fastblur_Logos/FB Logo_White.png";
    iOfNav.style.color = "#fff";
    liOfNav.forEach((item) => {
      item.style.color = "#fff";
    });
  } else {
    nav.classList.remove('sticky');
    nav.style.background = "initial";
    imgOfNav.src = "/assets/images/Fastblur_Logos/logo-with-color.avif";
    iOfNav.style.color = "initial";
    liOfNav.forEach((item) => {
      item.style.color = "initial";
    });
  }
});


// const mobileNavIcon = document.querySelector(".nav-menu");
// const showOnClick = document.querySelector("nav .nav-item");
// const backDrop = document.querySelector("#back-drop");
// const navElement = document.querySelectorAll(".nav-bar .nav-item li");
// mobileNavIcon.addEventListener("click", () => {
//   if (showOnClick.classList.contains("show-f")) {
//     hideMe();
//   } else {
//     // showOnClick.style.opacity = 0;
//     // showOnClick.style.visibility = "visible";
//     backDrop.classList.add("back-drop");
//     showOnClick.classList.add("show-f");
//     requestAnimationFrame(() => {
//       showOnClick.animate(
//         [
//             { opacity: "1",transform: "translateY(-100%)"},
//             { opacity: "1",transform: "translateY(0%)" },
            
//         ],
//         {
//           duration: 300,
//           easing: "ease-in-out",
//           fill: "forwards",
//         }
//       );
//     });
//   }
// });
// function hideMe() {
//     showOnClick.animate(
//       [
//         { opacity: "1" },
//       { opacity: "0" },
//       ],
//       {
//         duration: 300,
//         easing: "ease-in-out",
//         fill: "forwards",
//       }
//     ).onfinish = () => {
//       showOnClick.classList.remove("show-f");
//       backDrop.classList.remove("back-drop");
//     };
//   }
  
// backDrop.addEventListener("click", () => {
//   hideMe();
// });
// window.addEventListener('resize', () => {
//     if (!showOnClick.classList.contains('show-f')) {
//       showOnClick.style.display = 'block';
//     }
// });