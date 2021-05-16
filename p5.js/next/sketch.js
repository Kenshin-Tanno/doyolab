let bubbles = [];

let flower;
let kittens = [];

function preload(){
    flower = loadImage('1_myoware.jpeg');
    for (let i = 0; i < 5; i++){
        kittens[i] = loadImage('2_arduino.jpeg');
    }
}

function setup(){
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++){
        let x = random(width);
        let y = random(height);
        let r = random(50, 100);
        // let kitten = random(kittens);
        let b = new Bubble(x,y,r);
        bubbles.push(b);
    }
}

function mousePressed(){
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].clicked(mouseX,mouseY);
    }
}
 
function draw(){
    background(0);
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble{
    constructor(x,y,r,img){
        this.x = x;
        this.y = y;
        this.r = r;
        this.kitten = random(kittens);
    }

    clicked(px,py){
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r){
            this.kitten = flower;
        }
    }

    move(){
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show(){
        image(this.kitten, this.x, this.y, this.r, this.r )
        // stroke(255);
        // strokeWeight(4);
        // fill(this.brightness, 125);
        // ellipse(this.x, this.y, this.r*2);
    }
}