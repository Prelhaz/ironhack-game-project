class Piece {
  constructor (game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.matrix = [];
    this.fillArray = [0];
    this.GRID_SIZE = this.game.GRID_SIZE;
    this.xFill = this.GRID_SIZE*this.game.CELL_SIZE/2;
    this.yFill = this.GRID_SIZE*this.game.CELL_SIZE/2;
    this.possiblePieces = {
      T: [
        [ 1, 1, 1 ],
        [ 0, 1, 0 ]
      ],
      I: [
        [1],
        [1],
        [1],
        [1]
      ],
      L: [
        [1,0],
        [1,0],
        [1,1]
      ],
      J:
      [
        [0,1],
        [0,1],
        [1,1]
      ],
      S: [
        [0,1,1],
        [1,1,0]
      ],
      Z: [
        [1,1,0],
        [0,1,1]
      ]
    };
    this.randomPiece();
    this.direction = 'down';
    this.clockwiseOrCounter = '';
  }
  
  randomPiece () {
    const pieces = Object.values(this.possiblePieces);
    this.matrix = pieces[Math.floor(Math.random() * pieces.length)];
  }

  _calculateRotation (matrix, clockwiseOrCounter) {
    let piece = [];
    if (clockwiseOrCounter === 'clockwise') {
      for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
          piece[col] = piece[col] || [];
          const cell = matrix[matrix.length - 1 - row][col];
          piece[col].push(cell);
        }
      }
    }else if (clockwiseOrCounter === 'counterClockwise') {
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
          piece[col] = piece[col] || [];
          const cell = matrix[row][matrix[0].length -1 -col];
          piece[col].push(cell);
        } 
      }
    }else {
      piece = matrix;
    }
    return piece;
  }
  
  changeDirection (direction) {
      this.direction = direction;
  }

  rotation(clockwiseOrCounter) {
    this.clockwiseOrCounter = this.clockwiseOrCounter;
    const matrix = this._calculateRotation(this.matrix, clockwiseOrCounter);
    this.matrix = matrix;
  }
  
  move () {
    const direction = this.direction;
    const GRID_SIZE = this.GRID_SIZE;
    const CELL_SIZE = this.game.CELL_SIZE;
    this.x += direction === 'left' ? -1 * CELL_SIZE : direction === 'right' ? 1 * CELL_SIZE : 0;
    this.y += direction === 'down' ? 1 * CELL_SIZE : direction === 'up' ? -1 * CELL_SIZE : 0;
    if (this.y < 0 || this.y > GRID_SIZE*CELL_SIZE || this.x < 0 || this.x > GRID_SIZE*CELL_SIZE) {
      this.game.loose();
    };
    if (this.y === GRID_SIZE*CELL_SIZE/2 && this.x === GRID_SIZE*CELL_SIZE/2) {
       this.fillArray.push(this.matrix);
     }
  }

  paint () {
    const context = this.game.context;
    const matrix = this.matrix;
    const fillArray = this.fillArray;
    context.save();
    context.translate(this.x, this.y);
    const SIZE = this.game.CELL_SIZE;
    //  context.fillStyle = randomColorArray[Math.floor(Math.random()*randomColorArray.length)];
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[0].length; column++) {
        if (matrix[row][column]) context.fillRect(column * SIZE, row * SIZE, SIZE, SIZE);
      }
    }
    context.restore();

    context.save();
    for (let row = 0; row < fillArray.length; row++) {
      for (let column = 0; column < fillArray[0].length; column++) {
        if (fillArray[row][column]) context.fillRect(column * SIZE, row * SIZE, SIZE, SIZE);
      }
    }
    context.restore();
  }
}