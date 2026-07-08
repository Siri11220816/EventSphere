/* ==========================================
   EVENTSPHERE - JAVASCRIPT
========================================== */

// =========================
// Mobile Menu Toggle
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// =========================
// Sticky Navbar
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    } else {

        header.style.background = "#ffffff";
        header.style.boxShadow = "none";

    }

});

// =========================
// Scroll Reveal Animation
// =========================

const revealElements = document.querySelectorAll(
    ".event-card,.category-card,.feature-card,.testimonial-card,.stat-card,.faq-item"
);

function reveal() {

    revealElements.forEach((el) => {

        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// =========================
// Animated Statistics
// =========================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = target / 100;

    const update = () => {

        if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count) + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

// =========================
// Contact Form Validation
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            input.style.border = "2px solid red";

            valid = false;

        } else {

            input.style.border = "1px solid #ddd";

        }

    });

    if (valid) {

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    }

});

// =========================
// Smooth Button Hover
// =========================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#6366F1";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "22px";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// =========================
// Navigation Active Link
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

console.log("EventSphere Loaded Successfully 🚀");
