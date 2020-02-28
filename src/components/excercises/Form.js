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

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: 15
    }
  }
};

class Form extends React.Component {
  state = this.props.initState || {
    title: "",
    description: "",
    group: ""
  };

  static getDerivedStateFromProps = (props, state) => {
    if (!props.initState || props.initState === state) return null;
    return props.initState;
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  };

  handleSubmit = () => this.props.onSubmit(this.state);

  render() {
    const { groups, classes } = this.props;
    const { title, description, group } = this.state;

    return (
      <form className={classes.root}>
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

        <Button onClick={this.handleSubmit} color="primary" variant="outlined">
          Add
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
