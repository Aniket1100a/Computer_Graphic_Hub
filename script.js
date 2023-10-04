function pop(e) {
    const amount = 60; // Number of particles
    const { clientX, clientY } = e;
    for (let i = 0; i < amount; i++) {
        createParticle(clientX, clientY);
    }
}

document.body.addEventListener("mousemove", pop);

function createParticle(x, y) {
    const particle = document.createElement('div');
    document.body.appendChild(particle);

    const size = Math.random() * 30 + 10;
    const color = `hsl(${Math.random() * 360}, 70%, 60%)`;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = color;

    const destinationX = (Math.random() - 0.5) * 300;
    const destinationY = (Math.random() - 0.5) * 300;
    const rotation = Math.random() * 520;
    const delay = Math.random() * 200;

    const animation = particle.animate([
        {
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1
        },
        {
            transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 1000 + 3000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay
    });

    animation.onfinish = () => {
        particle.remove();
    };
}
