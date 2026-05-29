document.addEventListener("DOMContentLoaded", () => {
    const debounce = (func, wait = 10) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    // ==========================================================================
    // NAVBAR STICKY & ACTIVE LINKS ON SCROLL
    // ==========================================================================
    const navbar = document.getElementById("navbar");
    const bgGlow = document.querySelector(".bg-glow");
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        if (bgGlow) {
            bgGlow.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.18}px)`;
        }
    };
    
    window.addEventListener("scroll", debounce(handleScroll, 8), { passive: true });
    handleScroll(); // Run once in case page starts scrolled

    // ==========================================================================
    // MOBILE MENU TOGGLE
    // ==========================================================================
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    const toggleMenu = () => {
        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    };

    menuToggle.addEventListener("click", toggleMenu);

    // Close menu when clicking on a link
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

    // ==========================================================================
    // PARTICLE BACKGROUND SYSTEM (50 Particles)
    // ==========================================================================
    const particlesContainer = document.getElementById("particles-container");
    
    if (particlesContainer) {
        const particleCount = window.innerWidth < 768 ? 20 : 50; // Reduce on mobile
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            
            // Random horizontal position (0% - 100%)
            particle.style.left = Math.random() * 100 + "%";
            // Random vertical start position (0% - 100%)
            particle.style.top = Math.random() * 100 + "%";
            
            // Random size (2px - 5px)
            const size = 2 + Math.random() * 3;
            particle.style.width = size + "px";
            particle.style.height = size + "px";
            
            // Random animation speed (15s - 35s)
            particle.style.animationDuration = (15 + Math.random() * 20) + "s";
            // Random delay
            particle.style.animationDelay = -(Math.random() * 20) + "s";
            
            particlesContainer.appendChild(particle);
        }
    }

    // ==========================================================================
    // FLIP CARDS TOGGLE ON MOBILE (Touch Screens)
    // ==========================================================================
    const flipCards = document.querySelectorAll(".service-card-flip");
    
    flipCards.forEach(card => {
        card.addEventListener("click", function(e) {
            // Only toggle on click if it's a mobile/touch device
            if (window.innerWidth < 1024) {
                // If the user clicked the CTA button inside the card, let it go to the link
                if (e.target.classList.contains("btn-primary") || e.target.closest(".btn-primary")) {
                    return;
                }
                
                // Toggle flipped state
                this.classList.toggle("flipped");
                
                // Unflip other cards
                flipCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove("flipped");
                    }
                });
            }
        });
    });

    // ==========================================================================
    // TABS SYSTEM (Conservation Guidelines)
    // ==========================================================================
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");
            
            // Deactivate all buttons
            tabButtons.forEach(button => button.classList.remove("active"));
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove("active"));
            
            // Activate current button
            btn.classList.add("active");
            // Show corresponding content
            const activeContent = document.getElementById(targetTab);
            if (activeContent) {
                activeContent.classList.add("active");
            }
        });
    });

    // ==========================================================================
    // ANIMATED COUNTERS FOR STATS/METRICS
    // ==========================================================================
    const counters = document.querySelectorAll(".metric-value");
    let countersAnimated = false;

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute("data-target"), 10);
        const duration = 2000; // 2 seconds
        const stepTime = 16; // 60 FPS
        const steps = duration / stepTime;
        const increment = target / steps;
        
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current);
            }
        }, stepTime);
    };

    // ==========================================================================
    // INTERSECTION OBSERVER FOR SCROLL REVEAL ANIMATIONS
    // ==========================================================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    // Trigger hero load animation immediately
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
        setTimeout(() => {
            heroSection.classList.add("animate-in-hero");
        }, 100);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If it is the metrics section, trigger counters
                if (entry.target.classList.contains("metrics-section") && !countersAnimated) {
                    counters.forEach(counter => animateCounter(counter));
                    countersAnimated = true;
                }
                
                // Add animate-in to normal elements
                entry.target.classList.add("animate-in");
                
                // If it is a grid, animate children with stagger
                const staggeredChildren = entry.target.querySelectorAll(
                    ".metric-card, .service-card-flip, .sec-flavor-card, .testimonial-card"
                );
                
                staggeredChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add("animate-in");
                    }, index * 100); // 100ms delay between elements
                });
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to observe
    const sectionsToObserve = [
        document.querySelector(".metrics-section"),
        document.querySelector(".flavors-section"),
        document.querySelector(".secondary-flavors-section"),
        document.querySelector(".conservation-section"),
        document.querySelector(".about-section"),
        document.querySelector(".testimonials-section"),
        document.querySelector(".presentation-section"),
        document.querySelector(".final-cta-section")
    ];

    sectionsToObserve.forEach(section => {
        if (section) observer.observe(section);
    });
});
