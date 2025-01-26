/*Function to toggle the visibility of the navbar
function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active'); // Toggles the display of the navbar
}*/
// JavaScript to toggle navbar visibility on click
// Function to toggle navbar visibility
function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active'); // Toggles the display of the navbar
}

// Function to handle scroll event and toggle visibility
window.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.content-item'); // Select all content items

  items.forEach(item => {
    const rect = item.getBoundingClientRect(); // Get the position of each item relative to the viewport

    // Check if the item is within the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      item.classList.add('visible'); // Add 'visible' class to animate
    } else {
      item.classList.remove('visible'); // Remove 'visible' class when it's out of view
    }
  });
});
