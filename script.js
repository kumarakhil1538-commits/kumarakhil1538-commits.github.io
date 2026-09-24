const homesection = document.getElementById("home");
homesection.querySelector("h1").textContent = "Akhil Kumar";
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});
const button = document.querySelectorAll("#home a");

button.forEach(function (button) {

    button.addEventListener("click", function () {
        console.log("button clicked");
    });

    button.addEventListener("mouseenter", function () {
        button.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", function () {
        button.style.transform = "translateY(0)";
    });
});
const form = document.querySelector("#contact form");
const submitButton = form.querySelector("button");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "" || email === "" || message === "") {
        alert("please fill all fields");
        return;
    }
    if (!emailpattern.test(email)) {
        alert("please enter a valid email");
        return;
    }
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
    form.submit();

    console.log("Form submitted");
});

const profession = document.querySelector("#home h2");

const professions = [
    "Web Designer",
    "WordPress Developer",
    "Creative Designer"
];

let professionIndex = 0;

setInterval(function () {
    professionIndex++;

    if (professionIndex >= professions.length) {
        professionIndex = 0;
    }
    profession.style.opacity = "0";

    setTimeout(function () {
        profession.style.opacity = "1";
    }, 200);

    profession.textContent = professions[professionIndex];
}, 2000);
const sections = document.querySelectorAll("section");

sections.forEach(function (section) {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

function revealSections() {
    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });
}
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

window.addEventListener("scroll", revealSections);

revealSections();
const topBtn = document.querySelector("#topBtn");

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {

            navLinks.forEach(function (link) {
                link.style.color = "white";
            });

            const activeLink = document.querySelector(
                'nav a[href="#' + section.id + '"]'
            );

            activeLink.style.color = "#00d9ff";
        }

    });

});
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", function () {

    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
        menuBtn.textContent = "✕";
    }

});
navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 768) {
            navMenu.style.display = "none";
        }

    });

});
const progressBar = document.querySelector("#progressBar");

window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / pageHeight) * 100;

    progressBar.style.width = scrollPercent + "%";

});
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    }

});
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "🌙";
}
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();
const loader = document.querySelector("#loader");

window.addEventListener("load", function () {
    loader.style.opacity = "0";

    setTimeout(function () {
        loader.style.display = "none";
    }, 500);
});