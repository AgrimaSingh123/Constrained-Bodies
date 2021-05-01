const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bg;

function preload()
{
	floor=loadImage("Floor.jpg");
	db=loadImage("Dustbin.png");
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg=createSprite(width/2,height/2,width,height);
	bg.addImage(floor);
	bg.scale=1.75;

	dustbin=createSprite(width-150,(height-20),200,150);
	dustbin.addImage(db);
	dustbin.scale=0.8;

	paper=new Paper(100,500,50);

	//center
	b1=new Dustbin(width-150,height-40,13/100*width,20);
  //right
	b2=new Dustbin(width-60,height-100,20,100);
  //left
	b3=new Dustbin(width-240,height-100,20,100);

	
	ground=new Ground(width/2,700-10,width,40);
	rope=new Rope(paper.body,{x:width-500,y:200});


	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);
  drawSprites();
  
  rope.display();
  paper.display();
  b1.display();
  b2.display();
  b3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:210,y:-120});
	}
}

function mouseDragged(){
	paper.body.position.x=mouseX;
	paper.body.position.y=mouseY;
}

function mouseReleased(){
	rope.fly();
}