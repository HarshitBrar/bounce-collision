var square1,square2,o1,o2;

function setup() {
  createCanvas(800,400);
  square1 = createSprite(600,300, 50, 50);
  square1.shapeColor = "green";
 // square1.velocityY = -4;
  square2 = createSprite(600,100,50,50);
  square2.shapeColor = "green";
 
  o1 = createSprite(400,300,50,50);
  o1.shapeColor = "green";
  o1.velocityY = -4;
  o2 = createSprite(400,100,50,50);
  o2.shapeColor = "green";
  o2.velocityY = 4;
}

function draw() {
  background(0);  

  bounce(o1,o2);
  square2.x = World.mouseX;
  square2.y = World.mouseY;

  if(isTouching(square1,square2)){
    square1.shapeColor = "red";
    square2.shapeColor = "red";
  }
  else{
    square1.shapeColor = "green";
    square2.shapeColor = "green";
  }
  drawSprites();
}
