const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75, 10));
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175, 10));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 375, 10));
  }

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 475, 10));
  }

  ground = new Ground(240, 780, 600, 20);

  Engine.run(engine);

}

function draw() {
  background("black");  
  
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  ground.display();
}