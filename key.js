class Key {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
    this.w = 10;
    this.h = 20;
  }

  display() {
    rectMode(CENTER);
    imageMode(CENTER);
    image(keyImg, this.x, this.y, this.w, this.h);
    // fill(200, 200, 0);
    // rect(this.x, this.y, this.w, this.h);
  }

  collect(player) {
    let d = dist(this.x, this.y, player.x, player.y);

    if (d < this.h / 2) {
      return true;
    } else {
      return false;
    }
  }
}
