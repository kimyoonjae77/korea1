document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let shockwaves = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    class Particle {
        constructor(x, y, hue) {
            this.x = x;
            this.y = y;
            this.startX = x;
            this.startY = y;
            this.coordinates = [];
            this.coordinateCount = 5;
            while (this.coordinateCount--) {
                this.coordinates.push([this.x, this.y]);
            }
            this.angle = random(0, Math.PI * 2);
            this.speed = random(1, 5); // Reduced speed for slower explosion
            this.friction = 0.98; // Increased friction for slower deceleration
            this.gravity = 0.5; // Reduced gravity for slower fall
            this.hue = hue; // Hue set based on stage
            this.brightness = random(50, 70);
            this.alpha = 1;
            this.decay = random(0.001, 0.02); // Slower decay
        }

        update(index) {
            this.coordinates.pop();
            this.coordinates.unshift([this.x, this.y]);

            this.speed *= this.friction;
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed + this.gravity;
            this.alpha -= this.decay;

            if (this.alpha <= this.decay) {
                particles.splice(index, 1);
            }
        }

        draw() {
            ctx.beginPath();
            ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
            ctx.lineTo(this.x, this.y);
            ctx.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;
            ctx.stroke();
        }
    }

    class Shockwave {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = 0;
            this.alpha = 1;
        }

        update() {
            this.radius += 2; // Slower expansion speed
            this.alpha -= 0.02; // Slower fade out
            if (this.alpha <= 0) {
                this.alpha = 0;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.lineWidth = 2; // Line width for visibility
            ctx.stroke();
        }
    }

    function createParticles(x, y) {
        setTimeout(() => { // Delay the particles by 500 milliseconds
            let particleCount = 2000; // Increased particle count for larger explosion
            while (particleCount--) {
                particles.push(new Particle(x, y, 50)); // Yellowish-gold color for explosion
            }
        }, 500);
    }

    function createShockwave(x, y) {
        setTimeout(() => { // Delay the shockwave by 500 milliseconds
            shockwaves.push(new Shockwave(x, y));
        }, 500);
    }

    function loop() {
        requestAnimationFrame(loop);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';

        let j = particles.length;
        while (j--) {
            particles[j].draw();
            particles[j].update(j);
        }

        let k = shockwaves.length;
        while (k--) {
            shockwaves[k].draw();
            shockwaves[k].update();
            if (shockwaves[k].alpha <= 0) {
                shockwaves.splice(k, 1); // Remove shockwave when it fades out
            }
        }
    }

    function triggerExplosion() {
        for (let i = 0; i < 1; i++) { // Create multiple explosions per trigger
            const x = canvas.width / 2 + random(-canvas.width / 2, canvas.width / 2); // Full width range
            const y = canvas.height / 2 + random(-canvas.height / 2, canvas.height / 2); // Full height range

            createShockwave(x, y);
            createParticles(x, y);
        }
    }

    // Trigger explosions every 1 second
    setInterval(triggerExplosion, 1000);

    loop();
});
