document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav-links a');
    const heroHeight = window.innerHeight;

    // Force hero video to autoplay
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.muted = true;
        heroVideo.playsInline = true;
        heroVideo.defaultMuted = true;
        
        const playVideo = async () => {
            try {
                await heroVideo.play();
                console.log('Video playing');
            } catch (error) {
                console.log('Autoplay blocked:', error);
                document.addEventListener('click', () => {
                    heroVideo.play().catch(() => {});
                }, { once: true });
            }
        };
        
        if (heroVideo.readyState >= 3) {
            playVideo();
        }
        
        heroVideo.addEventListener('loadedmetadata', playVideo);
        heroVideo.addEventListener('loadeddata', playVideo);
        heroVideo.addEventListener('canplay', playVideo);
        heroVideo.addEventListener('canplaythrough', playVideo);
        
        setTimeout(() => {
            if (heroVideo.paused) {
                playVideo();
            }
        }, 500);
    }

    // Delivery Modal
    const modal = document.getElementById('deliveryModal');
    const deliveryCta = document.querySelector('.delivery-cta');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    const openModal = (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (deliveryCta) {
        deliveryCta.addEventListener('click', openModal);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        if (scrolled > heroHeight - 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.borderBottom = '1px solid var(--border-light)';
            logo.style.color = 'var(--primary)';
            navLinks.forEach(link => {
                link.style.color = 'var(--text-primary)';
            });
        } else {
            navbar.style.background = 'transparent';
            navbar.style.borderBottom = 'none';
            logo.style.color = 'var(--bg-white)';
            navLinks.forEach(link => {
                link.style.color = 'rgba(255, 255, 255, 0.9)';
            });
        }
    });
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-item, .process-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
});
