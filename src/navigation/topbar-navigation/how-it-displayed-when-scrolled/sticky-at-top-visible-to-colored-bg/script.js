window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 80) {
      navbar.classList.add('navbar-scrolled-down');
    } else {
      navbar.classList.remove('navbar-scrolled-down');
    }
  });