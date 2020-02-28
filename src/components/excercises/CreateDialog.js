import React from "react";

import {
  Button,
  Fab,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import { Add as AddIcon } from "@material-ui/icons";

import Form from "./Form";

const styles = {
  title: {
    padding: "20px 20px 10px"
  },
  actions: {
    padding: "20px 10px"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    minWidth: 500,
    "& > *": {
      marginBottom: 15
    },
    padding: "10px 20px"
  }
};

class CreateDialog extends React.Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      group: ""
    }
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  handleSubmit = exercise => {
    // todo: add validation

    const { onCreate } = this.props;

    this.setState({
      open: false
    });

    onCreate(exercise);
  };

  render() {
    const { groups, classes } = this.props;

    const { open } = this.state;

    return (
      <React.Fragment>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          onClick={this.handleOpen}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle className={classes.title} id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent className={classes.content}>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <Form groups={groups} onSubmit={this.handleSubmit} />
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CreateDialog);
