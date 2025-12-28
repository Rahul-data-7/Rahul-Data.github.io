// Navbar scroll effect
const navbar = document.getElementById("navbar");

// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu when clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

window.addEventListener("scroll", () => {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.55)";
    navbar.style.backdropFilter = "blur(16px)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.25)";
    navbar.style.backdropFilter = "blur(12px)";
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
