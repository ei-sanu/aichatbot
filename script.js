gsap.from(".logo-container", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".hero-content", {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".chat-preview", {
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

function openChatbot() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('chatbotPopup').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeChatbot() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('chatbotPopup').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.getElementById('overlay').addEventListener('click', closeChatbot);

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Add this to prevent body scrolling when menu is open
    document.body.classList.toggle('menu-open');
}

// Add this to close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.hamburger') && !e.target.closest('.nav-links')) {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.classList.remove('active');
        navLinks.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
});

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot-popup');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'block';
    } else {
        chatbot.style.display = 'none';
    }
}

document.addEventListener('click', (e) => {
    const chatbotPopup = document.getElementById('chatbot-popup');
    const chatbotButton = document.querySelector('.chatbot-button');
    
    if (!chatbotPopup.contains(e.target) && 
        !chatbotButton.contains(e.target) && 
        chatbotPopup.classList.contains('active')) {
        toggleChatbot();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const chatbotPopup = document.getElementById('chatbot-popup');
        if (chatbotPopup.classList.contains('active')) {
            toggleChatbot();
        }
    }
});

// Make chatbot draggable and resizable
document.addEventListener('DOMContentLoaded', function() {
    const chatbot = document.getElementById('chatbot-popup');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    chatbot.addEventListener('mousedown', function(e) {
        if (e.target.classList.contains('chatbot-header')) {
            isDragging = true;
            initialX = e.clientX - chatbot.offsetLeft;
            initialY = e.clientY - chatbot.offsetTop;
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            chatbot.style.left = currentX + 'px';
            chatbot.style.top = currentY + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
});
