class Grid {
  constructor (game) {
    this.game = game;
  }

  paint () {
    const context = this.game.context;
    const CELL_SIZE = this.game.CELL_SIZE;
    const GRID_SIZE = this.game.GRID_SIZE;
    for (let x = 1; x < GRID_SIZE/2; x++) {
        context.save();
        context.lineWidth = 0.7;
        context.strokeStyle = 'colors.darkBrown';
        context.beginPath();
        context.setLineDash([1,9]);
      
        context.moveTo(x*CELL_SIZE, 0);
        context.lineTo(x*CELL_SIZE, CELL_SIZE*GRID_SIZE/2 - x*CELL_SIZE);
      
        context.moveTo(CELL_SIZE*GRID_SIZE-x*CELL_SIZE, 0);
        context.lineTo(CELL_SIZE*GRID_SIZE-x*CELL_SIZE, CELL_SIZE*GRID_SIZE/2 - x*CELL_SIZE)
      
        context.moveTo(x*CELL_SIZE, CELL_SIZE*GRID_SIZE/2 + x*CELL_SIZE);
        context.lineTo(x*CELL_SIZE, CELL_SIZE*GRID_SIZE);
      
        context.moveTo(CELL_SIZE*GRID_SIZE-x*CELL_SIZE, CELL_SIZE*GRID_SIZE/2 + x*CELL_SIZE);
        context.lineTo(CELL_SIZE*GRID_SIZE-x*CELL_SIZE, CELL_SIZE*GRID_SIZE)
      
        context.moveTo(0, x*CELL_SIZE);
        context.lineTo(CELL_SIZE*GRID_SIZE/2 - x*CELL_SIZE, x*CELL_SIZE);

        context.moveTo(0, CELL_SIZE*GRID_SIZE - x*CELL_SIZE);
        context.lineTo(CELL_SIZE*GRID_SIZE/2 - x*CELL_SIZE, CELL_SIZE*GRID_SIZE - x*CELL_SIZE);
      
        context.moveTo(CELL_SIZE*GRID_SIZE/2 + x*CELL_SIZE, x*CELL_SIZE);
        context.lineTo(CELL_SIZE*GRID_SIZE, x*CELL_SIZE);

        context.moveTo(CELL_SIZE*GRID_SIZE/2 + x*CELL_SIZE, CELL_SIZE*GRID_SIZE - x*CELL_SIZE);
        context.lineTo(CELL_SIZE*GRID_SIZE, CELL_SIZE*GRID_SIZE - x*CELL_SIZE);
        
        context.stroke();
        context.restore();
    }
  }
}