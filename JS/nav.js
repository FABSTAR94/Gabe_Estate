const nav = document.getElementById('nav');

  window.onscroll = function() {
    if (window.pageYOffset > 300) {
      nav.style.background = "rgba(227, 23, 10, 0.8)";
    }else {
      nav.style.background = "rgba(0, 0, 0, 0)";
    }

}
