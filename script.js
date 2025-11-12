// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(30px)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards and portfolio items
document.querySelectorAll('.service-card, .portfolio-item').forEach(el => {
    observer.observe(el);
});

// ============================================
// BUTTON INTERACTIONS
// ============================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0) scale(0.98)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
});

// Portfolio button scroll to portfolio
const portfolioButton = document.querySelector('.hero .btn-secondary');
if (portfolioButton) {
    portfolioButton.addEventListener('click', function(e) {
        e.preventDefault();
        const portfolioSection = document.querySelector('#portfolio');
        if (portfolioSection) {
            const offsetTop = portfolioSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// ============================================
// CURSOR GLOW EFFECT (OPTIONAL)
// ============================================
let cursorGlow = null;

function createCursorGlow() {
    cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    cursorGlow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s, opacity 0.3s;
        opacity: 0;
    `;
    document.body.appendChild(cursorGlow);
}

function initCursorGlow() {
    if (window.innerWidth > 768) {
        if (!cursorGlow) {
            createCursorGlow();
        }
        
        document.addEventListener('mousemove', (e) => {
            if (cursorGlow) {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
                cursorGlow.style.opacity = '1';
            }
        });
        
        document.querySelectorAll('a, button, .service-card, .portfolio-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (cursorGlow) {
                    cursorGlow.style.width = '40px';
                    cursorGlow.style.height = '40px';
                    cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.25), transparent)';
                }
            });
            
            el.addEventListener('mouseleave', () => {
                if (cursorGlow) {
                    cursorGlow.style.width = '20px';
                    cursorGlow.style.height = '20px';
                    cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent)';
                }
            });
        });
        
        document.addEventListener('mouseleave', () => {
            if (cursorGlow) {
                cursorGlow.style.opacity = '0';
            }
        });
    }
}

// Initialize cursor glow on desktop
if (window.innerWidth > 768) {
    initCursorGlow();
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && cursorGlow) {
        cursorGlow.remove();
        cursorGlow = null;
    } else if (window.innerWidth > 768 && !cursorGlow) {
        initCursorGlow();
    }
});

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// ============================================
// SERVICE CARD TILT EFFECT
// ============================================
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// PORTFOLIO ITEM INTERACTION
// ============================================
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const overlay = this.querySelector('.portfolio-overlay');
        if (overlay) {
            const glow = overlay.querySelector('.portfolio-glow');
            if (glow) {
                glow.style.left = x + 'px';
                glow.style.top = y + 'px';
            }
        }
    });
});

// ============================================
// ANIMATE NUMBERS (IF NEEDED)
// ============================================
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
    
    // Animate particles
    document.querySelectorAll('.particle').forEach((particle, index) => {
        particle.style.animationDelay = `${index * 0.5}s`;
    });
});

// ============================================
// SCROLL PROGRESS INDICATOR (OPTIONAL)
// ============================================
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #1a1a1a, #4a4a4a);
        z-index: 10000;
        width: 0%;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
let ticking = false;

function updateOnScroll() {
    // Throttle scroll events
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll-dependent animations here
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll, { passive: true });

// ============================================
// CONTACT FORM HANDLING WITH EMAILJS
// ============================================
// Initialize EmailJS
// Replace 'YOUR_PUBLIC_KEY' with your EmailJS Public Key
// Get it from: https://dashboard.emailjs.com/admin/integration
if (typeof emailjs !== 'undefined') {
    emailjs.init('Emj5GjCdaPojYY0e4'); // Replace with your EmailJS Public Key
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Wird gesendet...';
        submitButton.disabled = true;
        
        // EmailJS configuration
        // Ihre EmailJS Konfiguration
        const serviceID = 'service_93ruypd';      // Ihre Service ID
        const templateID = 'template_auamz5u';    // Ihre Template ID
        const publicKey = 'Emj5GjCdaPojYY0e4';    // Ihre Public Key
        
        // Überprüfen ob alle IDs gesetzt sind (nur wenn noch Platzhalter vorhanden)
        if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID') {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            showFormMessage('Bitte konfigurieren Sie zuerst Service ID und Template ID in script.js', 'error');
            return;
        }
        
        // Prepare email parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'lynora.studio.contact@gmail.com' // Ihre E-Mail-Adresse
        };
        
        // Send email using EmailJS (v4 API - publicKey wird nicht mehr benötigt im send())
        if (typeof emailjs !== 'undefined') {
            emailjs.send(serviceID, templateID, templateParams)
                .then(function(response) {
                    // Success
                    submitButton.textContent = 'Nachricht gesendet! ✓';
                    submitButton.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
                    
                    // Show success message
                    showFormMessage('Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitButton.textContent = originalButtonText;
                        submitButton.style.background = '';
                        submitButton.disabled = false;
                    }, 3000);
                }, function(error) {
                    // Error
                    console.error('EmailJS Error:', error);
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    
                    // Show detailed error message
                    let errorMessage = 'Entschuldigung, es gab einen Fehler beim Senden.';
                    
                    if (error.text) {
                        errorMessage += ` Fehler: ${error.text}`;
                        console.error('Error Details:', error.text);
                    }
                    
                    if (error.status === 400) {
                        errorMessage = 'Ungültige Konfiguration. Bitte überprüfen Sie Service ID, Template ID und Public Key.';
                    } else if (error.status === 401) {
                        errorMessage = 'Ungültiger Public Key. Bitte überprüfen Sie Ihre EmailJS-Konfiguration.';
                    } else if (error.status === 404) {
                        errorMessage = 'Service oder Template nicht gefunden. Bitte überprüfen Sie Ihre IDs.';
                    }
                    
                    showFormMessage(errorMessage, 'error');
                });
        } else {
            // Fallback if EmailJS is not loaded
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            showFormMessage('EmailJS ist nicht geladen. Bitte überprüfen Sie die Konfiguration.', 'error');
        }
    });
}

// Function to show form messages
function showFormMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 500;
        ${type === 'success' 
            ? 'background: rgba(76, 175, 80, 0.1); color: #4CAF50; border: 1px solid rgba(76, 175, 80, 0.3);' 
            : 'background: rgba(244, 67, 54, 0.1); color: #f44336; border: 1px solid rgba(244, 67, 54, 0.3);'
        }
    `;
    
    // Insert message after form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            messageDiv.style.transition = 'opacity 0.3s ease';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c✨ Futuristic Portfolio Website ✨', 'color: #ffffff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern web technologies', 'color: #e0e0e0; font-size: 12px;');

