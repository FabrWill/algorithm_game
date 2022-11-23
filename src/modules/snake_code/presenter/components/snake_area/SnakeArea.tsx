import { height } from "@mui/system";
import React, { useRef, useEffect } from "react";
import SnakeCode from "./SnakeCode";
import { snakeBlocks } from "./SnakeStyles";

interface Props {}

const SnakeArea: React.FC<Props> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let snakeGame: any;

  const bodyGrid = [];

  for (let index = 0; index < 64; index++) {
    bodyGrid.push(<div style={snakeBlocks} />);
  }

  useEffect(() => {
    if (canvasRef.current == null) {
      return;
    }

    console.log("tamo aqui");

    snakeGame = new SnakeCode(canvasRef.current!);

    console.log("criou o loop");

    snakeGame.createLoop();
  }, [canvasRef]);

  return (
    <>
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexWrap: "wrap",
          height: "660px",
          width: "660px",
          position: "absolute",
          justifyContent: "space-between",
        }}
      >
        {bodyGrid}
      </div>
      <canvas width={660} height={660} id="game" ref={canvasRef}></canvas>
    </>
  );
};

export default SnakeArea;
