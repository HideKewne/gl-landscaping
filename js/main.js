// GL Landscaping - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Testimonial slider
    const testimonials = [
        {
            text: "GL Landscaping completely transformed our backyard. The attention to detail and creative garden design exceeded all our expectations. Highly recommend their services!",
            author: "Sarah Mitchell",
            role: "Homeowner, Austin TX"
        },
        {
            text: "Professional, reliable, and incredibly talented. Our commercial property has never looked better. The hardscaping work they did is absolutely stunning.",
            author: "James Rodriguez",
            role: "Property Manager"
        },
        {
            text: "From the initial consultation to the final walkthrough, the entire experience was seamless. They truly care about bringing your vision to life.",
            author: "Emily Chen",
            role: "Homeowner, Dallas TX"
        }
    ];

    let currentTestimonial = 0;
    const textEl = document.querySelector('.testimonial-text');
    const authorEl = document.querySelector('.testimonial-author');
    const roleEl = document.querySelector('.testimonial-role');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');

    function updateTestimonial(index) {
        if (!textEl) return;
        const t = testimonials[index];
        textEl.style.opacity = '0';
        setTimeout(() => {
            textEl.textContent = t.text;
            authorEl.textContent = t.author;
            roleEl.textContent = t.role;
            textEl.style.opacity = '1';
        }, 200);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(currentTestimonial);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonial(currentTestimonial);
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.85)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.6)';
        }
    });

    // Form submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('.form-submit');
            submitBtn.textContent = 'Sent!';
            submitBtn.style.background = '#1B5E20';
            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.style.background = '';
                form.reset();
            }, 2000);
        });
    }
});
