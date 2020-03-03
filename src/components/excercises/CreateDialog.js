import React from "react";

import { withContext } from "../../context";

import Form from "./Form";
import Dialog from "./Dialog";
import AddButton from "./AddButton";

const CreateDialog = ({ groups, onCreate }) => {
  const handleSubmit = onClose => exercise => {
    onClose();
    onCreate(exercise);
  };

  return (
    <Dialog
      title="Add new Exercise"
      subtitle="Please, fill out the form below"
      openButton={AddButton}
      fullWidth
      maxWidth="sm"
    >
      {onClose => (
        <Form
          groups={groups}
          onSubmit={handleSubmit(onClose)}
          submitButtonText="Create"
        />
      )}
    </Dialog>
  );
};

export default withContext(CreateDialog);
