// script.js

const image = document.getElementById('animated-image');
const aspectRatios = [
    { width: '100%', height: '100%', left: 0, top: 0 }, // Original aspect ratio
    { width: '50%', height: '100%', left: '25%', top: 0 },  // 2:1 aspect ratio
    { width: '100%', height: '50%', left: 0, top: '25%' },  // 1:2 aspect ratio
    { width: '80%', height: '100%', left: '10%', top: 0 },  // 4:1 aspect ratio
    { width: '100%', height: '80%', left: 0, top: '10%' },  // 1:4 aspect ratio
];

let currentIndex = 0;

function changeAspectRatio() {
    const currentAspectRatio = aspectRatios[currentIndex];
    image.style.width = currentAspectRatio.width;
    image.style.height = currentAspectRatio.height;
    image.style.left = currentAspectRatio.left;
    image.style.top = currentAspectRatio.top;
    image.style.opacity = 1;
    
    setTimeout(() => {
        image.style.opacity = 0;
        currentIndex = (currentIndex + 1) % aspectRatios.length;
    }, 1500); // Fade out duration (in milliseconds)
}

setInterval(changeAspectRatio, 3000); // Change aspect ratio every 3 seconds
