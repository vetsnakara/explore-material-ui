import React from "react";

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

import Form from "./Form";

const style = {
  Container: { margin: "5px -10px" },
  Paper: { padding: 10, height: 400, overflowY: "auto" }
};

export default ({
  exercises,
  groups,
  selectedGroup,
  selectedExercise,
  selectedExercise: {
    title = "Welcome!",
    description = "Please, select exercise."
  },
  onSelect,
  onDelete,
  onEditSelect,
  onEdit,
  editMode
}) => {
  return (
    <Grid container spacing={2} style={style.Container}>
      <Grid item xs={12} sm>
        <Paper style={style.Paper}>
          {exercises.map(([group, exercises]) =>
            !selectedGroup || group === selectedGroup ? (
              <Box key={group}>
                <Typography
                  variant="body1"
                  style={{ textTransform: "capitalize" }}
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
                        <IconButton onClick={() => onEditSelect(exercise.id)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => onDelete(exercise.id)}>
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

      <Grid item xs={12} sm>
        <Paper style={style.Paper}>
          {editMode ? (
            <Form
              initState={selectedExercise}
              groups={groups}
              onSubmit={onEdit}
            />
          ) : (
              <React.Fragment>
                <Typography variant="h4" style={{ marginBottom: 15 }}>
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
