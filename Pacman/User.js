class User{
  constructor(){
    this.lives = 3; 
  }

  show(){
    for (let i= 0, x= 50; i < this.lives; i++, x += 50){
    image(this.image, x, CANVAS_HEIGHT - 100, 20, 20,
          imgWidth * this.xIndex, imgHeight * this.yIndex, imgWidth, imgHeight);
    }
  }

}