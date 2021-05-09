

class Mover{
  constructor(x,y,m){
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0,0);
    this.r = 16;
    this.mass = m
    this.r = sqrt(this.mass);

    this.angle = 0;
    this.aangleV = 0.05;
    this.angleA = 0;
  }

  drag(c){
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq);

    this.applyForce(drag);
  }

  applyForce(force) {
    let f = p5.Vector.div(force,this.mass);
    this.acc.add(f);
  }

  edges(){
    if (this.pos.y >= height-this.r){
      this.pos.y = height-this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width-this.r){
      this.pos.x = width-this.r;
      this.vel.x *= -1;
    }else if(this.pos.x <= this.r){
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    

    // this.angleA = this.acc.x / 50.0;

    // this.angleV += this.angleA;
    // this.angle += this.angleV;

    this.acc.set(0,0);
  }

  show(){
    // stroke(255);
    // strokeWeight(2);
    noStroke();
    fill(255,120,100,30);
    push();
    translate(this.pos.x,this.pos.y);
    this.angle = this.vel.heading();
    rotate(this.angle);
    triangle(-this.r, -this.r/5, -this.r, this.r/5,this.r,0);
    pop();
  }
}