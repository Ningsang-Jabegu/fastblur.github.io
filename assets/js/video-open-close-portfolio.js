/* This file is for the PORTFOLIO PAGE ONLY to display videos */

/*-----------------------------------------------------------------
Importing all the video data present in api.js
-----------------------------------------------------------------*/
import categories from "./api.js";

/*-----------------------------------------------------------------
We get JSON format data of name:--, img:--, src:-- for the 
particular category.
-----------------------------------------------------------------*/
const getCategoryItems = (category) => {
  if (category === "all") {
    // If "all" is passed, return JSON data for all categories
    const allItems = Object.values(categories).flat();
    return allItems.map((item) => ({
      name: item.name,
      img: item.img,
      src: item.src,
    }));
  } else {
    // For other categories, return JSON data only for the specific category
    const items = categories[category];
    return items.map((item) => ({
      name: item.name,
      img: item.img,
      src: item.src,
    }));
  }
};

/*-----------------------------------------------------------------
Add click event listeners to the category links
-----------------------------------------------------------------*/
const categoryLinks = document.querySelectorAll(".video-menu a");
categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedCategory = link.getAttribute("href").substring(1); // Get the selected category from the href attribute

    // Clear existing videos before re-displaying
    const rWorkVideos = document.querySelector(".r-work-videos");
    while (rWorkVideos.firstChild) {
      rWorkVideos.removeChild(rWorkVideos.firstChild);
    }

    // Call the function to display the videos for the selected category
    displayVideos(selectedCategory);
  });
});

/*-----------------------------------------------------------------
More btn function
-----------------------------------------------------------------*/
const moreBtn = document.querySelector(".more-videos");
let clickCount = 0;
let videosToShow = 3; // Initialize videosToShow to 3 for all category

/*-----------------------------------------------------------------
When the user clicks on the "More" btn, initially there are 3 videos per category.
If the user clicks on the "More" btn, clickCount will count and 6 videos will be shown.
If the "More" btn is clicked again, clickCount will be 2, and 9 videos will be shown.
After that, clickCount is reset to 0 because we do not have any more videos left in api.js.
-----------------------------------------------------------------*/
moreBtn.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 1) {
    videosToShow = 6;
  } else if (clickCount === 2) {
    videosToShow = 9;
    moreBtn.style.display = "none";
  } else {
    videosToShow = 3;
    clickCount = 0;
  }
  const rWorkVideos = document.querySelector(".r-work-videos");
  while (rWorkVideos.firstChild) {
    rWorkVideos.removeChild(rWorkVideos.firstChild);
  }

  // Call the function to display the videos based on the updated videosToShow value
  const selectedCategory = document
    .querySelector(".video-menu .selected")
    .getAttribute("href")
    .substring(1);
  displayVideos(selectedCategory);
});

/*-----------------------------------------------------------------
This function will display the videos initially when the user goes to the portfolio page.
-----------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const selectedCategory = document
    .querySelector(".video-menu .selected")
    .getAttribute("href")
    .substring(1);
  displayVideos(selectedCategory);
});

/*-----------------------------------------------------------------
This function will create the divs and add images for the front-end users.
-----------------------------------------------------------------*/
const displayVideos = (selectedCategory) => {
  const rWorkVideos = document.querySelector(".r-work-videos");
  const categoriesToDisplay = Object.keys(categories).slice(0, 5); // Get the first 5 categories

  categoriesToDisplay.forEach((category) => {
    // Check if the current category matches the selected category or if all videos should be shown
    const shouldDisplayCategory =
      selectedCategory === "all" || category === selectedCategory;

    const items = getCategoryItems(category);

    if (shouldDisplayCategory) {
      let itemsToShow;
      if (selectedCategory === "all") {
        // If "all" is selected, show 3 videos per category
        itemsToShow = items.slice(0, 3);
      } else {
        // If a particular category is selected, show all 9 videos of that category
        itemsToShow = items;
        moreBtn.style.display = "none"; // Hide the "More" btn for specific categories
      }

      itemsToShow.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("video");
        div.id = category;
        div.classList.add("skeleton");
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;
        img.setAttribute("loading", "lazy");

        div.addEventListener("mouseover", () => {
          div.style.setProperty("--content", `'${item.name}'`);
        });

        div.addEventListener("mouseout", () => {
          div.style.removeProperty("--content");
        });

        // Add a click event listener to open the video
        div.addEventListener("click", () => {
          openVideo(item.src, item.name);
        });

        div.appendChild(img);
        rWorkVideos.appendChild(div);
      });
    }
  });
};

/*-----------------------------------------------------------------
This function will open the videos in a popup.
-----------------------------------------------------------------*/
const openVideo = (src, name) => {
  const displayContainer = document.querySelector(".r-work");
  const displayVideoContainer = document.createElement("section");
  displayVideoContainer.id = "display-container";

  const addDiv = document.createElement("div");
  addDiv.id = "open-video";

  const closeButton = document.createElement("button");
  closeButton.className = "close-button";
  closeButton.innerHTML = "&times;";
  addDiv.appendChild(closeButton);

  const displayVideo = document.createElement("div");
  displayVideo.className = "display-video";

  const iframe = document.createElement("iframe");
  iframe.src = src;
  iframe.allowFullscreen = true;
  iframe.setAttribute("frameborder", 0);
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  displayVideo.appendChild(iframe);

  addDiv.appendChild(displayVideo);
  displayVideoContainer.appendChild(addDiv);

  closeButton.addEventListener("click", () => {
    displayContainer.removeChild(displayVideoContainer);
  });

  displayVideoContainer.addEventListener("click", () => {
    displayContainer.removeChild(displayVideoContainer);
  });

  displayContainer.appendChild(displayVideoContainer);
};
