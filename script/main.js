/* =================================== Typing animation =================================== */
const typed = new Typed(".typing", {
    strings: ["Web Developer", "Frontend Engineer", "Backend Engineer", "Computer Science Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* =================================== Menu item active =================================== */
function setActiveLink(event){
    const menuLinks = document.querySelectorAll(".menu-link")
    menuLinks.forEach(menuLink => {
        menuLink.classList.remove("active")
    })

    event.target.classList.add("active")
}
