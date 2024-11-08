class pBullet {

constructor(object, Tdirection) {
    this.x = object.x;
    this.y = object.y;
    this.s = 10;
    this.direction = Tdirection
    this.lifespan = 180
  }

display() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.s);
}

move() {
    if (this.lifespan > 0) {

        if (this.direction === "left") {
            this.x = this.x - 5;
        } else if (this.direction === "right") {
            this.x = this.x + 5;
        } else if (this.direction === "down") {
            this.y = this.y + 5;
        } else if (this.direction === "up") {
            this.y = this.y - 5;
        }
        this.lifespan = this.lifespan - 1;
    }
}

}