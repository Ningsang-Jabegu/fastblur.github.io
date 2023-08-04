// Get references to all the video thumbnail elements
const videoThumbnails = document.querySelectorAll('.r-work-videos .video');

// Loop through each video thumbnail
videoThumbnails.forEach((thumbnail) => {
  // Get the <img> element inside the thumbnail
  const img = thumbnail.querySelector('img');
  // Get the title of the video from the 'alt' attribute of the image
  const videoTitle = img.alt;

  // Add a 'mouseover' event listener to the thumbnail
  thumbnail.addEventListener('mouseover', () => {
    // When the mouse is over the thumbnail, set the '--content' CSS variable to the video title
    thumbnail.style.setProperty('--content', `'${videoTitle}'`);
  });

  // Add a 'mouseout' event listener to the thumbnail
  thumbnail.addEventListener('mouseout', () => {
    // When the mouse leaves the thumbnail, remove the '--content' CSS variable
    thumbnail.style.removeProperty('--content');
  });
});
