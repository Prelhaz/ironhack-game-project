class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.GRID_SIZE = 24;
    this.CELL_SIZE = canvas.width/this.GRID_SIZE;
    this.grid = new Grid (this);
    this.SPEED = 300
    this.currentPiece = new Piece(this);
    this.callbacks = {
      up: () => this.currentPiece.changeDirection('up'),
      right: () => this.currentPiece.changeDirection('right'),
      down: () => this.currentPiece.changeDirection('down'),
      left: () => this.currentPiece.changeDirection('left'),
      clockwise: () => this.currentPiece.rotation('clockwise'),
      counterClockwise: () => this.currentPiece.rotation('counterClockwise')
    };
    this.control = new Control(this.callbacks);
    this.control.setKeyBindings();
  }

  reset () {
    this.currentPiece = new Piece(this);
    this.timer = 0;
    this.score = 0;
  }

  start () {
    this.reset();
    this.loop(0);
  }

  
  loose () {
    this.reset();
  }

  loop (timestamp) {
    if (this.timer < timestamp - this.SPEED) {
      this.runLogic();
      this.paint();
      this.timer = timestamp;
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  runLogic () {
    this.currentPiece.move();
  }

  clear () {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
  }

  paint () {
    this.clear();
    this.grid.paint();
    this.currentPiece.paint();
  }
}
