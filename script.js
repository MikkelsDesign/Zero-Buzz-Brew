window.addEventListener('scroll', function() {
    var header = document.getElementById('site-header');
    if (window.scrollY > 750) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });