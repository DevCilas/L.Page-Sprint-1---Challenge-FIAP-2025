// Smooth Scrolling
function smoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.onclick = smoothScroll;
  });

//  