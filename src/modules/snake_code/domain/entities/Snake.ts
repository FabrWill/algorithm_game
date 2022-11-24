import LatLng from "../abstracts/LatLng";
import Settings from "./Settings";

export default class Snake extends LatLng {
    x = 160;
    y = 160;

    size: number = 4;

    track: LatLng[] = [];

    constructor() {
        super();
       
        const gridSize = new Settings().gridSize;

        for (let index = 0; index < 4; index++) {
            
            this.track.unshift(...[{
                x: this.x + gridSize * index,
                y: this.y,
            }]);
        }
    }

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = "green";
        const snakeSize = new Settings().gridSize - 1;

        this.track.forEach((position) => {
            context.fillRect(
                position.x,
                position.y,
                snakeSize,
                snakeSize,
            );
        });
    }
}