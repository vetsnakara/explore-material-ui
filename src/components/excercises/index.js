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
  Paper: { padding: 10, maxHeight: 400, overflowY: "auto" }
};

export default ({ exercises }) => (
  <Grid container spacing={2} style={style.Container}>
    <Grid item xs={12} sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises]) => (
          <Box key={group}>
            <Typography variant="body1" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>
            <List component="ul" aria-label="main mailbox folders">
              {exercises.map(exercise => (
                <ListItem key={exercise.id}>
                  <ListItemText primary={exercise.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Paper>
    </Grid>
    <Grid item xs={12} sm>
      <Paper style={style.Paper}>
        <Typography variant="h4" style={{ marginBottom: 15 }}>
          Welcome
        </Typography>
        <Typography variant="body2">Please select an exercise.</Typography>
      </Paper>
    </Grid>
  </Grid>
);
