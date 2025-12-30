// Mobile menu (works on all pages)
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Contact form (only on index)
const form = document.getElementById("contactForm");
const successAlert = document.getElementById("successAlert");
const errorAlert = document.getElementById("errorAlert");

function setErr(id, msg){
  const el = document.querySelector(`.err[data-for="${id}"]`);
  if (el) el.textContent = msg || "";
}
function validEmail(v){ return /^\S+@\S+\.\S+$/.test(v); }

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  successAlert && (successAlert.style.display = "none");
  errorAlert && (errorAlert.style.display = "none");

  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  setErr("name","");
  setErr("email","");
  setErr("message","");

  let ok = true;
  if (!name || name.length < 2){ setErr("name","Please enter your name."); ok = false; }
  if (!email || !validEmail(email)){ setErr("email","Please enter a valid email."); ok = false; }
  if (!message || message.length < 10){ setErr("message","Message must be at least 10 characters."); ok = false; }

  if (!ok){
    if (errorAlert){
      errorAlert.textContent = "❌ Please fix the errors above and try again.";
      errorAlert.style.display = "block";
    }
    return;
  }

  try{
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
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
