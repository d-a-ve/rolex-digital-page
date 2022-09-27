let navContainer = document.querySelector(".nav-container");
let showMenu = document.querySelector(".hamburger");
let hideMenu = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".nav-link");

// scroll-reveal
ScrollReveal({
    duration: 700,
    distance: "60px"
})

ScrollReveal().reveal("#header", {origin: "top", mobile: false});
ScrollReveal().reveal(".values .section .value-img",{origin: "top"});
ScrollReveal().reveal(".hero-text, .section > .heading", {origin: "left"});
ScrollReveal().reveal(".hero-img, .services .section > .paragraph, .section > .paragraph", {origin: "right", delay: 200});
ScrollReveal().reveal(".trusted-img img", {origin: "top", interval: 200});
ScrollReveal().reveal(".line-container span, #services", {origin: "bottom", interval: 200});
ScrollReveal().reveal(".header .row div, .news .row a, .work .row div", {origin: "left", interval: 300});
ScrollReveal().reveal(".services .row div, .reviews .row div, .choose-us .row div", {origin: "left", interval: 300});
ScrollReveal().reveal(".plan-data-container", {origin: "right", delay: 300});
ScrollReveal().reveal(".cta .btn, .values .section .value-container", {origin: "bottom", delay: 300})
ScrollReveal().reveal(".newsletter,  footer, footer nav .row div", {origin: "bottom", interval: 300})


// to show and hide the navigation on mobile & tablet
showMenu.addEventListener("click", () => {
    navContainer.style.left = "0";
});

hideMenu.addEventListener("click", () => {
    navContainer.style.left = "-100%";
})

// to remove the menu upon clicking any nav-link
for (let x of navLinks) {
    x.addEventListener("click", () => {
        navContainer.style.left = "-100%";
    })
}
