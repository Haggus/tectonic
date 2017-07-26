import ImageCanvas from './image';

class Board {
  constructor(boardCanvas, imageCanvas) {
    this.board = boardCanvas;
    this.board.width = window.innerWidth;
    this.board.height = window.innerHeight;

    this.image = new ImageCanvas(imageCanvas);
  }

  load() {
    this.image.load('https://mdn.mozillademos.org/files/5397/rhino.jpg')
      .then(() => {
        const ctx = this.board.getContext('2d');
        ctx.drawImage(
          this.image.canvas,
          0,
          0,
          this.image.canvas.width,
          this.image.canvas.height,
        );
      });
  }
}

export default Board;
