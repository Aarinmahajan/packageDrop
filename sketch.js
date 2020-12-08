const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
var package;

function setup() {
 var canvas= createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var package_options={
    restitution: 1.0
  }
  package=Bodies.circle(200,100,20,package_options);

  World.add(world,package);

 console.log(ground);
 console.log(ground.position.y);
 console.log(ground.label);
}

function draw() {
  background(0);  

  Engine.update(engine)
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(package.position.x,package.position.y,20,20);
  //drawSprites();
}