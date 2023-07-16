const videoContainer = document.querySelector(".r-work-videos");
const videoContainerAll = document.querySelectorAll(".r-work-videos");
const all = document.querySelector(".all");
const videoMenu = document.querySelector(".video-menu");
const videos = videoContainer.querySelectorAll(".video");
const menuItems = videoMenu.querySelectorAll("a");

/*video-hide*/

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    const id = menuItem.getAttribute("href").substring(1);

    videos.forEach(video => {
        
            if (video.id !== id) {
                video.classList.add('video-hide');
              } else {
                video.classList.remove('video-hide');
              }
      
    });

    menuItems.forEach(item => {
      if (item === menuItem) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  });
});

