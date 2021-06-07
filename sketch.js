const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg;
var snow1,snow2,snow3,snow4,snow5,snow6;

function preload(){
bg=loadImage("snow1.jpg")

}
function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(1000,400);
 snow1=new snow(200,200)
 snow2=new snow(350,20)
 snow3=new snow(500,100)
 snow4=new snow(700,300)
 snow5=new snow(50,270)
 snow6=new snow(800,60)

}

function draw() {
  background(bg);  
  Engine.update(engine);
snow1.display();
snow2.display();
snow3.display();
snow4.display();
snow5.display();
snow6.display();
}