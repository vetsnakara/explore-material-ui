import React from "react";
import ReactDOM from "react-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { red, amber } from "@material-ui/core/colors";

import App from "./components/App";

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
