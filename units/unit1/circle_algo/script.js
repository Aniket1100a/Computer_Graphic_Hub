// script.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

function drawCircle(radius) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function animateCircleDrawing() {
    let radius = 0;
    const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 10; // Maximum radius to fit inside canvas

    function drawFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCircle(radius);
        radius += 2; // Increase the radius for the next frame

        if (radius <= maxRadius) {
            requestAnimationFrame(drawFrame);
        }
    }

    drawFrame();
}

animateCircleDrawing();
