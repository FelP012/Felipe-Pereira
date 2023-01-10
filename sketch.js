function setup() {
  var yest = createCanvas(600, 600);
  yest.parent("nosir");
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 70, 70);
}