
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var canW, canH;
let right_img, left_img;

function setup() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(canW, canH);
  }
  else{
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(canW, canH);
  }
  engine = Engine.create();
  world = engine.world;
  ground = new ground(0,50,450,100);
  roof = new roof(200,50,450,100);
  man = new man(25,50,25,25);
  rope = new rope(man.Body, roof.Body, 0, 0);
}


function draw() 
{
  Engine.update(engine);
  ground.display();
  background("white");
  man.display();
  rope.show();
  roof.display();
}