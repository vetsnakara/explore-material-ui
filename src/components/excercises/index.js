import React from "react";
import { compose } from "recompose";

import { withContext } from "../../context";

import {
  Grid,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";

import Form from "./Form";

const styles = theme => ({
  container: {
    width: "100%",
    height: 0,
    flexGrow: 1
  },

  item: {
    height: "100%",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  },

  paper: {
    padding: theme.spacing(2),
    minHeight: "100%"
  },

  groupTitle: {
    textTransform: "capitalize"
  }
});

const Exercises = ({
  classes,
  exercisesByGroup,
  groups,
  editMode,
  selectedGroup,
  exercise: selectedExercise,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please, select exercise."
  },
  onSelect,
  onDelete,
  onEditSelect,
  onEdit
}) => {
  return (
    <Grid className={classes.container} container spacing={2} justify="center">
      <Grid className={classes.item} item xs={12} sm={6}>
        <Paper className={classes.paper}>
          {exercisesByGroup.map(([group, exercises]) =>
            !selectedGroup || group === selectedGroup ? (
              <Box key={group}>
                <Typography
                  className={classes.groupTitle}
                  variant="body1"
                  color="secondary"
                >
                  {group}
                </Typography>
                <List component="ul" aria-label="main mailbox folders">
                  {exercises.map(exercise => (
                    <ListItem
                      key={exercise.id}
                      button
                      onClick={() => onSelect(exercise.id)}
                    >
                      <ListItemText primary={exercise.title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          color="secondary"
                          onClick={() => onEditSelect(exercise.id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="secondary"
                          onClick={() => onDelete(exercise.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid className={classes.item} item xs={12} sm={6}>
        <Paper className={classes.paper}>
          {editMode ? (
            <Form
              key={id}
              initState={selectedExercise}
              groups={groups}
              onSubmit={onEdit}
              submitButtonText="Edit"
            />
          ) : (
            <React.Fragment>
              <Typography variant="h4" color="secondary">
                {title}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </React.Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default compose(withContext, withStyles(styles))(Exercises);
