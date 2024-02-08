document.addEventListener('DOMContentLoaded', function() {
  var images = ["cat1.jpg", "cat2.jpg"]; // Array of image URLs
  var index = 0; // Index to keep track of the current image

  function changeBackgroundImage() {
    // Change the background image
    document.body.style.backgroundImage = "url('" + images[index] + "')";
    document.body.style.backgroundSize="cover"

    // Increment index to switch to the next image
    index = (index + 1) % images.length;
  }

  // Call the function every 10 seconds
  setInterval(changeBackgroundImage, 10000);
});
