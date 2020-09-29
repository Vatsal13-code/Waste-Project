
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Waste, p1, p2, p3;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	Waste = new Paper(200,450,20)

	p1 = createSprite(1000,450,10,50)
	p2 = createSprite(950,470,100,10)
	p3 = createSprite(900,450,10,50)

	Engine.run(engine);
 
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine)
  Waste.display();
	
  
 drawSprites();
}



