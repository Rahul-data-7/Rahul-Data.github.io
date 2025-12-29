(function () {
  // ===== Mobile menu =====
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const menu = document.getElementById("mobileMenu");

  if (openBtn && closeBtn && menu) {
    function openMenu() {
      menu.classList.add("open");
      menu.setAttribute("aria-hidden", "false");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      menu.classList.remove("open");
      menu.setAttribute("aria-hidden", "true");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // ===== Formspree submit =====
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const btn = document.getElementById("submitBtn");

  if (form && statusEl && btn) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      statusEl.textContent = "";
      statusEl.className = "form-status";
      btn.disabled = true;
      btn.textContent = "Sending...";

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          form.reset();
          statusEl.className = "form-status success";
          statusEl.textContent = "✅ Message sent! I’ll get back to you soon.";
        } else {
          statusEl.className = "form-status error";
          statusEl.textContent = "❌ Message failed. Please email me directly.";
        }
      } catch {
        statusEl.className = "form-status error";
        statusEl.textContent = "❌ Network error. Please email me directly.";
      } finally {
        btn.disabled = false;
        btn.textContent = "Send Message";
      }
    });
  }

  // ===== Projects filter =====
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
          const tags = (card.dataset.tags || "").split(" ");
          const show = filter === "all" || tags.includes(filter);

          card.classList.toggle("hidden", !show);
        });
      });
    });
  }
})();
