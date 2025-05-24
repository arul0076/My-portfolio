// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList = savedTheme;
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList = 'dark';
  } else {
    body.classList = 'light';
  }
}

// Toggle theme
themeToggleBtn.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// Initialize Lucide icons
lucide.createIcons();

// Typewriter effect
const typewriterElement = document.getElementById('typewriter-text');
const phrases = [
  'AI & Data Science Engineer'

];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 1500;
  }
  
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500;
  }
  
  setTimeout(typeWriter, typingSpeed);
}

setTimeout(typeWriter, 1000);

// Enhanced particles configuration with more interactive features
particlesJS('particles-js', {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ['#0ea5e9', '#a855f7', '#34d399']
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    opacity: {
      value: 0.6,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#0ea5e9',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: ['grab', 'bubble']
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.8
        }
      },
      bubble: {
        distance: 200,
        size: 6,
        duration: 0.3,
        opacity: 0.8,
        speed: 3
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// Smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
}

// Initialize EmailJS with your User ID (public key)
(function() {
  emailjs.init("tgUONUAldnFCQHuHz"); // Your actual User ID (public key)
})();

// Form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submit

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm('service_t8u149z', 'template_g6pc4xm', this)
      .then(function(response) {
        console.log('Success:', response.status, response.text);
        alert('Message sent successfully!');
        contactForm.reset();
      }, function(error) {
        console.error('Failed:', error);
        alert('Failed to send message, please try again.');
      });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Enhanced intersection observer for smoother animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

// Initialize elements with animations
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.project-card, .skill-category, .card');
  
  elements.forEach(element => {
    element.classList.add('animate-ready');
    observer.observe(element);
  });
  
  // Initialize Lucide icons for dynamic content
  lucide.createIcons();
});

// Enhanced project card interactions
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.classList.add('card-hover');
    const icon = this.querySelector('.project-category .icon');
    if (icon) icon.classList.add('icon-spin');
  });

  card.addEventListener('mouseleave', function() {
    this.classList.remove('card-hover');
    const icon = this.querySelector('.project-category .icon');
    if (icon) icon.classList.remove('icon-spin');
  });
});

// Add parallax effect to hero section
document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;

  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;

  const depth = 20;
  const moveX = mouseX * depth;
  const moveY = mouseY * depth;

  hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
});