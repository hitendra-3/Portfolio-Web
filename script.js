// ============================================
// CREATIVE PORTFOLIO JAVASCRIPT
// Professional Animations & Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    // initSmoothScroll(); // Disabled to prevent conflict with native CSS smooth scroll
    initNavbar();
    initParallax();
    initSkillCards();
    initScrollIndicator();
    initScrollToTop();
});

// ...

// ============================================
// SMOOTH SCROLLING (Disabled)
// ============================================

// function initSmoothScroll() { ... }

// ============================================
// NAVBAR INTERACTIONS
// ============================================

function initNavbar() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    let lastScroll = 0;

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Logo hover animation
    const logo = document.querySelector('.logo-link');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.1) rotate(-5deg)';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1) rotate(0deg)';
        });
    }
}

// ============================================
// PARALLAX EFFECTS (Optimized to prevent scroll sticking)
// ============================================

function initParallax() {
    // Removed parallax to prevent scroll sticking
    // Star rotation is handled by CSS animation only
}

// ============================================
// SKILL CARDS INTERACTIONS
// ============================================

function initSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) rotate(2deg) scale(1.05)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
        });

        // Add click animation
        card.addEventListener('click', function () {
            this.style.transform = 'translateY(-5px) rotate(-2deg) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) rotate(2deg) scale(1.05)';
            }, 150);
        });
    });
}

// ============================================
// SCROLL INDICATOR
// ============================================

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercentage > 80) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
}

// ============================================
// WELCOME BANNER ANIMATION
// ============================================

function animateBannerX() {
    const bannerXes = document.querySelectorAll('.banner-x');

    bannerXes.forEach((x, index) => {
        setInterval(() => {
            x.style.transform = `rotate(${45 + Math.random() * 180}deg)`;
        }, 2000 + index * 500);
    });
}

// Initialize banner animation
animateBannerX();

// ============================================
// STAR INTERACTION
// ============================================

function initStarInteraction() {
    const star = document.querySelector('.sunburst-star');

    if (star) {
        star.addEventListener('mouseenter', function () {
            this.style.animationPlayState = 'paused';
        });

        star.addEventListener('mouseleave', function () {
            this.style.animationPlayState = 'running';
        });
    }
}

initStarInteraction();

// ============================================
// TYPING EFFECT (Optional Enhancement)
// ============================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ============================================
// CURSOR TRAIL EFFECT (Optional)
// ============================================

function initCursorTrail() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #6C5CE7;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Hide on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }
}

// Uncomment to enable cursor trail
// initCursorTrail();

// ============================================
// PAGE TRANSITION EFFECTS
// ============================================

function initPageTransitions() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.style.opacity = '0';
                target.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    });
}

initPageTransitions();

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Throttle function for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c👋 Welcome to Hitendra S Portfolio!', 'font-size: 20px; font-weight: bold; color: #6C5CE7;');
console.log('%cBuilt with creativity and modern web technologies', 'font-size: 12px; color: #666;');

// ============================================
// SCROLL TO TOP
// ============================================

function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        // Show/Hide button on scroll
        // Show/Hide button on scroll
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 300) {
                // scrollToTopBtn.style.display = 'block'; // Conflict with CSS grid
                scrollToTopBtn.classList.add('show');
            } else {
                // scrollToTopBtn.style.display = 'none';
                scrollToTopBtn.classList.remove('show');
            }
        });

        // Scroll to top on click
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}