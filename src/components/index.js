import React from "react";
import ReactDOM from "react-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, amber } from "@material-ui/core/colors";

import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: amber,
    type: "dark"
  }
});

const rootElement = document.getElementById("root");

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  rootElement
);
