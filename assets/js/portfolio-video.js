const videoContainer = document.querySelector(".r-work-videos");
const videoContainerAll = document.querySelectorAll(".r-work-videos");
const all = document.querySelector(".all");
const videoMenu = document.querySelector(".video-menu");
const videos = videoContainer.querySelectorAll(".video");
const menuItems = videoMenu.querySelectorAll("a");

/*video-hide*/

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const id = menuItem.getAttribute("href").substring(1);

    videos.forEach((video) => {
      if (video.id !== id) {
        video.classList.add("video-hide");
      } else {
        video.classList.remove("video-hide");
      }
    });

    menuItems.forEach((item) => {
      if (item === menuItem) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  });
});

const moreVideosButton = document.querySelector(".more-videos");
const video_Elements = document.querySelectorAll(".r-work-videos .video");
const hideButtons = document.querySelectorAll(".hide-video-button");

// moreVideosButton.addEventListener("click", () => {
//   moreVideosButton.innerText = "Less -";
//   if(moreVideosButton.innerHTML == "Less -") {
//     moreVideosButton.addEventListener("click", () => {
//       video_Elements.forEach((video) => {
//         moreVideosButton.addEventListener("click", () => {
//           video_Elements.forEach((video) => {
//             if (video.classList.contains("video-hide")) {
              
//               video.classList.remove("video-hide");
//             }
//           })
//         })
//       })
//     });
//   }
//   else {
//     video_Elements.forEach((video) => {
//       if (video.classList.contains("video-hide")) {
//         video.classList.remove("video-hide");
//       }
//     });
//   }
// });