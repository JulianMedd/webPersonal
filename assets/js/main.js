const navMenu = document.getElementById("nav-menu"),
      toggleMenu = document.getElementById("nav-toggle"),
      closeMenu = document.getElementById("nav-close")

toggleMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("show")
} )

closeMenu.addEventListener("click", ()=>{
    navMenu.classList.remove("show")
} )

const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))

/*SCROLL*/

function scrollTop(){
    const scrollTop = document.getElementById("scroll-top")
    if(this.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop)

/*SCROLL REVEAL*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset:true
})

sr.reveal('.home__info',{})
sr.reveal('.home__redes',{origin:'left', delay: 200})
sr.reveal('.home__img',{origin: 'right', delay: 400})

sr.reveal('.sobreMi__img',{delay: 500})
sr.reveal('.seccion-titulo',{delay: 500})
sr.reveal('.sobreMi__subTitulo', {delay: 300})
sr.reveal('.sobreMi__profesion', {delay: 400})
sr.reveal('.sobreMi__texto', {delay: 500})