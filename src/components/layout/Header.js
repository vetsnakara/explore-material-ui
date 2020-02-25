import React from "react";

import CreateDialog from "../excercises/dialogs/create";

import { withStyles } from "@material-ui/core";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const styles = {
  title: {
    flexGrow: 1
  }
};

const Header = ({ groups, classes, onExerciseAdd }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="body1">
          Exercise database
        </Typography>
        <CreateDialog groups={groups} onCreate={onExerciseAdd} />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
