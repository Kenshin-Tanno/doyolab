let waves = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 5; i++){
        waves[i] = new Wave(random(20,90),random(100,600),random(TWO_PI));
    }
    
}

function draw(){
    background(0,10);

    for (let x = 0; x < width; x += 10){
        let y = 0;
        for (let wave of waves){
            y += wave.evaluate(x);
        }
        fill(240,120,200)
        noStroke();
        ellipse(x,y + height/2,16);
    }

    for (let wave of waves){
        wave.update();
    }
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