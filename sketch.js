var backgroundImage,bg;
var doraRun1,doraRun;
var ground,invisibleGround;
var obstacle,obstaclesGroup;
var PLAY = 1;
var END=0;
var gameState = PLAY
var cakes,cakeGroup;
var gameoverImage,restartImage;


function preload(){
bg=loadImage("dora_backgroundimage.png")
doraRun1 = loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png","d6.png")
obstacleImage = loadImage("obstacle.png")
cakesImg = loadImage("cakebg.png")
gameoverImg = loadImage("gameover.png")
restartImg = loadImage("restart2.png")
}

function setup(){
createCanvas(1300,550)
backgroundImage = createSprite(650,300,10,10);
backgroundImage.addImage(bg)
backgroundImage.scale = 2
backgroundImage.velocityX = -3

restartImage = createSprite(650,360,10,10)
 restartImage.addImage(restartImg)
restartImage.scale = 0.6

gameoverImage = createSprite(650,300,10,10)
 gameoverImage.addImage(gameoverImg)
gameoverImage.scale = 0.2


doraRun = createSprite(70,420,10,10)
doraRun.addAnimation("doraRunning",doraRun1)
 
/*ground = createSprite(100,580,1000,5)
ground.velocityX = -4;
ground.x = ground.width/2
console.log(ground.x)
 ground.visible = false;*/
invisibleGround = createSprite(100,550,1000,5);
  invisibleGround.visible = false;
  
  obstacleGroup = new Group();
cakeGroup = new Group();

}
var score = 0;
function draw(){
background("lightblue")

if(gameState === PLAY){
gameoverImage.visible = false
restartImage.visible = false

if(backgroundImage.x<0){
    backgroundImage.x = backgroundImage.width/2
  }
  backgroundImage.velocityX = -3
  //doraRun.velocityY = 0
  if(keyDown("space")&& doraRun.y>= 159) {
   doraRun.velocityY = -10;
}
doraRun.velocityY = doraRun.velocityY+0.5;
doraRun.collide(invisibleGround)


if(obstacleGroup.isTouching(doraRun)){
    //backgroundImage.velocityX = 0;
    //doraRun.velocityY= 0;
   // cakes.velocityX = 0;
   // obstacle.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
  gameState = END
  
}

if(cakeGroup.isTouching(doraRun)){
  cakeGroup.destroyEach();
score = score+1

}




spawnobstacles()
spawnCakes()
}
else if(gameState === END){
  gameoverImage.visible = true
restartImage.visible = true
if(mousePressedOver(restartImage)) {
  reset();
}


doraRun.velocityY = 0
backgroundImage.velocityX = 0
}




drawSprites()
textSize(20);
  text("score:"+score,150,70);

}
 function reset(){
  gameState = PLAY;
  gameoverImage.visible = false;
  restartImage.visible = false;
  obstacleGroup.destroyEach();
  cakeGroup.destroyEach();
  score = 0
 }    

























