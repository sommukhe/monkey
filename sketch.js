
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(800,400);
  
  
  ground = createSprite(300,400,900,50);
  
  rand=Math.round(random(200,50));
  
  monkey = createSprite(100,300,20,20);
  monkey.scale=0.25;
  monkey.addAnimation("running",monkey_running);
  
  
}

function spawnBanana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -2;
    
    banana.lifetime = 200;
    
  banana.depth = monkey.depth;
  
    bananaGroup=new Group();

    bananaGroup.add(banana);
  }
}


function draw() {
  background("lightblue");
  
  ground.shapeColor="lightgreen";
  
  
  
  
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  if (frameCount % 300 === 0){
    obstacle=createSprite(800,350,200,200);
    obstacle.velocityX=-2;
    obstacle.lifetime=600;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.25;
    
  }
  
  spawnBanana();
 

  
  
  fill("red");
  textSize(20)
  text("Survival Time:"+ Math.round(frameCount/8),200,100);
  
  drawSprites();
}






