var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,boxsprite,box2,boxsprite2,box3,boxsprite3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxsprite = createSprite(width/2,height-50,200,20);
	boxsprite.shapeColor=color(255,0,0);

	boxsprite2 = createSprite(width/2-110,height-90,20,100);
	boxsprite2.shapeColor=color(255,0,0);
	
	boxsprite3 = createSprite(width/2+110,height-90,20,100);
	boxsprite3.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box = Bodies.rectangle(width/2,height-65,200,20,{isStatic:true});
	World.add(world,box);

	box2 = Bodies.rectangle(width/2-110,height-90,20,100,{isStatic:true});
	World.add(world,box);

	box3 = Bodies.rectangle(width/2+110,height-90,20,100,{isStatic:true});
	World.add(world,box);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



