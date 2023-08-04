// Get the reference to the "why-video" div element
const whyVideoDiv = document.querySelector('.org-text-icon.why-video');

// Add a click event listener to the "why-video" div
whyVideoDiv.addEventListener('click', () => {
  // Clear previous content in the displayVideo container
  displayVideo.innerHTML = "";

  // Create an iframe element to display the video
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/hdDzEWFM2rc?autoplay=1'; // Replace VIDEO_ID with the actual video ID
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;

  // Uncomment the following line if you want to use lazy loading for the iframe
  // iframe.setAttribute('loading', 'lazy');

  // Append the iframe to the display video container
  displayVideo.appendChild(iframe);

  // Check if the display video container is not already present in the display container
  // and if not, then append it to the display container
  if (!displayContainer.contains(displayVideoContainer)) {
    displayContainer.appendChild(displayVideoContainer);
  }
});
