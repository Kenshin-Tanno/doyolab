let angle;

let angleV = 0;
let angleA = 0.0001;

let bob;
let len;
let origin;
let gravity = 1;

function setup(){
    createCanvas(windowWidth, windowHeight);
    origin = createVector(300,0);
    angle = PI/4;
    bob = createVector();
    len = 400;
}

function draw(){
    background(0,40);

    let force = gravity * sin(angle);
    angleA = (-1 * force) / len;
    angleV += angleA;
    angle += angleV;

    // angleV *= 0.99;

    bob.x = len * sin(angle) + origin.x;
    bob.y = len * cos(angle) + origin.y;

    stroke(255);
    strokeWeight(8);
    fill(127);
    line(origin.x,origin.y,bob.x,bob.y);
    circle(bob.x,bob.y,64);
}

class Wave{
    constructor(amp,period,phase){
        this.amplitude = amp;
        this.period = period;
        this.phase = phase;
    }

    evaluate(x){
        return sin(this.phase + TWO_PI * x / this.period) * this.amplitude;
    }

    update(){
        this.phase += 0.03;
    }
}