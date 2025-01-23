function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
  const navtoggle = document.querySelector('.navtoggle svg');
  
  if (navbar.classList.contains('active')) {
    navtoggle.style.transform = 'rotate(180deg)'; // Rotate the icon when menu is open
  } else {
    navtoggle.style.transform = 'rotate(0deg)'; // Reset the icon when menu is closed
  }
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