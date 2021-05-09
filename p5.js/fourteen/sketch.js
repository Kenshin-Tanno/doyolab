
let emitters = [];

function mousePressed(){
    emitters.push(new Emitter(windowWidth/2,windowHeight/2));
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
    for (let emitter of emitters){
        emitter.emit(1);
        emitter.show();
        emitter.update();
    }
}