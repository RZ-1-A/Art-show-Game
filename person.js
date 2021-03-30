function Person(img) {
  img = loadImage('b21super.png')
  this.pos = createVector(160, height - 250);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.pic = img;
  var ded = 0;
  var highScore = 500;
 
  this.planes = ded;
  // this.mass = m;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }


  this.display = function() {
    fill(25, 150, 30);
    stroke(255);
    image(this.pic, this.pos.x + 20, this.pos.y - 9, 120, 100);
    textSize(18)
    // text('Planes Lost: ' + ded, this.pos.x + (canvasX-150), 20)sd
    var score = this.pos.x-300;
    if (score <0){score=0}
       if (score >= 9745){  
 score = (highScore + score)
      }
    fill(0,0,0)
    noStroke();
    textSize(20);
    text('Health:'+goodguyhealth,390,20)
    if (score > highScore) {highScore=score}
    
    // text('Score: '+score,this.pos.x+(canvasX-120), 40)
    //  text('High Score: '+highScore,this.pos.x+(canvasX-160), 60)
if ( goodguyhealth <= 0){
fill(0,0,0)
  rect(-1,-1,650,650)
    fill(255,0,0)
  textSize(40)
text('YOU DIED',150,150)
   text('Refresh to begin again',50,280) 
  }
  }
//   this.hit = function(ammo) {
//     if ((ammo.pos.x >= (this.pos.x + 5) && ammo.pos.x <= (this.pos.x + 100)) && (ammo.pos.y >= (this.pos.y + 3) && ammo.pos.y <= (this.pos.y + 48))) {
//       ammo.pos.y = -400;
//       // fill(0, 0, 0);
//       // rect(0,0,4000,4000);
//       // fill(255, 0, 0);
//       // text('this.pos.y',this.pos.x+150, 200)
//       //translate(1000,1000)
//       this.pos.x = (0 - 11000);
//       ded++;
//       if(ded >= 25){
//       this.vel.x=0
//    this.vel.y=0
//    fill(0,0,0);
//      rect(0,0,10000,10000)
//     fill(255,0,0)
//      text('The Battle Is Lost',man.pos.x+100, 200)
//    ded=0
//     highScore=500 
//      this.pos.x = -1100100
      
//       }
//     }



 // }
  this.endless = function(ammo) {
    
    if (this.pos.x >= 10050) {
      this.pos.x = 10;
     
    }
  }
  this.edges = function() {
    if (this.pos.y > height - 70) {
      this.vel.y *= 0;
      this.pos.y = height - 70;
    }

    if (this.pos.y < 10) {
      this.vel.y = 0;
      this.pos.y = 10;
    }
    if (this.pos.x < -9){
    this.pos.x = -9
    
    }
    if (this.pos.x > 427){
     this.pos.x = 427 
    }
  
    
  }


}
