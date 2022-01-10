let plan;
let mouseMass = 10;

function setup() {
  let cnv = createCanvas(1000, 800);
  cnv.position(500, 100);

  createPlanet();
}

function draw() {
  background(0);
  plan.calculate();
  plan.move()
  plan.render();
}

function createPlanet() {
  let m = Math.floor(Math.random() * 10) + 10;
  let x = 0;
  let y = 0;
  let xc = Math.floor(Math.random() * 1000);
  let yc = Math.floor(Math.random() * 800);
  let col = 255;
  let d = m * 4;
  plan = new planet(m, x, y, xc, yc, col, d);
}
