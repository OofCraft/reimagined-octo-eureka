
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper1,paper2,paper3,paper4,paper5,roof

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(250,340,50);
	paper2 = new Paper(350,340,50);
	paper3 = new Paper(450,340,50);
	paper4 = new Paper(550,340,50);
	paper5 = new Paper(650,340,50);
	roof = new Gd(1000,100,650,50);
	slingShot1 = new Slingshot(paper1.body,{x: 250, y:100});
	slingShot2 = new Slingshot(paper2.body,{x: 350, y:100});
	slingShot3 = new Slingshot(paper3.body,{x: 450, y:100});
	slingShot4 = new Slingshot(paper4.body,{x: 550, y:100});
	slingShot5 = new Slingshot(paper5.body,{x: 650, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
paper1.display();
paper2.display();
paper3.display();
paper4.display();
paper5.display();
roof.display();
slingShot1.display();
slingShot2.display();
slingShot3.display();
slingShot4.display();
slingShot5.display();

if(keyDown("space")){
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:-200, y: 300});

}

}



