// script.js

document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');
    
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', revealSection);
    revealSection(); // Initial check in case some sections are already in view
});
