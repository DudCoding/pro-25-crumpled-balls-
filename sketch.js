
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperBall;
var side1, side2, side3;
var side1Sprite, side2Sprite, side3Sprite;
var ground, groundSprite
var dustbinImage;

function preload(){
	dustbinImage = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	side1Sprite = createSprite(300,300,20,80);
	side1Sprite.shapeColor = "blue";

	side2Sprite = createSprite(300,300,20,80);
	side2Sprite.shapeColor = "blue";

	side3Sprite = createSprite(300,300,140,20);
	side3Sprite.addImage(dustbinImage);
	side3Sprite.shapeColor = "blue";

	groundSprite = createSprite(400, 660, 800, 15);
	groundSprite.shapeColor = "brown";
	//Create the Bodies Here.

	
	paperBall = new Paper(100,475,70 ,{isStatic: false});
	World.add(world, paperBall);

	side1 = Bodies.rectangle(650,600,20,80, {isStatic: true});
	World.add(world, side1);

	side2 = Bodies.rectangle(500,600,20,80, {isStatic: true});
	World.add(world, side2);

	side3 = Bodies.rectangle(575,500,140,20, {isStatic: true});
	World.add(world, side3);

	ground = Bodies.rectangle(400,660, 800, 15, {isStatic: true});
	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  keyPressed();
  rectMode(CENTER);
  background("grey");
  
  paperBall.display();


  side1Sprite.x = side1.position.x;
  side1Sprite.y = side1.position.y;

  side2Sprite.x = side2.position.x;
  side2Sprite.y = side2.position.y;

  side3Sprite.x = side3.position.x;
  side3Sprite.y = side3.position.y;

  drawSprites();
 
}

function keyPressed(){

	if(keyDown(UP_ARROW)){
//		Matter.Body.setStatic(paperBall, false);
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:85, y:-85});
	}
}



