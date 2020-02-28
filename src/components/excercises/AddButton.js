import React from 'react';

import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const AddButton = ({ onClick }) => {
  return (
    <Fab
      size="small"
      color="secondary"
      aria-label="add"
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
}

export default AddButton;