export default class SnakeCode {
  canvas: HTMLCanvasElement;
  context: any;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  }

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  }

  createLoop() {
    // start the game
    requestAnimationFrame(() => this.loop(this));
  }

  // the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
  // (e.g. 16 * 25 = 400)
  grid = 16;
  count = 0;

  snake = {
    x: 160,
    y: 160,

    // snake velocity. moves one grid length every frame in either the x or y direction
    dx: 16, //grid
    dy: 0,

    // keep track of all grids the snake body occupies
    cells: [] as any,

    // length of the snake. grows when eating an apple
    maxCells: 4,
  };

  apple = {
    x: 320,
    y: 320,
  };

  // get random whole numbers in a specific range
  // @see https://stackoverflow.com/a/1527820/2124254
  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // game loop
  loop(reference: any) {
    console.log("loop", reference);
    requestAnimationFrame(() => reference.loop(reference));

    // slow game loop to 15 fps instead of 60 (60/15 = 4)
    if (++reference.count < 6) {
      return;
    }

    reference.count = 0;
    reference.context.clearRect(
      0,
      0,
      reference.canvas.width,
      reference.canvas.height
    );

    // move snake by it's velocity
    reference.snake.x += reference.snake.dx;
    reference.snake.y += reference.snake.dy;

    // wrap snake position horizontally on edge of screen
    if (reference.snake.x < 0) {
      reference.snake.x = reference.canvas.width - reference.grid;
    } else if (reference.snake.x >= reference.canvas.width) {
      reference.snake.x = 0;
    }

    // wrap snake position vertically on edge of screen
    if (reference.snake.y < 0) {
      reference.snake.y = reference.canvas.height - reference.grid;
    } else if (reference.snake.y >= reference.canvas.height) {
      reference.snake.y = 0;
    }

    // keep track of where snake has been. front of the array is always the head
    reference.snake.cells.unshift({
      x: reference.snake.x,
      y: reference.snake.y,
    });

    // remove cells as we move away from them
    if (reference.snake.cells.length > reference.snake.maxCells) {
      reference.snake.cells.pop();
    }

    // draw apple
    reference.context.fillStyle = "red";
    reference.context.fillRect(
      reference.apple.x,
      reference.apple.y,
      reference.grid - 1,
      reference.grid - 1
    );

    // draw snake one cell at a time
    reference.context.fillStyle = "green";
    reference.snake.cells.forEach((cell: any, index: any) => {
      // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
      reference.context.fillRect(
        cell.x,
        cell.y,
        reference.grid - 1,
        reference.grid - 1
      );

      // snake ate apple
      if (cell.x === reference.apple.x && cell.y === reference.apple.y) {
        reference.snake.maxCells++;

        // canvas is 400x400 which is 25x25 grids
        reference.apple.x = reference.getRandomInt(0, 25) * reference.grid;
        reference.apple.y = reference.getRandomInt(0, 25) * reference.grid;
      }

      // check collision with all cells after reference one (modified bubble sort)
      for (var i = index + 1; i < reference.snake.cells.length; i++) {
        // snake occupies same space as a body part. reset game
        if (
          cell.x === reference.snake.cells[i].x &&
          cell.y === reference.snake.cells[i].y
        ) {
          reference.snake.x = 160;
          reference.snake.y = 160;
          reference.snake.cells = [];
          reference.snake.maxCells = 4;
          reference.snake.dx = reference.grid;
          reference.snake.dy = 0;

          reference.apple.x = reference.getRandomInt(0, 25) * reference.grid;
          reference.apple.y = reference.getRandomInt(0, 25) * reference.grid;
        }
      }
    });
  }
}
