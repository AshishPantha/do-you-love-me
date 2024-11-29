const noButton = document.getElementById('no-button');
const container = document.querySelector('.container');

// Function to move the "No" button
function moveButton() {
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

// Optional: Also move the button when the mouse moves over it
noButton.addEventListener('mousemove', moveButton);
