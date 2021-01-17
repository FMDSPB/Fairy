var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	//fairy.debug = true;
	fairy.setCollider("Rectangle", 500 , -100, 100, 50);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.y = starBody.position.y;

  keyPressed();
  //console.log(fairy.x);
  //console.log(starBody.position.y)

  if(star.isTouching(fairy)) {
	Body.setStatic(starBody, true);
  }

  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyDown(LEFT_ARROW)) {
		fairy.x = fairy.x - 4;
	}

	if(keyDown(RIGHT_ARROW)) {
		fairy.x = fairy.x + 4;
	}

	if(keyDown(DOWN_ARROW)) {

		Body.setStatic(starBody, false);
	}
}
