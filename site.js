// Interactive JavaScript functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Variables
            const navbar = document.querySelector('.navbar');
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            const navLinksItems = document.querySelectorAll('.nav-links a');
            const formInputs = document.querySelectorAll('.form-control');
            
            // Mobile navigation toggle
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
                
                // Animate hamburger to X
                const bars = hamburger.querySelectorAll('.bar');
                if (hamburger.classList.contains('active')) {
                    bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                    bars[1].style.opacity = '0';
                    bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
                } else {
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            });
            
            // Close mobile menu when link is clicked
            navLinksItems.forEach(item => {
                item.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('active');
                        
                        // Revert hamburger animation
                        const bars = hamburger.querySelectorAll('.bar');
                        bars[0].style.transform = 'none';
                        bars[1].style.opacity = '1';
                        bars[2].style.transform = 'none';
                    }
                });
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.style.padding = '5px 0';
                    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                } else {
                    navbar.style.padding = '10px 0';
                    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                    navbar.style.background = 'rgba(255, 255, 255, 0.9)';
                }
            });
            
            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                });
            });
            
            // Contact form interaction
            formInputs.forEach(input => {
                // Focus effect
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'translateY(-5px)';
                    this.style.borderColor = '#5271ff';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'none';
                    if (!this.value) {
                        this.style.borderColor = '#ddd';
                    }
                });
                
                // Live validation feedback
                input.addEventListener('input', function() {
                    if (this.value) {
                        this.style.borderColor = '#5271ff';
                    } else {
                        this.style.borderColor = '#ddd';
                    }
                });
            });
            
            // Dynamic element animations when scrolling into view
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.section-title, .about-content, .project-card, .contact-form');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementPosition < windowHeight - 100) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial styles for animation
            document.querySelectorAll('.section-title, .about-content, .project-card, .contact-form').forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.8s ease';
            });
            
            // Run animation on scroll
            window.addEventListener('scroll', animateOnScroll);
            
            // Run once on load
            animateOnScroll();
            
            // Project cards hover interaction
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    // Add some extra hover effects with JS
                    const img = this.querySelector('img');
                    img.style.transform = 'scale(1.1)';
                    
                    const link = this.querySelector('.project-link');
                    link.style.transform = 'translateX(5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    const img = this.querySelector('img');
                    img.style.transform = 'scale(1)';
                    
                    const link = this.querySelector('.project-link');
                    link.style.transform = 'translateX(0)';
                });
            });
            
            // Typing animation for hero text
            const typingAnimation = () => {
                const text = "Front-end Developer";
                const heroDescription = document.querySelector('.hero-description');
                heroDescription.textContent = '';
                
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length) {
                        heroDescription.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                };
                
                setTimeout(() => {
                    typeWriter();
                }, 500);
            };
            
            // Run typing animation
            typingAnimation();
            
            // Add subtle parallax effect to hero section
            const hero = document.querySelector('.hero');
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
                hero.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
            });
            
            // Highlight active navigation based on scroll position
            const sections = document.querySelectorAll('section');
            
            const highlightNav = () => {
                let scrollPosition = window.scrollY;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        document.querySelector(`.nav-links a[href="#${sectionId}"]`).style.color = '#5271ff';
                    } else {
                        document.querySelector(`.nav-links a[href="#${sectionId}"]`).style.color = '#333';
                    }
                });
            };
            
            window.addEventListener('scroll', highlightNav);
            
            // Run once on page load
            highlightNav();

        });
 const text = "Front-end Developer.";
let index = 0;
let letter = "";
let isDeleting = false;

const typingElement = document.querySelector(".hero-description");

function type() {
  if (isDeleting) {
    letter = text.slice(0, --index);
  } else {
    letter = text.slice(0, ++index);
  }

  typingElement.textContent = letter;

  let speed = isDeleting ? 80 : 120; // typing & deleting speed

  if (!isDeleting && index === text.length) {
    speed = 1500; // pause before deleting
    isDeleting = true;
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    speed = 500; // pause before typing again
  }

  setTimeout(type, speed);
}

type();
