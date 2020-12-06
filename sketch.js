
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  ball,ground,distbin;
var l1,l2,l3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new Ball(100,650,20)
ground = new Ground(600,height,1200,20)
l1=new Dustbin(600,642,20,100)
l2=new Dustbin(650,680,100,17)
l3=new Dustbin(700,642,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)

 ball.display()
ground.display()
l1.display()
l2.display()
l3.display()
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:3,y:-3})
}}


