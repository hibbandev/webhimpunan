document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navbarNav = document.querySelector(".Navbar-Nav");
  
    // Menyembunyikan/menampilkan menu navigasi pada klik menu hamburger
    hamburgerMenu.addEventListener("click", function () {
      navbarNav.classList.toggle("active");
    });
  
    // Menutup menu navigasi ketika item menu diklik
    const navLinks = document.querySelectorAll(".Navbar-Nav a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navbarNav.classList.remove("active");
      });
    });
  });
  