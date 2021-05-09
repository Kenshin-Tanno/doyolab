let angle = 0;
let angleV = 0;
let angleA = 0.0001;

function setup(){
    createCanvas(600, 600);
    angleMode(RADIANS);
}

function draw(){

    angleA = map(mouseX,0,width,-0.01,0.01);
    angleV = constrain(angleV,-0.2,0.2);

    background(143, 83, 161);
    noStroke();
    fill(240,99,164);
    rectMode(CENTER);
    translate(300, 300);
    rotate(angle);
    rect(0,0,300,15);

    angle += angleV;
    angleV += angleA;
}