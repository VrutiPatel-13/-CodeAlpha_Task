window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add('visible');
    } else {
      sec.classList.remove('visible');
    }
  });
});
