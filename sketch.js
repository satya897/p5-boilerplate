const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5,box6;
var ground;

function setup() {
    //var canvas = createCanvas(1200,800);
  // canvas.shapeColor("red")
   createCanvas(1200,800);
  createSprite(800, 400, 1200, 800);

engine = Engine.create()
world = engine.world

ground = new Ground(600,height - 100,1200,20);
box1 = new Box(200,height - 150,200,200);
box3 = new Box(200,100,200,200)
//box2 = new Box(200,200)
box2 = new Box(200,height - 150,200,200);
}

function draw() {
  background(67,0,255);
  Engine.update(engine) 

box1.display()
box3.display()
ground.display()
box2.display()
}