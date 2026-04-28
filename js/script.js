// ============================================
// NAVBAR SCROLL EFFECT - OPTIMIZED
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('.navbar');
    let lastScrollY = 0;
    let ticking = false;

    function updateNavbar() {
        const currentScrollY = window.scrollY;

        // Mostrar/Ocultar navbar
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        // Cambiar color del navbar
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!navbar || ticking) return;
        
        ticking = true;
        requestAnimationFrame(updateNavbar);
    }, { passive: true });

    // ============================================
    // FAQ ACCORDION
    // ============================================

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ============================================
    // CONTACT FORM SUBMISSION
    // ============================================

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const statusEl = contactForm.querySelector('.form-status');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.textContent : '';
        const getUiLang = () => localStorage.getItem('preferredLanguage') === 'es' ? 'es' : 'en';
        const uiMessages = {
            en: {
                sending: 'Sending...',
                submitting: 'Submitting your request...',
                received: 'Received! Redirecting to thank you page...',
                retrying: 'Connection issue, retrying standard send...'
            },
            es: {
                sending: 'Enviando...',
                submitting: 'Enviando tu solicitud...',
                received: '¡Recibido! Redirigiendo a la página de gracias...',
                retrying: 'Problema de conexión, reenviando...'
            }
        };

        // Si el action apunta a formsubmit, usamos AJAX. Si es local (process_form.php), dejamos envío nativo.
        const isFormSubmit = contactForm.action.includes('formsubmit.co');

        if (isFormSubmit) {
            const getThankYouUrl = () => {
                return 'https://crescendodigitalmarketingagency.com/thank-you.html';
            };

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (!submitBtn) return contactForm.submit();
                const lang = getUiLang();
                const messages = uiMessages[lang];

                const langInput = contactForm.querySelector('input[name="lang"]');
                if (langInput) {
                    langInput.value = lang;
                }

                submitBtn.textContent = messages.sending;
                submitBtn.disabled = true;
                if (statusEl) {
                    statusEl.textContent = messages.submitting;
                }

                const formData = new FormData(contactForm);

                fetch('https://formsubmit.co/ajax/crescendomarketingdigital@gmail.com', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    if (!response.ok) throw new Error('FormSubmit error');
                    if (statusEl) {
                        statusEl.textContent = messages.received;
                    }
                    setTimeout(() => {
                        window.location.href = getThankYouUrl();
                    }, 600);
                })
                .catch(() => {
                    // Fallback: submit normally if AJAX fails (CORS/others)
                    if (statusEl) {
                        statusEl.textContent = messages.retrying;
                    }
                    contactForm.submit();
                })
                .finally(() => {
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 1500);
                });
            });
        } else {
            // Envío nativo (process_form.php). Solo UX de loading.
            contactForm.addEventListener('submit', function() {
                if (!submitBtn) return;
                const lang = getUiLang();
                const messages = uiMessages[lang];
                const langInput = contactForm.querySelector('input[name="lang"]');

                if (langInput) {
                    langInput.value = lang;
                }

                submitBtn.disabled = true;
                submitBtn.textContent = messages.sending;
                if (statusEl) {
                    statusEl.textContent = messages.submitting;
                }
            });
        }
    }

    // ============================================
    // SMOOTH SCROLL ANCHOR LINKS
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // SCROLL ANIMATIONS - OPTIMIZED
    // ============================================

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Dejar de observar después de animar
            }
        });
    }, observerOptions);

    // Observe servicios cards
    document.querySelectorAll('.servicio-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // ============================================
    // ACTIVE LINK IN NAVIGATION - OPTIMIZED
    // ============================================

    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    let navTicking = false;
    
    function updateActiveLink() {
        let current = '';
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
        
        navTicking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (navTicking) return;
        navTicking = true;
        requestAnimationFrame(updateActiveLink);
    }, { passive: true });

    // ============================================
    // LAZY LOAD IMAGES
    // ============================================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // HERO BACKGROUND VIDEO (LAZY)
    // ============================================

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasDataSaver = connection && connection.saveData;
    const isSlowConnection = connection && /2g/.test(connection.effectiveType || '');

    if (!prefersReducedMotion && !hasDataSaver && !isSlowConnection) {
        const heroSections = document.querySelectorAll('.hero');

        const getHeroVideoCandidates = () => {
            const path = window.location.pathname.toLowerCase();
            const candidates = [];

            if (path.includes('/blogs/')) {
                candidates.push('../videos/hero.mp4', '/videos/hero.mp4', 'videos/hero.mp4');
            } else {
                candidates.push('videos/hero.mp4', '/videos/hero.mp4', '../videos/hero.mp4');
            }

            // Avoid duplicated retries when equivalent paths are generated.
            return [...new Set(candidates)];
        };

        const heroVideoCandidates = getHeroVideoCandidates();

        if (heroSections.length > 0) {
            heroSections.forEach(hero => {
                if (hero.querySelector('.hero-video-bg')) {
                    return;
                }

                hero.classList.add('has-video-background');

                const video = document.createElement('video');
                video.className = 'hero-video-bg';
                video.muted = true;
                video.loop = true;
                video.preload = 'none';
                video.autoplay = true;
                video.playsInline = true;
                video.setAttribute('playsinline', '');
                video.setAttribute('aria-hidden', 'true');

                let sourceIndex = 0;

                const assignNextSource = () => {
                    if (sourceIndex >= heroVideoCandidates.length) {
                        return false;
                    }

                    video.src = heroVideoCandidates[sourceIndex];
                    sourceIndex += 1;
                    return true;
                };

                const tryNextSource = () => {
                    const hasNewSource = assignNextSource();
                    if (hasNewSource) {
                        video.load();
                    }
                };

                video.addEventListener('error', tryNextSource, { once: false });
                assignNextSource();

                hero.prepend(video);
            });

            const playVideoSafely = (video) => {
                const playPromise = video.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => {});
                }
            };

            if ('IntersectionObserver' in window) {
                const heroVideoObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        const hero = entry.target;
                        const video = hero.querySelector('.hero-video-bg');

                        if (!video) {
                            return;
                        }

                        if (entry.isIntersecting) {
                            if (!video.dataset.loaded) {
                                video.preload = 'metadata';
                                video.load();
                                video.dataset.loaded = 'true';
                            }
                            playVideoSafely(video);
                        } else {
                            video.pause();
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '200px 0px'
                });

                heroSections.forEach(hero => {
                    heroVideoObserver.observe(hero);
                });
            } else {
                heroSections.forEach(hero => {
                    const video = hero.querySelector('.hero-video-bg');
                    if (!video) {
                        return;
                    }
                    video.preload = 'metadata';
                    video.load();
                    playVideoSafely(video);
                });
            }
        }
    }

    // ============================================
    // TRACK PAGE VIEWS
    // ============================================

    function trackPageView(sectionName) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_title': sectionName,
                'page_location': window.location.href
            });
        }
    }

    // Track section views
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    trackPageView(entry.target.id);
                }
            });
        });
        sectionObserver.observe(section);
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatCurrency(value) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

function debounce(func, wait) {
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

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            // Performance tracking silenced for production
        }, 0);
    });

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================

    const observerOptions = {
        threshold: 0.05,
        rootMargin: '50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('scroll-animate')) {
                entry.target.classList.add('scroll-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos para animar
    const elementsToAnimate = document.querySelectorAll(
        '.servicio-card, .caso-card, .por-que-item, .paso, .faq-item, .info-item, .stat, .logo-item, .comparison-table tbody tr'
    );

    elementsToAnimate.forEach((element, index) => {
        // Solo agregar delay si no tiene ya la clase
        if (!element.classList.contains('scroll-animate')) {
            element.classList.add(`scroll-animate-delay-${(index % 6) + 1}`);
            observer.observe(element);
        }
    });

    // ============================================
    // COUNTER ANIMATION
    // ============================================

    const counters = document.querySelectorAll('.counter, .counter-decimal');
    let hasAnimated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const isDecimal = counter.classList.contains('counter-decimal');
            const duration = 2000; // 2 seconds
            const start = performance.now();

            const updateCounter = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const value = Math.floor(progress * target);

                if (isDecimal) {
                    counter.textContent = (progress * target).toFixed(1);
                } else {
                    counter.textContent = value.toLocaleString();
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
        });
    };


    // Trigger animation when hero section comes into view
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    animateCounters();
                    heroObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        heroObserver.observe(heroSection);
    }
}


