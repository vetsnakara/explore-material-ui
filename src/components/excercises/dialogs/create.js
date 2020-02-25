import React from "react";

import {
  Button,
  Fab,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import { Add as AddIcon } from "@material-ui/icons";

const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    minWidth: 500,
    "& > *": {
      marginBottom: 15
    }
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

  handleChange = name => ({ target: { value } }) => {
    this.setState(state => ({
      ...state,
      exercise: {
        ...state.exercise,
        [name]: value
      }
    }));
  };

  handleSubmit = () => {
    // todo: add validation

    const { exercise } = this.state;
    const { onCreate } = this.props;

    this.setState({
      open: false,
      exercise: {
        title: "",
        description: "",
        group: ""
      }
    });

    onCreate(exercise);
  };

  render() {
    const { groups, classes } = this.props;

    const {
      open,
      exercise: { title, description, group }
    } = this.state;

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
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent className={classes.content}>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              onChange={this.handleChange("title")}
              value={title}
            />

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Group</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={group}
                onChange={this.handleChange("group")}
              >
                {groups.map(group => (
                  <MenuItem key={group} value={group}>
                    {group}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              onChange={this.handleChange("description")}
              value={description}
              multiline
              rows={4}
            />
          </DialogContent>

          <DialogActions>
            <Button
              onClick={this.handleSubmit}
              color="primary"
              variant="outlined"
            >
              Add
            </Button>
            <Button
              onClick={this.handleClose}
              color="secondary"
              variant="outlined"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CreateDialog);
