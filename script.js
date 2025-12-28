// Navbar scroll effect (darker on scroll)
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.6)";
    navbar.style.backdropFilter = "blur(16px)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.15)";
    navbar.style.backdropFilter = "blur(10px)";
  }
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    if (revealTop < windowHeight - 120) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
