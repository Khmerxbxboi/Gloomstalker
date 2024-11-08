class Demon {
  constructor() {
    this.x = -20;
    this.y = -20;
    this.s = 30;
    this.chasePhase = 0;
    this.delay = 1200;
    //this.delay = 300;
    this.randomize = 0;
    this.toggleDelay = 10;
    this.toggleFlip = false;
  }

  display() {
    if (this.toggleFlip === false) {
      imageMode(CENTER);
      image(demonImg, this.x, this.y, this.w, this.h);
    } else if (this.toggleFlip === true) {
      imageMode(CENTER);
      image(demonImgWalk, this.x, this.y, this.w, this.h);
    }
  }

  move(object) {
    this.toggleDelay--;

    if (this.toggleDelay < 1) {
      if (this.toggleFlip === true) {
        this.toggleFlip = false;
        this.toggleDelay = 10;
      } else if (this.toggleFlip === false) {
        this.toggleFlip = true;
        this.toggleDelay = 10;
      }
    }
    let d = dist(this.x, this.y, object.x, object.y);

    if (this.chasePhase === 0) {
      if (this.delay > 0) {
        this.delay = this.delay - 1;
      } else {
        ds1.play();
        cantEscape = true;
        let randomArray = [1, 2, 3, 4];
        this.randomize = random(randomArray);

        if (this.randomize === 1) {
          this.x = -20;
          this.y = -20;
        } else if (this.randomize === 2) {
          this.x = 410;
          this.y = 320;
        } else if (this.randomize === 3) {
          this.x = -20;
          this.y = 320;
        } else if (this.randomize === 4) {
          this.x = 410;
          this.y = -20;
        }
        this.chasePhase = 1;
      }
    } else if (this.chasePhase === 1) {
      let vx = ((object.x - this.x) / d) * 5;
      let vy = ((object.y - this.y) / d) * 5;
      this.x = this.x + min(10, vx);
      this.y = this.y + min(10, vy);

      if (d < 30) {
        this.lockedX = ((object.x - this.x) / d) * 5;
        this.lockedY = ((object.x - this.x) / d) * 5;
        this.chasePhase = 2;
      }
    } else if (this.chasePhase === 2) {


      if (this.x >= 420 || this.x <= -30 || this.y >= 360 || this.y <= -30) {

        cantEscape = false;
        this.chasePhase = 3;
        //this functionally just ends all chasePhase behavior until the object is reset.

      } else if (this.randomize === 1) {
        //checks if demon caught player
        player[0].death(demon);
        this.x = this.x + 4;
        this.y = this.y + 4;
      } else if (this.randomize === 2) {
        //checks if demon caught player
        player[0].death(demon);
        this.x = this.x - 4;
        this.y = this.y - 4;
      } else if (this.randomize === 3) {
        //checks if demon caught player
        player[0].death(demon);
        this.x = this.x + 4;
        this.y = this.y - 4;
      } else if (this.randomize === 4) {
        //checks if demon caught player
        player[0].death(demon);
        this.x = this.x - 4;
        this.y = this.y + 4;
      }
    }
  }
}
