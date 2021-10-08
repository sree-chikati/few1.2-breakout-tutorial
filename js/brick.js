class Brick {
  constructor(x, y, width = 75, height = 20, status = 1, color = 'red', bricksPadding = 10, bricksOffsetTop = 30, bricksOffsetSide = 30) {
    this.x = (x * (width + bricksPadding)) + bricksOffsetSide;
    this.y = (y * (height + bricksPadding)) + bricksOffsetTop;
    this.width = width;
    this.height = height;
    this.status = status;
    this.color = color;
  }
}

export default Brick;
