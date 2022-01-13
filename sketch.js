var towerImg,tower,tower2;
var soldierImg,soldier;
var soldier2Img,soldier2;
var SpawnSoldiers;
var titleImg;
var SoldierGroup;
var tr1,tr2,tr3,tr4;
var tube,tubeImg,tube2;
var wall;
var flag,flagImg;
function preload()
{
  towerImg = loadImage("tower.png");
  soldierImg = loadAnimation("soldier.png");
  soldier2Img = loadAnimation("soldier2.png");
  titleImg = loadImage("title.png");
  tubeImg = loadImage("tube.png");
  flagImg = loadImage("flag.png");
}
function setup() {
  createCanvas(1600,800);
  tower = createSprite(1400,700,20,20);
  tower.addImage(towerImg)
  tower.scale = 0.2;   

  flag = createSprite(1500,760,20,20);
  flag.addImage(flagImg);
  flag.scale = 0.2;
  
  tower2 = createSprite(200,700,20,20);
  tower2.addImage(towerImg)
  tower2.scale = 0.2;

 



  SpawnSoldiers = createButton("Spawn Soldiers")
  SpawnSoldiers.position(20,600);
  SpawnSoldiers.mousePressed(SpawnSoldiersFunction);

  title = createSprite(800,100,40,40);
  title.addImage(titleImg);
  title.scale = 0.5;
  
  //var wall = createSprite(800,400,10,1600);
  //   wall.shapeColor = "black";

  SoldierGroup = new Group();

/*  tr1 = createSprite(400,700,20,20);
  tr1.shapeColor = "white";

  tr2 = createSprite(500,700,20,20);
  tr2.shapeColor = "white";

  tr3 = createSprite(600,700,20,20);
  tr3.shapeColor = "white";

  tr4 = createSprite(700,700,20,20);
  tr4.shapeColor = "white";*/
  tube = createSprite(500,820,20,20);
  tube.addImage(tubeImg);
  tube.scale = 0.2;


  tube2 = createSprite(1100,820,20,20);
  tube2.addImage(tubeImg);
  tube2.scale = 0.2;

}
function draw() {
  background("black");  
  
 // soldier.bounceOff(wall);
  if(keyWentDown(RIGHT_ARROW))
  {
    soldier.changeAnimation("def",soldier2Img);
  }
  if(keyWentUp(RIGHT_ARROW))
  {
    soldier.changeAnimation("abc",soldierImg);
  }
  
 


if (keyWentDown("space"))
{ 
   SoldierGroup.setVelocityYEach(-12); 
} 
else if(keyWentUp("space"))
{ 
  SoldierGroup.setVelocityYEach(3); 
}
SoldierGroup.setVelocityXEach(1);
  
  
  drawSprites();

}
function SpawnSoldiersFunction() {

  soldier = createSprite(400,765,40,10);
  soldier.addAnimation("abc",soldierImg);
  soldier.addAnimation("def",soldier2Img);
  soldier.scale = 0.19;
  soldier.collide(wall)
    

  SoldierGroup.add(soldier);
  }

