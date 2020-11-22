
var monkey , monkey_running
var banana ,bananaImage, obstacleImage
var obstacleGroup
var score
var ground
var ground2 
var bananasGroup
var gameState=Play



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(60,370,20,20);
 monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.07
  
 ground = createSprite(200,383,330,4) 
 ground2 = createSprite(200,383,330,5)
  
  
  bananasGroup=createGroup();
  obstaclesGroup=createGroup();

monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true

score=0

}

function draw() {
background("White");
  text("Score: "+ score, 300,30);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   

  
  
    monkey.velocityY=monkey.velocityY + 0.1
 ground2.visible=false;
 monkey.collide(ground2)
  
if(keyDown("space")&& monkey.y>=200 ){
 monkey.velocityY=-12;
  monkey.velocityY=monkey.velocityY + 8  
  }
  
  if(bananasGroup.isTouching(monkey)){
   bananasGroup.destroyEach();
    score=score+1
  }
  if(obstaclesGroup.isTouching(monkey)){
   textSize(20)
    text("GAME OVER",100,200);  
    monkey.lifetime=0;
   ground.lifetime=0;
  bananasGroup.lifetime=0;
    obstaclesGroup.lifetime=0;
    obstacles.lifetime=0
    score=0
    gameState=End
  }
  
  
   spawnBananas()
  spawnobstacle();
drawSprites();  
}
function spawnBananas(){
if(frameCount % 120 === 0){
  var bananas=createSprite(400,200,20,30)
  bananas.y=Math.round(random(200,250));
  bananas.addImage(bananaImage)
  bananas.scale=0.07
  bananas.velocityX=-3
 
  bananas.lifetime=150;
  
  bananasGroup.add(bananas);
}
}
function spawnobstacle(){
if(frameCount % 130===0){
var obstacle=createSprite(400,250,30,20)
 obstacle.y=Math.round(random(343,348)) ;
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
  obstacle.velocityX=-5
 
  obstacle.lifetime=150
  
  obstaclesGroup.add(obstacle);
}

}



