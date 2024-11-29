// script.js
const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseover', () => {
    const container = noButton.parentElement.getBoundingClientRect();
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Generate random positions within the container
    const randomX = Math.random() * (container.width - buttonWidth);
    const randomY = Math.random() * (container.height - buttonHeight);

    // Apply new positions
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
