/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const target = document.querySelector(link.hash);
      const offsetTop = window.pageYOffset + target.getBoundingClientRect().top;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    })
  })