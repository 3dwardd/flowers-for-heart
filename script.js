function showLove() {
    const surprise = document.getElementById('surprise');
    surprise.classList.remove('hidden');
    
    // Create floating hearts
    createHearts();
}

function createHearts() {
    const colors = ['#ff69b4', '#ff1493', '#ff0080', '#e91e63'];
    
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.fontSize = '30px';
        heart.style.opacity = '0';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        document.body.appendChild(heart);
        
        // Animate hearts floating up
        animateHeart(heart);
    }
}

function animateHeart(heart) {
    let top = parseFloat(heart.style.top);
    let opacity = 0;
    
    const interval = setInterval(() => {
        top -= 2;
        opacity += 0.02;
        
        if (opacity > 1) opacity = 1;
        if (opacity < 0) opacity = 0;
        
        heart.style.top = top + 'px';
        heart.style.opacity = opacity;
        
        if (top < 0) {
            clearInterval(interval);
            heart.remove();
        }
    }, 30);
}

// Add page load animation
window.addEventListener('load', () => {
    console.log('💐 Welcome to the flowers page! 💐');
});
