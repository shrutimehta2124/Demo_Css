// Function to toggle the visibility of the navbar
function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active'); // Toggles the display of the navbar
}


  window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.content-item');
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  });