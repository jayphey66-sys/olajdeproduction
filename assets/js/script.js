// ============================================
// PHOTOGRAPHY WEBSITE - JAVASCRIPT
// ============================================

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Update active nav link based on current page
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
updateActiveNav();

// ============================================
// LIGHTBOX FUNCTIONALITY
// ============================================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxLinks = document.querySelectorAll('.lightbox-link');

let currentImageIndex = 0;
let currentGalleryImages = [];

// Open lightbox
function openLightbox(index, gallery) {
    currentImageIndex = index;
    currentGalleryImages = gallery;
    
    lightbox.classList.add('active');
    updateLightboxImage();
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Update lightbox image
function updateLightboxImage() {
    if (currentGalleryImages.length > 0) {
        const currentImage = currentGalleryImages[currentImageIndex];
        lightboxImage.src = currentImage;
    }
}

// Navigate lightbox
function navigateLightbox(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex >= currentGalleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentGalleryImages.length - 1;
    }
    
    updateLightboxImage();
}

// Add click event to all lightbox links
lightboxLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get all images from the same lightbox group
        const gallery = link.getAttribute('data-lightbox');
        const images = Array.from(document.querySelectorAll(`.lightbox-link[data-lightbox="${gallery}"]`))
            .map(l => l.getAttribute('href'));
        
        openLightbox(index, images);
    });
});

// Close lightbox events
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    }
});

// ============================================
// PORTFOLIO FILTERING
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the filter value
            const filter = button.getAttribute('data-filter');
            
            // Filter items
            portfolioItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s';
                } else {
                    const category = item.getAttribute('data-category');
                    if (category === filter) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeIn 0.5s';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Add fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!data.name || !data.email || !data.message || !data.service) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (in production, send to server)
        console.log('Form Data:', data);
        
        // Show success message
        showFormMessage('Thank you! Your message has been sent. I\'ll get back to you soon!', 'success');
        
        // Reset form
        contactForm.reset();
        
        // NOTE: In production, you would send this to a server using:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => {
        //     showFormMessage('Thank you! Your message has been sent.', 'success');
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     showFormMessage('An error occurred. Please try again.', 'error');
        // });
    });
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ============================================
// NEWSLETTER FORM
// ============================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        const button = newsletterForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Subscribed!';
        button.style.backgroundColor = '#27ae60';
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            emailInput.value = '';
        }, 2000);
        
        // In production, send to server:
        // fetch('/api/newsletter', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email })
        // });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('.html')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards, testimonial cards, and other elements
document.querySelectorAll('.service-card, .testimonial-card, .blog-card, .product-card, .skill-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============================================
// SHOPPING CART (Mock Implementation)
// ============================================

const cartButtons = document.querySelectorAll('.cart-btn');
const productButtons = document.querySelectorAll('.product-overlay .btn');

let cartCount = 0;

cartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Get product name
        const productName = button.closest('.product-card').querySelector('h3').textContent;
        const productPrice = button.closest('.product-card').querySelector('.price').textContent;
        
        // Show notification
        showNotification(`${productName} added to cart!`);
        
        cartCount++;
        updateCartCount();
        
        // Animate button
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    });
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function updateCartCount() {
    // In a real implementation, you would update a cart count display
    console.log('Cart items:', cartCount);
}

// Add slide animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// ============================================
// PRODUCT VIEW BUTTONS
// ============================================

productButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        showNotification('Opening product details... (feature coming soon)');
    });
});

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
}

// ============================================
// CONSOLE LOG
// ============================================

console.log('%c🎥 Welcome to OlajideProduction!', 'font-size: 20px; color: #e74c3c; font-weight: bold;');
console.log('Thank you for visiting our photography website. Contact us for your next project!');
