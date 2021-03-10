const getDataImageWithChangeBrightness = (canvas, coefficient) => {
  const canvasContext = canvas.getContext('2d');
  const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const R = i;
    const G = i + 1;
    const B = i + 2;

    data[R] += coefficient;
    data[G] += coefficient;
    data[B] += coefficient;
  }
  return imageData;
}

const brightnessConst = 50;

const image = new Image();
image.src = './image.jpg';


const originalImageCanvas = document.querySelector('#original-image');
const brightnessImageCanvas = document.querySelector('#brightness-image');

const originalImageCanvasContext = originalImageCanvas.getContext('2d');
const brightnessImageCanvasContext = brightnessImageCanvas.getContext('2d');

image.addEventListener('load', () => {
  originalImageCanvas.height = image.height;
  originalImageCanvas.width = image.width;

  brightnessImageCanvas.height = image.height;
  brightnessImageCanvas.width = image.width;

  originalImageCanvasContext.drawImage(image, 0, 0);

  const brightnessDataImage = getDataImageWithChangeBrightness(originalImageCanvas, brightnessConst);
  brightnessImageCanvasContext.putImageData(brightnessDataImage, 0, 0);
});
