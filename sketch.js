
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var roof
var rope1,rope2,rope3,rope4,rope5

function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(width/2-100,height/2,0);
	bob2 = new Bob(width/2-50,height/2,0);
	bob3 = new Bob(width/2,height/2,0);
	bob4 = new Bob(width/2+50,height/2,0);
	bob5 = new Bob(width/2+100,height/2,0);

	rope1 = new Rope(bob1.body,{x: width/2-100, y: height/4});
	rope2 = new Rope(bob2.body,{x: width/2-50, y: height/4});
	rope3 = new Rope(bob3.body,{x:width/2, y: height/4});
	rope4 = new Rope(bob4.body,{x: width/2+50, y:height/4});
	rope5 = new Rope(bob5.body,{x: width/2+100, y: height/4});
	
	Engine.run(engine);
}

function draw() {
 
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged(){

  Matter.Body.setPosition(bob1.body,{x: mouseX, y: mouseY});  
}