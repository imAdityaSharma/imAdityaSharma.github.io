document.addEventListener("DOMContentLoaded", () => {
  // Prevent scroll on load
  document.body.style.overflow = "hidden";

  // Get elements
  const scrollButton = document.querySelector(".scroll-button");
  const introSection = document.querySelector(".intro");
  const mainContent = document.querySelector(".main-content");
  const mainNav = document.querySelector(".main-nav");

  // Handle click on scroll button
  scrollButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide intro section
    introSection.classList.add("hidden");

    // Show main content
    mainContent.classList.add("visible");

    // Show navigation
    mainNav.classList.add("visible");

    // Enable scrolling
    document.body.style.overflow = "auto";

    // Smooth scroll to main content
    document.querySelector(scrollButton.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });

  const sections = document.querySelectorAll("section");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.75;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  }

  checkVisibility();
  window.addEventListener("scroll", checkVisibility);
});

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const button = document.querySelector(".intro-button");

  if (button) {
    button.addEventListener("click", () => {
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.style.display = "none";
      }, 1000); // Delay to match the fade-out transition
    });
  }

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
  document.body.classList.toggle("dark-mode");
  const icon = document.querySelector(".dark-mode-toggle i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Active section highlighting
const observerOptions = {
  threshold: 0.5,
  rootMargin: '-50% 0px -50% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navMenu.classList.contains('open'));
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Enhanced smooth scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const navHeight = document.querySelector('.main-nav').offsetHeight;
    const targetPosition = targetElement.offsetTop - navHeight - 20; // 20px extra padding

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

// Update typing effect
document.addEventListener("DOMContentLoaded", () => {
  const text = "Aspiring ML Engineer | Focused on NLP";
  const headerP = document.querySelector(".typing-text");
  headerP.style.width = "0";

  function startTyping() {
    headerP.style.animation =
      "typing 3.5s steps(40, end) forwards, blink-caret 0.75s step-end infinite";
  }

  // Start typing animation when header section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTyping();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(document.querySelector("#header"));
});

// Add skill progress animation
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  skills.forEach((skill) => {
    skill.style.opacity = "0";
    skill.style.transform = "translateY(20px)";
    observer.observe(skill);
  });
});

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Placeholder: In a real implementation, send data to server
  alert('Thank you for your message! I will get back to you soon.');
  e.target.reset();
});

// Loading states for GitHub stats
document.addEventListener('DOMContentLoaded', () => {
  const githubImages = document.querySelectorAll('.github-card img');
  githubImages.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    // If already loaded
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
});

// Add parallax effect to sections (optimized)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const speed = 0.5;
    const rect = section.getBoundingClientRect();
    const scroll = window.pageYOffset;
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      section.style.transform = `translateY(${scroll * speed}px)`;
    }
  });
});
