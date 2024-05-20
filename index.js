
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () => {
    navbar.classList.add('active');
}

closeBtn.onclick = () => {
    navbar.classList.remove('active');
}

// window.onclick = () => {
//     navbar.classList.add('active');
// }
window.onclick = (event) => {
    if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
        navbar.classList.remove('active');
    }
}