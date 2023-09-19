//objeto para representar el juego 
const tetrisGame = {
    canvas: document.getElementById('tetrisCanvas'),
    ctx: null,
    
};

// Función para inicializar el juego
function initializeGame() {
    tetrisGame.ctx = tetrisGame.canvas.getContext('2d');
    
}

// Función principal para actualizar el juego
function updateGame() {
    
}


function gameLoop() {
    updateGame();
    drawGame();
    requestAnimationFrame(gameLoop);
}

// función de inicialización cuando se carga la página
window.addEventListener('load', () => {
    initializeGame();
    gameLoop();
});
