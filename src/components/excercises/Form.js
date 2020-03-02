import React from "react";

import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2)
  }
});

class Form extends React.Component {
  state = this.props.initState || {
    title: "",
    description: "",
    group: ""
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { classes, groups, submitButtonText = "OK" } = this.props;
    const { title, description, group } = this.state;

    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
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

        <FormControl>
          <InputLabel id="select-label">Group</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={group}
            onChange={this.handleChange("group")}
            fullWidth
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

        <Button
          className={classes.submitButton}
          type="submit"
          color="primary"
          variant="outlined"
          disabled={!title || !group}
        >
          {submitButtonText}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
