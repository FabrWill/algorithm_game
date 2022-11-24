import LatLng from "../abstracts/LatLng";
import Settings from "./Settings";

export default class Apple extends LatLng {
    x = 480;
    y = 480;


    render(context: CanvasRenderingContext2D) {
        context.fillStyle = "red";
        const snakeSize = new Settings().gridSize -1;

        context.fillRect(
          this.x,
          this.y,
          snakeSize - 1,
          snakeSize - 1
        );
    }
}