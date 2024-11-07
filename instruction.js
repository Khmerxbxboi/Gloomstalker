function preload(){
  //img1 =loadImage("instr.png")
}

function setup() {
  createCanvas(384, 320);
  background(0);
  textStyle(BOLDITALIC);
  text('Bold Italic', 50, 90);
 textSize(40);
  fill('rgb(255,255,255)');
  text('Gloomstalker', 65, 50);
  
    textStyle(ITALIC);
  textSize(15);
  text('Getting chase by a demon Lucifer at night', 50, 100);
    text('with only a pump shotgun to kill...', 50, 125);
  
    textStyle(BOLD);
    textSize(20);
    text('START GAME', 135, 175);
  
function draw() {
image(img1,100,175,100,100);
} 
}
  
  
  

  //describe('The sample text "The quick brown fox..." written in black across several lines.');
}