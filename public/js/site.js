// ── Navbar ──────────────────────────────────────────────────────────────────

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    navbar?.classList.add("shadow-lg");
  } else {
    navbar?.classList.remove("shadow-lg");
  }
  lastScroll = currentScroll;
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href") || "");
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      mobileMenu?.classList.add("hidden");
    }
  });
});

// ── Hero stats animation ─────────────────────────────────────────────────────

const animateNumber = (element, target, hasSuffix) => {
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toString() + (hasSuffix ? "+" : "");
  }, duration / steps);
};

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll("[data-target]").forEach((el) => {
          const target = parseInt(el.getAttribute("data-target") || "0");
          const hasSuffix = el.textContent?.includes("+") || false;
          animateNumber(el, target, hasSuffix);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5, rootMargin: "0px" }
);

const statsContainer = document.getElementById("stats-container");
if (statsContainer) {
  statsObserver.observe(statsContainer);
}

// ── Contact form ─────────────────────────────────────────────────────────────

const form = document.getElementById("contact-form");
const btn = form?.querySelector('button[type="submit"]');

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const lang = document.documentElement.lang;
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = lang === "es" ? "Enviando…" : "Sending…";

  const data = {};
  new FormData(form).forEach((v, k) => {
    data[k] = v.toString();
  });

  try {
    const res = await fetch("/api/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      btn.textContent = lang === "es" ? "¡Mensaje enviado!" : "Message sent!";
      btn.classList.replace("bg-main-blue-500", "bg-green-600");
      form.reset();
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.replace("bg-green-600", "bg-main-blue-500");
        btn.disabled = false;
      }, 4000);
    } else {
      throw new Error("server error");
    }
  } catch {
    btn.textContent = lang === "es" ? "Error, intente de nuevo" : "Error, try again";
    btn.classList.replace("bg-main-blue-500", "bg-red-600");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.replace("bg-red-600", "bg-main-blue-500");
      btn.disabled = false;
    }, 4000);
  }
});
