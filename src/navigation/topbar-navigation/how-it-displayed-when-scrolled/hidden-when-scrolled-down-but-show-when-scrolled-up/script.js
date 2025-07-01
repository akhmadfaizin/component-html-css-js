let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');
  if (currentScroll > lastScroll && currentScroll > 50) {
    navbar.classList.add('hidden');
  } else if (currentScroll < lastScroll) {
    navbar.classList.remove('hidden');
  }
  lastScroll = currentScroll;
});