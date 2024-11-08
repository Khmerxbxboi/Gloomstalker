//place gameobjects heret

function warpLogic() {
  if (currentScreen === 1) {
    //run all one item/object loads here
    if (screenActive === 0) {
      //Top to Bottom Warp
      warp3 = new Warp(192, 320, 20, 20, 192, 50, 2);
      warpsActive.push(warp3);
      t1 = new Tree(200, 200, 25, 50);
      trees.push(t1);

      //adding key
      //let k = new Key(300, 100);
      //keyItem.push(k);

      puzzleB = new puzzleBox(150, 150, 20, 20);
      puzzleBoxesActive.push(puzzleB);

      //always end on screenActive = 1
      screenActive = 1;
    }
    if (screenActive === 1) {
      screen1();
    }
  } else if (currentScreen === 2) {
    if (screenActive === 0) {
      //Top to Bottom Warp
      warp3 = new Warp(192, 320, 20, 20, 192, 50, 4);
      warpsActive.push(warp3);
      //Bottom to Top Warp
      warp4 = new Warp(192, 0, 20, 20, 192, 270, 1);
      warpsActive.push(warp4);
      t1 = new Tree(200, 200, 25, 50);
      trees.push(t1);

      t2 = new Tree(50, 110, 25, 50);
      trees.push(t2);

      t3 = new Tree(175, 20, 25, 50);
      trees.push(t2);

      t4 = new Tree(75, 75, 25, 50);
      trees.push(t4);

      t5 = new Tree(15, 105, 25, 50);
      trees.push(t5);
      screenActive = 1;

      t6 = new Tree(15, 110, 25, 50);
      trees.push(t6);

      t7 = new Tree(75, 186, 25, 50);
      trees.push(t7);

      t8 = new Tree(75, 175, 25, 50);
      trees.push(t8);

      t9 = new Tree(150, 180, 25, 50);
      trees.push(t9);
    }
    if (screenActive === 1) {
      screen2();
    }
  } else if (currentScreen === 3) {
    if (screenActive === 0) {
      //Top to Bottom Warp
      warp3 = new Warp(192, 320, 20, 20, 192, 50, 8);
      warpsActive.push(warp3);

      dirtM = new dirtMound(100, 100, 20, 20);
      dirtMoundActive.push(dirtM);

      t1 = new Tree(200, 200, 25, 50);
      trees.push(t1);

      t2 = new Tree(50, 110, 25, 50);
      trees.push(t2);

      t3 = new Tree(175, 200, 25, 50);
      trees.push(t2);

      t4 = new Tree(75, 75, 25, 50);
      trees.push(t4);

      t5 = new Tree(15, 105, 25, 50);
      trees.push(t5);

      t6 = new Home(300, 375, 100, 100);

      home.push(t6);

      screenActive = 1;
    }
    if (screenActive === 1) {
      screen3();
    }
  } else if (currentScreen === 4) {
    if (screenActive === 0) {
      //Left to Right Warp
      warp1 = new Warp(384, 160, 20, 20, 50, 160, 5);
      warpsActive.push(warp1);
      //Top to Bottom Warp
      warp3 = new Warp(192, 320, 20, 20, 192, 50, 15);
      warpsActive.push(warp3);
      //Bottom to Top Warp
      warp4 = new Warp(192, 0, 20, 20, 192, 270, 2);
      warpsActive.push(warp4);
      t1 = new Tree(200, 200, 25, 50);
      trees.push(t1);

      t2 = new Tree(200, 110, 25, 50);
      trees.push(t2);

      t3 = new Tree(75, 200, 25, 50);
      trees.push(t2);

      t4 = new Tree(175, 75, 25, 50);
      trees.push(t4);

      t5 = new Tree(175, 175, 25, 50);
      trees.push(t5);

      screenActive = 1;
    }
    if (screenActive === 1) {
      screen4();
    }
  } else if (currentScreen === 5) {
    if (screenActive === 0) {
      //Left to Right Warp
      warp1 = new Warp(384, 160, 20, 20, 50, 160, 6);
      warpsActive.push(warp1);
      //Right to Left Warp
      warp2 = new Warp(0, 160, 20, 20, 334, 160, 4);
      warpsActive.push(warp2);
      //Top to Bottom Warp
      warp3 = new Warp(192, 320, 20, 20, 192, 50, 9);
      warpsActive.push(warp3);
      t1 = new Tree(200, 200, 25, 50);
      trees.push(t1);
      screenActive = 1;
    }
    if (screenActive === 1) {
      screen5();
    }
  } else if (currentScreen === 6) {
    if (screenActive === 0) {
      //Left to Right Warp
      warp1 = new Warp(384, 160, 20, 20, 50, 160, 7);
      warpsActive.push(warp1);
      //Right to Left Warp
      warp2 = new Warp(0, 160, 20, 20, 334, 160, 5);
      warpsActive.push(warp2);
      //Top to Bottom Warp
      warp3 = new Warp(192, 320, 20, 20, 192, 50, 10);
      warpsActive.push(warp3);
      //Bottom to Top Warp
      warp4 = new Warp(196, 45, 20, 20, 192, 270, 666);
      warpsActive.push(warp4);
      t1 = new Tree(200, 200, 25, 50);
      trees.push(t1);

      t2 = new Tree(100, 110, 25, 50);
      trees.push(t2);

      t3 = new Tree(75, 200, 25, 50);
      trees.push(t2);

      t4 = new Tree(175, 75, 25, 50);
      trees.push(t4);

      t5 = new Tree(175, 175, 25, 50);
      trees.push(t5);

      screenActive = 1;
    }
    if (screenActive === 1) {
      screen6();
    }
  } else if (currentScreen === 7) {
    if (screenActive === 0) {
      //Left to Right Warp
      warp1 = new Warp(384, 160, 20, 20, 50, 160, 8);
      warpsActive.push(warp1);
      //Right to Left Warp
      warp2 = new Warp(0, 160, 20, 20, 334, 160, 6);
      warpsActive.push(warp2);
      //Top to Bottom Warp
      warp3 = new Warp(192, 320, 20, 20, 192, 50, 11);
      warpsActive.push(warp3);
      t1 = new Tree(200, 200, 25, 50);

      t3 = new Tree(75, 200, 25, 50);
      trees.push(t2);

      t4 = new Tree(175, 75, 25, 50);
      trees.push(t4);

      t5 = new Tree(175, 175, 25, 50);
      trees.push(t5);

      trees.push(t1);
      screenActive = 1;
    }
    if (screenActive === 1) {
      screen7();
    }
  } else if (currentScreen === 8) {
    if (screenActive === 0) {
      //Right to Left Warp
      warp2 = new Warp(0, 160, 20, 20, 334, 160, 7);
      warpsActive.push(warp2);
      //Top to Bottom Warp
      warp3 = new Warp(192, 320, 20, 20, 192, 50, 12);
      warpsActive.push(warp3);
      //Bottom to Top Warp
      warp4 = new Warp(192, 0, 20, 20, 192, 270, 3);
      warpsActive.push(warp4);

      t1 = new Tree(200, 200, 25, 50);
      trees.push(t1);

      t3 = new Tree(75, 200, 25, 50);
      trees.push(t2);

      t4 = new Tree(175, 75, 25, 50);
      trees.push(t4);

      t5 = new Tree(175, 175, 25, 50);
      trees.push(t5);

      screenActive = 1;
    }
    if (screenActive === 1) {
      screen8();
    }
  } else if (currentScreen === 15) {
    if (screenActive === 0) {
      //Left to Right Warp
      warp1 = new Warp(384, 160, 20, 20, 50, 160, 9);
      warpsActive.push(warp1);
      //Bottom to Top Warp
      warp4 = new Warp(192, 0, 20, 20, 192, 270, 4);
      warpsActive.push(warp4);
      t1 = new Tree(200, 200, 25, 50);
      trees.push(t1);
      screenActive = 1;
    }
    if (screenActive === 1) {
      screen15();
    }
  } else if (currentScreen === 9) {
    if (screenActive === 0) {
      //Left to Right Warp
      warp1 = new Warp(384, 160, 20, 20, 50, 160, 10);
      warpsActive.push(warp1);
      //Right to Left Warp
      warp2 = new Warp(0, 160, 20, 20, 334, 160, 15);
      warpsActive.push(warp2);
      //Bottom to Top Warp
      warp4 = new Warp(192, 0, 20, 20, 192, 270, 5);
      warpsActive.push(warp4);

      t1 = new Tree(200, 200, 25, 50);
      trees.push(t1);

      t2 = new Tree(100, 200, 25, 50);
      trees.push(t2);

      t3 = new Tree(175, 200, 25, 50);
      trees.push(t2);

      t4 = new Tree(175, 275, 25, 50);
      trees.push(t4);

      t5 = new Tree(175, 75, 25, 50);
      trees.push(t5);

      screenActive = 1;
    }
    if (screenActive === 1) {
      screen9();
    }
  } else if (currentScreen === 10) {
    if (screenActive === 0) {
      //Left to Right Warp
      warp1 = new Warp(384, 160, 20, 20, 50, 160, 11);
      warpsActive.push(warp1);
      //Right to Left Warp
      warp2 = new Warp(0, 160, 20, 20, 334, 160, 9);
      warpsActive.push(warp2);
      //Top to Bottom Warp
      warp3 = new Warp(192, 320, 20, 20, 192, 50, 13);
      warpsActive.push(warp3);
      //Bottom to Top Warp
      warp4 = new Warp(192, 0, 20, 20, 192, 270, 6);
      warpsActive.push(warp4);
      t1 = new Tree(125, 200, 25, 50); //adds tree
      t2 = new Tree(250, 300, 25, 50); //adds tree
      trees.push(t1);
      trees.push(t2);

      t3 = new Tree(50, 200, 25, 50);
      trees.push(t3);

      screenActive = 1;
    }
    if (screenActive === 1) {
      screen10();
    }
  } else if (currentScreen === 11) {
    if (screenActive === 0) {
      //Left to Right Warp
      warp1 = new Warp(384, 160, 20, 20, 50, 160, 12);
      warpsActive.push(warp1);
      //Right to Left Warp
      warp2 = new Warp(0, 160, 20, 20, 334, 160, 10);
      warpsActive.push(warp2);
      //Bottom to Top Warp
      warp4 = new Warp(192, 0, 20, 20, 192, 270, 7);
      warpsActive.push(warp4);
      t1 = new Tree(200, 200, 25, 50);

      t2 = new Tree(100, 200, 25, 50);
      trees.push(t2);

      trees.push(t1);
      screenActive = 1;
    }
    if (screenActive === 1) {
      screen11();
    }
  } else if (currentScreen === 12) {
    if (screenActive === 0) {
      //Right to Left Warp
      warp2 = new Warp(0, 160, 20, 20, 334, 160, 11);
      warpsActive.push(warp2);
      //Bottom to Top Warp
      warp4 = new Warp(192, 0, 20, 20, 192, 270, 8);
      warpsActive.push(warp4);
      t1 = new Tree(200, 200, 25, 50);
      t2 = new Tree(300, 200, 25, 50);
      trees.push(t2);

      trees.push(t1);
      screenActive = 1;
    }
    if (screenActive === 1) {
      screen12();
    }
  } else if (currentScreen === 13) {
    if (screenActive === 0) {
      //Left to Right Warp
      warp1 = new Warp(384, 160, 20, 20, 50, 160, 14);
      warpsActive.push(warp1);
      //Bottom to Top Warp
      warp4 = new Warp(192, 0, 20, 20, 192, 270, 10);
      warpsActive.push(warp4);
      t1 = new Tree(200, 100, 25, 50);
      t2 = new Tree(300, 200, 25, 50);
      t3 = new Tree(400, 50, 25, 50);

      trees.push(t1);
      trees.push(t2);
      trees.push(t3);

      screenActive = 1;
    }
    if (screenActive === 1) {
      screen13();
    }
  } else if (currentScreen === 14) {
    if (screenActive === 0) {
      //Right to Left Warp
      warp1 = new Warp(0, 160, 20, 20, 334, 160, 13);
      warpsActive.push(warp1);
      t1 = new Tree(200, 200, 25, 50);
      t2 = new Tree(100, 100, 25, 50);

      trees.push(t1);
      trees.push(t2);

      t6 = new Home(300, 200, 100, 100);
      home.push(t6);

      screenActive = 1;
    }
    if (screenActive === 1) {
      screen14();
    }
  } else if (currentScreen === 666) {
    if (screenActive === 0) {
      
      let d = new manorDemon();
      mDemon.push(d);

      screenActive = 1;
    }
    if (screenActive === 1) {
      screen666();
  }
}
}

class Warp {
  constructor(tempX, tempY, tempW, tempH, tempX2, tempY2, desiredScreen) {
    this.x = tempX;
    this.y = tempY;
    this.width = tempW;
    this.height = tempH;
    this.desiredX = tempX2;
    this.desiredY = tempY2;
    this.desiredS = desiredScreen;
  }

  display() {
    fill(150);
    imageMode(CENTER);
    image(warpTileImg, this.x, this.y, this.w, this.h);
  }
  teleport(object) {
    let d = dist(this.x, this.y, object.x, object.y);

    if (this.desiredS === 666) {
      if (d < 20 && cantEscape === false && keyPickedUp === true) {
        player[0].x = this.desiredX;
        player[0].y = this.desiredY;
        screenCleaner();
        currentScreen = this.desiredS;
      }
    } else if (d < 20 && cantEscape === false) {
      player[0].x = this.desiredX;
      player[0].y = this.desiredY;
      screenCleaner();
      currentScreen = this.desiredS;
    }
  }
}