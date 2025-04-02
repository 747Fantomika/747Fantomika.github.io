// script.js
function createStars() {
    const container = document.getElementById('star-background');
    const starsCount = 300;
    
    for(let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        container.appendChild(star);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createStars();
});