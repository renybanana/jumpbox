var  movingRect;
var go1,go2,go3;

function setup() {
  createCanvas(1200,800);
  

  
  movingRect = createSprite(600,200,45,45);
  movingRect.shapeColor = "white";
  movingRect.debug = true;
  
  movingRect.velocityY=5;
  go3 =createSprite(750,750,250,50)
  go3.shapeColor = "pink";
  go2 =createSprite(465,750,270,50)
  go2.shapeColor = "purple";
  go1 =createSprite(150,750,300,50)
  go1.shapeColor = "blue";
  go4 =createSprite(1050,750,300,50)
  go4.shapeColor = "lime";
  g = createSprite(460,10,1000,10)
  
}

function draw() {
  background(0,0,0);
  
  movingRect.bounceOff(g)
  g.shapeColor="black"
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 bob(movingRect,go1,go2,go3,go4,)
  
  drawSprites();
}
