class Control {
  constructor (callbacks) {
    this.callbacks = callbacks;
  }

  setKeyBindings () {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if ([ 37, 65, 38, 87, 39, 83, 40, 68, 69, 88, 81, 90 ].includes(key)) {
        event.preventDefault();
        switch (key) {
          case 37:
          case 65:
            this.callbacks.left();
            break;
          case 38:
          case 87:
            this.callbacks.up();
            break;
          case 39:
          case 68:
            this.callbacks.right();
            break;
          case 40:
          case 83:
            this.callbacks.down();
            break;
          case 69:
          case 88:
            this.callbacks.clockwise();
            break;
          case 81:
          case 90:
            this.callbacks.counterClockwise();
            break;
        }
      }
    });
  }
};