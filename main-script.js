// Opener animation

const preloaderPage = document.querySelector('.preloader');
const logo = document.querySelector('.logo');
const logoText = document.querySelector('#text');
const identity = document.querySelector('.identity');
const navigation = document.querySelector('.navigation');
const navIndicator = document.querySelector('.indicator');
const introLine1 = document.querySelector('#textLine1');
const introLine2 = document.querySelector('#textLine2');
const introLine3 = document.querySelector('#textLine3');
const introLine4 = document.querySelector('#textLine4');
const description = document.querySelector('#description p');
const inpageLinkProjects = document.querySelector('#goto-projects');
const lines = document.querySelector('.lines');
const heroSection = document.querySelector('#hero');
const projectSection = document.querySelector('#projects');
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

const tl1 = new TimelineMax();

tl1
/* .to(logoText, 2, {rotation: 360, ease: Power2.easeInOut, repeat: 1})
.to(logo, 0.5, {opacity: 0, scale: 0, ease: Power1.easeInOut}, "-=1")
.to(preloaderPage, 0.5, {opacity: 0, ease: Power2.easeInOut}, "-=0.5")
.to(preloaderPage, 0.1, {visibility: "hidden"}) */
.fromTo(identity, 1, {x: "-100%", opacity: 0}, {x: "0%", opacity: 1, ease: Power1.easeOut}, "-=0.5")
.fromTo(navigation, 1, {y: "-100%", opacity: 0}, {y: "0%", opacity: 1, ease: Power2.easeOut}, "-=0.4")
.fromTo(introLine1, 1, {x: "-100%", opacity: 0}, {x: "0%", opacity: 1, ease: Power2.easeOut}, "-=1.2")
.fromTo(introLine2, 1, {x: "-100%", opacity: 0}, {x: "0%", opacity: 1, ease: Power2.easeOut}, "-=1")
.fromTo(introLine3, 1, {x: "-100%", opacity: 0}, {x: "0%", opacity: 1, ease: Power2.easeOut}, "-=0.95")
.fromTo(introLine4, 1, {x: "-100%", opacity: 0}, {x: "0%", opacity: 1, ease: Power2.easeOut}, "-=0.9")
.fromTo(description, 1, {y: "-50%", opacity: 0}, {y: "0%", opacity: 1, ease: Power2.easeOut}, "-=1")
.fromTo(inpageLinkProjects, 1, {y: "-100%", opacity: 0}, {y: "0%", opacity: 1, ease: Power2.easeOut}, "-=0.95");


function heroAnimationIn() {
    const tl2a = new TimelineMax();

    tl2a.fromTo(introLine4, 1, {y: "-150%", opacity: 0}, {y: "0%", opacity: 1, ease: Power1.easeOut})
    .fromTo(introLine3, 1, {y: "-150%", opacity: 0}, {y: "0%", opacity: 1, ease: Power1.easeOut}, "-=0.95")
    .fromTo(introLine2, 1, {y: "-150%", opacity: 0}, {y: "0%", opacity: 1, ease: Power2.easeOut}, "-=0.92")
    .fromTo(introLine1, 1, {y: "-150%", opacity: 0}, {y: "0%", opacity: 1, ease: Power2.easeOut}, "-=0.89")
    .fromTo(inpageLinkProjects, 1, {y: "-100%", opacity: 0}, {y: "0%", opacity: 1, ease: Power2.easeOut}, "-=0.95")
    .fromTo(description, 1, {y: "-25%", opacity: 0}, {y: "0%", opacity: 1, ease: Power2.easeOut}, "-=0.9");
}

function projectsAnimationIn() {
    const tl3a =new TimelineMax();

    tl3a.fromTo(projectSection, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeOut})
    .fromTo(card3, 0.8, {x: "100%"}, {x: "0%", ease: Power1.easeOut}, '-=1.4')
    .fromTo(card2, 0.8, {x: "100%"}, {x: "0%", ease: Power1.easeOut}, '-=1.2')
    .fromTo(card1, 0.8, {x: "100%"}, {x: "0%", ease: Power1.easeOut}, '-=1');
}


// Section change triggers and animation

const sections = document.querySelectorAll('.sections');
const navItems = document.querySelectorAll('.navItems a');
let indicator = document.querySelector(".indicator");


window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach( section => {
        const sectionStart = section.offsetTop;
        // const sectionHeight = section.clientHeight;

        if(pageYOffset == sectionStart) {
            current = section.getAttribute('id');
        }

        if(current == "hero") {
            heroAnimationIn();
        }

        if(current == "projects") {
            projectsAnimationIn();
        } 

        console.log(current);
    })

    navItems.forEach( a => {
        a.classList.remove('active');
        if(a.classList.contains(current)) {
            a.classList.add('active');

            indicator.style.left = a.offsetLeft + "px";
            indicator.style.width = a.offsetWidth + "px";
        }
    })
})