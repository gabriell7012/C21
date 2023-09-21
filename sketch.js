var backrogrund, backrogroundImg

var start,startImg 


function preload(){
  startImg = loadImage("2.png");
  



}


function setup() {
    createCanvas(400,400);


start = createSprite(200,200);
start.addImage(startImg);


}

function draw() {




   background(0);
    drawSprites();
}