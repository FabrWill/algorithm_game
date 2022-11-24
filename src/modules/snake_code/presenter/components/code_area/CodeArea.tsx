import { Button, Container } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import CodeFormatter from "./CodeFormatter";
import "./CodeArea.css";
import SubmitCode from "../submit_code/SubmitCode";
import CodeHandler from "./CodeHandler";

interface Props {}

const CodeArea: React.FC<Props> = ({}) => {
  const codeArea = useRef<HTMLElement>(null);
  const codeFormatter = new CodeFormatter(codeArea.current!);
  const codeHandler = new CodeHandler();
  const [text, setText] = useState<string>();

  useEffect(() => {
    if (codeArea.current == null) {
      return;
    }

    codeFormatter.setCodeArea(codeArea.current);
  }, [codeArea]);

  useEffect(() => {}, [text]);

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
          onInput={(event: any) => {
            codeFormatter.update(event);
            setText(event.target.value);
          }}
          onKeyDown={(event) => codeFormatter.checkTab(event)}
        />

        <SubmitCode cantSubmit={!text} onClick={() => codeHandler.translateText(text || '')}/>

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
