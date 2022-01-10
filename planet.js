class planet {
  constructor(m, x, y, xc, yc, col, d) {
    this.G = 0.1;

    this.mass = m;
    this.diameter = d;
    this.xVelocity = x;
    this.yVelocity = y;
    this.xAcceleration = 0;
    this.yAcceleration = 0;

    this.location;
    this.x = xc;
    this.y = yc;

    this.colour = col;

    this.setup();
  }

  setup() {
    this.location = createVector(this.x, this.y);
  }

  move() {
    this.xVelocity += this.xAcceleration;
    this.yVelocity += this.yAcceleration;
    this.location.x += this.xVelocity;
    this.location.y += this.yVelocity;
  }

  render() {
    noStroke();
    fill(this.colour);
    circle(this.location.x, this.location.y, this.diameter);
  }

  calculate() {
    let dx = abs(this.location.x - mouseX);
    let dy = abs(this.location.y - mouseY);

    let r = sqrt((dy ^ 2) + (dx ^ 2));

    if (r == 0) {
      r = 0.001;
    }

    let f = (this.G * this.mass * mouseMass) / (r ^ 2);

    let theta = atan2(dy, dx);
    let fx = f * cos(theta);
    let fy = f * sin(theta);

    this.xAcceleration = fx / this.mass;
    this.yAcceleration = fy / this.mass;

    if (mouseX < this.location.x) {
      this.xAcceleration *= -1;
    }

    if (mouseY < this.location.y) {
      this.yAcceleration *= -1;
    }

    if (
      this.location.x + this.xVelocity > 1000 ||
      this.location.x + this.xVelocity < 0
    ) {
      this.xVelocity *= -1;
    }

    if (
      this.location.y + this.yVelocity > 800 ||
      this.location.y + this.yVelocity < 0
    ) {
      this.yVelocity *= -1;
    }
  }
}
