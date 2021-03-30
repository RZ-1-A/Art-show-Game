
class Bullet {

   constructor(img) {
    let img2 = loadImage('badguy.png')
    this.pos = createVector(220,0)
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.pic = img2;
  }


  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    
    fill(25, 150, 30);
    stroke(255);
  
    image(this.pic, this.pos.x, 130, 225, 205);
if(badguyhealth <= 0){
  this.pos.x = 1000
}
  if( mouseIsPressed && badguyhealth < 40 && man.pos.x < 260 && man.pos.x > 120 && man.pos.y < 350 && man.pos.y > 110 && this.pos.x <= 220 && goodguyhealth > 0 ){
  
  image(img8,this.pos.x+30,110,90,120)
  goodguyhealth -= 8
  
  }
  
  }



}
