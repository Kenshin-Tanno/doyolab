
let movers = [];
let attractor;

function setup(){
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 20000; i++){
        let x = random(width);
        let y = random(height);
        let m = random(50,100);
        movers[i]= new Mover(x,y,m);
    }
    attractor = new Attractor(width/2,height/2,70);
    
}

function draw(){
    background(0,50);
    for (let mover of movers){
        mover.update();
        mover.show();
        attractor.attract(mover);
    }

    attractor.show();
}