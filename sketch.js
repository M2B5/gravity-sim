let planetNum = 5;
let mouseMass = 10;

let planets = [];

function setup() {
  let cnv = createCanvas(1000, 800);
  cnv.position(500, 100);

  for (let i = 0; i < planetNum; i++) {
    let m = Math.floor(Math.random() * 15) + 5;
    let x = 0;
    let y = 0;
    let xc = Math.floor(Math.random() * 1000);
    let yc = Math.floor(Math.random() * 800);
    let d = m * 4;
    let r = random(255);
    let g = random(100);
    let b = random(100, 200);
    let a = random(200, 255);
    let col = color(r, g, b, a);

    planets.push(new planet(m, x, y, xc, yc, col, d));
  }
}

function draw() {
  background(0, 50);
  for (let j = 0; j < planets.length; j++) {
    planets[j].calculate(j);
    planets[j].move();
    planets[j].render();
  }
}
