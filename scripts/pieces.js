class Pieces {
  constructor (game) {
    this.game = game;
    this.CELL_SIZE = this.game.CELL_SIZE;
    this.GRID_SIZE = this.game.GRID_SIZE;
    this.x = 0;
    this.y = 0;
    this.piece = [];
    this.allPieces = [
      [[this.x,this.y], [this.x+1,this.y], [this.x+2,this.y], [this.x+1,this.y+1]],   // T
      [[this.x,this.y], [this.x+1,this.y], [this.x+2,this.y], [this.x+3,this.y]],     // I
      [[this.x,this.y+2], [this.x,this,y+1], [this.x,this.y], [this.x+1,this.y]],     // L
      [[this.x,this.y], [this.x+1,this.y], [this.x+1,this.y+1], [this.x+1,this.y+2]], // J    
      [[this.x,this.y], [this.x+1,this.y], [this.x+1,this.y+1], [this.x+2,this.y+1]], // S
      [[this.x,this.y+1], [this.x+1,this.y+1], [this.x+1,this.y], [this.x+2,this.y]]  // Z
    ];
    
  }

  
  randomPiece () {
    this.piece = this.allPieces[Math.floor(Math.random()*this.allPieces.length)]
  }

  rotation () {
    const rotationMatrix = [                                                          //clokwise downwards
      [[this.x,this.y], [this.x+1,this.y], [this.x+2,this.y], [this.x+1,this.y+1]],         // T
      [[this.x,this.y], [this.x+1,this.y], [this.x+2,this.y], [this.x+3,this.y]],           // I
      [[this.x,this.y+2], [this.x,this,y+1], [this.x,this.y], [this.x+1,this.y]],           // L
      [[this.x,this.y], [this.x+1,this.y], [this.x+1,this.y+1], [this.x+1,this.y+2]],       // J    
      [[this.x,this.y], [this.x+1,this.y], [this.x+1,this.y+1], [this.x+2,this.y+1]],       // S
      [[this.x,this.y+1], [this.x+1,this.y+1], [this.x+1,this.y], [this.x+2,this.y]],       // Z
  
      [[this.x+1,this.y], [this.x+1,this.y+1], [this.x+1,this.y+2], [this.x,this.y+1]],     // T
      [[this.x+1,this.y+2], [this.x+1,this.y+1], [this.x+1,this.y], [this.x+1,this.y-1]],   // I
      [[this.x,this.y], [this.x,this,y+1], [this.x+1,this.y+1], [this.x+2,this.y+1]],       // L
      [[this.x,this.y+1], [this.x,this.y], [this.x+1,this.y], [this.x+2,this.y]],           // J    
      [[this.x,this.y+1], [this.x,this.y], [this.x+1,this.y], [this.x+1,this.y-1]],         // S
      [[this.x+1,this.y+1], [this.x+1,this.y], [this.x,this.y], [this.x,this.y-1]],         // Z

      [[this.x-1,this.y+1], [this.x,this.y+1], [this.x+1,this.y+1], [this.x,this.y]],       // T
      [[this.x,this.y+1], [this.x+1,this.y+1], [this.x+2,this.y+1], [this.x+3,this.y+1]],   // I
      [[this.x,this.y+1], [this.x+1,this,y+1], [this.x+1,this.y], [this.x+1,this.y-1]],     // L
      [[this.x+1,this.y+1], [this.x,this.y+1], [this.x,this.y], [this.x,this.y-1]],         // J    
      [[this.x-1,this.y], [this.x,this.y], [this.x,this.y+1], [this.x+1,this.y+1]],         // S
      [[this.x+1,this.y], [this.x,this.y], [this.x,this.y+1], [this.x-1,this.y+1]],         // Z
   
      [[this.x,this.y+1], [this.x,this.y], [this.x,this.y-1], [this.x+1,this.y+0]],         // T
      [[this.x+2,this.y+2], [this.x+2,this.y+1], [this.x+2,this.y], [this.x+2,this.y-1]],   // I
      [[this.x-1,this.y], [this.x,this,y], [this.x+1,this.y], [this.x+1,this.y+1]],         // L
      [[this.x+1,this.y], [this.x+1,this.y+1], [this.x,this.y+1], [this.x-1,this.y+1]],     // J    
      [[this.x+1,this.y], [this.x+1,this.y+1], [this.x,this.y+1], [this.x,this.y+2]],       // S
      [[this.x,this.y], [this.x,this.y+1], [this.x+1,this.y+1], [this.x+1,this.y+2]]        // Z
    ];
  }

  randomPlacement () {
    const randomBorder = Math.floor(Math.random()*4);
    const randomPlaceOverBorder = Math.floor(Math.random()*(this.GRID_SIZE-3) + 2);
    randomBorder === 0 ? (this.x = randomPlaceOverBorder, this.y = -2) : 
    randomBorder === 1 ? (this.x = this.GRID_SIZE + 2, this.y = randomPlaceOverBorder) : 
    randomBorder === 2 ? (this.x = randomPlaceOverBorder, this.y = this.GRID_SIZE + 2) :
    (this.x = -2, this.y = randomPlaceOverBorder);
    this.piece = this.allPieces[Math.floor(Math.random()*this.allPieces.length)];
    
  }

  paint () {
    const context = this.game.context;

  }
}