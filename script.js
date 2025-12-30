// Navbar blur on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 12) navbar?.classList.add("scrolled");
  else navbar?.classList.remove("scrolled");
});

// Mobile menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
  { threshold: 0.15 }
);
revealEls.forEach(el => io.observe(el));

// Projects filter + carousel + dots
const filters = document.querySelectorAll(".filter");
const track = document.getElementById("projectTrack");
const dotsWrap = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let cards = track ? Array.from(track.querySelectorAll(".proj")) : [];
let activeFilter = "all";
let index = 0;

function getVisibleCards(){
  return cards.filter(card => {
    if (activeFilter === "all") return true;
    const tags = (card.dataset.tags || "").split(" ");
    return tags.includes(activeFilter);
  });
}

function rebuildDots(){
  if (!dotsWrap) return;
  dotsWrap.innerHTML = "";
  const vis = getVisibleCards();
  vis.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot" + (i === index ? " active" : "");
    d.addEventListener("click", () => { index = i; updateCarousel(); });
    dotsWrap.appendChild(d);
  });
}

function updateCarousel(){
  if (!track) return;
  const vis = getVisibleCards();
  cards.forEach(c => (c.style.display = "none"));
  vis.forEach(c => (c.style.display = "block"));

  if (vis.length === 0) return;
  index = Math.max(0, Math.min(index, vis.length - 1));

  const gap = 12;
  const cardWidth = vis[0].getBoundingClientRect().width;
  const offset = (cardWidth + gap) * index;
  track.style.transform = `translateX(${-offset}px)`;

  if (dotsWrap) Array.from(dotsWrap.children).forEach((d,i)=>d.classList.toggle("active", i===index));
}

prevBtn?.addEventListener("click", () => { index -= 1; updateCarousel(); });
nextBtn?.addEventListener("click", () => { index += 1; updateCarousel(); });

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    index = 0;
    rebuildDots();
    updateCarousel();
  });
});

rebuildDots();
updateCarousel();
window.addEventListener("resize", updateCarousel);

// Contact form validation + Formspree
const form = document.getElementById("contactForm");
const successAlert = document.getElementById("successAlert");
const errorAlert = document.getElementById("errorAlert");

function setError(id, msg){
  const el = document.querySelector(`.error[data-for="${id}"]`);
  if (el) el.textContent = msg || "";
}
function validate(){
  let ok = true;
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  setError("name","");
  setError("email","");
  setError("message","");

  if (!name || name.length < 2){ setError("name","Please enter your name."); ok = false; }
  if (!email || !/^\S+@\S+\.\S+$/.test(email)){ setError("email","Please enter a valid email."); ok = false; }
  if (!message || message.length < 10){ setError("message","Message must be at least 10 characters."); ok = false; }
  return ok;
}

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  successAlert && (successAlert.style.display = "none");
  errorAlert && (errorAlert.style.display = "none");

  if (!validate()){
    if (errorAlert){
      errorAlert.textContent = "❌ Please fix the errors above and try again.";
      errorAlert.style.display = "block";
    }
    return;
  }

  try{
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method:"POST",
      body:data,
      headers:{ "Accept":"application/json" }
    });
    if (!res.ok) throw new Error("Formspree error");
    if (successAlert) successAlert.style.display = "block";
    form.reset();
  }catch(err){
    if (errorAlert){
      errorAlert.textContent = "❌ Something went wrong. Please try again.";
      errorAlert.style.display = "block";
    }
  }
});
