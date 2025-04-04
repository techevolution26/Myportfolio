document.addEventListener("DOMContentLoaded", function () {
    // NAVBAR TOGGLE
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // CLOSE NAV ON LINK CLICK (optional for mobile UX)
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });

    // AOS INIT
    AOS.init({
        duration: 1000, // animation duration
        once: true      // only animate once
    });

    // SMOOTH SCROLLING FOR HASH LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
