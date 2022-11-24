import { height } from "@mui/system";
import React, { useRef, useEffect } from "react";
import SnakeCode from "./SnakeCode";

interface Props {}

const SnakeArea: React.FC<Props> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let snakeGame: any;

  useEffect(() => {
    if (canvasRef.current == null) {
      return;
    }

    snakeGame = new SnakeCode(canvasRef.current!);

    snakeGame.start();
  }, [canvasRef]);

  return (
    <>
      <canvas
        style={{ position: "absolute", top: "25px" }}
        width={896}
        height={896}
        id="game"
        ref={canvasRef}
      ></canvas>
      <div style={{ width: "897px", height: "897px", position: "absolute", top: "24px" }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {" "}
          \
          <defs>
            {" "}
            \
            <pattern
              id="smallGrid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              {" "}
              \
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="gray"
                stroke-width="0.5"
              />{" "}
              \
            </pattern>{" "}
            \
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              {" "}
              \
              <rect width="80" height="80" fill="url(#smallGrid)" /> \
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="gray"
                stroke-width="1"
              />{" "}
              \
            </pattern>{" "}
            \
          </defs>{" "}
          \
          <rect width="100%" height="100%" fill="url(#smallGrid)" /> \
        </svg>
      </div>
    </>
  );
};

export default SnakeArea;
