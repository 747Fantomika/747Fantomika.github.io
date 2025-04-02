// Создание звездного фона
function createStars() {
    const container = document.getElementById('star-background');
    const starsCount = 200;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Случайные параметры звезды
        const size = Math.random() * 3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = 0.5 + Math.random() * 0.5;
        const duration = 3 + Math.random() * 5;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.setProperty('--opacity', opacity);
        star.style.setProperty('--duration', `${duration}s`);
        
        container.appendChild(star);
    }
}

// Анимация временной шкалы при прокрутке
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Плавная прокрутка для навигации
function setupSmoothScrolling() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Инициализация при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    createStars();
    animateTimeline();
    setupSmoothScrolling();
    
    // Добавляем текущий год в подвал
    const yearElement = document.querySelector('footer p:first-child');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2023', currentYear);
    }
});

// Эффект параллакса для звездного фона
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const starBackground = document.getElementById('star-background');
    
    if (starBackground) {
        starBackground.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});