export const player = {
    playerState: 0,
    singlePlayerSpace: 48,
    x: 250,
    y: 250,
    speedX: 0,
    speedY: 0,
    jumpSpeed: 10,
    verticalSpeed: 5,
    horizontalSpeed: 5,
    direction: 'forward',
    currentState: 'ground'
};
export const inAccessibleTiles = [
    33
];
export const playerStates = [{
        label: 'idleForward',
        frames: 12,
        offset: 0,
        animationDelay: 7
    }, {
        label: 'idleBack',
        frames: 12,
        offset: 1,
        animationDelay: 7
    }, {
        label: 'runForward',
        frames: 8,
        offset: 2,
        animationDelay: 6
    }, {
        label: 'runBack',
        frames: 8,
        offset: 3,
        animationDelay: 6
    }, {
        label: 'jumpForward',
        frames: 4,
        offset: 4,
        animationDelay: 6
    }, {
        label: 'jumpBackward',
        frames: 4,
        offset: 5,
        animationDelay: 6
    }, {
        label: 'fallForward',
        frames: 4,
        offset: 6,
        animationDelay: 6
    }, {
        label: 'fallBackward',
        frames: 4,
        offset: 7,
        animationDelay: 6
    }, {
        label: 'attackForward',
        frames: 6,
        offset: 6,
        animationDelay: 6
    }, {
        label: 'attackBack',
        frames: 6,
        offset: 7,
        animationDelay: 6
    }, {
        label: 'dashForward',
        frames: 10,
        offset: 6,
        animationDelay: 6
    }, {
        label: 'dashBackward',
        frames: 10,
        offset: 7,
        animationDelay: 6
    }];
export const canvasState = {
    singleSpace: 32,
    canvasWidth: 800,
    canvasHeight: 630,
    imagesPerSourceRow: 20, //Never changes
    imagesPerRenderRow: 25
};
