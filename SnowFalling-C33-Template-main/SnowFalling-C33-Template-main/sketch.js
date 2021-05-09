const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(100,75,50,50)
  snow2 = new Snow(200,75,50,50)
  snow3 = new Snow(300,75,50,50)
  snow4 = new Snow(400,75,50,50)
  snow5 = new Snow(500,75,50,50)
  snow6 = new Snow(600,75,50,50)
  snow7 = new Snow(700,75,50,50)

}

function draw() {
  background(backgroundImg); 
  
 
  
  
  drawSprites();
}