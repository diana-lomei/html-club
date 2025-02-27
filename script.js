// A function to check if an element is on the screen
window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      // Checking if an element is in the visible part of the screen
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
      } else {
          element.classList.remove('visible');
      }
  });
});
