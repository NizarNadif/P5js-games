class Ghost{
  constructor(sx, sy, x, y, image) {
    this.image = image;
    this.r = radius;
    this.xIndex = sx;
    this.yIndex = sy;
    this.x = x;
    this.y = y;
    this.flag = 0;
    this.form = 0;
  }

  changeForm(){
    this.flag = 0;
    this.form = ((this.form + 1)%7);
  }
  
  move() {
    this.x = this.x;
  }

  show() {
    this.flag++;
    if (this.flag == 10)
      this.changeForm();
    let xIndex = this.xIndex + this.form;
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.r * 2, this.r * 2,
          imgWidth * xIndex, imgHeight * this.yIndex, imgWidth, imgHeight);
  }

}