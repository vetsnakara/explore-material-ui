import React from "react";

import { Container } from "@material-ui/core";

import { Header, Footer } from "./layout";
import Exercises from "./excercises";

import { groups, exercises } from "../store";

class App extends React.Component {
  state = {
    exercises,
    exercise: {},
    editMode: false
  };

  getExercisesByGroup = () => {
    const groupedExercises = groups.reduce((accumulator, group) => {
      accumulator[group] = this.state.exercises.filter(
        exercise => exercise.group === group
      );
      return accumulator;
    }, {});
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
      exercise: state.exercises.find(exercise => exercise.id === id),
      editMode: false
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

  handleExerciseEdit = editedExercise => {
    this.setState(state => ({
      ...state,
      exercises: state.exercises.map(exercise =>
        exercise.id === editedExercise.id
          ? editedExercise
          : exercise),
      exercise: editedExercise,
      editMode: false
    }))
  }

  handleExerciseDelete = id => {
    this.setState(state => ({
      ...state,
      exercises: state.exercises.filter(exercise => exercise.id !== id),
      exercise: state.exercise.id === id ? {} : state.exercise,
      editMode: state.exercise.id === id ? false : state.editMode
    }));
  };

  handleExerciseEditSelect = id => {
    this.setState(state => ({
      ...state,
      exercise: state.exercises.find(exercise => exercise.id === id),
      editMode: true
    }));
  };

  render() {
    const exercises = this.getExercisesByGroup();
    const { group, exercise, editMode } = this.state;

    return (
      <Container>
        <Header groups={groups} onExerciseAdd={this.handleExerciseAdd} />

        <Exercises
          exercises={exercises}
          groups={groups}
          selectedGroup={group}
          selectedExercise={exercise}
          editMode={editMode}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onEditSelect={this.handleExerciseEditSelect}
          onEdit={this.handleExerciseEdit}
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
