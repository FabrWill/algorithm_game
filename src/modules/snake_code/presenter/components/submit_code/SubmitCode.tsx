import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, {useContext, useEffect} from "react";

interface Props {
    cantSubmit: boolean;
    onClick: Function;
}

const SubmitCode: React.FC<Props> = ({ cantSubmit, onClick }) => {
  return (
    <Button
      variant="contained"
      color="success"
      style={{
        position: "absolute",
        top: "2vh",
        left: "37vw",
      }}
      onClick={() => onClick()}
      disabled={cantSubmit}
    >
      <span
        style={{
          padding: "2px 48px",
        }}
      >
        Enviar
      </span>
    </Button>
  );
};

export default SubmitCode;
