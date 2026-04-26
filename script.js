// Get Elements
const clickButton = document.getElementById('clickButton');
const backButton = document.getElementById('backButton');
const initialScreen = document.getElementById('initialScreen');
const bouquetScreen = document.getElementById('bouquetScreen');
const confettiContainer = document.getElementById('confettiContainer');

// Click Button Handler
clickButton.addEventListener('click', () => {
    // Hide initial screen
    initialScreen.style.display = 'none';
    
    // Show bouquet screen
    bouquetScreen.style.display = 'flex';
    
    // Create confetti
    createConfetti();
    
    // Play sound (optional)
    playSound();
});

// Back Button Handler
backButton.addEventListener('click', () => {
    // Show initial screen
    initialScreen.style.display = 'block';
    
    // Hide bouquet screen
    bouquetScreen.style.display = 'none';
    
    // Clear confetti
    confettiContainer.innerHTML = '';
});

// Create Confetti Animation
function createConfetti() {
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random position
        const left = Math.random() * 100;
        const delay = Math.random() * 0.5;
        const duration = 2 + Math.random() * 1.5;
        
        // Random colors for confetti
        const colors = ['#ff1493', '#ff69b4', '#ffb6d9', '#ffd700', '#ff69b4'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.left = left + '%';
        confetti.style.background = randomColor;
        confetti.style.animation = `fall ${duration}s linear ${delay}s forwards`;
        
        confettiContainer.appendChild(confetti);
    }
}

// Play Sound Effect (optional)
function playSound() {
    // Create a simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        // Audio context not supported, silently fail
        console.log('Audio not supported');
    }
}
