document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const container = document.querySelector('.love-container');
    const messageBox = document.getElementById('message-box');
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    const confettiContainer = document.getElementById('confetti-container');

    // Function to move the "No" button
    function moveButton(e) {
        const containerBounds = container.getBoundingClientRect();
        const buttonBounds = noButton.getBoundingClientRect();

        // Calculate maximum positions for the button
        const maxX = containerBounds.width - buttonBounds.width;
        const maxY = containerBounds.height - buttonBounds.height;

        // Generate random positions within bounds
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Update the button's position
        noButton.style.position = 'absolute';
        noButton.style.left = `${Math.max(0, randomX)}px`;
        noButton.style.top = `${Math.max(0, randomY)}px`;
    }

    // Event listener for mouseover (when hovering starts)
    noButton.addEventListener('mouseover', moveButton);

    // Music toggle functionality
    musicToggle.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggle.textContent = '🎵';
        } else {
            backgroundMusic.pause();
            musicToggle.textContent = '🔇';
        }
    });

    // Event listener for Yes button
    yesButton.addEventListener('click', () => {
        // Display loving message
        messageBox.textContent = "Yay! I love you too! 💖";
        messageBox.style.color = '#ff1493';
        
        // Create confetti
        createConfetti();
    });

    // Confetti creation function
    function createConfetti(count = 100) {
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random positioning and colors
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 3}s`;
            confetti.style.backgroundColor = getRandomColor();
            
            confettiContainer.appendChild(confetti);
        }

        // Remove confetti after animation
        setTimeout(() => {
            confettiContainer.innerHTML = '';
        }, 5000);
    }

    // Random color generator for confetti
    function getRandomColor() {
        const colors = ['#ff1493', '#ff69b4', '#ff6b9e', '#ff99cc', '#ffc0cb'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
