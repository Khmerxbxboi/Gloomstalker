class Tree {
  constructor(tempX, tempY, tempW, tempH) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
  }

  display() {
   // fill(0, 255, 0);
  //  rectMode(CENTER);
   // rect(this.x, this.y, this.w, this.h);

   imageMode(CENTER);
image(treeImg, this.x, this.y, this.w, this.h);
  }
}
