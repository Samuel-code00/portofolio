document.getElementById('menu-icon').addEventListener('click', function() {
    let navLinks = document.getElementsById('links');
    if (navLinks.style.display === "none"){
        navLinks.style.display = "block"
    } else{
        navLinks.style.display = "block"
    }
    
});

let isFixed = false;

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 400) { 
        if (!isFixed) {
            navbar.classList.add('fixed');
            isFixed = true;
        }
    } else {
        if (isFixed) {
            navbar.classList.remove('fixed');
            navbar.style.top = ''; 
            isFixed = false;
        }
    }
});

const typedText = document.querySelector('.typed-text');
const textArray = ['a Web Developer', 'a Designer', 'a Solar Engineer'];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});