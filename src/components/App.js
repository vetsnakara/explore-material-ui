import React from "react";

import { Header, Footer } from "./layout";
import Exercises from "./excercises";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>

        <Exercises />

        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
