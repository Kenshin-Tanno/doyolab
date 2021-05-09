
let walker;

function setup(){
    createCanvas(600, 600);
    
}

function draw(){
    background(0);

    let pos = createVector(200,400);
    let mouse = createVector(mouseX,mouseY);

    let v = p5.Vector.sub(mouse,pos);

    // let m = v.mag();
    // v.div(m);
    // v.normalize();
    // v.mult(50);

    v.normalize().mult(50);

    // v.setMag(50);

    translate(width/2,height/2);
    stroke(255,170,25);
    strokeWeight(4);
    line(0,0,v.x,v.y);    


    
}