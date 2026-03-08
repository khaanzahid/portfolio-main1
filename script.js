// Smooth scrolling for navigation links

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


// Contact form submit message

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Message sent successfully!");

        form.reset();

    });

}


// Newsletter validation

const newsletterBtn = document.querySelector(".newsletter button");

if (newsletterBtn) {

    newsletterBtn.addEventListener("click", function () {

        const email = document.querySelector(".newsletter input").value;

        if (email === "") {
            alert("Please enter your email.");
        } else {
            alert("Thank you for subscribing!");
        }

    });

}



// Dynamic footer year

const yearElement = document.querySelector(".footer-bottom p");

if (yearElement) {

    const year = new Date().getFullYear();

    yearElement.innerHTML = `© ${year} Zahid Khan`;

}


// Simple scroll animation for sections

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.8;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});
