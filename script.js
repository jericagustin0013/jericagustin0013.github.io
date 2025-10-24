// Toggle Dark Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

// Smooth Scroll for Nav Links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth",
    });
    document.querySelector(".nav-links").classList.remove("show");
  });
});

// Fade-in Animation on Scroll
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
fadeEls.forEach((el) => observer.observe(el));

// Mobile Menu Toggle
const menuToggle = document.createElement("span");
menuToggle.className = "menu-toggle";
menuToggle.innerHTML = "☰";
document
  .querySelector(".nav-container")
  .insertBefore(menuToggle, document.querySelector(".nav-links"));

menuToggle.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});
