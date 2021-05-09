let angles = [];
let angleV = [];
let r = 8;

function setup(){
    createCanvas(windowWidth, windowHeight);
    let total = floor(width / (r*1.5));
    for (let i = 0; i < total; i++){
        angles[i] = map(i,0,total,0,2*TWO_PI);
        angleV[i] = 0.01 + i / 100;
    }
}

function draw(){
    background(0,20);
    translate(300, 300);
    fill(252,238,33);
    stroke(252,238,33);
    beginShape();
    for (let i = 0; i < angles.length; i++){
        let y = map(sin(angles[i]),-1,1,-300,300);
        strokeWeight(4);
        let x = map(i,0,angles.length,-400,400);
        // line(x,0,x,y);
        circle(x,y,r * 2);
        // vertex(x, y);
        angles[i] += 0.05;
        // angles[i] += angleV[i];
    }
    endShape();
    // angle += angleV;
}