let angle = 0;
let r = 150;

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(0,100);
    stroke(255,200,random(150));
    strokeWeight(4);
    noFill();
    translate(300, 300);

    // let increment = map(mouseX, 0, width, PI, 0.01);
    let increment = 0.01;
    // noLoop();

    beginShape();
    for (let a = 0; a < TWO_PI; a += increment){
        let r1 = r + random(-50,50);
        let x = r1 * cos(a);
        let y = r1 * sin(a);
        vertex(x,y);
    }

    endShape(CLOSE);
}