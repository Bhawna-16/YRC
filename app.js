// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)}
)


// show/hide faq answer 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})


// show/hide nav menu
// const menu = document.querySelector(".nav__menu");
// const menuBtn = document.querySelector("#open-menu-btn");
// const closeBtn = document.querySelector("#close-menu-btn");

// menuBtn.addEventListener("click", () => {
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block";
//     menuBtn.style.display = "none";
// })

// // close nav menu
// const closeNav = () => {
//     menu.style.display = "none";
//     closeBtn.style.display = "none";
//     menuBtn.style.display = "inline-block";
// }

// closeBtn.addEventListener("click", closeNav)




const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// Open mobile menu
openBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
});

// Close mobile menu
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav__menu a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            menu.style.display = "none";
            openBtn.style.display = "block";
            closeBtn.style.display = "none";
        }
    });
});

// Reset menu when screen size changes
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.style.display = "flex";
        openBtn.style.display = "none";
        closeBtn.style.display = "none";
    } else {
        menu.style.display = "none";
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
});