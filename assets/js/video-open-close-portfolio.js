// Make sure to import the categories from the api.js file
import categories from './api.js';

const getCategoryItems = (category) => {
  const items = categories[category];
  return items.map((item) => ({
    name: item.name,
    img: item.img,
    src: item.src,
  }));
};

document.addEventListener('DOMContentLoaded', () => {
  const rWorkVideos = document.querySelector('.r-work-videos');
  const categoriesToDisplay = Object.keys(categories).slice(0, 5); // Get the first 5 categories

  categoriesToDisplay.forEach((category) => {
    const items = getCategoryItems(category).slice(0, 3); // Get the first 3 videos from each category

    items.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('video');
      div.id = category;

      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.name;

      div.addEventListener('mouseover', () => {
        div.style.setProperty('--content', `'${item.name}'`);
      });

      div.addEventListener('mouseout', () => {
        div.style.removeProperty('--content');
      });

      // Add a click event listener to open the video
      div.addEventListener('click', () => {
        openVideo(item.src, item.name);
      });

      div.appendChild(img);
      rWorkVideos.appendChild(div);
    });
  });
});

const openVideo = (src, name) => {
  const displayContainer = document.querySelector('.r-work');
  const displayVideoContainer = document.createElement('section');
  displayVideoContainer.id = 'display-container';

  const addDiv = document.createElement('div');
  addDiv.id = 'open-video';

  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';
  addDiv.appendChild(closeButton);

  const displayVideo = document.createElement('div');
  displayVideo.className = 'display-video';

  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.allowFullscreen = true;
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute(
    'allow',
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  );
  displayVideo.appendChild(iframe);

  addDiv.appendChild(displayVideo);
  displayVideoContainer.appendChild(addDiv);

  closeButton.addEventListener('click', () => {
    displayContainer.removeChild(displayVideoContainer);
  });

  displayVideoContainer.addEventListener('click', () => {
    displayContainer.removeChild(displayVideoContainer);
  });

  displayContainer.appendChild(displayVideoContainer);
};
