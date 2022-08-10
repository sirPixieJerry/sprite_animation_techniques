let playerState = "idle";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function (e) {
    playerState = e.target.value;
});
const canvas = document.getElementById("canvas-one");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

// console.log(ctx); // -> logs the context object and all methods!

const playerImage = new Image();
playerImage.src = "../image/shadow_dog.png";
const spriteWidth = 575; // sprite width (px) divided through columns
const spriteHeight = 523; // sprite height (px) divided through rows

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: "idle",
        frames: 7,
    },
    {
        name: "jump",
        frames: 7,
    },
    {
        name: "fall",
        frames: 7,
    },
    {
        name: "run",
        frames: 9,
    },
    {
        name: "dizzy",
        frames: 11,
    },
    {
        name: "sit",
        frames: 5,
    },
    {
        name: "roll",
        frames: 7,
    },
    {
        name: "bite",
        frames: 7,
    },
    {
        name: "ko",
        frames: 12,
    },
    {
        name: "getHit",
        frames: 4,
    },
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    };
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

// animate sprite - method two (advanced):

function animateSprite() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillStyle = "whitesmoke";
    // ctx.fillRect(0, 0, 600, 600);
    let position =
        Math.floor(gameFrame / staggerFrames) %
        spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(
        playerImage,
        frameX,
        frameY,
        spriteWidth,
        spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight
    );
    gameFrame++;
    requestAnimationFrame(animateSprite);
}

animateSprite();
