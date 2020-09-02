var shark,sharkpic;
var bg,bgpic;
var fish1,fish2,fish3,fish4,fish5;
var mine;
var group1,group2,group3,group4,group5,minegroup;
function setup() {
  createCanvas(1200,400);
  bg = createSprite(600,200,2400,400);
  bg.x = bg.width/2;
  bg.shapeColor = "lightblue";
  bg.velocityX = -3;
  shark = createSprite(100, 200, 100, 30);
  shark.shapeColor = "white";
  group1= new Group ();
  group2= new Group ();
  group3= new Group ();
  group4= new Group ();
  group5= new Group ();
  minegroup= new Group ();
}

function draw() {
  background(255,255,255);
  if(bg.x<0){
    bg.x = bg.width/2;
  }  
  makefish1();
  makefish2();
  makefish3();
  makefish4();
  makefish5();
  drawSprites();
}
function makefish1(){
  if (frameCount%120){
    fish = createSprite(1200,random(50,350),40,15);
    fish.shapeColor = "orange";
    fish.velocityX=random(-10,-25);
    group1.add(fish);
  }
}
function makefish2(){
  if (frameCount%100){
    fish = createSprite(1200,random(50,350),40,15);
    fish.shapeColor = "red";
    fish.velocityX=random(-15,-25);
    group2.add(fish);
  }
}
function makefish3(){
  if (frameCount%110){
    fish = createSprite(1200,random(50,350),40,15);
    fish.shapeColor = "green";
    fish.velocityX=random(-12,-25);
    group3.add(fish);
  }
}
function makefish4(){
  if (frameCount%80){
    fish = createSprite(1200,random(50,350),40,15);
    fish.shapeColor = "yellow";
    fish.velocityX=random(-20,-30);
    group4.add(fish);
  }
}
function makefish5(){
  if (frameCount%90){
    fish = createSprite(1200,random(50,350),40,15);
    fish.shapeColor = "grey";
    fish.velocityX=random(-18,-25);
    group5.add(fish);
  }
}