import { useState } from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import CodeArea from "../components/code_area/CodeArea";
import SnakeArea from "../components/snake_area/SnakeArea";

function App() {
  return (
      <Grid container>
        <Grid item xs={6}>
          <CodeArea />
        </Grid>
        <Grid item xs={6}>
          <SnakeArea />
        </Grid>
      </Grid>
  );
}

export default App;
