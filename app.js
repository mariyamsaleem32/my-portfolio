// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Thank you for your message!';
    formMessage.style.color = 'green';
    this.reset(); // Reset form fields
});
