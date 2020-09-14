var gameState = "shark";
var shark,sharkpic;
var bg,bgpic;
var fish1,fish2,fish3,fish4,fish5;
var minepic;
var go,restart,restartimg;
var group1,group2,group3,group4,group5,minegroup;
var score = 0;
function preload(){
  bgpic = loadImage("images/bglong.png");
  fish1 = loadImage("images/blue.png");
  fish2 = loadImage("images/green.png");
  fish3 = loadImage("images/multicolour.png");
  fish4 = loadImage("images/purple.png");
  fish5 = loadImage("images/red.png");
  sharkpic = loadImage("images/shark.png");
  minepic = loadImage("images/mine.png");
  go = loadImage("images/gameover.jpg");
  restartimg = loadImage("images/retry.png");
}
function setup() {
  createCanvas(1200,400);
  bg = createSprite(600,200,2400,400);
  bg.addImage(bgpic);
  
  console.log(bg.width);
 // bg.scale = 1.5;
  bg.x = bg.width/2;
  bg.velocityX = -3;
  shark = createSprite(100, 200, 100, 30);
  gshark = createSprite(100, 200, 300, 100);
  gshark.visible=false;
  shark.addImage(sharkpic);
  shark.scale = 0.5;
  shark.setCollider("rectangle",200,70,100,30);
  restart = createSprite(70,70);
  restart.addImage(restartimg);
  restart.scale=0.07;
  restart.visible = false;
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
    console.log(bg.x);
  } 
  if (gameState=="shark"){
    makefish1();
    makefish2();
    makefish3();
    makefish4();
    makefish5();
    makemine();
    gshark.x = shark.x;
    gshark.y = shark.y;
    if (shark.y<50){
      shark.y = 51;
    }
    if (shark.y>350){
      shark.y = 349;
    }
    if(shark.y>=50&&shark.y<=height-50){
     
      if(keyDown("UP_ARROW")){
        shark.y-=20;
      }
      if(keyDown("DOWN_ARROW")){
        shark.y+=20;
      }
    }
   
    console.log(shark.y);
    if(shark.isTouching(group1)){
      group1.destroyEach();
      score=score+100;
    }
    if(shark.isTouching(group2)){
      group2.destroyEach();
      score=score+80;
    }
    if(shark.isTouching(group3)){
      group3.destroyEach();
      score=score+90;
    }
    if(shark.isTouching(group4)){
      group4.destroyEach();
      score=score+110;
    }
    if(shark.isTouching(group5)){
      group5.destroyEach();
      score=score+120;
    }
    if(gshark.isTouching(minegroup)){
      gameState = "end";
    }
  } else{
    shark.addImage(go);
    shark.x = 600;
    shark.y = 200;
    restart.visible = true;
    shark.setVelocity(0,0);
    if(mousePressedOver(restart)){
      reset ();
    }
  }
 
  drawSprites();
  textSize(30);
  fill (255); 
  stroke ("white");
  text(score,1000,100);
}
function reset(){
  gameState = "shark";
  shark.addImage(sharkpic);
  restart.visible = false;
  shark.x = 100;
  shark.y = 200;
  score = 0;
}
function makefish1(){
  if (frameCount%152==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish1);
    fish.scale = 0.2;
    fish.lifetime = 175;
    fish.velocityX=random(-8,-15);
    group1.add(fish);
  }
}
function makefish2(){
  if (frameCount%230==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish2);
    fish.scale = 0.2;
    fish.lifetime = 175;
    fish.velocityX=random(-6,-15);
    group2.add(fish);
  }
}
function makefish3(){
  if (frameCount%240==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish3);
    fish.scale = 0.2;
    fish.lifetime = 175;
    fish.velocityX=random(-5,-10);
    group3.add(fish);
  }
}
function makefish4(){
  if (frameCount%175==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish4);
    fish.scale = 0.2;
    fish.lifetime = 175;
    fish.velocityX=random(-7,-17);
    group4.add(fish);
  }
}
function makefish5(){
  if (frameCount%155==0){
    fish = createSprite(1200,random(50,350),40,15);
    fish.addImage(fish5);
    fish.scale = 0.2;
    fish.lifetime = 175;
    fish.velocityX=random(-8,-15);
    group5.add(fish);
  }
}
function makemine(){
  if (frameCount%155==0){
    mine = createSprite(1200,random(50,350),40,15);
    mine.addImage(minepic);
    mine.scale = 0.2;
    mine.lifetime = 175;
    mine.setCollider("circle",0,0,150);
    mine.velocityX=random(-8,-15);
    minegroup.add(mine);
  }
}