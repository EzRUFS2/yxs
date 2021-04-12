var paperSprite
var PaperObject,ground
var ground2
var ground3
var ground4
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2

}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35,width,10);
	groundSprite.shapeColor=color("yellow")

	ground2Sprite=createSprite(500,650,120,20);
	ground2Sprite.shapeColor=color("white")

	ground3Sprite=createSprite(560,600,20,120);
	ground3Sprite.shapeColor=color("white")

	ground4Sprite=createSprite(450,595,20,110);
	ground4Sprite.shapeColor=color("white")

	paperSprite=createSprite(80,350,50,50);
	paperSprite.shapeColor=color("purple")
    
	

	Engine.run(engine);
	world = engine.world;

	PaperObject = Bodies.circle(width/2, 200 , 5 ,{restitution:3, isStatic:true});

    
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(UP_ARROW)) {
    paperSprite.velocityX = 0;
    paperSprite.velocityY = -2;
  } 
if (keyDown(DOWN_ARROW))
   {
	paperSprite.velocityX = 0;
	paperSprite.velocityY = +2 ;
    
  }
  if (keyDown(LEFT_ARROW))
  { 
    paperSprite.velocityX = -8;
    paperSprite.velocityY = 4;
  }
  
  
  if(keyDown(RIGHT_ARROW))
  { 
    paperSprite.velocityX = +10;
    paperSprite.velocityY = 4;
}
if(paperSprite.position.y>=615) {
  paperSprite.position.y= 615
}

  function keyPressed() {
 if(keyCode === UP_ARROW) {


	 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});


 }
     
  }


  paperSprite.bounceOff(groundSprite);
  paperSprite.bounceOff(ground2Sprite); 
  paperSprite.bounceOff(ground3Sprite);
  paperSprite.bounceOff(ground4Sprite);
 

 
  
  drawSprites();
 
}



