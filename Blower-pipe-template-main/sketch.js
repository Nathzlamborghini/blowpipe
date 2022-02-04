const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower, blowerImg;
var button;

function preload() {
  blowerImg = loadImage("blowpipe.png");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  blower = createSprite(width/2, height/2+100);
  blower.addImage("blower", blowerImg);

  ball = new Ball(width / 2 + 60, height / 2 - 80, 450, 450);

  button = createImg('click.png');
  button.position(20,30);
  button.size(50,50);
  
  // buttonmouseClicked(blow);

  button.mouseClicked(blow);

  // button.Clicked(blow);

  //  button.mouse(blow);


}

function draw() {
  background(59);
  Engine.update(engine);

  ball.show();
  drawSprites();
}

function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}
