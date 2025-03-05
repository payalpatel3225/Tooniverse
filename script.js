// Dark Mode Toggle
const toggleBtn = document.querySelector('.toggle-theme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Button Sound
document.querySelector('.explore-btn').addEventListener('click', () => {
    const audio = new Audio('sounds/click.mp3');
    audio.play();
});
