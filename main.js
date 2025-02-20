let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};


/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('section nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('section nav a[href*=' + id + ']')?.classList.add('active');
            });
        };
    });

    /*================================= sticky navbar ===================================*/
    let header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================= remove toggle icon and navbar ===================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
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
const observer3 = new IntersectionObserver((entries) => {
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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        observer3.observe(card);
        
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


const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation classes when section comes into view
            const section = entry.target;
            section.classList.add('animate');
            
            // Animate all project cards
            section.querySelectorAll('.project-card').forEach(card => {
                card.classList.add('animate');
            });
            
            // Animate the view all button
            section.querySelector('#view-all-btn')?.classList.add('animate');
            
            // Unobserve after animation
            observer1.unobserve(section);
        }
    });
}, observerOptions);

// Start observing the section
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.featured-section');
    observer1.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const cards = document.querySelectorAll('.review-card');
    const buttonContainer = document.querySelector('.view-all-button-container');
    
    // Apply transition styles to review cards
    cards.forEach((card, index) => {
      card.style.transition = `opacity 0.5s ease ${0.1 + (index * 0.1)}s, transform 0.5s ease ${0.1 + (index * 0.1)}s`;
    });
    
    const containerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reviewsContainer.classList.add('animate');
          
          setTimeout(() => {
            cards.forEach(card => {
              card.classList.add('animate');
            });
          }, 100);
          
          setTimeout(() => {
            buttonContainer?.classList.add('animate');
          }, 100 + (cards.length * 100));
          
          containerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    containerObserver.observe(reviewsContainer);
  });
  




  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}

const observer2 = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    observer2.observe(form);
});

