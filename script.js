// --- Navbar Toggle for Mobile ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// --- Active Link Scrolling ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Animate skills bars on scroll
            if (id === 'skills') {
                sec.classList.add('animate');
            }
        }
    });

    // --- Sticky Header ---
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // --- Remove toggle icon and navbar when click navbar links (scroll) ---
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// --- Scroll Reveal Animation ---
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });
sr.reveal('.skills-column', { origin: 'bottom' });


// --- Typed.js Animation ---
const typed = new Typed('.text-animate h3', {
    strings: ['Video Editor', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    showCursor: false
});

document.querySelectorAll(".tech-card").forEach(card => {
    const bar = card.querySelector(".tech-bar span");
    const percentText = card.querySelector(".percent-text");

    const percent = bar.style.getPropertyValue("--percent").trim();
    percentText.innerText = percent;
});

// --- EmailJS Setup for Contact Form ---
// SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add Gmail service and connect ashwitsharma834@gmail.com
// 3. Create email template with subject and message fields
// 4. Copy your credentials below:

(function() {
    // Get Public Key from: Account Settings → API Keys
    emailjs.init("PUBLIC_KEY_HERE"); 
})();

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            from_name: this.elements['from_name'].value,
            from_email: this.elements['from_email'].value,
            phone: this.elements['phone'].value,
            subject: this.elements['subject'].value,
            message: this.elements['message'].value,
            to_email: "ashwitsharma834@gmail.com" // Your Gmail ID
        };

        // Send email via EmailJS
        // SERVICE_ID: From Email Services section
        // TEMPLATE_ID: From Email Templates section
        emailjs.send("SERVICE_ID_HERE", "TEMPLATE_ID_HERE", formData)
            .then(function(response) {
                alert('Message sent successfully! Thank you for contacting me.');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.log('Error:', error);
            });
    });
}

