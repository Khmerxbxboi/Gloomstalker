//startScreen code
function startScreen() {
  background(0);
  textStyle(BOLDITALIC);
  textAlign(CENTER);

  textSize(40);
  fill("rgb(255,255,255)");
  text("Gloomstalker", width / 2, 100);

  textStyle(ITALIC);
  textSize(15);
  text("Getting chased by a demon late at night,", width / 2, 150);
  text("with only a fleeting chance to live...", width / 2, 175);

  textStyle(BOLD);
  textSize(16);
  text("TRY TO SURVIVE", width / 2, 200);
  text("Press 'I' for Instructions", width / 2, 275);
  text("'Enter' to START GAME", width / 2, 250);

  //reset styling for gameplay UI
  textStyle(NORMAL);
  textSize(14);

  //Enter Key
  if (keyCode == 13) {
    state = 2;
  }

  //'I' Key
  if (keyCode == 73) {
    state = 1;
  }
}

//instructions code
function instructions() {
  background(0);
  text(
    "Wonder the Forest to Find a Key to \n to Enter the Mansion",
    width / 2,
    50
  );
  text("Use the Arrow Keys to Move Around", width / 2, 100);

  text("Use Spacebar if you find a gun...", width / 2, 125);

  text("'M' Key to Reveal the Map", width / 2, 150);
  text("Avoid the Demon", width / 2, 200);

  text("'Enter' to START GAME", width / 2, 250);

  //Enter Key
  if (keyCode == 13) {
    state = 2;
  }
}

//describe('The sample text "The quick brown fox..." written in black across several lines.');
