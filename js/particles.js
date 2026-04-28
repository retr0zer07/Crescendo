// ============================================
// PARTICLES BACKGROUND EFFECT
// ============================================

class Particle {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = Math.random() * 2.2 + 1.2;
        this.alpha = 0;
        this.targetAlpha = Math.random() * 0.5 + 0.5;
        this.life = Math.random() * 180 + 120;
        this.age = 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.age++;
        // Fade in/out
        if (this.age < 30) {
            this.alpha += 0.03;
        } else if (this.life - this.age < 30) {
            this.alpha -= 0.03;
        } else {
            this.alpha += (this.targetAlpha - this.alpha) * 0.05;
        }
        this.alpha = Math.max(0, Math.min(this.alpha, this.targetAlpha));
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
    }

    isAlive() {
        return this.age < this.life && this.alpha > 0.01;
    }
}

class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        this.isVisible = false;

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        this.checkVisibility();
        window.addEventListener('scroll', () => this.checkVisibility());

        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    checkVisibility() {
        const rect = this.canvas.getBoundingClientRect();
        this.isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    }

    createParticles(count) {
        for (let i = 0; i < count; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            this.particles.push(new Particle(this.canvas, x, y));
        }
    }

    animate() {
        if (!this.isVisible) {
            this.animationId = requestAnimationFrame(() => this.animate());
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Crear nuevas partículas con throttle
        if (Math.random() > 0.85) {
            this.createParticles(1);
        }

        // Actualizar partículas
        this.particles.forEach(p => p.update());

        // Dibujar líneas de conexión solo entre partículas cercanas (optimizado)
        const maxConnections = 50; // Limitar conexiones para mejor performance
        let connectionCount = 0;
        for (let i = 0; i < this.particles.length && connectionCount < maxConnections; i++) {
            for (let j = i + 1; j < this.particles.length && connectionCount < maxConnections; j++) {
                const a = this.particles[i], b = this.particles[j];
                const dx = a.x - b.x, dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 80 && a.alpha > 0.1 && b.alpha > 0.1) {
                    connectionCount++;
                    const lineAlpha = Math.min(a.alpha, b.alpha) * (1 - dist / 80) * 0.6;
                    this.ctx.save();
                    this.ctx.globalAlpha = lineAlpha;
                    this.ctx.beginPath();
                    this.ctx.moveTo(a.x, a.y);
                    this.ctx.lineTo(b.x, b.y);
                    this.ctx.strokeStyle = '#fff';
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        }

        // Dibujar partículas
        this.particles.forEach(p => p.draw(this.ctx));

        // Filtrar partículas vivas (limitar a 100 máximo para performance)
        this.particles = this.particles.filter(p => p.isAlive()).slice(0, 100);

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Inicializar sistemas de partículas para cada sección
document.addEventListener('DOMContentLoaded', function() {
    // Para secciones con fondo azul
    const blueSections = document.querySelectorAll(
        '.cta-final, .casos-exito, .hero'
    );

    blueSections.forEach(section => {
        // Crear canvas
        const canvas = document.createElement('canvas');
        canvas.className = 'particles-canvas';
        canvas.id = `particles-${Math.random().toString(36).substr(2, 9)}`;
        
        section.style.position = 'relative';
        section.insertBefore(canvas, section.firstChild);

        // Inicializar sistema de partículas
        new ParticleSystem(canvas.id);
    });
});
