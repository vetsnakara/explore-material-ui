import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Form from "./Form";
import DialogContainer from "./Dialog"
import AddButton from "./AddButton"

const styles = {
  title: {
    padding: "20px 20px 10px"
  },

  content: {
    display: "flex",
    flexDirection: "column",
    minWidth: 400,
    "& > *": {
      marginBottom: 15
    },
    padding: "10px 20px"
  }
};

const Dialog = withStyles(styles)(DialogContainer);

const CreateDialog = ({ groups, onCreate }) => {
  const handleSubmit = onClose => exercise => {
    onClose();
    onCreate(exercise);
  }

  return (
    <Dialog
      title="Add new Exercise"
      subtitle="Please, fill out the form below"
      openButton={AddButton}
    >
      {onClose =>
        <Form
          groups={groups}
          onSubmit={handleSubmit(onClose)}
          submitButtonText="Create"
        />
      }
    </Dialog>
  )
};

export default CreateDialog;
