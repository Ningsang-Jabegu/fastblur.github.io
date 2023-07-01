const videoElements = document.querySelectorAll('.r-work-videos .video');
const displayContainer = document.querySelector('.r-work');
const addDiv = document.createElement('div');
addDiv.id = 'open-video';
// Create the display video container
const displayVideoContainer = document.createElement('section');
displayVideoContainer.id = 'display-container';
displayVideoContainer.appendChild(addDiv);
// Create the close button
const closeButton = document.createElement('button');
closeButton.className = 'close-button';
closeButton.innerHTML = '&times;';
addDiv.appendChild(closeButton);
const displayVideo = document.createElement('div');
displayVideo.className = 'display-video';

addDiv.appendChild(displayVideo);

videoElements.forEach((videoElement, index) => {
  videoElement.addEventListener('click', () => {
    displayVideo.innerHTML = ""; // Clear previous content

    // Create iframe element with different video URLs
    const iframe = document.createElement('iframe');
    iframe.src = getVideoURL(index + 1); // Call a function to get the appropriate video URL based on the index
    iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');


    // Append the iframe to the display video container
    displayVideo.appendChild(iframe);

    if (!displayContainer.contains(displayVideoContainer)) {
      displayContainer.appendChild(displayVideoContainer);
    }
  });
});

// Add event listener to close the display container
closeButton.addEventListener('click', () => {
  displayContainer.removeChild(displayVideoContainer);
});
displayVideoContainer.addEventListener('click', () => {
  displayContainer.removeChild(displayVideoContainer);
});

function getVideoURL(index) {
  // Add logic to return the appropriate video URL based on the index
  // You can use a switch statement or an array of URLs
  // Example:
  switch (index) {
    case 1:
      return 'https://www.youtube.com/embed/N61HAwYrp3Y?autoplay=1';
    case 2:
      return 'https://www.youtube.com/embed/UhOxp_dsuVE?autoplay=1';
    case 3:
      return 'https://www.youtube.com/embed/my-q2pVzudU?autoplay=1';
    case 4:
      return 'https://www.youtube.com/embed/HC9sNigO6is?autoplay=1';
    case 5:
      return 'https://www.youtube.com/embed/l1z5nYjOKY0?autoplay=1';
    case 6:
      return 'https://www.youtube.com/embed/Q1zA0u_5GIo?autoplay=1';
    case 7:
      return 'https://www.youtube.com/embed/olvW7TKFRjM?autoplay=1';
    case 8:
      return 'https://www.youtube.com/embed/KORyCMjXA7c?autoplay=1';
    case 9:
      return 'https://www.youtube.com/embed/W2CjinAKxbI?autoplay=1';
    default:
      return ''; // Return empty string or default video URL
  }
}