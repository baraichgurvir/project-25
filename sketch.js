
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	d2 = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 675, width, 20, {isStatic:true});
	World.add(world, ground)

	d = Bodies.rectangle(700, 625, 20, 80, {isStatic: true});
	World.add(world, d);
	d3 = Bodies.rectangle(600, 625, 20, 80, {isStatic: true});
	World.add(world, d3);

	paper_obj = new Paper(50, 650, 50);

    console.log();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("skyblue");
  fill("white");
  paper_obj.display();
  rect(ground.position.x, ground.position.y, width, 20);
//   rect(d.position.x, d.position.y, 100, 80);
  image(d2, 650 - 50, 625 - 50, 100, 100);
  drawSprites();

  if (keyWentDown("space")) {
  	Matter.Body.applyForce(paper_obj.body, paper_obj.body.position, {x:36, y:-38})
  }
}



