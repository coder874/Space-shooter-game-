var aircraftImg, aircraft;
var asteroidImg, asteroid;
var spacebackgroundImg, spacetitlebackg;
var bulletImg, bullet



function preload(){

  
aircraftImg = loadImage("imgbin_spacecraft-png.png");
asteroidImg = loadImage("Daco_4516125.png");
spacebackgroundImg = loadImage("spacetitlebackg.jpg");
bulletImg = loadImage("bullet.png");

}




function setup() {
  createCanvas(800,500);
  aircraft = createSprite(400, 380);
  aircraft.addImage("aircraft",aircraftImg);
  aircraft.scale = 0.2;
  

  asteroid = createSprite(600, 100);
  asteroid.addImage("asteroid",asteroidImg);
  asteroid.scale = 0.05;
  asteroid.velocityY = 2;

  bullet = createSprite(400,400);
  bullet.addImage("bullet",bulletImg);
  bullet.scale = 0.1;



}

function draw() {
  background(spacebackgroundImg);  

  if (keyIsDown(RIGHT_ARROW)) {
    aircraft.move (10);
   
}
if (keyIsDown(LEFT_ARROW)) {
    aircraft.move (-10);
}


//if(bullet.isTouching(asteroid){
 // bullet.destroy;
//w}


if(asteroid.isTouching(aircraft)){
  text("You Lost");
}














  drawSprites();
}

if (frameCount % 20 === 0) {
  asteroid = createSprite(random(100, 1000), 0, 100, 100);
  asteroid.velocityY = 2;
  var rand = Math.round(random(1,5));
  switch(rand){
      case 1: asteroid.addImage("asteroid",asteroidImg);
      break;
      case 1: asteroid.addImage("asteroid",asteroidImg);
      break;
  }
}




