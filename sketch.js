var hr, min, sec;
var arc1, arc2, arc3;

function setup() {
  createCanvas(500, 450);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(230, 230);
  rotate(270);

  hr = hour();
  min = minute();
  sec = second();

  scAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(150, 49, 163);
  strokeWeight(3);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(87, 54, 194);
  strokeWeight(4.5);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(168, 83, 255);
  strokeWeight(6.7);
  line(0, 0, 70, 0);
  pop();

  noFill();
  strokeWeight(7.5);
  stroke(168, 83, 255);
    arc(0, 0, 265, 265, 0, hrAngle);
  strokeWeight(6);
  stroke(87, 54, 194);
    arc(0, 0, 300, 300, 0, minAngle);
  strokeWeight(4.5);
  stroke(150, 49, 163);
    arc(0, 0, 330, 330, 0, scAngle);

  drawSprites();
}