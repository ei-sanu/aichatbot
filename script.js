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
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
    
    document.body.style.overflow = navLinks.classList.contains('show') ? 'hidden' : 'auto';
}

document.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('show');
        document.body.style.overflow = 'auto';
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
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.classList.toggle('active');
    
    if (chatbotPopup.classList.contains('active')) {
        document.getElementById('chatbot-frame').focus();
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
