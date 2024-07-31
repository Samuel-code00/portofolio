// script.js
document.getElementById('menu-icon').addEventListener('click', function() {
    const links = document.getElementById('links');
    links.classList.toggle('active');
});

document.getElementById('close-icon').addEventListener('click', function() {
    const links = document.getElementById('links');
    links.classList.remove('active');
});

const navLinks = document.querySelectorAll('.links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const links = document.getElementById('links');
        links.classList.remove('active');
    });
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

document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.classList.contains('expanded')) {
        navbar.classList.remove('expanded');
    } else {
        navbar.classList.add('expanded');
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let formValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validation
    if (!document.getElementById('firstName').value) {
        document.getElementById('firstNameError').textContent = 'First name is required';
        formValid = false;
    }

    if (!document.getElementById('lastName').value) {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        formValid = false;
    }

    if (!document.getElementById('email').value) {
        document.getElementById('emailError').textContent = 'Email address is required';
        formValid = false;
    }

    if (!document.getElementById('service').value) {
        document.getElementById('serviceError').textContent = 'Service selection is required';
        formValid = false;
    }

    if (!document.getElementById('message').value) {
        document.getElementById('messageError').textContent = 'Message is required';
        formValid = false;
    }

    if (formValid) {
        this.submit();
    }
});


AOS.init();

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.num');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 2000;

            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});