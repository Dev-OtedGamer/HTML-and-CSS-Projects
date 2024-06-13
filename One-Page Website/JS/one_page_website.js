// Variables to manage slide index and references to DOM elements
let slideIndex = 1; // Initializes slideIndex to 1 to start with the first slide
const modal = document.getElementById("myModal"); // References to the modal element
const slides = document.querySelectorAll(".mySlides"); // References to all slides
const thumbnails = document.querySelectorAll(".demo"); // References to all thumbnail images
const captionText = document.getElementById("caption"); // References to the caption text element

// Function to open the modal and display the selected slide
function openModal() {
  modal.style.display = "block"; // Sets modal display to block to make it visible
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none"; // Sets modal display to none to hide it
}

// Function to show the slides based on the current slideIndex
function showSlides(n) {
  // Ensures slideIndex is within bounds
  if (n > slides.length) {
    slideIndex = 1; // Loops back to the first slide if n exceeds the number of slides
  }
  if (n < 1) {
    slideIndex = slides.length; // Loops to the last slide if n is less than 1
  }

  // Hides all slides and remove the active class from thumbnails
  slides.forEach((slide) => (slide.style.display = "none")); // Hides each slide
  thumbnails.forEach((thumb) => thumb.classList.remove("active")); // Removes active class from each thumbnail

  // Displays the current slide and mark its corresponding thumbnail as active
  slides[slideIndex - 1].style.display = "block"; // Displays the current slide
  thumbnails[slideIndex - 1].classList.add("active"); // Adds active class to the corresponding thumbnail

  // Updates the caption text
  captionText.innerHTML = thumbnails[slideIndex - 1].alt; // Sets the caption text to the alt text of the active thumbnail
}

// Initializes the slideshow with the first slide
showSlides(slideIndex); // Calls showSlides to display the initial slide

// Event listeners for next/previous controls
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1)); // Adds event listener for the previous button
document.querySelector(".next").addEventListener("click", () => plusSlides(1)); // Adds event listener for the next button

// Event listener for thumbnail clicks
thumbnails.forEach((thumb, index) =>
  thumb.addEventListener("click", () => currentSlide(index + 1)) // Add event listener for each thumbnail
);

// Function to navigate forward or backward in the slideshow
function plusSlides(n) {
  showSlides((slideIndex += n)); // Updates slideIndex and show the corresponding slide
}

// Function to navigate to a specific slide by index
function currentSlide(n) {
  showSlides((slideIndex = n)); // Sets slideIndex to n and show the corresponding slide
}

// Closes modal if the user clicks outside of the image area
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal(); // Closes the modal if the user clicks outside the image area
  }
});

// Keyboard navigation for left and right arrow keys
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    plusSlides(-1); // Navigates to the previous slide if the left arrow key is pressed
  } else if (event.key === "ArrowRight") {
    plusSlides(1); // Navigates to the next slide if the right arrow key is pressed
  }
});


