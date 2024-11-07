let mapScreens = [];
let currentScreen = 14;
let screenActive = 0;
let warpsActive = [];
let demon;
let keyPickedUp = false;
let cantEscape = false;
let isHiding = false;
let isDead = false;

let player = [];
let trees = [];
let worldMap;
let treeImg; 
let homeImg;

let home = [];



function preload() {
  worldMap = loadImage("image.png");
  treeImg = loadImage("tree_01.png");
  homeImg = loadImage("home.png");
  ds1 = loadSound("soundsResource/demonScream1.mp3");
}

function setup() {
  createCanvas(384, 320);
  rectMode(CENTER);
  frameRate(60);

  let p = new PlayerB(width / 2, height / 2, 10, 10, 2);
  player.push(p);

  demon = new Demon();
}

function draw() {
  background(0);

  warpLogic();

  //displays player
  player[0].display();

  //displays and checks if player is hidden
  isHiding = false; //reassigns false if not hidden
  for (let i = 0; i < trees.length; i++) {
    trees[i].display();

    if (player[0].hide(trees[i])) {
      isHiding = true;
    }
  }

  isHiding = false; //reassigns false if not hidden
  for (let i = 0; i < home.length; i++) {
    home[i].display();

    if (player[0].hide(home[i])) {
      isHiding = true;
    }
  }
  
  //player controls
  if (keyIsDown(LEFT_ARROW)) {
    player[0].move("left");
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player[0].move("right");
  }
  if (keyIsDown(UP_ARROW)) {
    player[0].move("up");
  }
  if (keyIsDown(DOWN_ARROW)) {
    player[0].move("down");
  }

  //displays demon
  demon.display();
  //checks if demon should move
  demon.move(player[0]);

  if (isDead == true) {
    gameOver();
  }

  //press "m"
  if (keyIsDown(77)) {
    gameMap();
  } else {
  }
}

function screenCleaner() {
  warpsActive.splice(0, warpsActive.length);
  trees.splice(0, trees.length);

  warpsActive.splice(0, warpsActive.length);
  home.splice(0, home.length);


  //resets demon on transition, set to be disabled for a theoretical future key pickup
  if (keyPickedUp === false) {
    demon.delay = random(180, 1200);
    print(demon.delay);
    demon.chasePhase = 0;
  }
  
  screenActive = 0;
}

function gameOver() {
  background(100);
  textAlign(CENTER);
  textSize(32);
  fill(255, 0, 0);
  text("MORTIS", width / 2, height / 2);
}

function gameMap() {
  imageMode(CENTER);
  image(worldMap, width / 2, height / 2, width, height);
}
