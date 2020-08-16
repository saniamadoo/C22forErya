const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var canvas;
var object;
function setup() {
  canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;
object=Bodies.rectangle(200,100,50,50);
World.add(world,object);
console.log(object.position.x);
console.log(object.position.y);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);  
rect(object.position.x,object.position.y,50,50);
}