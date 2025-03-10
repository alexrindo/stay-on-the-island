export const player = {
    playerState: 0,
    singlePlayerSpace: 48,
    x: 250,
    y: 250,
    speedX: 0,
    speedY: 0,
    verticalSpeed: 5,
    horizontalSpeed: 5,
    direction: 'forward'
}

export const playerStates = [{
    label: 'idleForward',
    frames: 12,
    offset: 0,
    animationDelay: 7
}, {
    label: 'idleBack',
    frames: 12,
    offset: 48,
    animationDelay: 7
}, {
    label: 'runForward',
    frames: 8,
    offset: 48 * 2,
    animationDelay: 6
}, {
    label: 'runBack',
    frames: 8,
    offset: 48 * 3,
    animationDelay: 6
}, {
    label: 'jumpForward',
    frames: 8,
    offset: 48 * 4,
    animationDelay: 6
},  {
    label: 'jumpBackward',
    frames: 8,
    offset: 48 * 4,
    animationDelay: 6
}, {
    label: 'attackForward',
    frames: 8,
    offset: 48 * 4,
    animationDelay: 6
},  {
    label: 'attackBack',
    frames: 8,
    offset: 48 * 4,
    animationDelay: 6
}]

export const canvasState = {
    singleSpace: 32,
    canvasWidth: 576,
    canvasHeight: 576,
    imagesPerSourceRow: 20,
    imagesPerRenderRow: 18
}