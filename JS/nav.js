const nav = document.getElementById('nav');

  window.onscroll = function() {
    if (window.pageYOffset > 550) {
      nav.style.background = "rgba(227, 23, 10, 0.8)";
      nav.classList.add('navbarbottom');
      nav.classList.remove('navbar');
    } else {
      nav.style.background = "rgba(0, 0, 0, 0)";
      nav.classList.add('navbar');
      nav.classList.remove('navbarbottom');
    }

}
