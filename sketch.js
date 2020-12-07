const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	load = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 675, width, 50, {isStatic:true});
	World.add(world, ground)

	d = Bodies.rectangle(650, 625, 20, 100, {isStatic: true});
	World.add(world, d);

	paper_obj = new Paper(50, 650, 50);

  console.log();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lightblue");
  fill("white");
  image(load, d.position.x - 50, d.position.y - 65, 100, 100);
  rect(ground.position.x, ground.position.y, width, 20);
  paper_obj.display();
  drawSprites();

  if (keyCode === UP_ARROW) {
  	for (var i = 0; i < 200; i++) {
  		if (paper_obj.body.position.x >= d.position.x) {
  			i = 250;
  		}
		paper_obj = new Paper(50 + i, 650, 100);
	}
  }
}



