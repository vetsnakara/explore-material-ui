import React from "react";

import { Grid } from "@material-ui/core";

import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = {
  Container: { margin: "5px -10px" },
  Paper: { padding: 10 }
};

export default props => (
  <Grid container spacing={2} style={style.Container}>
    <Grid item xs={12} sm>
      <LeftPane style={style} />
    </Grid>
    <Grid item xs={12} sm>
      <RightPane style={style} />
    </Grid>
  </Grid>
);
