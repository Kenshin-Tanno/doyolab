let inc = 0.05;
let scl = 10;
let cols, rows;

let zoff = 0;

let fr;

let particles = [];

let flowfield;

function canvasSetup(){
    cols = floor(width/scl);
    rows = floor(height/scl);
    fr = createP('');

    flowfield = new Array(cols * rows);

    for (let i = 0; i < 20000; i++){
        particles[i] = new Particle();
    }
}

function windowResized(){
    resizeCanvas(document.documentElement.scrollWidth,document.documentElement.scrollHeight);
    canvasSetup();
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    canvas = createCanvas(document.documentElement.scrollWidth,document.documentElement.scrollHeight);
    canvas.position(0,0);//canvasをページの原点に固定
    canvas.style('z-index','-1');//canvasを後ろに移動する。

    canvasSetup();
    
    background(240);
}

function draw() {
    let yoff = 0;
    for (let y = 0; y < rows; y++){
        let xoff = 0;
        for (let x = 0; x < cols; x++){
            let index = x + y * cols;
            let angle = noise(xoff,yoff,zoff) * TWO_PI;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;

            xoff += inc; 
        }
        yoff += inc;

        zoff += 0.00002;
    }
    for (let i = 0; i < particles.length; i++){
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
    

    // fr.html(floor(frameRate()));
}

