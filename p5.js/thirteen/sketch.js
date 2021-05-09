let particles = [];
let springs = [];
let spacing = 20;
let k = 0.1;


let gravity;

function setup(){
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 20; i++){
        particles[i] = new Particle(300, i*spacing);
        if(i != 0){
            let a = particles[i];
            let b = particles[i - 1];
            let spring = new Spring(k,spacing,a,b);
            springs.push(spring);
        }
    }

    particles[0].locked = true;

    gravity = createVector(0,0.005);
}

function draw(){
    background(112,50,126,100);
    for (let s of springs){
        s.update();
        // s.show();
    }

    noFill();
    stroke(255);
    strokeWeight(8);
    beginShape();
    let head = particles[0];
    curveVertex(head.pos.x, head.pos.y);
    for (let p of particles){
        p.applyForce(gravity);
        p.update();
        curveVertex(p.pos.x,p.pos.y);
    }
    let tail = particles[particles.length-1];
    curveVertex(tail.pos.x,tail.pos.y);
    endShape();

    if(mouseIsPressed){
        tail.pos.set(mouseX,mouseY);
        tail.vel.set(0,0);
    }




    // velocity.add(force);
    // velocity.add(gravity);
    // bob.add(velocity);
    // velocity.mult(0.99);
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