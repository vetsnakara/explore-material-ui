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

  handleGroupSelected = group => {
    this.setState(state => ({
      ...state,
      group
    }));
  };

  handleExerciseSelected = id => {
    this.setState(state => ({
      ...state,
      exercise: state.exercises.find(exercise => exercise.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByGroup();
    const { group, exercise } = this.state;

    return (
      <Container>
        <Header></Header>

        <Exercises
          exercises={exercises}
          selectedGroup={group}
          selectedExercise={exercise}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          selectedGroup={group}
          groups={groups}
          onSelect={this.handleGroupSelected}
        ></Footer>
      </Container>
    );
  }
}

export default App;
