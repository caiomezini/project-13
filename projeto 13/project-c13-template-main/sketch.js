var garden, rabbit;
var gardenImg, rabbitImg;
var appleImg, orangeImg;
var redImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup() {

  createCanvas(400, 400);

  // mover o fundo
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  rabbit.x = World.mouseX;
}

function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.round(random(1,3));

  if (frameCount % 100 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    } else {
      createRed();
    }
  }
}

//criando maçãs
function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;

}

//criando oranges
function createOrange() {
  orangeL = createSprite(random(50, 350), 40, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.scale = 0.08;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;

}

//criando reds
function createRed() {
  redL = createSprite(random(50, 350), 40, 10, 10);
  redL.addImage(redImg);
  redL.scale = 0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;

}

