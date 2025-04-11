const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const terminalText = "I'm John Alfred | Full-Stack Engineer focused on scalable architectures, maintainable codebases, and high-impact user interfaces.";
const typedSpan = document.querySelector(".typed");

hamburger.addEventListener("click", () => menu.classList.toggle("active"));
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    menu.classList.toggle("active");
  }
});


let nav = document.querySelector(".home-nav");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (Math.abs(currentScroll - lastScroll) > 10) {
    nav.classList.toggle("scrolled", currentScroll > 50);
    lastScroll = currentScroll;
  }
});

let index = 0;
function typeText() {
    if (index < terminalText.length) {
        typedSpan.textContent += terminalText.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}
typeText();

const fadeElements = document.querySelectorAll(".fade-in");
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(element => appearOnScroll.observe(element));