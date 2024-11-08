//pretty much all of the core code. Review the "win" function at the bottom to set the state back to the gameplay and set the key is true

class puzzleBox {
    constructor(tempX, tempY, tempW, tempH) {
      this.x = tempX;
      this.y = tempY;
      this.width = tempW;
      this.height = tempH;
      
    }
  
    display() {
        imageMode(CENTER);
        image(safeImg, this.x, this.y, this.w, this.h);
    }

    displayPuzzleCheck(object) {
      let d = dist(this.x, this.y, object.x, object.y);
  
      if (d < 20 && cantEscape === false && isDead === false) {
        puzzState = 2;
      } else {
        puzzState = 0;
      }
    }
  }

function puzzleGameSetup() {
    rectMode(CORNER) //should fix issue i had
    for (let i = 0; i < res; i++) {
      for (let j = 0; j < res; j++) {
        squares.push(generateSquare(i, j));
      }
    }
  }
  
  function puzzleGame() {
    rectMode(CORNER);
    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("Align the Skulls", width / 2, 30);
    translate(offset, offset);
    fill(colors[0]);
    rect(0, 0, gridSize, gridSize);
  
    squares.forEach((s) => {
      push();
      translate(s.x * size + size / 2, s.y * size + size / 2);
      rotate((PI / 2) * s.dir);
      fill(s.color);
      drawFunctionMap[s.type](s);
      pop();
    });
    drawSelectedBorder();
    rectMode(CENTER);
  }
  
  function generateSquare(x, y) {
    const type = getRandomType();
    const color = colors[(x + y) % colors.length];
    return { x, y, color, dir: Math.floor(random(0, 4)), type };
  }
  
  function getRandomType() {
    const types = Object.keys(frequencies).flatMap((type) =>
      Array(frequencies[type]).fill(type)
    );
    return types[Math.floor(random(0, types.length))];
  }
  
  function drawSelectedBorder() {
    if (!pstate.selected) return;
    push();
    translate(pstate.selected.x * size, pstate.selected.y * size);
    stroke("red");
    strokeWeight(4);
    noFill();
    rect(0, 0, size, size);
    pop();
  }
  
  function drawSkull(s) {
    push();
    translate(-size / 2, -size / 2);
    fill(s.color);
    rect(0, 0, size, size);
    fill("white");
  
    // Skull eyes
    ellipse(size / 3, size / 3, size / 6, size / 6);
    ellipse((2 * size) / 3, size / 3, size / 6, size / 6);
  
    // Skull nose
    triangle(
      size / 2 - pipeWidth,
      size / 2,
      size / 2 + pipeWidth,
      size / 2,
      size / 2,
      size / 1.5
    );
  
    // Skull mouth
    for (let i = 0; i < 5; i++) {
      line(
        size / 4 + i * (size / 5),
        (3 * size) / 4,
        size / 4 + i * (size / 5),
        (3 * size) / 4 + pipeWidth
      );
    }
    pop();
  }
  
  function mousePressed() {
    handleGridClick((x, y) => {
      const square = squares.find((s) => s.x === x && s.y === y);
      if (!square) return;
      pstate.selected = square;
    });
  }
  
  function mouseReleased() {
    handleGridClick((x, y) => {
      if (!pstate.selected) return;
      const square = squares.find((s) => s.x === x && s.y === y);
      if (!square && areNeighbours(pstate.selected, { x, y })) {
        pstate.selected.x = x;
        pstate.selected.y = y;
      } else if (square && x === pstate.selected.x && y === pstate.selected.y) {
        turn(square);
      }
      pstate.selected = null;
    });
  }
  
  function handleGridClick(onClick) {
    if (currentScreen === 1) {
    const xIndex = Math.floor((mouseX - offset) / size);
    const yIndex = Math.floor((mouseY - offset) / size);
    const inBounds = xIndex >= 0 && xIndex < res && yIndex >= 0 && yIndex < res;
    if (inBounds) onClick(xIndex, yIndex);
    }
  }
  
  function areNeighbours(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) === 1;
  }
  
  function turn(s) {
    s.dir = (s.dir + 1) % 4;
    checkWinCondition();
  }
  
  function touchEnded() {
    mouseReleased(); // Trigger mouse release on touch end
    return false;
  }
  
  function checkWinCondition() {
    // Checks if all skulls have dir === 0 (or any specific direction)
    const allAligned = squares.every((s) => s.type === "skull" && s.dir === 0);
  
    if (allAligned) {
      //console.log("wincode");
      if (hasShovel === false) {
        hasShovel = true;
        safeClickSound.play();

      }
      
    }
  }
  