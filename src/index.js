import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: amber,
    type: "dark"
  }
});

const rootElement = document.getElementById("root");

import(/* webpackChunkName: "app" */ "./components/App").then(
  ({ default: App }) => {
    ReactDOM.render(
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>,
      rootElement
    );
  }
);
