const player = document.getElementById("player");
const gameArea = document.getElementById("gameArea");
const enemiesContainer = document.getElementById("enemies");
const bullet = document.getElementById("bullet");

let playerSpeed = 5;
let bulletSpeed = 10;
let bulletActive = false;

// Function to create enemies
function createEnemy() {
    const enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.style.left = Math.random() * (gameArea.offsetWidth - 30) + 'px';
    enemiesContainer.appendChild(enemy);
}

// Function to move the player
function movePlayer(e) {
    const rect = gameArea.getBoundingClientRect();
    if (e.key === 'ArrowLeft' && player.offsetLeft > 0) {
        player.style.left = player.offsetLeft - playerSpeed + 'px';
    }
    if (e.key === 'ArrowRight' && player.offsetLeft < rect.width - 30) {
        player.style.left = player.offsetLeft + playerSpeed + 'px';
    }
    if (e.key === ' ') {
        shoot();
    }
}

// Function to shoot
function shoot() {
    if (!bulletActive) {
        bullet.style.display = 'block';
        bullet.style.left = player.offsetLeft + 12.5 + 'px'; // Center the bullet
        bullet.style.bottom = '50px';
        bulletActive = true;
        bulletMovement();
    }
}

// Function to handle bullet movement
function bulletMovement() {
    const bulletInterval = setInterval(() => {
        bullet.style.bottom = parseInt(bullet.style.bottom) + bulletSpeed + 'px';
        if (parseInt(bullet.style.bottom) > gameArea.offsetHeight) {
            clearInterval(bulletInterval);
            bullet.style.display = 'none';
            bulletActive = false;
        }
    }, 20);
}

// Event listeners
document.addEventListener("keydown", movePlayer);
setInterval(createEnemy, 1000); // Create a new enemy every second