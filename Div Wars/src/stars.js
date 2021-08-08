class Space {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.lastConstellation = 0;
    this.nextConstallation = Math.random() * 3000;
    this.constelaltion = {
      stars: [],
      isClosed: false,
      width: null,
    };
    this.lasUpdate = 0;
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
      star.x += star.speed * (this.delta / 16);
      star.y -=
        (star.speed * (this.delta / 16) * (this.width / 2 - star.x)) / 14000;
      star.radius = star.originalRadius * (Math.random() / 5 + 0.7);

      if (star.x > this.width + 2 * star.radius) {
        star.x = -2 * star.radius;
      }
    });
  }

  generateRandomConstelation() {
    const x = (this.width / 2) * Math.random() + 1;
    const y = (this.height / 2) * Math.random() + 1;
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
      isClosed: Math.random() > 0.5,
      width: 3,
    };
  }

  updateConstellation() {
    if (this.constelaltion.width > 0) {
      this.constelaltion.width -= 0.013;
    } else this.constelaltion.width = 0;
  }

  drawConstellation() {
    const { stars, isClosed, width } = this.constelaltion;
    const starsCount = stars.length;

    if (starsCount > 2) {
      const firstStar = stars[0];

      this.ctx.beginPath();
      this.ctx.moveTo(firstStar.x, firstStar.y);
      this.ctx.lineTo(stars[1].x, stars[1].y);

      for (let i = 1; i < starsCount - 1; i++) {
        const nextStar = stars[i + 1];
        this.ctx.lineTo(nextStar.x, nextStar.y);
      }

      if (isClosed) {
        this.ctx.lineTo(firstStar.x, firstStar.y);
      }
      this.ctx.strokeStyle = '#f7eada';
      this.ctx.lineWidth = width;
      this.ctx.stroke();
    }
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

  draw(now) {
    this.delta = now - this.lasUpdate;
    this.clearCanvas();
    this.drawStars();
    this.updateStars();
    this.drawConstellation();
    this.updateConstellation();

    if (now - this.lastConstellation > this.nextConstallation) {
      this.lastConstellation = now;
      this.nextConstallation = Math.random() * 3000 + 1000;
      this.generateRandomConstelation();
    }
    this.lasUpdate = now;
    window.requestAnimationFrame((now) => {
      this.draw(now);
    });
  }

  start() {
    this.initCanvas();
    this.generateStars(366);
    this.draw(0);
  }
}

const space = new Space(document.querySelector('#canvas'));

space.start();
