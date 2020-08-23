var fixedRect,movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,50,50);

  gameObject1 = createSprite(100,200,50,30);
  gameObject2 = createSprite(700,200,50,30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;
}

function draw() {
  background(255,255,255);  

 movingRect.x = mouseX;
 movingRect.y = mouseY;
  
 
 if(isTouching(gameObject1,movingRect)){
  gameObject1.shapeColor = "red";
  movingRect.shapeColor = "red";
 } 
 else { 
  gameObject1.shapeColor = "green";
 movingRect.shapeColor = "green";
}

bounceOff(gameObject1,gameObject2);
  drawSprites();
}

