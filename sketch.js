
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,675,800,50);
	box1=new Dustbin(600,650,200,20);
	box2=new Dustbin(500,610,20,100);
	box3=new Dustbin(700,610,20,100);
	ball=new Paper(200,650,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  drawSprites();
 
}



