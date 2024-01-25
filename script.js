let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
const sr = scrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true,
}
)
sr.Reveal('.logo',{delay:200, origin: 'left'});
sr.Reveal('.navbar',{delay:400, origin: 'top'});
sr.Reveal('.menu.btn',{delay:520, origin: 'right'});

sr.Reveal('.home-text span',{delay:600, origin: 'top'});
sr.Reveal('.home-text h1',{delay:680, origin: 'left'});
sr.Reveal('.home-text p',{delay:750, origin: 'right'});
sr.Reveal('.main.btn',{delay:860, origin: 'left'});

sr.Reveal('.home-img',{delay:1000, origin: 'right'});