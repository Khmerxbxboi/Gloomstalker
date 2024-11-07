class PlayerB {
  constructor(tempX, tempY, tempW, tempH, tempS) {
    this.x = tempX;
    this.y = tempY;
    this.width = tempW;
    this.height = tempH;
    this.speed = tempS;
    this.color = 255;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  death(object) {
    let d = dist(this.x, this.y, object.x, object.y);

    if (d < object.s && isHiding == false) {
      isDead = true;
    }
  }

  hide(tree) {
    if (
      this.x > tree.x - tree.w / 2 &&
      this.x < tree.x + tree.w / 2 &&
      this.y > tree.y - tree.h / 2 &&
      this.y < tree.y + tree.h / 2
    ) {
      print("hidden");
      return true;
    } else {
      return false;
    }
  }
  hide(home) {
    if (
      this.x > home.x - home.w / 2 &&
      this.x < home.x + home.w / 2 &&
      this.y > home.y - home.h / 2 &&
      this.y < home.y + home.h / 2
    ) {
      print("hidden");
      return true;
    } else {
      return false;
    }
  }


  
  move(direction) {
    switch (direction) {
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
    }

    if (this.x > width) {
      this.x = width;
    } else if (this.x < 0) {
      this.x = 0;
    }

    if (this.y > height) {
      this.y = height;
    } else if (this.y < 0) {
      this.y = 0;
    }
  }
}
