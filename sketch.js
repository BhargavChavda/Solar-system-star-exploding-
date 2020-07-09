const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var Star,starimg;
var pla1,pl1,pla2,pl2,pla3,pl3,pla4,pl4;


function preload(){
starimg=loadImage('sun.png');
pl1=loadImage('earth.png');
pl2=loadImage('mars.png');
pl3=loadImage('jupiter.png');
pl4=loadImage('neptune.png');
}


function setup(){
var Canvas = createCanvas(windowWidth,windowHeight);

   Star = createSprite(windowWidth/2,windowHeight/2,5,5);
   Star.addImage(starimg);
   Star.scale=1.5;
   pla1 = createSprite(890,300, 5,5);
   pla1.addImage(pl1);
   pla1.scale=2;
   pla2 = createSprite(595, 515, 5,5);
   pla2.addImage(pl2);
   pla2.scale=2;
   pla3 = createSprite(740,85,5,5);
   pla3.addImage(pl3);
   pla3.scale=2;
   pla4 = createSprite(400,300,5,5);
   pla4.addImage(pl4);
   pla4.scale=2;

}

function draw(){
background(0);
    if(frameCount%2===0){
      Star.scale=Star.scale+0.05;
    }
    
if(Star.isTouching(pla1)){
  pla1.destroy();
}
if(Star.isTouching(pla2)){
  pla2.destroy();
}
if(Star.isTouching(pla3)){
  pla3.destroy();
}
if(Star.isTouching(pla4)){
  pla4.destroy();
}

    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(windowWidth/2, windowHeight/2, 750);
    ellipse(windowWidth/2, windowHeight/2, 300);
    ellipse(windowWidth/2, windowHeight/2, 450);
    ellipse(windowWidth/2, windowHeight/2, 600);  

drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
          return true;
  } else {
      return false;
  }
}