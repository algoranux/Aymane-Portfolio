const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');


menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile menu when a link is clicked
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

document.addEventListener('contextmenu', event=> event.preventDefault()); 
document.onkeydown = function(e) { 
if(event.keyCode == 123) { 
return false; 
} 
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ 
return false; 
} 
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
return false; 
} 
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
return false; 
} 
} 
