import Apple from "../../../domain/entities/Apple";
import Snake from "../../../domain/entities/Snake";

export default class snakeCode {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  apple: Apple = new Apple();
  snake: Snake = new Snake();

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d")!;
  }

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d")!;
  }

  start() {
    this.apple.render(this.context);
    this.snake.render(this.context);
  }
}