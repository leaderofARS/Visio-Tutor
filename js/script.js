// Loading animation
const loaderContainer = document.querySelector('.loader-container');

// Start loading animation when page loads
window.addEventListener('load', () => {
    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden';
    
    // Hide loader after 1 second
    setTimeout(() => {
        if (loaderContainer) {
            loaderContainer.style.opacity = '0';
            setTimeout(() => {
                loaderContainer.style.display = 'none';
                document.body.style.overflow = 'auto';
                // Apply animation classes after page load
                applyAnimations();
            }, 500);
        } else {
            document.body.style.overflow = 'auto';
            // Apply animation classes after page load
            applyAnimations();
        }
    }, 1000);
});

// Also make sure the loader is hidden if the load event already fired
document.addEventListener('DOMContentLoaded', () => {
    if (loaderContainer && document.readyState === 'complete') {
        loaderContainer.classList.add('loader-hidden');
        loaderContainer.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Toggle theme
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleBtn.textContent = 'Light Mode';
    }
});

// Navbar scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const authButtons = document.querySelector('.auth-buttons');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('open');
    nav.classList.toggle('show-menu');
    authButtons.classList.toggle('show-menu');
});

// Floating background animation
const floatingBackground = document.querySelector('.floating-background');
const blob1 = document.querySelector('.blob1');
const blob2 = document.querySelector('.blob2');
const blob3 = document.querySelector('.blob3');
const blob4 = document.querySelector('.blob4');
const blob5 = document.querySelector('.blob5');
const blob6 = document.querySelector('.blob6');
const blob7 = document.querySelector('.blob7');
const blob8 = document.querySelector('.blob8');
const blob9 = document.querySelector('.blob9');
const blob10 = document.querySelector('.blob10');
const blobs = [blob1, blob2, blob3, blob4, blob5, blob6, blob7, blob8, blob9, blob10];

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    floatingBackground.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
    
    // Create varied movement for each blob
    blob1.style.transform = `translate(${mouseX * -40}px, ${mouseY * -30}px)`;
    blob2.style.transform = `translate(${mouseX * 40}px, ${mouseY * 30}px)`;
    blob3.style.transform = `translate(${mouseX * 25}px, ${mouseY * -40}px) rotate(${mouseX * 10}deg)`;
    blob4.style.transform = `translate(${mouseX * -30}px, ${mouseY * 25}px) scale(${1 + mouseY * 0.1})`;
    blob5.style.transform = `translate(${mouseX * 35}px, ${mouseY * -20}px) rotate(${mouseY * 15}deg)`;
    blob6.style.transform = `translate(${mouseX * -20}px, ${mouseY * 45}px) rotate(${mouseX * -5}deg)`;
    blob7.style.transform = `translate(${mouseX * 15}px, ${mouseY * -35}px) scale(${1 - mouseX * 0.1})`;
    blob8.style.transform = `translate(${mouseX * -45}px, ${mouseY * -25}px) rotate(${mouseY * -10}deg)`;
    blob9.style.transform = `translate(${mouseX * 30}px, ${mouseY * 20}px) scale(${1 + (mouseX + mouseY) * 0.05})`;
    blob10.style.transform = `translate(${mouseX * -25}px, ${mouseY * 40}px) rotate(${(mouseX - mouseY) * 20}deg)`;
    
    // Update the color hues based on mouse position with more variation
    const hue1 = (mouseX * 30) + 350; // Red base hue
    const hue2 = (mouseY * 30) + 200; // Blue base hue
    const hue3 = ((mouseX + mouseY) * 20) + 270; // Purple base hue
    const hue4 = ((mouseX - mouseY) * 25) + 170; // Teal base hue
    const hue5 = ((mouseY * 2) * 15) + 20; // Orange base hue
    const hue6 = ((mouseX * 3) * 10) + 120; // Green base hue
    const hue7 = ((mouseY - mouseX) * 20) + 10; // Red-orange base hue
    const hue8 = ((mouseX * mouseY) * 100) + 280; // Purple base hue
    const hue9 = ((mouseX + mouseY * 2) * 15) + 210; // Blue base hue
    const hue10 = ((mouseY - mouseX * 3) * 10) + 30; // Orange base hue
    
    // Apply color changes to blobs with different saturation and lightness
    blob1.style.backgroundColor = `hsl(${hue1}, 80%, 50%)`;
    blob2.style.backgroundColor = `hsl(${hue2}, 80%, 60%)`;
    blob3.style.backgroundColor = `hsl(${hue3}, 75%, 65%)`;
    blob4.style.backgroundColor = `hsl(${hue4}, 70%, 55%)`;
    blob5.style.backgroundColor = `hsl(${hue5}, 85%, 70%)`;
    blob6.style.backgroundColor = `hsl(${hue6}, 65%, 45%)`;
    blob7.style.backgroundColor = `hsl(${hue7}, 90%, 60%)`;
    blob8.style.backgroundColor = `hsl(${hue8}, 75%, 40%)`;
    blob9.style.backgroundColor = `hsl(${hue9}, 60%, 55%)`;
    blob10.style.backgroundColor = `hsl(${hue10}, 85%, 65%)`;
    
    // Update gradient colors in all gradient elements
    updateGradientColors(hue1, hue2);
    
    // Change opacity of blobs based on mouse position for extra effect
    blobs.forEach((blob, index) => {
        // Calculate distance from mouse to center (normalized)
        const distance = Math.sqrt(Math.pow(mouseX * 2, 2) + Math.pow(mouseY * 2, 2));
        
        // Different opacity for each blob with variation
        const modulatedIndex = index % 5; // Creates 2 groups with similar base opacity
        const baseOpacity = 0.2 + (modulatedIndex * 0.025);
        const opacityVariation = 0.2 * (1 - distance);
        
        // Make blobs near the cursor more visible
        blob.style.opacity = Math.max(0.15, Math.min(baseOpacity + opacityVariation, 0.5));
        
        // Create subtle filter changes for more visual interest
        const blurAmount = 60 - (index % 3) * 5;
        blob.style.filter = `blur(${blurAmount}px)`;
    });
});

// Function to update gradient colors across the site
function updateGradientColors(hue1, hue2) {
    // Update section titles
    const sectionTitles = document.querySelectorAll('.section-title, .title, .logo-text');
    sectionTitles.forEach(title => {
        title.style.backgroundImage = `linear-gradient(45deg, hsl(${hue1}, 80%, 50%), hsl(${hue2}, 80%, 60%))`;
    });
    
    // Update other gradient elements
    const gradientElements = document.querySelectorAll('.nav-link::after, .feature-card::before');
    document.documentElement.style.setProperty('--crimson-red', `hsl(${hue1}, 80%, 50%)`);
    document.documentElement.style.setProperty('--sky-blue', `hsl(${hue2}, 80%, 60%)`);
}

// Smooth scrolling for all links
document.addEventListener('DOMContentLoaded', () => {
    // Get all links that have an href starting with #
    const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Add a highlight effect to the target section
                const highlightEffect = document.createElement('div');
                highlightEffect.classList.add('section-highlight');
                targetElement.prepend(highlightEffect);
                
                // Smooth scroll to the target with a custom easing
                smoothScrollTo(targetElement, 1000, 'easeInOutQuart');
                
                // Remove the highlight effect after animation
                setTimeout(() => {
                    highlightEffect.remove();
                }, 1500);
            }
        });
    });
    
    // Add smooth scrolling for buttons that have data-scroll attribute
    const scrollButtons = document.querySelectorAll('[data-scroll]');
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                smoothScrollTo(targetElement, 1000, 'easeInOutQuart');
            }
        });
    });
});

/**
 * Smooth scroll to element with customizable duration and easing
 * @param {HTMLElement} element - Target element to scroll to
 * @param {number} duration - Duration of scroll animation in ms
 * @param {string} easingFunction - Name of easing function
 */
function smoothScrollTo(element, duration = 800, easingFunction = 'easeInOutQuad') {
    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    // Define easing functions
    const easings = {
        linear: t => t,
        easeInQuad: t => t * t,
        easeOutQuad: t => t * (2 - t),
        easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        easeInCubic: t => t * t * t,
        easeOutCubic: t => (--t) * t * t + 1,
        easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        easeInQuart: t => t * t * t * t,
        easeOutQuart: t => 1 - (--t) * t * t * t,
        easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
    };
    
    // Animation loop
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easings[easingFunction](progress);
        
        window.scrollTo(0, startPosition + distance * easing);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    // Start animation
    requestAnimationFrame(animation);
}

// Add data-scroll attributes to buttons
document.addEventListener('DOMContentLoaded', () => {
    // Add to primary buttons in hero section - point to features
    const tryNowBtn = document.querySelector('.hero .primary-button');
    if (tryNowBtn) {
        tryNowBtn.setAttribute('data-scroll', '#features');
    }
    
    // Add to secondary buttons in hero section - point to about section
    const loginBtn = document.querySelector('.hero .secondary-button');
    if (loginBtn) {
        loginBtn.setAttribute('data-scroll', '#about-us');
    }
    
    // Add id attributes to sections for scroll targeting
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (!section.id) {
            if (section.classList.contains('features')) {
                section.id = 'features';
            } else if (index === 2) { // About Us section (third section)
                section.id = 'about-us';
            } else if (index === 3) { // Testimonials section (fourth section)
                section.id = 'testimonials';
            } else if (index === 4) { // Transform section (fifth section)
                section.id = 'transform';
            }
        }
    });
});

// Scroll-based animations
const talkingPerson = document.querySelector('.talking-person');
const studentTalking = document.querySelector('.student-talking');

// Get all grid items that need the scale-in-bl animation
const gridItems = [
    ...document.querySelectorAll('.feature-card'),
    ...document.querySelectorAll('.testimonial-card')
];

// Intersection Observer for scroll animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.2, // Trigger when at least 20% of the element is visible
    rootMargin: '0px 0px -100px 0px' // Offset to trigger animation slightly earlier
});

// Observe all animated elements
if (talkingPerson) animateOnScroll.observe(talkingPerson);
if (studentTalking) animateOnScroll.observe(studentTalking);

// Observe all grid items for scale-in-bl animation
gridItems.forEach((item) => {
    // Get the delay from the data attribute or default to 0
    const delay = parseInt(item.getAttribute('data-delay') || '0');
    
    // Create a specific observer for each item to handle the delay
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a delay based on the data-delay attribute (100ms * delay value)
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, delay * 100);
                
                // Unobserve after animation is triggered
                itemObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    itemObserver.observe(item);
});

// Create a glass effect on dashboard when visible
if (dashboardPreview) {
    dashboardPreview.addEventListener('animationstart', () => {
        const dashboardContainer = document.querySelector('.dashboard-container');
        if (dashboardContainer) {
            // Ensure the dashboard has the glass effect and proper opacity
            dashboardContainer.style.backdropFilter = 'blur(10px)';
            dashboardContainer.style.webkitBackdropFilter = 'blur(10px)';
            dashboardContainer.style.background = 'rgba(255, 255, 255, 0.08)';
            dashboardContainer.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            
            // Animate progress bars with delay
            setTimeout(() => {
                const progressBars = document.querySelectorAll('.progress-fill');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        // Get width from CSS class
                        const computedStyle = window.getComputedStyle(bar);
                        const width = computedStyle.width;
                        
                        // Animate from 0 to full width
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    }, index * 200); // Stagger each progress bar animation
                });
            }, 500);
        }
    });
}

// Set Current Year in Footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
    
    // Apply the saved theme on page load
    applyTheme();
    
    // Add animation classes to elements
    applyAnimations();
});

// Theme Toggle
function applyTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const htmlElement = document.documentElement;
    const themeToggleButton = document.querySelector('.theme-toggle button');
    
    if (savedTheme === 'light') {
        htmlElement.classList.remove('dark-theme');
        htmlElement.classList.add('light-theme');
        
        // Update button text and icon if element exists
        if (themeToggleButton) {
            const iconElement = themeToggleButton.querySelector('i');
            const textElement = themeToggleButton.querySelector('span');
            
            if (iconElement) {
                iconElement.className = 'fas fa-moon';
            }
            if (textElement) {
                textElement.textContent = 'Dark Mode';
            }
        }
    } else {
        htmlElement.classList.remove('light-theme');
        htmlElement.classList.add('dark-theme');
        
        // Update button text and icon if element exists
        if (themeToggleButton) {
            const iconElement = themeToggleButton.querySelector('i');
            const textElement = themeToggleButton.querySelector('span');
            
            if (iconElement) {
                iconElement.className = 'fas fa-sun';
            }
            if (textElement) {
                textElement.textContent = 'Light Mode';
            }
        }
    }
}

function toggleTheme() {
    const htmlElement = document.documentElement;
    const themeToggleButton = document.querySelector('.theme-toggle button');
    const iconElement = themeToggleButton.querySelector('i');
    const textElement = themeToggleButton.querySelector('span');
    
    if (htmlElement.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'light');
        htmlElement.classList.remove('dark-theme');
        htmlElement.classList.add('light-theme');
        
        if (iconElement) {
            iconElement.className = 'fas fa-moon';
        }
        if (textElement) {
            textElement.textContent = 'Dark Mode';
        }
    } else {
        localStorage.setItem('theme', 'dark');
        htmlElement.classList.remove('light-theme');
        htmlElement.classList.add('dark-theme');
        
        if (iconElement) {
            iconElement.className = 'fas fa-sun';
        }
        if (textElement) {
            textElement.textContent = 'Light Mode';
        }
    }
}

// Add event listener to theme toggle button
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.querySelector('.theme-toggle button');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            if (authButtons) {
                authButtons.classList.toggle('mobile-active');
            }
            
            // Toggle menu icon
            const menuIcon = menuToggle.querySelector('i');
            if (menuIcon) {
                if (menuIcon.classList.contains('fa-bars')) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-times');
                } else {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });
    }
});

// Animations
function applyAnimations() {
    // Apply animations with delay to elements with animation classes
    const animatedElements = document.querySelectorAll('.slide-up, .fade-in, .slide-in-left, .slide-in-right');
    
    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Apply animations for testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let delay = 0;
    
    testimonialCards.forEach(card => {
        setTimeout(() => {
            card.classList.add('animated');
        }, delay);
        delay += 150;
    });
}

// Floating Background Animation
document.addEventListener('DOMContentLoaded', function() {
    const bg = document.querySelector('.floating-bg');
    if (bg) {
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            bg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        });
    }
});

// Password visibility toggle
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle icon
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});

// Testimonial filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (filterButtons.length > 0 && testimonialCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter testimonials
                testimonialCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        if (card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                    
                    // Remove and re-add animation class for smooth transition
                    card.classList.remove('animated');
                    setTimeout(() => {
                        card.classList.add('animated');
                    }, 10);
                });
            });
        });
    }
});

// Rating star functionality
document.addEventListener('DOMContentLoaded', function() {
    const ratingStars = document.querySelectorAll('.rating-stars span');
    const ratingInput = document.getElementById('rating');
    
    if (ratingStars.length > 0 && ratingInput) {
        ratingStars.forEach((star, index) => {
            star.addEventListener('click', function() {
                // Set rating value
                const ratingValue = index + 1;
                ratingInput.value = ratingValue;
                
                // Update stars display
                ratingStars.forEach((s, i) => {
                    if (i < ratingValue) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });
    }
}); 