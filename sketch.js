const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree;
var slingshot, boy;
var cons;
var mango, mango1, mango2, mango3, mango4;
var composite;
var boyIMG, treeIMG;

function preload(){
  boyIMG = loadImage("Images/Images/boy.png");
  treeIMG = loadImage("Images/Images/tree.png");
}
function setup() {
  createCanvas(1000, 650);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground();
  tree = createSprite(775, 400);
  tree.addImage(treeIMG);
  tree.scale = 0.8;
  boy = createSprite(160, 550);
  boy.addImage(boyIMG);
  boy.scale = 0.125;
	stone = new Stone(150, 150);
	cons = new SlingShot(stone.body, {x:150, y:50});

  mango = new Mango(350, 550);
  mango1 = new Mango(800, 450);
  mango2 = new Mango(975, 475);
  mango3 = new Mango(850, 350);
  mango4 = new Mango(970, 550);
}

function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  stone.display();
  cons.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  Matter.Composite.add(world, mango);
  Matter.Composite.add(world, mango1);
  Matter.Composite.add(world, mango2);
  Matter.Composite.add(world, mango3);
  Matter.Composite.add(world, mango4);
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    cons.fly();
}
