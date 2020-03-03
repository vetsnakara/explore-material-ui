import React from "react";
import CreateDialog from "../excercises/CreateDialog";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    flexGrow: 1
  }
});

const Header = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="body1">
          Exercise database
        </Typography>
        <CreateDialog />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
