import ImageCanvas from './image';
import Events from './events';

class Board {
  constructor(boardCanvas, imageCanvas) {
    this.board = boardCanvas;
    this.board.width = window.innerWidth;
    this.board.height = window.innerHeight;

    this.image = new ImageCanvas(imageCanvas);
    this.imageOffset = { x: 0, y: 0 };

    this.initEvents();
  }

  initEvents() {
    Events.keyStream
      .filter(e => e.key === 'h')
      .subscribe((e) => {
        console.log(e.key);
        this.imageOffset.x--;
        this.redraw();
      });

    Events.keyStream
      .filter(e => e.key === 'l')
      .subscribe((e) => {
        console.log(e.keyCode);
        this.imageOffset.x++;
        this.redraw();
      });

    Events.keyStream
      .filter(e => e.key === 'U')
      .subscribe((e) => {
        console.log(e.key);
        const ctx = this.board.getContext('2d');

        ctx.scale(2, 2);
        this.redraw();
      });
  }

  load() {
    this.image.load('https://mdn.mozillademos.org/files/5397/rhino.jpg')
      .then(() => {
        const ctx = this.board.getContext('2d');

        ctx.drawImage(
          this.image.canvas,
          this.imageOffset.x,
          this.imageOffset.y,
          this.image.canvas.width,
          this.image.canvas.height,
        );
      });
  }

  redraw() {
    const ctx = this.board.getContext('2d');

    ctx.clearRect(0, 0, this.board.width, this.board.height);
    ctx.drawImage(
      this.image.canvas,
      this.imageOffset.x,
      this.imageOffset.y,
      this.image.canvas.width,
      this.image.canvas.height,
    );
  }
}

export default Board;
