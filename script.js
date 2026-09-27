/* =========================
   NAVIGATION
========================= */

const navMenu = document.querySelector("#navMenu");
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelectorAll("#navMenu a");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* Close mobile menu after clicking a link */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 768) {

            navMenu.classList.remove("show");

            menuBtn.textContent = "☰";

        }

    });

});


/* =========================
   THEME
========================= */

const themeBtn = document.querySelector("#themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

});


/* Load saved theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeBtn.textContent = "🌙";

} else {

    themeBtn.textContent = "☀️";

}


/* =========================
   SMOOTH SCROLLING
========================= */

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   HOME LINK HOVER
========================= */

const homeLinks = document.querySelectorAll("#home a");

homeLinks.forEach(function (link) {

    link.addEventListener("mouseenter", function () {

        link.style.transform = "translateY(-3px)";

    });

    link.addEventListener("mouseleave", function () {

        link.style.transform = "translateY(0)";

    });

});


/* =========================
   PROFESSION TEXT
========================= */

const profession = document.querySelector("#profession");

const professions = [
    "Web Developer",
    "WordPress Developer",
    "Frontend Developer"
];

let professionIndex = 0;

setInterval(function () {

    professionIndex++;

    if (professionIndex >= professions.length) {
        professionIndex = 0;
    }

    profession.textContent = professions[professionIndex];

}, 2000);


/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.type = "button";
topBtn.textContent = "↑";

document.body.appendChild(topBtn);


/* Back to top button CSS */

const topBtnStyle = document.createElement("style");

topBtnStyle.textContent = `
    #topBtn {
        position: fixed;
        right: 20px;
        bottom: 20px;

        width: 45px;
        height: 45px;

        border: none;
        border-radius: 50%;

        background: #00d9ff;
        color: #0f0f0f;

        font-size: 22px;
        font-weight: bold;

        cursor: pointer;

        display: none;

        z-index: 900;

        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    #topBtn:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 18px rgba(0, 217, 255, 0.35);
    }
`;

document.head.appendChild(topBtnStyle);


/* Show/hide top button */

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


/* Scroll to top */

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   SCROLL PROGRESS
========================= */

const progressBar = document.querySelector("#progressBar");

window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercent =
        (scrollTop / pageHeight) * 100;

    progressBar.style.width =
        scrollPercent + "%";

});


/* =========================
   CONTACT FORM
========================= */

const form = document.querySelector("#contactForm");
const submitButton = document.querySelector("#submitButton");
const formMessage = document.querySelector("#formMessage");


form.addEventListener("submit", async function (event) {

    event.preventDefault();

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    formMessage.textContent = "";

    try {

        const response = await fetch(form.action, {

            method: "POST",

            body: new FormData(form),

            headers: {
                Accept: "application/json"
            }

        });


        if (response.ok) {

            form.reset();

            submitButton.textContent = "Sent!";

            formMessage.textContent =
                "Message sent successfully!";

            setTimeout(function () {

                submitButton.textContent = "Send Message";

                formMessage.textContent = "";

            }, 3000);

        } else {

            submitButton.textContent = "Send Message";

            formMessage.textContent =
                "Something went wrong. Please try again.";

        }

    } catch (error) {

        submitButton.textContent = "Send Message";

        formMessage.textContent =
            "Network error. Please try again.";

    }

    submitButton.disabled = false;

});


/* =========================
   FOOTER YEAR
========================= */

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();


/* =========================
   LOADER
========================= */

const loader = document.querySelector("#loader");

window.addEventListener("load", function () {

    loader.style.opacity = "0";

    setTimeout(function () {

        loader.style.display = "none";

    }, 500);

});