import { tiles } from './data/tiles.js';
import { player, playerStates, canvasState } from './data/state.js';
const canvas = document.getElementById('island-canvas');
const context = canvas.getContext('2d');
canvas.focus();
const { singleSpace, canvasWidth, canvasHeight, imagesPerSourceRow, imagesPerRenderRow } = canvasState;
const SpriteSheet = document.createElement('img');
const Player = document.createElement('img');
SpriteSheet.src = '../images/spritesheet.png';
const mainAnimationLoop = () => {
    let idleCount = 0;
    let realCount = 0;
    tiles.layers.forEach(layer => {
        layer.data.forEach((tile, index) => {
            const sourceRow = Math.floor(tile / imagesPerSourceRow);
            const sourceColumn = (tile % imagesPerSourceRow) - 1;
            const displayRow = Math.floor(index / imagesPerRenderRow);
            const displayColumn = index % imagesPerRenderRow;
            context.drawImage(SpriteSheet, singleSpace * sourceColumn, singleSpace * sourceRow, singleSpace, singleSpace, singleSpace * displayColumn, singleSpace * displayRow, singleSpace, singleSpace);
        });
    });
    const { x, y, singlePlayerSpace } = player;
    const { frames, offset, animationDelay } = playerStates[player.playerState];
    context.globalCompositeOperation = 'multiply';
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = `#${Number(3435973887 - Math.round(255 * (realCount / 60)) % 255).toString(16)}`;
    context.beginPath();
    context.arc(x + singlePlayerSpace - 10, y + singlePlayerSpace + 10, (realCount / 4) % 15 + 20, 0, 2 * Math.PI, false);
    context.fill();
    context.globalCompositeOperation = "source-over";
    context.drawImage(Player, (idleCount % frames) * singlePlayerSpace, offset * singlePlayerSpace, singlePlayerSpace, singlePlayerSpace, x, y, singlePlayerSpace * 1.5, singlePlayerSpace * 1.5);
    realCount++;
    if (realCount % animationDelay === 0) {
        idleCount++;
    }
    player.x += player.speedX;
    player.y += player.speedY;
    requestAnimationFrame(mainAnimationLoop);
};
SpriteSheet.addEventListener('load', () => {
    Player.src = '../images/shadow/player.png';
    Player.addEventListener('load', () => {
        mainAnimationLoop();
    });
});
addEventListener("keydown", (e) => {
    switch (e.code) {
        case 'ArrowDown':
            player.speedY = player.verticalSpeed;
            if (player.direction === 'forward') {
                player.playerState = 2;
            }
            else {
                player.playerState = 3;
            }
            break;
        case 'ArrowUp':
            player.speedY = -player.verticalSpeed;
            ;
            if (player.direction === 'forward') {
                player.playerState = 2;
            }
            else {
                player.playerState = 3;
            }
            break;
        case 'ArrowRight':
            player.speedX = player.horizontalSpeed;
            player.playerState = 2;
            player.direction = 'forward';
            break;
        case 'ArrowLeft':
            player.speedX = -player.horizontalSpeed;
            player.playerState = 3;
            player.direction = 'back';
            break;
    }
});
addEventListener("keyup", (e) => {
    switch (e.code) {
        case 'ArrowDown':
        case 'ArrowUp':
            player.speedY = 0;
        case 'ArrowRight':
        case 'ArrowLeft':
            player.speedX = 0;
            break;
    }
    if (player.direction === 'forward') {
        player.playerState = 0;
    }
    else {
        player.playerState = 1;
    }
});
