class ImageCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  load(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    })
      .then((image) => {
        this.canvas.width = image.width;
        this.canvas.height = image.height;

        const ctx = this.canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);
      });
  }
}

export default ImageCanvas;
