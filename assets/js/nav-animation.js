const mobileNavIcon = document.querySelector(".nav-menu");
const showOnClick = document.querySelector("nav .nav-item");
const backDrop = document.querySelector("#back-drop");
const navElement = document.querySelectorAll(".nav-bar .nav-item li");
mobileNavIcon.addEventListener("click", () => {
  if (showOnClick.classList.contains("show-f")) {
    hideMe();
  } else {
    // showOnClick.style.opacity = 0;
    // showOnClick.style.visibility = "visible";
    backDrop.classList.add("back-drop");
    showOnClick.classList.add("show-f");
    requestAnimationFrame(() => {
      showOnClick.animate(
        [
            { transform: "translateY(-100%)" },
            { transform: "translateY(0%)" },
            
        ],
        {
          duration: 300,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    });
  }
});
function hideMe() {
    showOnClick.animate(
      [
        { transform: "translateY(0%)" },
      { transform: "translateY(-100%)" },
      ],
      {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards",
      }
    ).onfinish = () => {
      showOnClick.classList.remove("show-f");
      backDrop.classList.remove("back-drop");
      showOnClick.style.marginTop = "3em";
    };
  }
  
backDrop.addEventListener("click", () => {
  hideMe();
});
window.addEventListener('resize', () => {
    if (!showOnClick.classList.contains('show-f')) {
      showOnClick.style.display = 'blcok';
    }
  });