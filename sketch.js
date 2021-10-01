const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var girl;
var girlImg;
var snow = [];

function preload(){

  bg = loadImage("snow3.jpg");

  girlImg1 = loadAnimation("girl.png.png","girl10.png");
  girlImg2 = loadAnimation("dg1.png","dg2.png");
  girlImg3 = loadImage("girl2.png");
  girlImg4 = loadImage("girl3.png");

  santa = loadImage("sc1.png");
  
  sound = loadSound("sound1.mp3");
  
}
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  
  sound.play();
    
  girl1 = createSprite(100,350,5,5);
  girl1.addAnimation("girlImg",girlImg1);
  girl1.scale = 0.2;

  girl2 = createSprite(700,450,5,5);
  girl2.addAnimation("girl1",girlImg2);
  girl2.scale = 0.2;

  girl3 = createSprite(300,330,5,5);
  girl3.addImage(girlImg3);
  girl3.scale = 0.3;

  girl4 = createSprite(390,400,5,5);
  girl4.addImage(girlImg4);
  girl4.scale = 0.4;

  sc = createSprite(300,100,50,50);
  sc.addImage("santaImg",santa);
  sc.scale = 0.1;

}

function draw() {
  background(bg); 
  Engine.update(engine);

  if(frameCount % 10 === 0){
    snow.push(new Snow(random(0,800),0));
   }
   for (var s = 0; s < snow.length; s++){
     snow[s].display();
   }
  drawSprites();
}