// Responsive navbar toggle for mobile view
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open'); // Optional: animate hamburger icon
    });
  }

  // Hide navbar on scroll down, show on scroll up
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
      // Scrolling down
      navbar.classList.add('hide');
    } else {
      // Scrolling up
      navbar.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
