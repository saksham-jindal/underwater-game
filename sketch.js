var shark,sharkpic;
var bg,bgpic;
var fish1,fish2,fish3,fish4,fish5;
var mine;
var group1,group2,group3,group4,group5,minegroup;
function preload(){
  bgpic = loadImage("images/bg.jpg");
  fish1 = loadImage("images/blue.png");
  fish2 = loadImage("images/green.png");
  fish3 = loadImage("images/multicolour.png");
  fish4 = loadImage("images/purple.png");
  fish5 = loadImage("images/red.png");
  sharkpic = loadImage("images/shark.png");
  mine = loadImage("images/mine.png");
}
function setup() {
  createCanvas(1200,400);
  bg = createSprite(600,200,2400,400);
  bg.addImage(bgpic);
  console.log(bg.width);
  bg.scale = 1.5;
  bg.x = bg.width/2;
  bg.velocityX = -3;
  shark = createSprite(100, 200, 100, 30);
  shark.addImage(sharkpic);
  shark.scale = 0.5;
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
    bg.x = bg.width/2-80;
    console.log(bg.x);
  }  
  makefish1();
  makefish2();
  makefish3();
  makefish4();
  makefish5();
  
  if(shark.isTouching(group1)){
    group1.destroyEach();
  }
  if(shark.isTouching(group2)){
    group2.destroyEach();
  }
  if(shark.isTouching(group3)){
    group3.destroyEach();
  }
  if(shark.isTouching(group4)){
    group4.destroyEach();
  }
  if(shark.isTouching(group5)){
    group5.destroyEach();
  }
  drawSprites();
}
function makefish1(){
  if (frameCount%152==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish1);
    fish.scale = 0.2;
    fish.velocityX=random(-8,-15);
    group1.add(fish);
  }
}
function makefish2(){
  if (frameCount%230==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish2);
    fish.scale = 0.2;
    fish.velocityX=random(-6,-15);
    group2.add(fish);
  }
}
function makefish3(){
  if (frameCount%240==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish3);
    fish.scale = 0.2;
    fish.velocityX=random(-5,-10);
    group3.add(fish);
  }
}
function makefish4(){
  if (frameCount%175==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish4);
    fish.scale = 0.2;
    fish.velocityX=random(-7,-17);
    group4.add(fish);
  }
}
function makefish5(){
  if (frameCount%155==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish5);
    fish.scale = 0.2;
    fish.velocityX=random(-8,-15);
    group5.add(fish);
  }
}
function makemine(){
  if (frameCount%355==0){
    mine = createSprite(1200,random(50,350),40,15);
    mine.addImage(fish5);
    mine.scale = 0.2;
    mine.velocityX=random(-8,-15);
    group5.add(fish);
  }
}