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

  handleGroupSelect = group => {
    this.setState(state => ({
      ...state,
      group
    }));
  };

  handleExerciseSelect = id => {
    this.setState(state => ({
      ...state,
      exercise: state.exercises.find(exercise => exercise.id === id)
    }));
  };

  handleExerciseAdd = exercise => {
    this.setState(state => ({
      ...state,
      exercises: [
        ...state.exercises,
        {
          id: exercise.title.toLowerCase().replace(/ /g, "-"),
          ...exercise
        }
      ]
    }));
  };

  render() {
    const exercises = this.getExercisesByGroup();
    const { group, exercise } = this.state;

    return (
      <Container>
        <Header groups={groups} onExerciseAdd={this.handleExerciseAdd} />

        <Exercises
          exercises={exercises}
          selectedGroup={group}
          selectedExercise={exercise}
          onSelect={this.handleExerciseSelect}
        />

        <Footer
          selectedGroup={group}
          groups={groups}
          onSelect={this.handleGroupSelect}
        ></Footer>
      </Container>
    );
  }
}

export default App;
