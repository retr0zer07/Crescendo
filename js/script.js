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
    // PROCESS MASCOT ANIMATION
    // ============================================

    const processSection = document.querySelector('.proceso');
    if (processSection) {
        let processMascotPlayed = false;

        const updateProcessMascotPath = () => {
            if (window.innerWidth < 992) {
                return;
            }

            const track = processSection.querySelector('.proceso-mascot-orbit');
            const mascot = processSection.querySelector('.proceso-mascot');
            const targets = processSection.querySelectorAll('.proceso-steps .paso .paso-numero');
            const header = processSection.querySelector('.section-header');

            if (!track || !mascot || targets.length < 3 || !header) {
                return;
            }

            const sectionRect = processSection.getBoundingClientRect();
            const headerRect = header.getBoundingClientRect();
            const mascotRect = mascot.getBoundingClientRect();
            const mascotWidth = mascotRect.width || 54;
            const mascotHalf = mascotWidth / 2;

            const getPoint = (el) => {
                const rect = el.getBoundingClientRect();
                return {
                    x: (rect.left + rect.width / 2) - sectionRect.left - mascotHalf,
                    // Keep landing above card content so the mascot sits on top of each card marker.
                    y: (rect.top + rect.height / 2) - sectionRect.top - mascotHalf - 174
                };
            };

            const p1 = getPoint(targets[0]);
            const p2 = getPoint(targets[1]);
            const p3 = getPoint(targets[2]);

            const headerY = (headerRect.top + headerRect.height * 0.62) - sectionRect.top - mascotHalf;
            const clampArcY = (value) => Math.max(12, value);

            const apex12 = {
                x: p1.x + ((p2.x - p1.x) * 0.5),
                y: clampArcY(Math.min(headerY - 216, p1.y - 1020))
            };
            const apex23 = {
                x: p2.x + ((p3.x - p2.x) * 0.5),
                y: clampArcY(Math.min(headerY - 168, p2.y - 960))
            };

            track.style.setProperty('--p1-x', `${p1.x}px`);
            track.style.setProperty('--p1-y', `${p1.y}px`);
            track.style.setProperty('--a12-x', `${apex12.x}px`);
            track.style.setProperty('--a12-y', `${apex12.y}px`);
            track.style.setProperty('--p2-x', `${p2.x}px`);
            track.style.setProperty('--p2-y', `${p2.y}px`);
            track.style.setProperty('--a23-x', `${apex23.x}px`);
            track.style.setProperty('--a23-y', `${apex23.y}px`);
            track.style.setProperty('--p3-x', `${p3.x}px`);
            track.style.setProperty('--p3-y', `${p3.y}px`);

            if (!processMascotPlayed) {
                mascot.style.transform = `translate(${p1.x}px, ${p1.y}px) scale(1)`;
            } else {
                mascot.style.transform = `translate(${p3.x}px, ${p3.y}px) scale(1)`;
            }

            return { mascot, p1, p2, p3, apex12, apex23 };
        };

        const playProcessMascotAnimation = () => {
            if (window.innerWidth < 992 || processMascotPlayed) {
                return;
            }

            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const points = updateProcessMascotPath();

            if (!points || !points.mascot) {
                return;
            }

            const { mascot, p1, p2, p3, apex12, apex23 } = points;

            if (reducedMotion) {
                mascot.style.transform = `translate(${p3.x}px, ${p3.y}px) scale(1)`;
                processMascotPlayed = true;
                return;
            }

            const bezierPoint = (start, control, end, t) => {
                const inv = 1 - t;
                return {
                    x: (inv * inv * start.x) + (2 * inv * t * control.x) + (t * t * end.x),
                    y: (inv * inv * start.y) + (2 * inv * t * control.y) + (t * t * end.y)
                };
            };

            const buildHopFrames = (start, control, end, offsetStart, offsetEnd, peakScale, touchdownScale, steps, includeStart) => {
                const frames = [];

                for (let i = 0; i <= steps; i += 1) {
                    if (!includeStart && i === 0) {
                        continue;
                    }

                    const tLinear = i / steps;
                    // Near-linear progression with minimal easing for a more natural jump timing.
                    const t = 1 - Math.pow(1 - tLinear, 1.06);
                    const point = bezierPoint(start, control, end, t);
                    const parabola = 1 - Math.pow((t * 2) - 1, 2);
                    const scale = i === steps
                        ? touchdownScale
                        : 1 + ((peakScale - 1) * parabola);
                    const offset = offsetStart + ((offsetEnd - offsetStart) * tLinear);

                    frames.push({
                        transform: `translate(${point.x}px, ${point.y}px) scale(${scale})`,
                        offset
                    });
                }

                return frames;
            };

            const keyframes = [
                { transform: `translate(${p1.x}px, ${p1.y}px) scale(1)`, offset: 0 },
                ...buildHopFrames(p1, apex12, p2, 0, 0.44, 1.05, 0.98, 16, false),
                ...buildHopFrames(p2, apex23, p3, 0.44, 0.86, 1.04, 0.99, 16, false),
                { transform: `translate(${p3.x}px, ${p3.y}px) scale(1.01)`, offset: 0.93 },
                { transform: `translate(${p3.x}px, ${p3.y}px) scale(1)`, offset: 1 }
            ];

            mascot.animate(keyframes, {
                duration: 2400,
                easing: 'linear',
                fill: 'forwards'
            });

            processMascotPlayed = true;
        };

        updateProcessMascotPath();
        window.addEventListener('resize', updateProcessMascotPath, { passive: true });

        if ('IntersectionObserver' in window) {
            const processObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        playProcessMascotAnimation();
                        processObserver.disconnect();
                    }
                });
            }, {
                threshold: 0.35
            });

            processObserver.observe(processSection);
        } else {
            playProcessMascotAnimation();
        }
    }

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


