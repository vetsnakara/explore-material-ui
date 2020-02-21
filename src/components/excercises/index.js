import React from "react";

import {
  Grid,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const style = {
  Container: { margin: "5px -10px" },
  Paper: { padding: 10, height: 400, overflowY: "auto" }
};

export default ({
  exercises,
  selectedGroup,
  selectedExercise: {
    id,
    title = "Welcome!",
    description = "Please, select exercise."
  } = {},
  onSelect
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
          <Typography variant="h4" style={{ marginBottom: 15 }}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
