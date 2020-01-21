const nav = document.getElementById('nav');
const navbarWrapper = document.getElementById('navbar-wrapper');
const mobileNavbar = navbarWrapper.childNodes[1];
const regularNavbar = navbarWrapper.childNodes[4];

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

// <nav class="navbar navbar-dark bg-dark">
//     <button class="navbar-toggler"
//     type="button" data-toggle="collapse"
//     data-target="#navbarToggleExternalContent"
//     aria-controls="navbarToggleExternalContent"
//     aria-expanded="false"
//     aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//   </nav>

window.onload = function() {
  if (window.outerWidth <= 425) {
    navbarWrapper.removeChild(navbarWrapper.childNodes[3]);
    navbarWrapper.insertBefore(mobileNavbar, navbarWrapper.childNodes[1])
  } else {
    navbarWrapper.removeChild(navbarWrapper.childNodes[1]);
  }
}



