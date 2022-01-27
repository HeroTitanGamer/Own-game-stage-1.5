const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine,world;


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(120,150,100);
  World.add(world,ball);
}


function draw() {
  background(200);
  ball.display();



}

function move(moveX,moveY){
  ball.applyForce(0,0,moveX,moveY)
}