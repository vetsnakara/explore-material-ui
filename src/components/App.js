import React from "react";
import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Header, Footer } from "./layout";
import Exercises from "./excercises";

import { groups, exercises } from "../store";

import { Provider } from "../context";

const GlobalStyles = withStyles({
  "@global": {
    "html, body, #root": {
      height: "100%"
    },
    "#root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }
})(() => null);

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

  handleGroupSelect = selectedGroup => {
    this.setState(state => ({
      ...state,
      selectedGroup
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
        exercise.id === editedExercise.id ? editedExercise : exercise
      ),
      exercise: editedExercise,
      editMode: false
    }));
  };

  handleExerciseDelete = id => {
    if (!window.confirm("Are you sure?")) return;

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

  getContext = () => ({
    ...this.state,
    groups,
    exercisesByGroup: this.getExercisesByGroup(),
    onCreate: this.handleExerciseAdd,
    onSelect: this.handleExerciseSelect,
    onDelete: this.handleExerciseDelete,
    onEditSelect: this.handleExerciseEditSelect,
    onEdit: this.handleExerciseEdit,
    onGroupSelect: this.handleGroupSelect
  });

  render() {
    return (
      <Provider value={this.getContext()}>
        <CssBaseline />
        <GlobalStyles />

        <Header />

        <Exercises />

        <Footer />
      </Provider>
    );
  }
}

export default App;
