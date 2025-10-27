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
      top: target.offsetTop - 70, // Adjusted for fixed navbar height
      behavior: "smooth",
    });
    // Close mobile menu on link click
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
  { threshold: 0.2 } // Triggers when 20% of the element is visible
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

// --- IMAGE MODAL LOGIC (NEW) ---

// Get modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("modal-caption");
const closeBtn = document.getElementsByClassName("modal-close")[0];

// Get all project images
const projectImages = document.querySelectorAll(".project-screenshot");

// Loop through images and add click listener
projectImages.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Add click listener to close button
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Add click listener to modal background (to close)
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
