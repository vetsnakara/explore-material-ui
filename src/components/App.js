import React from "react";
import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Header, Footer } from "./layout";
import Exercises from "./excercises";

import { groups, exercises } from "../store";

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

  render() {
    const exercises = this.getExercisesByGroup();
    const { group, exercise, editMode } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <GlobalStyles />

        <Header
          ref={this.appBarRef}
          groups={groups}
          onExerciseAdd={this.handleExerciseAdd}
        />

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
      </React.Fragment>
    );
  }
}

export default App;
