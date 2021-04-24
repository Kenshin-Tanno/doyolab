function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255, 150, 200);
}

function mousePressed(){
    background(255,0,0);
}
 
function draw(){
    noStroke();
    fill(255, 255, 0);
    ellipse(width/2, height/2, height/2);
}