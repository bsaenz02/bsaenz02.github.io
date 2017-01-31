var NUM_CIRCLES = 12;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    
    frameRate(5);
    
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/15;
    
    rVal = 150;
    gVal = 130;
    bVal = 240;
}

function draw() {
   var isShifted = false;
   
   var y = height;
   while (y >= 0) {

    var x;
    
    if (isShifted) {
        x = circleRadius;
    } else {
       x = 8; 
    }
    
    while (x <= width) {
        fill(color(rVal,gVal,bVal));
        stroke(color(rVal,gVal,bVal));
        ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    y = y - circleRadius;
    isShifted = !isShifted;
    
    rVal = (rVal + 100) % 256;
    gVal = (gVal + 10) % 256;
    bVal = (bVal + 15) % 256;
  }
}
function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometricPattern', 'png');
    }
    return false;
}