const whyVideoDiv = document.querySelector('.org-text-icon.why-video');
whyVideoDiv.addEventListener('click', () => {
  displayVideo.innerHTML = ""; // Clear previous content

  // Create iframe element with the video URL
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/hdDzEWFM2rc?autoplay=1'; // Replace VIDEO_ID with the actual video ID
  iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

  // Append the iframe to the display video container
  displayVideo.appendChild(iframe);

  if (!displayContainer.contains(displayVideoContainer)) {
    displayContainer.appendChild(displayVideoContainer);
  }
});
