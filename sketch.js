var a = 0;
var amplitude = 30;
var ang = 0;
function setup() {
  createCanvas(400,400);
  background(32);
  }

function draw() {
  translate(200,200);
  noStroke();
  var gap = TWO_PI / 100;
  rotate(ang);
  ellipse(0,100,1,1);
  ellipse(0,100+ amplitude* sin(a),5,5);
  ang = ang + TWO_PI/700;
  a = a + gap;
  if(ang>=TWO_PI){reset()}
}

function reset(){
  background(32);
  ang = 0;
}
