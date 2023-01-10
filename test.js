let angle = 5;
let w = 24;
let ma;
let maxD;
let frames = 60;

function setup() {
  var mycan=createCanvas(700, 700, WEBGL);
  mycan.parent("yesir");
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 150, 150);
}

function keyPressed() {
  if (key == " ") {
    const options = {
      units: "frames",
      delay: 0
    }
    saveGif("pepe.gif", frames, options);
  }
}

function draw() {
  background(000);
  ortho(-600, 600, 600, -600, 0, 700);
  rotateX(ma);
  rotateY(-QUARTER_PI);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -2, 2, 200, 600));
      translate(x - width / 2, 2, z - height / 2);
      normalMaterial();
      box(w, h, w);
      pop();
    }
  }

  angle -= TWO_PI / frames;
}
