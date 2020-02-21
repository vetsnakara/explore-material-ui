import React from "react";

import { Container } from "@material-ui/core";

import { Header, Footer } from "./layout";
import Exercises from "./excercises";

import { groups, exercises } from "../store";

class App extends React.Component {
  state = {
    exercises
  };

  getExercisesByGroup = () => {
    const groupedExercises = this.state.exercises.reduce(
      (exercises, exercise) => {
        const { group } = exercise;

        exercises[group] = exercises[group]
          ? [...exercises[group], exercise]
          : [exercise];

        return exercises;
      },
      {}
    );

    return Object.entries(groupedExercises);
  };

  render() {
    const exercises = this.getExercisesByGroup();

    return (
      <Container>
        <Header></Header>

        <Exercises exercises={exercises} />

        <Footer groups={groups}></Footer>
      </Container>
    );
  }
}

export default App;
