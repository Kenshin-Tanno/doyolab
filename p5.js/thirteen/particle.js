class Particle{
  constructor(x, y){
    this.locked = false;
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.mass = 1;
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  update(){
    if(!this.locked){
      this.vel.mult(0.99);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  }

  show(){
    stroke(255);
    strokeWeight(1);
    fill(45,197,244);
    ellipse(this.pos.x, this.pos.y,10);
  }
}