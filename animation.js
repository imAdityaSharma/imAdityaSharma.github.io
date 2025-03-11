document.addEventListener("DOMContentLoaded", () => {
  // Prevent scroll on load
  document.body.style.overflow = "hidden";

  // Get elements
  const scrollButton = document.querySelector(".scroll-button");
  const introSection = document.querySelector(".intro");
  const mainContent = document.querySelector(".main-content");

  // Handle click on scroll button
  scrollButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide intro section
    introSection.classList.add("hidden");

    // Show main content
    mainContent.classList.add("visible");

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

// Add smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
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

// Add parallax effect to sections
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
