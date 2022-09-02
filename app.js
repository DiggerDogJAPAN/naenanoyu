/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== GSAP ===============*/
gsap.fromTo('#mainheader', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
gsap.fromTo('#subtitle', { opacity: 0 }, { opacity: 1, delay: 1, duration: 2 })
gsap.fromTo('#textblock', { opacity: 0 }, { opacity: 1, delay: 1.5, duration: 2 })

gsap.to(".news_content--price", {
    opacity: 1,
    delay: '0.5',
    scrollTrigger: {
        trigger: "#news_price",
        start: 'top 90%'
    },
});

gsap.to(".news_content--img", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#news_content--img",
        start: 'top 90%'
    },
});

gsap.to(".news_content--txt", {
    opacity: 1,
    delay: '1',
    scrollTrigger: {
        trigger: "#news_content--txt",
        start: 'top 90%'
    },
});

gsap.to(".info_container--left", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#info-left",
        start: 'top 90%'
    },
});

gsap.to(".info_container--right", {
    opacity: 1,
    delay: '1',
    scrollTrigger: {
        trigger: "#info-right",
        start: 'top 90%'
    },
});

gsap.to(".info_container--right--text", {
    opacity: 1,
    delay: '1.5',
    scrollTrigger: {
        trigger: "#info-right",
        start: 'top 90%'
    },
});
