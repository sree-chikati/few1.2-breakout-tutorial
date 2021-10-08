class Paddle {
  constructor(x, width = 75, height = 10, color = 'red', dx = 7, canvas) {
    this.x = x;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dx = dx;
    this.keyPressed = 'none';
    this.canvas = canvas;
  }

  move() {
    if (this.keyPressed === 'left') {
      this.x -= this.dx;
    } else if (this.keyPressed === 'right') {
      this.x += this.dx;
    }
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.canvas.height - this.height, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
