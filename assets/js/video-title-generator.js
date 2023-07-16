const videoThumbnails = document.querySelectorAll('.r-work-videos .video');

videoThumbnails.forEach((thumbnail) => {
  const img = thumbnail.querySelector('img');
  const videoTitle = img.alt;

  thumbnail.addEventListener('mouseover', () => {
    thumbnail.style.setProperty('--content', `'${videoTitle}'`);
  });

  thumbnail.addEventListener('mouseout', () => {
    thumbnail.style.removeProperty('--content');
  });
});
