var n;
var p = [];
var s = [];

function setup() {
  createCanvas(800, 800);
  stroke(0, 150);
  fill(0, 20);
  noLoop();
  redraw();
}

function draw() {
  n = int(random(10,24));
  do {
    s = [ int(random(1, n)), int(random(1, n)), int(random(1, n)) ];
  } 
  while (n % s[2] === 0);

  for (var i = 0; i < n; i++) {
    var ang = lerp(0, TWO_PI, i / n);
    p.push( [ 300 * cos(ang), 300 * sin(ang) ] );
  }  
  
  background(255);   
  translate(width/2, height/2);
  var i1 = 0;
  do {
    var i2 = (i1 + s[0]) % n;
    var i3 = (i1 + s[1]) % n;
    var i4 = (i1 + s[2]) % n;
    beginShape();
      curveVertex(p[i1][0], p[i1][1]);
      curveVertex(p[i2][0], p[i2][1]);
      curveVertex(p[i3][0], p[i3][1]);
      curveVertex(p[i4][0], p[i4][1]);
    endShape(CLOSE);
    bezier(p[i1][0], p[i1][1], p[i2][0], p[i2][1], p[i3][0], p[i3][1], p[i4][0], p[i4][1] );
    i1 = i3;
  } 
  while (i1 !== 0); 
}

function mousePressed() {
  redraw();
}