
let pos;
let prev;

function setup(){
    createCanvas(600, 600);
    background(51);
    pos = createVector(300,300);
    prev = pos.copy();
}

function draw(){
    stroke(255);
    strokeWeight(20);
    // point(pos.x,pos.y);
    line(pos.x,pos.y,prev.x,prev.y);
    prev.set(pos);

    let step = p5.Vector.random2D();

    let r = random(100);
    if (r < 5){
        step.mult(100);
    }else{
        step.setMag(5);
    }

    
    // pos = pos + step;
    pos.add(step);


    
}