/* =================================== Typing animation =================================== */
const typed = new Typed(".typing", {
    strings: ["Web Developer", "Frontend Engineer", "Backend Engineer", "Computer Science Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* =================================== Menu item active =================================== */
function setActiveLink(event) {
    const menuLinks = document.querySelectorAll(".menu-link")
    menuLinks.forEach(menuLink => {
        menuLink.classList.remove("active")
    })
    
    event.target.classList.add("active")
}

/* =================================== Send an email =================================== */
function sendMail(event) {
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    if ((params.name == "" | params.name == null | params.name == undefined)
        || (params.email == "" | params.email == null | params.email == undefined)
        || (params.subject == "" | params.subject == null | params.subject == undefined)
        || (params.message == "" | params.message == null | params.message == undefined)) {
        alert("Fill all form fields!")
        return
    }

    const serviceId = "service_7391izi";
    const templateId = "template_84efrcy"

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert("The e-mail was sent")
        })
        .catch(err => console.log(err))

}