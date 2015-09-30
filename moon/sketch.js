function setup() {
  createCanvas(800, 800);
  smooth();
  background(0);
  ellipseMode(CENTER);
}

function draw() {
  stroke(255,20);
  noFill();
  
  push();
  translate(width/2,height/2);
  rotate(map(sin(0.001*frameCount),-1, 1, 0, TWO_PI));
  ellipse(0,0,720,random(720));
  pop();
}