import Board from './board';

class Tectonic {
  constructor() {
    const imageCanvas = document.getElementById('image');
    const boardCanvas = document.getElementById('board');
    this.board = new Board(boardCanvas, imageCanvas);
  }

  run() {
    this.board.load();
  }
}

export default Tectonic;
