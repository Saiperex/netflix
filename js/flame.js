
const canvas = document.getElementById('fireCanvas');
const ctx = canvas.getContext('2d');

const particlesArray = [];
const numberOfParticles = 100;

class Particle {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2 + 50;
        this.size = Math.random() * 30 + 10;
        this.speedX = (Math.random() * 1 - 0.5) * 0.5; // Reducing speed
        this.speedY = (Math.random() * -1 - 0.5) * 0.5; // Reducing speed
        this.color = `rgba(138, 43, 226, ${Math.random()})`; // Color violeta semi-transparente
        this.opacity = Math.random();
        this.life = Math.random() * 200 + 100; // Increasing life span
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.05; // Slower size reduction
        if (this.opacity > 0) this.opacity -= 0.005; // Slower opacity reduction
        this.life--;
    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size / 2, this.size, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].life <= 0) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    while (particlesArray.length < numberOfParticles) {
        particlesArray.push(new Particle());
    }
    requestAnimationFrame(animate);
}

animate();