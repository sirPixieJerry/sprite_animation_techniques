const canvas = document.getElementById("canvas-one");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

// console.log(ctx); // -> logs the context object and all methods!

// animate sprites - method one:

const plrImg = new Image();
plrImg.src = "../image/shadow_dog.png";
const sprW = 575; // sprite width (px) divided through columns
const sprH = 523; // sprite height (px) divided through rows
let frX = 0;
let frY = 0;

function animateSprite() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = "whitesmoke";
    ctx.fillRect(0, 0, 600, 600);
    // .drawImage can take up to 9 arguments:
    // the image src: .drawImage(image)
    // and the cutout: .drawImage(image, sx, sy, sw, sh)
    // and the render destination: .drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(plrImg, frX * sprW, frY * sprW, sprW, sprH, 0, 0, sprW, sprH);
    requestAnimationFrame(animateSprite);
}

animateSprite();
