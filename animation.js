

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.75;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById('intro');
    const button = document.querySelector('.intro-button');

    button.addEventListener('click', () => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
        }, 1000); // Delay to match the fade-out transition
    });

    // Optional: Add scroll animations or other effects here
});

// document.addEventListener('DOMContentLoaded', () => {
//     const introSection = document.querySelector('.intro');
//     const skillsSection = document.getElementById('skills');

//     // Add a scroll event listener
//     window.addEventListener('scroll', () => {
//         const introHeight = introSection.offsetHeight;
//         const scrollPosition = window.scrollY;

//         if (scrollPosition > introHeight / 2) {
//             // Scroll smoothly to the skills section
//             skillsSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });

function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const icon = document.querySelector('.dark-mode-toggle i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
