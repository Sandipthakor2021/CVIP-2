document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });

      // Highlight the active link
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });