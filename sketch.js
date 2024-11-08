let mapScreens = [];
let currentScreen = 14;
let screenActive = 0;
let warpsActive = [];
let pBulletsActive = [];
let dBulletsActive = [];
let puzzleBoxesActive = [];
let dirtMoundActive = [];
let bulletsLoaded = 2;
let isReloading = false;
let reloadDelay = 180;
let hasGun = false;
let hasShovel = false;
let demon;
let mDemon = [];
let keyItem = [];
let keyImg;
let keyPickedUp = false;
let cantEscape = false;
let isHiding = false;
let isDead = false;
let isWinner = false;
let respawnDelay = 300;
let direction = 'left';

let player = [];
let trees = [];
let worldMap;
let treeImg;
let homeImg;
let demonImg;
let demonImgWalk;
let demonImgHurt;
let demonImgHurtWalk;
let playerImg;
let playerWalkImg;
let safeImg;
let digImg;
let fireballImg;
let backgroundForestImg;
let backgroundEntranceImg;
let backgroundManorImg;
let warpTileImg;
let startScreenImg;
let deathScreenImg;
let victoryScreenImg;

let home = [];

//puzzleshenanigans
let puzzState = 0;
const colors = [
  [53, 65, 89], // Dark blue
  [181, 188, 172], // Light gray-green
  [86, 85, 73], // Dark gray
];

const squares = [];
const frequencies = { skull: 10 };
const drawFunctionMap = { skull: drawSkull };

// Config
const gridSize = 300;
const res = 5;
const offset = (384 - gridSize) / 2;
const size = gridSize / res;
const pipeWidth = size / 10;

const pstate = { selected: null };

//adding a state variable to handle different states
let state = 0;

function preload() {
  worldMap = loadImage("image.png");
  treeImg = loadImage("tree_01.png");
  homeImg = loadImage("home.png");
  warpTileImg = loadImage("warpTile.png")
  ds1 = loadSound("soundsResource/demonScream1.mp3");
  ds2 = loadSound("soundsResource/demonScream2.mp3");
  ds3 = loadSound("soundsResource/demonScream3.mp3");
  //soundhell
  fireSound = loadSound("soundsResource/fireball.mp3");
  digSound = loadSound("soundsResource/dig.mp3");
  shotgunFireSound = loadSound("soundsResource/shotgunFire.mp3");
  gunCockingSound = loadSound("soundsResource/gunCocking.mp3");
  reloadSound = loadSound("soundsResource/reload.mp3");
  safeClickSound = loadSound("soundsResource/safeClick.mp3");
  retroClick = loadSound("soundsResource/retroClick.mp3");

  overworldMusic = loadSound("soundsResource/overworldMusic.mp3");
  finalMusic = loadSound("soundsResource/finalMusic.mp3");
  mortisSound = loadSound("soundsResource/mortis.mp3");
  victorySound = loadSound("soundsResource/victory.mp3");
  //endofsoundhell
  keyImg = loadImage("key.png");
  demonImg = loadImage("gloomStalker.png");
  demonImgWalk = loadImage("gloomStalkerWalk.png")
  demonImgHurt = loadImage("gloomStalkerHurt.png");
  demonImgHurtWalk = loadImage("gloomStalkerHurtWalk.png");
  playerImg = loadImage("player.png");
  playerWalkImg = loadImage("playerWalk.png")
  safeImg = loadImage("puzzleBox.png");
  digImg = loadImage("digHere.png");
  fireballImg = loadImage("fireball.png");
  backgroundForestImg = loadImage("backgroundForest.png")
  backgroundEntranceImg = loadImage("backgroundEntrance.png")
  backgroundManorImg = loadImage("backgroundManor.png")
  startScreenImg = loadImage("startScreen.png")
  deathScreenImg = loadImage("deathScreen.png")
  victoryScreenImg = loadImage("victoryScreen.png")
}

function setup() {
  createCanvas(384, 320);
  puzzleGameSetup(); //load puzzle
  rectMode(CENTER);
  frameRate(60);

  overworldMusic.setVolume(.6);
  finalMusic.setVolume(.6);

  let p = new PlayerB(width / 2, height / 2, 10, 10, 2);
  player.push(p);

  demon = new Demon();
}

function draw() {
  if (state == 0) {
    startScreen(); //edit in instructions.js
  } else if (state == 1) {
    instructions(); //edit in instructions.js
  } else if (state == 2) {

    //jukebox
    if (isDead === false && isWinner === false) {
    if (currentScreen < 666) {
      
      
        
      if (overworldMusic.isPlaying() === false) {
        overworldMusic.play();
      }
        
      } else if (currentScreen === 666) {
        if (overworldMusic.isPlaying() === true) {
          overworldMusic.stop();
      }
      if (finalMusic.isPlaying() === false) {
        finalMusic.play();
      }
    }
  } 


  background(0);

  warpLogic();

  //displays key when key is added to screen
  if (keyItem.length < 1 || keyItem == undefined) {
  } else {
    keyItem[0].display();

    if (keyItem[0].collect(player[0])) {
      keyItem.splice(0, 1); //delete key
      keyPickedUp = true; // picks up key
    }
  }

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

  //GUN

  if (hasGun === true) {
    fill(0, 0, 255);
    textSize(12);
    noStroke();
    fill(160, 82, 45);
    rect(30, 260, 30, 10);
    fill(192, 192, 192);
    rect(55, 255, 50, 10);
    fill(0, 0, 255);
    

    if (isReloading === false){
      
      text('Ammo Loaded', 85, 280);
    } else {
      text('Reloading...', 85, 280);
      if (reloadDelay > 0) {
        reloadDelay = reloadDelay - 1;
      } else {
        gunCockingSound.play();
        bulletsLoaded = 2;
        isReloading = false;
        reloadDelay = 180;
      }
    }


    if (bulletsLoaded === 2) {
      rect(35, 300, 15, 25)
      rect(55, 300, 15, 25)
    } else if (bulletsLoaded === 1) {
      rect(35, 300, 15, 25)
    }
  }

  if (hasShovel === true && keyPickedUp === false) {
    fill(140, 100, 255);
    textSize(12);
    text('Shovel Acquired', 370, 280);
    noStroke()
    rect(320, 300, 60, 7)
    rect(292, 300, 7, 30)
    triangle(350, 285, 350, 315, 370, 300);
    rect(345, 300, 10, 30)
  } else if (keyPickedUp === true && currentScreen !== 666) {
    fill(255, 255, 0);
    textSize(12);
    text('Key Acquired', 370, 280);
    imageMode(CENTER);
    image(keyImg, 340, 300, 20, 25);

  }

  for (let i = 0; i < pBulletsActive.length; i++) {
    if (pBulletsActive[i].lifespan > 0) {
      pBulletsActive[i].display();
      pBulletsActive[i].move();
    } else {
      pBulletsActive.splice(i, 1);
    }

  }

  //demonBulletAttack

  for (let i = 0; i < dBulletsActive.length; i++) {
    if (dBulletsActive[i].lifespan > 0) {
      dBulletsActive[i].display();
      dBulletsActive[i].move();
      player[0].death(dBulletsActive[i]);
    } else {
      dBulletsActive.splice(i, 1);
    }

  }

  //player controls
  if (keyIsDown(LEFT_ARROW)) {
    player[0].move("left");
    direction = 'left';
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player[0].move("right");
    direction = 'right';
  }
  if (keyIsDown(UP_ARROW)) {
    player[0].move("up");
    direction = 'up';
  }
  if (keyIsDown(DOWN_ARROW)) {
    player[0].move("down");
    direction = 'down';
  }

  //displays demon
  demon.display();
  //checks if demon should move
  demon.move(player[0]);

  if (currentScreen === 666 && screenActive === 1) {

    mDemon[0].battle(player[0]);
    mDemon[0].display();
    for (let i = 0; i < pBulletsActive.length; i++) {
    mDemon[0].damage(pBulletsActive[i]);
    }
}

  if (isDead == true) {
    gameOver();
  }

  if (isWinner == true) {
    winScreen();
  }

  //press "m"
  if (keyIsDown(77)) {
    gameMap();
  } else {
  }
}

if (puzzState == 2) {
  puzzleGame(); //display puzzle
}

}

function keyPressed() {
  
  if (key === ' ' && hasGun === true) {
    if (bulletsLoaded > 0) {
      shotgunFireSound.play();
    let b = new pBullet(player[0], direction);
    pBulletsActive.push(b);
    bulletsLoaded = bulletsLoaded - 1;
    } else {
      if (isReloading === false) {
        reloadSound.play();
        isReloading = true;
      }
    }
    
  }
}


function screenCleaner() {
  retroClick.play();
  warpsActive.splice(0, warpsActive.length);
  trees.splice(0, trees.length);
  mDemon.splice(0, mDemon.length);
  keyItem.splice(0, keyItem.length);
  home.splice(0, home.length);
  puzzleBoxesActive.splice(0, puzzleBoxesActive.length);
  dirtMoundActive.splice(0, dirtMoundActive);

  //resets demon on transition, set to be disabled for a theoretical future key pickup
  if (keyPickedUp === false) {
    demon.delay = random(120, 1200);
    demon.chasePhase = 0;
  }
  
  screenActive = 0;
}

function winScreen() {
  if (finalMusic.isPlaying() === true) {
    finalMusic.stop();
  }
  if (victorySound.isPlaying() === false) {
    victorySound.play();
  }
  imageMode(CENTER);
  image(victoryScreenImg, width / 2, height / 2, 384, 320);
}

function gameOver() {
  if (respawnDelay > 0) {

    //audio
    if (overworldMusic.isPlaying() === true) {
      overworldMusic.stop();
    }
    if (finalMusic.isPlaying() === true) {
      finalMusic.stop();
    }
    if (mortisSound.isPlaying() === false) {
      mortisSound.play();
    }

    imageMode(CENTER);
    image(deathScreenImg, width / 2, height / 2, 384, 320);
    respawnDelay = respawnDelay - 1;
  } else { 
    if (keyPickedUp === false) {
      player[0].x = width/2;
      player[0].y = height/2;
      screenCleaner();
      respawnDelay = 300;
      currentScreen = 14;
      isDead = false;
    } else {
    player[0].x = width/2;
    player[0].y = height/2;
    screenCleaner();
    respawnDelay = 300;
    currentScreen = 6;
    isDead = false;
    }
  }
  
}

function gameMap() {
  imageMode(CENTER);
  image(worldMap, width / 2, height / 2, width, height);
}