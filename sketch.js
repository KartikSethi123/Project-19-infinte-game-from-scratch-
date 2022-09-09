var ufo;
var ufoImage;
var meteorImage;
var metoerGroup;
var gameState = "play";
var score;
var gameOver, gameOverImage;

function preload(){
ufoImage = loadImage("ufo4.jpg");
meteorImage = loadImage("meteor1.jpg");
gameOverImage = loadImage("GameOver1.webp");
}

function setup() {
 ufo = createSprite(300,500,20,20);
 gameOver = createSprite(300,300,15,15);

 ufo.addImage("ufo",ufoImage);
 ufo.scale = 0.25;

 metoerGroup = new Group();

 score = 0;

 ufo.setCollider("rectangle",0,0,10,10)
 ufo.debug = true
}

function draw() {
   createCanvas(600,600);
   background("black");
   
   gameOver.addImage("gameOver", gameOverImage);
   

   score = score + Math.round(getFrameRate()/60);

   if(gameState === "play") {
    
    if(keyDown("left_arrow")){
      ufo.x = ufo.x - 3;
   
    }
  if(ufo.x>535){
      ufo.x = 535;
  }
    if(keyDown("right_arrow")){
      ufo.x = ufo.x + 3;
}
  if(ufo.x<66){
      ufo.x = 66;
  }
   
  if(metoerGroup.isTouching(ufo))
  {
    ufo.destroy();
    gameState = "end";
  } 

  text("Score: "+ score, 500,50);

  gameOver.visible = false;

    spawnMetoers();

   }
   if(gameState === "end"){
    
    metoerGroup.destroyEach();
    gameOver.visible = true;
   }

     
    

      
      
      drawSprites();
}

function spawnMetoers() {
  if (frameCount % 90 === 0) {
  var metoer = createSprite(300,200,30,10);
  metoer.x = Math.round(random(120,400));
  metoer.addImage(meteorImage);
  metoer.velocityY = 3;
  metoer.lifetime = 800;
  metoer.depth = ufo.depth;
  metoerGroup.add(metoer);

  }
  
}