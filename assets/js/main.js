/*===== ENHANCED PORTFOLIO JAVASCRIPT =====*/

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    setupMobileMenu();
    setupActiveLinks();
    setupScrollReveal();
    setupEmailJS();
    setupLazyLoading();
    setupPerformanceOptimizations();
}

/*===== MOBILE MENU =====*/ 
function setupMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (toggle && nav) {
        // Toggle menu
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            toggle.setAttribute('aria-expanded', nav.classList.contains('show'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !toggle.contains(e.target)) {
                nav.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('show')) {
                nav.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Remove menu on link click (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
function setupActiveLinks() {
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length === 0) return;

    const scrollActive = () => {
        const scrollDown = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            
            if (sectionsClass) {
                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link');
                } else {
                    sectionsClass.classList.remove('active-link');
                }
            }
        });
    };

    // Throttle scroll event for better performance
    let ticking = false;
    const throttledScrollActive = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                scrollActive();
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', throttledScrollActive);
}

/*===== SCROLL REVEAL ANIMATION =====*/
function setupScrollReveal() {
    if (typeof ScrollReveal === 'undefined') {
        console.warn('ScrollReveal library not loaded');
        return;
    }

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1400,
        delay: 200,
        reset: false, // Better performance
        mobile: true,
        cleanup: true
    });

    // Animate elements
    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
}

/*===== EMAIL JS SETUP =====*/
function setupEmailJS() {
    // Initialize EmailJS
    if (typeof emailjs === 'undefined') {
        console.warn('EmailJS library not loaded');
        return;
    }

    emailjs.init("CCtjhyR8vAwcMfONJ");

    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        // Get form elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitButton = contactForm.querySelector('.contact__button');

        // Validate form
        if (!validateForm(nameInput, emailInput, messageInput)) {
            return;
        }

        // Show loading state
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Send email
            const response = await emailjs.send("service_7tpicbq", "template_wsy3bqa", {
                from_name: nameInput.value.trim(),
                from_email: emailInput.value.trim(),
                message: messageInput.value.trim()
            });

            // Success
            showNotification('Message sent successfully! ✅', 'success');
            contactForm.reset();
            
        } catch (error) {
            // Error
            console.error('EmailJS Error:', error);
            showNotification('Failed to send message. Please try again. ❌', 'error');
        } finally {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

/*===== FORM VALIDATION =====*/
function validateForm(nameInput, emailInput, messageInput) {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Reset previous errors
    clearErrors();

    let isValid = true;

    // Validate name
    if (name.length < 2) {
        showFieldError(nameInput, 'Name must be at least 2 characters long');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFieldError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate message
    if (message.length < 10) {
        showFieldError(messageInput, 'Message must be at least 10 characters long');
        isValid = false;
    }

    return isValid;
}

/*===== UTILITY FUNCTIONS =====*/
function showFieldError(input, message) {
    input.style.borderColor = '#e74c3c';
    
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    document.querySelectorAll('.contact__input').forEach(input => {
        input.style.borderColor = '';
    });
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        color: 'white',
        backgroundColor: type === 'success' ? '#27ae60' : '#e74c3c',
        zIndex: '1000',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    });

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

/*===== LAZY LOADING =====*/
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/*===== PERFORMANCE OPTIMIZATIONS =====*/
function setupPerformanceOptimizations() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Prefetch external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.addEventListener('mouseenter', () => {
                const linkTag = document.createElement('link');
                linkTag.rel = 'prefetch';
                linkTag.href = link.href;
                document.head.appendChild(linkTag);
            }, { once: true });
        }
    });

    // Add loading animation to work images
    document.querySelectorAll('.work__img img').forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
}

/*===== SERVICE WORKER REGISTRATION =====*/
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

/*===== ERROR HANDLING =====*/
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

