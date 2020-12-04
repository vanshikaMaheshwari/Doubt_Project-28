
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boy.png");
	backgroundImg = loadImage("Background 7.jpg");
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	GROUND = new Ground(500,525,1000,10);
	TREE = new Tree(750, 310, 300, 300);
	STONE = new Stone(180,376,60,60);
	MANGO_1 = new Mango(725,200,100,100);
	MANGO_2 = new Mango(775,145,100,100);
	MANGO_3 = new Mango(825,255,100,100);
	MANGO_4 = new Mango(945,245,100,100);
  MANGO_5 = new Mango(850,175,100,100);
  MANGO_6 = new Mango(685,130,100,100);
  MANGO_7 = new Mango(590,225,100,100);
  MANGO_8 = new Mango(660,250,100,100);
  ELASTIC = new Elastic(STONE.body,{x:180,y:376});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  Background = createSprite(500,300,20,20);
  Background.addImage(backgroundImg);
  
  drawSprites();

  push();
  imageMode(CENTER);
  image(boyImage,250,460,250,300);
  pop();
  GROUND.display();
  TREE.display();
  MANGO_1.display();
  MANGO_2.display();
  MANGO_3.display();
  MANGO_4.display();
  MANGO_5.display();
  MANGO_6.display();
  MANGO_7.display();
  MANGO_8.display();
  STONE.display();
  ELASTIC.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(STONE.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  ELASTIC.fly();
}


