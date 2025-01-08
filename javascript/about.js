// Function to show a specific image
function showImage(imageId) {
    // Hide all images first
    document.querySelectorAll('.blendimg').forEach(function (img) {
      img.classList.remove('visible');
      img.classList.add('hidden');
    });
  
    // Show the selected image
    const imageToShow = document.getElementById(imageId);
    imageToShow.classList.remove('hidden');
    imageToShow.classList.add('visible');
  }
  
  // List of images
  const imageIds = ['firstimage', 'secondimage', 'thirdimage'];
  let currentIndex = 0;
  
  // Function to cycle through images
  function cycleImages() {
    showImage(imageIds[currentIndex]);
  
    // Update index for the next image
    currentIndex = (currentIndex + 1) % imageIds.length;
  }
  
  // Initial image display
  showImage(imageIds[currentIndex]);
  
  // Set interval to cycle images
  setInterval(cycleImages, 3000); // 3 seconds between image changes


