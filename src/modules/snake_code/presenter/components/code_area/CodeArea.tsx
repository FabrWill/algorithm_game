import { Button, Container } from "@mui/material";
import React, { useRef, useEffect } from "react";
import CodeAreaHandler from "./CodeAreaHandler";
import "./CodeArea.css";

interface Props {}

const CodeArea: React.FC<Props> = ({}) => {
  const codeArea = useRef<HTMLElement>(null);
  const codeAreaHandle = new CodeAreaHandler(codeArea.current!);

  useEffect(() => {
    if (codeArea.current == null) {
      return;
    }

    codeAreaHandle.setCodeArea(codeArea.current);
  }, [codeArea]);

  return (
    <>
      <Container>
        <textarea
          style={{
            padding: "16px 12px",
            fontSize: "1rem",
            fontFamily: "Roboto Mono",
            overflow: "auto",
            outline: "none",
            backgroundColor: "rgb(74 74 74 / 30%)",
            border: "none",
          }}
          spellCheck="false"
          placeholder="Insira o código aqui"
          id="editing"
          onInput={(event) => codeAreaHandle.update(event)}
          onKeyDown={(event) => codeAreaHandle.checkTab(event)}
        />

        <Button
          variant="contained"
          color="success"
          style={{
            position: "absolute",
            top: "2vh",
            left: "37vw",
          }}
          disabled={true}
        >
          <span style={{
            padding: "2px 48px",
          }}>
          Enviar
          </span>
        </Button>

        <pre id="highlighting">
          <code
            className="language-javascript"
            id="highlighting-content"
            ref={codeArea}
          />
        </pre>
      </Container>
    </>
  );
};

export default CodeArea;
