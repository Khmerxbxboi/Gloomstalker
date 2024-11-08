class manorDemon {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
      this.s = 30;
      this.attackPhase = 0;
      this.canBeDamaged = true;
      this.health = 10;
      this.delay = 120
      this.invincibleFrames = 0;
      //this.delay = 300;
      this.randomize = 0;
      this.side = 2;
      this.choice = [0, 1];
      this.choice2 = [0, 1, 2, 3];
      this.rng1 = 0;
      this.rng2 = 0;
      this.loopTriggered = false;
      this.deathInit = false;
      this.flicker = 0;
      this.toggleDelay = 10;
    this.toggleFlip = false;
    }
  
    display() {

        if (this.attackPhase === 420) {
            
            if (this.deathInit === false) {
                this.delay = 300;
                ds2.play();
                ds3.play();
                this.deathInit = true;
                
            } else if (this.delay > 0) {
                    
                    if (this.flicker === 0) {
                        imageMode(CENTER);
                        image(demonImgHurt, this.x, this.y, this.w, this.h);
                        this.flicker = 1;
                        this.delay = this.delay - 1;
                    } else {
                        //fill(255, 0, 0);
                        //ellipse(this.x, this.y, this.s);

                        imageMode(CENTER);
                        image(demonImg, this.x, this.y, this.w, this.h);
                        this.flicker = 0;
                        this.delay = this.delay - 1;
                    }
                } else {
                    
                    isWinner = true;
                }
            } else if (this.invincibleFrames > 0) {

        if (this.invincibleFrames > 1) {
            if (this.toggleFlip === false) {
                imageMode(CENTER);
                image(demonImgHurt, this.x, this.y, this.w, this.h);
              } else if (this.toggleFlip === true) {
                imageMode(CENTER);
                image(demonImgHurtWalk, this.x, this.y, this.w, this.h);
              }
        this.invincibleFrames = this.invincibleFrames - 1;
        } else {
            if (this.toggleFlip === false) {
                imageMode(CENTER);
                image(demonImg, this.x, this.y, this.w, this.h);
              } else if (this.toggleFlip === true) {
                imageMode(CENTER);
                image(demonImgWalk, this.x, this.y, this.w, this.h);
              }
        this.invincibleFrames = this.invincibleFrames - 1;
        this.canBeDamaged = true;
        }

        } else {
            if (this.toggleFlip === false) {
                imageMode(CENTER);
                image(demonImg, this.x, this.y, this.w, this.h);
              } else if (this.toggleFlip === true) {
                imageMode(CENTER);
                image(demonImgWalk, this.x, this.y, this.w, this.h);
              }
        }
    }

    damage(object) {
        let d = dist(this.x, this.y, object.x, object.y);
    
        if (d < object.s && this.canBeDamaged === true) {
          
          this.canBeDamaged = false;
          ds2.play();
          this.invincibleFrames = 60;
          this.health = this.health - 1;
        }
      }
  

    // { x: 5, 379 y: 25 }
    // { x: 5, 379 y: 115 }
    // { x: 5, 379 y: 205 }
    // { x: 5, 379 y: 295 }
    battle(object) {
      let d = dist(this.x, this.y, object.x, object.y);

    if (this.attackPhase === 0) {
        if (this.delay > 0) {
            this.delay = this.delay - 1;
        } else {
            this.rng1 = random(this.choice);
            this.rng2 = random(this.choice2);
            this.attackPhase = 1;
        }
    } else if (this.attackPhase === 1) {

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

        //left directed
        if (this.rng1 === 0) {


            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 5, 25);       
        let vx = ((5 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x < 7) {
        this.side = 0;
        this.attackPhase = 2;
        this.delay = 60;
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 5, 115);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 2;
                this.delay = 60;
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 5, 205);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 2;
                this.delay = 60;
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 5, 295);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 2;
                this.delay = 60;
                }
        
            

            }

            player[0].death(mDemon[0]);
        } 
        //right directed
        else if (this.rng1 === 1) {

            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 379, 25);       
        let vx = ((379 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x > 377) {
        this.side = 1;
        this.attackPhase = 2;
        this.delay = 60;
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 379, 115);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 2;
                this.delay = 60;
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 379, 205);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 2;
                this.delay = 60;
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 379, 295);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 2;
                this.delay = 60;
                }
            }
            player[0].death(mDemon[0]);
        }
     
//end of start up

} else if (this.attackPhase === 2) {

    if (this.health > 0) {
        if (this.delay > 0) {
            this.delay = this.delay - 1;
        } else {
            this.rng1 = random(this.choice);
            this.rng2 = random(this.choice2);
            this.attackPhase = 3;
        }
    } else {
        this.attackPhase = 420;
        
    }

} else if (this.attackPhase === 3) {
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
        //left directed
        if (this.side === 1) {

            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 5, 25);       
        let vx = ((5 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x < 7) {
        this.side = 0;
        this.attackPhase = 4;
        this.delay = 60;
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 5, 115);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 4;
                this.delay = 60;
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 5, 205);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 4;
                this.delay = 60;
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 5, 295);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 4;
                this.delay = 60;
                }
        
            

            }

            player[0].death(mDemon[0]);
        } 
        //right directed
        else if (this.side === 0) {

            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 379, 25);       
        let vx = ((379 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x > 377) {
        this.side = 1;
        this.attackPhase = 4;
        this.delay = 60;
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 379, 115);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 4;
                this.delay = 60;
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 379, 205);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 4;
                this.delay = 60;
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 379, 295);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 4;
                this.delay = 60;
                }
            }
            player[0].death(mDemon[0]);
        }
    //end of first attack
    } else if (this.attackPhase === 4) {

        if (this.health > 0) {
            if (this.delay > 0) {
                this.delay = this.delay - 1;
            } else {
                this.rng1 = random(this.choice);
                this.attackPhase = 5;
            }
        } else {
            this.attackPhase = 420;
            
        }
    
    } else if (this.attackPhase === 5) {
        fireSound.play();

        if (this.side === 0) {
            //right directed
            if (this.rng1 === 0) {
                
                let db1 = new dBullet(mDemon[0], 379, 25);
                dBulletsActive.push(db1);
                let db2 = new dBullet(mDemon[0], 379, 115);
                dBulletsActive.push(db2);
                let db3 = new dBullet(mDemon[0], 379, 205);
                dBulletsActive.push(db3);
                this.attackPhase = 6;
                this.delay = 60;
            } else {
                
                let db2 = new dBullet(mDemon[0], 379, 115);
                dBulletsActive.push(db2);
                let db3 = new dBullet(mDemon[0], 379, 205);
                dBulletsActive.push(db3);
                let db4 = new dBullet(mDemon[0], 379, 295);
                dBulletsActive.push(db4);
                this.attackPhase = 6;
                this.delay = 60;
            }

        } else if (this.side === 1) {
            //left directed
            if (this.rng1 === 0) {
                
                let db1 = new dBullet(mDemon[0], 5, 25);
                dBulletsActive.push(db1);
                let db2 = new dBullet(mDemon[0], 5, 115);
                dBulletsActive.push(db2);
                let db3 = new dBullet(mDemon[0], 5, 205);
                dBulletsActive.push(db3);
                this.attackPhase = 6;
                this.delay = 60;
            } else {
                
                let db2 = new dBullet(mDemon[0], 5, 115);
                dBulletsActive.push(db2);
                let db3 = new dBullet(mDemon[0], 5, 205);
                dBulletsActive.push(db3);
                let db4 = new dBullet(mDemon[0], 5, 295);
                dBulletsActive.push(db4);
                this.attackPhase = 6;
                this.delay = 60;
            }
        }
    //end of attack 2
    } else if (this.attackPhase === 6) {
        if (this.health > 0) {
            if (this.delay > 0) {
                this.delay = this.delay - 1;
            } else {
                
                if (this.loopTriggered === false) {
                    this.loopTriggered = true;
                    this.attackPhase = 2;
                    
                } else {
                    ds3.play();
                    this.loopTriggered = false;
                    this.attackPhase = 71;
                    this.rng2 = random(this.choice2);
                    
                }

            }
        } else {
            this.attackPhase = 420;
            
        }
    } else if (this.attackPhase === 71) {
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
        //left directed
        if (this.side === 1) {

            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 5, 25);       
        let vx = ((5 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x < 7) {
        this.side = 0;
        this.attackPhase = 72;
        this.delay = 10;
        this.rng2 = random(this.choice2);
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 5, 115);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 72;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 5, 205);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 72;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 5, 295);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 72;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            

            }

            player[0].death(mDemon[0]);
        } 
        //right directed
        else if (this.side === 0) {

            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 379, 25);       
        let vx = ((379 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x > 377) {
        this.side = 1;
        this.attackPhase = 72;
        this.delay = 10;
        this.rng2 = random(this.choice2);
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 379, 115);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 72;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 379, 205);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 72;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 379, 295);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 72;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
            }
            player[0].death(mDemon[0]);
        }
    } else if (this.attackPhase === 72) {
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
        //left directed
        if (this.side === 1) {

            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 5, 25);       
        let vx = ((5 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x < 7) {
        this.side = 0;
        this.attackPhase = 73;
        this.delay = 10;
        this.rng2 = random(this.choice2);
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 5, 115);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 73;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 5, 205);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 73;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 5, 295);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 73;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            

            }

            player[0].death(mDemon[0]);
        } 
        //right directed
        else if (this.side === 0) {

            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 379, 25);       
        let vx = ((379 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x > 377) {
        this.side = 1;
        this.attackPhase = 73;
        this.delay = 10;
        this.rng2 = random(this.choice2);
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 379, 115);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 73;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 379, 205);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 73;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 379, 295);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 73;
        this.delay = 10;
        this.rng2 = random(this.choice2);
                }
            }
            player[0].death(mDemon[0]);
        }
    } else if (this.attackPhase === 73) {
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
        //left directed
        if (this.side === 1) {

            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 5, 25);       
        let vx = ((5 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x < 7) {
        this.side = 0;
        this.attackPhase = 8;
        this.delay = 120;
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 5, 115);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 8;
        this.delay = 120;
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 5, 205);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 8;
        this.delay = 120;
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 5, 295);       
                let vx = ((5 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x < 7) {
                this.side = 0;
                this.attackPhase = 8;
        this.delay = 120;
                }
        
            

            }

            player[0].death(mDemon[0]);
        } 
        //right directed
        else if (this.side === 0) {

            if (this.rng2 === 0) {

        let d2 = dist(this.x, this.y, 379, 25);       
        let vx = ((379 - this.x) / d2) * 5;
        let vy = ((25 - this.y) / d2) * 5;
        this.x = this.x + min(10, vx);
        this.y = this.y + min(10, vy);

        if (this.x > 377) {
        this.side = 1;
        this.attackPhase = 8;
        this.delay = 120;
        }

            } else if (this.rng2 === 1) {

                let d2 = dist(this.x, this.y, 379, 115);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((115 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 8;
        this.delay = 120;
                }
        
            } else if (this.rng2 === 2) {

                let d2 = dist(this.x, this.y, 379, 205);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((205 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 8;
        this.delay = 120;
                }
        
            

            } else if (this.rng2 === 3) {

                let d2 = dist(this.x, this.y, 379, 295);       
                let vx = ((379 - this.x) / d2) * 5;
                let vy = ((295 - this.y) / d2) * 5;
                this.x = this.x + min(10, vx);
                this.y = this.y + min(10, vy);
        
                if (this.x > 377) {
                this.side = 1;
                this.attackPhase = 8;
        this.delay = 120;
                }
            }
            player[0].death(mDemon[0]);
        }
    } else if (this.attackPhase === 8) {
        if (this.health > 0) {
            if (this.delay > 0) {
                this.delay = this.delay - 1;
            } else {
                
                this.attackPhase = 2;

            }
        } else {
            this.attackPhase = 420;
            
        }
    }
     


//end of battle
        }


    }

// { x: 5, 379 y: 25 }
    // { x: 5, 379 y: 115 }
    // { x: 5, 379 y: 205 }
    // { x: 5, 379 y: 295 }