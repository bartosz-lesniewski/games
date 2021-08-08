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
      const radius = Math.random() * 3 + 1;

      stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: radius,
        originalRadius: radius,
        color: '#fff',
        speed: Math.random() / 3 + 0.01,
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
      star.y -= (star.speed * (this.width / 2 - star.x)) / 14000;
      star.radius = star.originalRadius * (Math.random() / 5 + 0.7);

      if (star.x > this.width + 2 * star.radius) {
        star.x = -2 * star.radius;
      }
    });
  }

  generateRandomConstelation() {
    const x = (this.width / 2) * Math.random() + 0.25;
    const y = (this.height / 2) * Math.random() + 0.25;
    const radius = (this.height / 2) * Math.random() + 50;

    this.constelaltion = {
      stars: this.stars
        .filter((star) => {
          return (
            star.x > x - radius &&
            star.x < x + radius &&
            star.y > y - radius &&
            star.y < y + radius
          );
        })
        .slice(0, Math.round(Math.random() * 5 + 3)),
    };
  }

  drawConstellation() {
    const { stars } = this.constelaltion;
    const starsCount = stars.length;

    const firstStar = stars[0];
    const lastStar = stars[starsCount - 1];

    this.ctx.beginPath();
    this.ctx.moveTo(firstStar.x, firstStar.y);
    this.ctx.lineTo(stars[1].x, stars[1].y);

    for (let i = 1; i < starsCount - 1; i++) {
      const nextStar = stars[i + 1];
      this.ctx.lineTo(nextStar.x, nextStar.y);
    }
    this.ctx.strokeStyle = '#f7eada';
    this.ctx.stroke();
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
    this.drawConstellation();
    window.requestAnimationFrame(() => {
      this.draw();
    });
  }

  start() {
    this.initCanvas();
    this.generateStars(366);
    this.generateRandomConstelation();
    this.draw();
  }
}

const space = new Space(document.querySelector('#canvas'));

space.start();
