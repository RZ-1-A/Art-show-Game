 var man;
 var bullet;
 let img;
 let ammo = [];
 let button;
 var canvasX = 500;
 var canvasY = 400;
 let sira;
 let batton;
 let buton;
 let buttan;
 var curentscene = 1;
 var badguyhealth = 60;
 var attacks = 4;
var goodguyhealth = 60;

 function setup() {

   createCanvas(canvasX, canvasY);
   this.pos = createVector(10, height - 50);
   img = loadImage('b21super.png');
   img2 = loadImage('badguy.png');
   img3 = loadImage('grass+path.jpg');
   img4 = loadImage('grasspathend.jpg');
   img5 = loadImage('grasspathdown.jpg');
   img6 = loadImage('SwordStrike.png');
   img7 = loadImage('ManaWisp.png');
   img8 = loadImage('BadStike.png');
   img9 = loadImage('grassPathUp.jpg');
   man = new Person(img);
   curentscene = 1;
   bullet = new Bullet(img2)


 }

 function restart() {
   man.pos.x = 10;

   background(img4)
   button.hide();
   curentscene = 2
   removeElements();
 }

 function fight_zone() {
   curentscene = 3
   man.pos.y = 15;
   background(img5)
   buton.remove();
   removeElements();
 }

 function scene1() {

   if (curentscene === 1) {
     background(img3)
   }
 }

 function go_up() {

   man.pos.y = 310;
   background(img3)
   curentscene = 1
   removeElements();

 }
 function healRoom() {

   man.pos.y = 299;
   background(img9)
   curentscene = 4
   removeElements();

 }

 function yeetBack() {

   man.pos.y = 20;
   background(img3)
   curentscene = 1
   removeElements();

 }

 function go_back() {
   man.pos.x = 415;
   background(img3)
   curentscene = 1
   removeElements();

 }

 function sceneRight() {

   button = createButton("next area");
   button.position(canvasX / 2, 425);
   button.mousePressed(restart);
 }

 function sceneDown() {

   buton = createButton("next area");
   buton.position(canvasX / 2, 425);
   buton.mousePressed(fight_zone);

 }

 function sceneAwayRight() {

   batton = createButton("previous area");
   batton.position(canvasX / 2, 425);
   batton.mousePressed(go_back);

 }

 function sceneBackUp() {

   buttan = createButton("previous area");
   buttan.position(canvasX / 2, 425);
   buttan.mousePressed(go_up);

 }
 function healUP() {

   butan = createButton("next area");
   butan.position(canvasX / 2, 425);
   butan.mousePressed(healRoom);

 }
 function healDOWN() {

   botan = createButton("previous area");
   botan.position(canvasX / 2, 425);
   botan.mousePressed(yeetBack);

 }



 function draw() {
   clear();


   
   if (curentscene === 1) {
     background(img3)
   }
   if (curentscene === 2) {
     background(img4)
   }
   if (curentscene === 3) {
     background(img5)
   }
    if (curentscene === 4) {
    background(img9);  
    }
     

   if (keyIsDown(65)) {
     man.pos.x -= 3;
   }
   if (keyIsDown(68)) {
     man.pos.x += 3;
   }
   if (keyIsDown(83)) {
     man.pos.y += 3;
   }
   if (keyIsDown(87)) {
     man.pos.y -= 3;
   }
   if (man.pos.x >= 424 && curentscene === 1) {

     sceneRight();

   } else if (man.pos.x <= 5 && curentscene === 2) {

     sceneAwayRight();


   } else if (man.pos.y > 320 && curentscene == 1) {

     sceneDown();

   } else if (man.pos.y <= 10 && curentscene === 3) {
     sceneBackUp();
   }else if (man.pos.y < 19 && curentscene === 1) {
     healUP();
   }else if (man.pos.y >= 310 && curentscene === 4) {
     healDOWN();
   }else {
     removeElements()
   }







   man.update();
   man.edges();
   man.display();
if(curentscene === 2){
image(img7,275,160,30,60)
if( man.pos.x < 295 && man.pos.x > 160 && man.pos.y > 140 && man.pos.y < 250){
fill(0,0,0)
  noStroke();
  textSize(20);
text('I sense you require assistance travaler.',145,115)
text('I will help you.',250,135)
}
    if (mouseIsPressed && man.pos.x < 295 && man.pos.x > 150 && man.pos.y > 140 && man.pos.y < 250){
    man.pos.x = 157  
attacks=10
      fill(0,0,0)
      noStroke();
     textSize(20); 
       text('You now have increased attack power',145,115)
       text('Now go fight that rouge!',200,135)
  if(bullet.pos.x >= 400){
   bullet.pos.x = 220
   badguyhealth=60
   } 
    }       
  
}


   if (curentscene === 3) {
     bullet.update();
     bullet.display();
     if (mouseIsPressed && man.pos.x < 255 && man.pos.x > 150 && man.pos.y > 120 && man.pos.y < 305 && goodguyhealth > 0 && badguyhealth > 0) {

       image(img6, man.pos.x + 22, man.pos.y - 42, 100, 130)
       badguyhealth = (badguyhealth - attacks);
       
     }
   }
if (curentscene === 4){
image(img7,275,160,30,60)
  if (man.pos.x < 280 && man.pos.x > 170 && man.pos.y < 180 && man.pos.y > 120){
text('I will heal you.',145,115)
  goodguyhealth = 60
   if(bullet.pos.x >= 400){
   bullet.pos.x = 220
   badguyhealth=60
   } 
  }
 } 
}
