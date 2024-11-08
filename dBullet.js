class dBullet {

    constructor(object, xTarget, yTarget) {
        this.x = object.x;
        this.y = object.y;
        this.s = 10;
        this.xFocus = xTarget;
        this.yFocus = yTarget;
        this.lifespan = 80;
      }
    
    display() {
        imageMode(CENTER);
        image(fireballImg, this.x, this.y, this.w, this.h);
        
    }
    
    move() {
        if (this.lifespan > 0) {
            
            let dis = dist(this.x, this.y, this.xFocus, this.yFocus);       
                let vx = ((this.xFocus - this.x) / dis) * 5;
                let vy = ((this.yFocus - this.y) / dis) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
            
            this.lifespan = this.lifespan - 1;
        }
    }
    
    }