

class Particle extends p5.Vector{
  constructor(x,y){
    super(x,y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1,5));
    this.acc = createVector(0,0);
    this.r = 0.1;
    this.lifetime = 255;
  }

  finished(){
    return (this.lifetime < 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force,this.mass);
    this.acc.add(f);
  }

  update(){
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0,0);

    this.lifetime -= 1;
  }

  show(){
    stroke(255,this.lifetime);
    strokeWeight(2);
    fill(255,this.lifetime);

    if(this.finished()){
      fill(random(255),random(255),random(255));
    }
    ellipse(this.x, this.y,this.r);
  }
}