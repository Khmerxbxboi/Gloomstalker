class dirtMound {
    constructor(tempX, tempY, tempW, tempH) {
      this.x = tempX;
      this.y = tempY;
      this.width = tempW;
      this.height = tempH;
      this.hasTriggered = false;
      
    }
  
    display() {
        if (this.hasTriggered === false) {
            imageMode(CENTER);
            image(digImg, this.x, this.y, this.w, this.h);
        }
      
    }

    diggingCheck(object) {
      let d = dist(this.x, this.y, object.x, object.y);
  
      if (d < 20 && cantEscape === false && isDead === false && hasShovel === true && this.hasTriggered === false) {
        hasGun = true;
        keyPickedUp = true;
        this.hasTriggered = true;
        digSound.play();

        if (demon.chasePhase === 0) {
          demon.delay = 120;
        }


      } 
    }
  }