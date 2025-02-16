let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};






















const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 150);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '-50px'
});

// Wait for page load
document.addEventListener('DOMContentLoaded', () => {
    // Observe all cards
    document.querySelectorAll('.expertise-card').forEach(card => {
        observer.observe(card);
        
        // Click animation
        card.addEventListener('click', () => {
            if (card.classList.contains('animate')) {
                card.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-5px)';
                }, 200);
            }
        });
    });
});


