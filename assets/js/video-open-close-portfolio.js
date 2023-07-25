// Make sure to import the categories from the api.js file
import categories from "./api.js";

const getCategoryItems = (category) => {
  const items = categories[category];
  return items.map((item) => ({
    name: item.name,
    img: item.img,
    src: item.src,
  }));
};

// Rest of the code remains the same

// Add click event listeners to the category links
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

// Rest of the code remains the same

const moreBtn = document.querySelector(".more-videos");
let clickCount = 0;
let videosToShow = 3; // Initialize videosToShow to 3

moreBtn.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 1) {
    videosToShow = 6;
  } else if (clickCount === 2) {
    videosToShow = 9;
  } else {
    videosToShow = 3;
    clickCount = 0;
  }
  // Update the "More +" button text based on the current videosToShow value
  moreBtn.innerHTML = clickCount === 2 ? "Less -" : "More +";

  // Clear existing videos before re-displaying
  const rWorkVideos = document.querySelector(".r-work-videos");
  while (rWorkVideos.firstChild) {
    rWorkVideos.removeChild(rWorkVideos.firstChild);
  }

  // Call the function to display the videos based on the updated videosToShow value
  const selectedCategory = document.querySelector(".video-menu .selected").getAttribute("href").substring(1);
  displayVideos(selectedCategory);
});

document.addEventListener("DOMContentLoaded", () => {
  // Call the function to display the videos initially
  const selectedCategory = document.querySelector(".video-menu .selected").getAttribute("href").substring(1);
  displayVideos(selectedCategory);
});

const displayVideos = (selectedCategory) => {
  const rWorkVideos = document.querySelector(".r-work-videos");
  const categoriesToDisplay = Object.keys(categories).slice(0, 5); // Get the first 5 categories

  categoriesToDisplay.forEach((category) => {
    // Check if the current category matches the selected category or if all videos should be shown
    const shouldDisplayCategory = selectedCategory === "all" || category === selectedCategory;

    if (shouldDisplayCategory) {
      const items = getCategoryItems(category).slice(0, videosToShow); // Use the updated videosToShow value

      items.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("video");
        div.id = category;

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;

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

// Rest of the code remains the same



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
