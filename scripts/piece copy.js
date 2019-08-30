class Piece {
  constructor (game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.matrix = [];
    this.possiblePieces = {
      T: [
        [ 1, 1, 1 ],
        [ 0, 1, 0 ]
      ],
      I: [
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
    this.direction = 0;
    this.GRID_SIZE = this.game.GRID_SIZE;
    this.clockwiseOrCounter = '';
  }
  
  randomPiece () {
    const pieces = Object.values(this.possiblePieces);
    this.matrix = pieces[Math.floor(Math.random() * pieces.length)];
  }

  /*
  randomPlacement () {
    const randomBorder = Math.floor(Math.random()*4);
    const randomPlaceOverBorder = Math.floor(Math.random()*(this.GRID_SIZE-3) + 2);
    randomBorder === 0 ? (this.piece = randomPlaceOverBorder, this.y = -2) : 
    randomBorder === 1 ? (this.x = this.GRID_SIZE + 2, this.y = randomPlaceOverBorder) : 
    randomBorder === 2 ? (this.x = randomPlaceOverBorder, this.y = this.GRID_SIZE + 2) :
    (this.x = -2, this.y = randomPlaceOverBorder);
    this.piece = this.allPieces[Math.floor(Math.random()*this.allPieces.length)];
    
  }
  */

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
  changeRotation (clockwiseOrCounter) {
    this.clockwiseOrCounter = clockwiseOrCounter;
  }

  rotation() {
    const clockwiseOrCounter = this.clockwiseOrCounter;
    const matrix = this._calculateRotation(this.matrix, clockwiseOrCounter);
    this.matrix = matrix;
  }

  getNewPlacement () {
    const CELL_SIZE = this.game.CELL_SIZE;
    const randomBorder = Math.floor(Math.random()*4);
    const randomPlaceOverBorder = Math.floor(Math.random()*(this.GRID_SIZE-3) + 2)*CELL_SIZE;
    if (randomBorder === 0) {
      this.startX = 50;
      this.startY = 50;
    } else if (randomBorder === 1) {
      this.startY = randomPlaceOverBorder;
      this.startX = this.GRID_SIZE*CELL_SIZE;
    } else if (randomBorder === 2) {
      this.startX = randomPlaceOverBorder;
      this.startY = this.GRID_SIZE*CELL_SIZE;
    } else {
      this.startY = randomPlaceOverBorder;
      this.startX = 0;
    }
  }

  move () {
    const direction = this.direction;
    this.y += direction === 'down' ? 1 : direction === 'up' ? -1 : 0;
    this.x += direction === 'left' ? -1 : direction === 'right' ? 1 : 0;
  }
  paint () {
    const context = this.game.context;
    const matrix = this.matrix;
    context.save();
    context.translate(this.x, this.y);
    const SIZE = this.game.CELL_SIZE;
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[0].length; column++) {
        if (matrix[row][column]) context.fillRect(this.getNewPlacement.startX, this.getNewPlacement.startY, SIZE, SIZE);
      }
    }
    context.restore();
  }
}