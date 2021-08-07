class Space {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
  initCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  generateStars(count) {
    let stars = [];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 3 + 2;

      stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: radius,
        color: '#fff',
        speed: Math.random() + 0.01,
      });
    }
    this.stars = stars;
  }

  drawStars() {
    this.stars.forEach((star) => {
      this.drawStar(star);
    });
  }

  updateStars() {
    this.stars.forEach((star) => {
      star.x += star.speed;

      if (star.x > this.width + 2 * star.radius) {
        star.x = -2 * star.radius;
      }
    });
  }

  clearCanvas() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  drawStar(star) {
    this.ctx.save();

    this.ctx.fillStyle = star.color;

    this.ctx.beginPath();

    this.ctx.translate(star.x, star.y);
    this.ctx.moveTo(0, 0 - star.radius);

    for (let i = 0; i < 5; i++) {
      this.ctx.rotate((Math.PI / 180) * 36);
      this.ctx.lineTo(0, 0 - star.radius * 0.5);
      this.ctx.rotate((Math.PI / 180) * 36);
      this.ctx.lineTo(0, 0 - star.radius);
    }

    this.ctx.fill();
    this.ctx.restore();
  }

  draw() {
    this.clearCanvas();
    this.drawStars();
    this.updateStars();
    window.requestAnimationFrame(() => {
      this.draw();
    });
  }

  start() {
    this.initCanvas();
    this.generateStars(366);
    this.draw();
  }
}

const space = new Space(document.querySelector('#canvas'));

space.start();
