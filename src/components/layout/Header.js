import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="body1">Exercise database</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
