class Pacman{
  constructor (x, y, image){
    this.image = image;
    this.x = x;
    this.y = y;
    this.xIndex = 4;
    this.yIndex = 3;
    this.r = radius;
    this.xdir = 0;
    this.ydir = 0;
    this.flag = 0;
    this.open = 0;
    this.death = false;
    this.deathStage = 0;
    //if open is 0, the mouth is fully opened,
    //if it's 2, the mouth is semi closed
  }

  changeMouth(){
    this.flag = 0;
    if (this.open == 0)
      this.open = 2;
    else this.open = 0;
  }
  
  show() {
    this.flag++;
    if (this.flag == 10)
      this.changeMouth();
    fill(255);
    if (this.xdir == 1){
      this.xIndex = 4 + this.open;
    } else if (this.xdir == -1){
      this.xIndex = 0 + this.open;
    } else if (this.ydir == 1){
      this.xIndex = 5 + this.open;
    } else if (this.ydir == -1){
      this.xIndex = 1 + this.open;
    }
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.r * 2, this.r * 2,
          imgWidth * this.xIndex, imgHeight * this.yIndex, imgWidth, imgHeight);
  }
  
  die(){
    this.flag++;
    if (this.flag == 10){
      this.flag = 0;
      this.deathStage++;
    } else{
      this.yIndex = 7;
      this.xIndex = 4;
      let xIndex = this.xIndex + this.deathStage;
      image(this.image, this.x, this.y, this.r * 2, this.r * 2, 
            imgWidth * xIndex, imgHeight * this.yIndex, imgWidth, imgHeight);
      if (this.deathStage == 11){
        noLoop();
        console.log("You have lost!");
      }
    }
  }
  
  hits(object){
    var dx = this.x - object.x;
    var dy = this.y - object.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.r + object.r) {
        return true;
    }
    return false;
    
  }

  setDir(xdir, ydir) {
    this.xdir = xdir;
    this.ydir = ydir;
  }

  move() {
    this.x += this.xdir * 5;
    this.y += this.ydir * 5;
  }
}