const CANVAS_HEIGHT = 500,
      CANVAS_WIDTH = 500;
let radius = 20;
let ghosts = [];

let SheetWidth = 384, SheetHeight = 240,
    cols = 16, rows = 10, 
    imgWidth = Math.floor(SheetWidth / cols), imgHeight = Math.floor(SheetHeight / rows);

function preload(){
  sheetImage = loadImage('PacManSheet.png');
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  //user = new User();
  pacman = new Pacman (0, 0, sheetImage);
  ghosts.push(new Ghost(0, 6, 100, 100, sheetImage));
  ghosts.push(new Ghost(0, 8, 200, 200, sheetImage));
  ghosts.push(new Ghost(8, 8, 300, 300, sheetImage));
  ghosts.push(new Ghost(0, 9, 400, 400, sheetImage));
  terrain = new Terrain ();
}

function draw() {
  background(0);
  //user.show();
  //copy(sheetImage, 0, 0, imgWidth, imgHeight, 100, 200, 50, 50);
  if (pacman.death)
    pacman.die();
  else{
    pacman.show();
    pacman.move();
    pacman.x = constrain (pacman.x, pacman.r, CANVAS_WIDTH - pacman.r);
    pacman.y = constrain (pacman.y, pacman.r, CANVAS_HEIGHT - pacman.r);
    for (let ghost of ghosts) {
      ghost.move();
      ghost.show();
      if (pacman.hits(ghost)){
        pacman.flag = 0;
        pacman.death = true;
        pacman.die();
      }
    }
  }

}

function keyReleased() {
  pacman.setDir(0, 0);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    pacman.setDir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    pacman.setDir(-1, 0);
  } else if (keyCode === UP_ARROW) {
    pacman.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    pacman.setDir(0, 1);
  }
}


