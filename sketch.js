var start,startImg,rules,rulesImg,corona,coronaImg,coronaGroup,bgImg,Super,SuperImg,sanitizer,sanitizerImg,mask,maskImg,bg2;
var bgScreen2,sanitizerGroup,maskGroup,floor
var Play = 1
var End = 0
var gameState;
var Life = 0
var Score = 0


function preload(){
//startImg = loadImage("button.png")
//rulesImg = loadImage("Rules.png")
//coronaImg = loadImage("Carona.png")
//bgImg = loadImage("GO cARONA GO.png")
//SuperImg = loadImage("Human.png")
//sanitizerImg = loadImage("Sanitizer.png")
bg2 = loadImage("bg2.jpg")
maskImg = loadImage("Mask.png")
}

function setup() {
  createCanvas(1000,900);

bgScreen2 = createSprite(750,450)
bgScreen2.addImage(bg2)
bgScreen2.scale = 1.3
bgScreen2.velocityX = -2



}

function draw() {
 
floorBlocks()

if(bgScreen2.x < 5){
  bgScreen2.x = bgScreen2.width/4
}

console.log(mouseY)

  drawSprites();
}

function floorBlocks(){
if(frameCount % 100 ===0){
  floor = createSprite(1500,random(585,725),100,20)
  floor.velocityX = -3

  mask = createSprite(1500,32)
  mask.addImage(maskImg)
  mask.scale = 0.1
  mask.velocityX = -3
  mask.y = floor.y
}
}


