import React from "react";

import {
  Dialog as MuiDialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

class Dialog extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    const {
      title,
      subtitle,
      children,
      openButton: OpenButton,
      ...restProps
    } = this.props;

    return (
      <React.Fragment>
        <OpenButton onClick={this.handleOpen} />

        <MuiDialog open={open} onClose={this.handleClose} {...restProps}>
          <DialogTitle>{title}</DialogTitle>

          <DialogContent>
            {subtitle && <DialogContentText>{subtitle}</DialogContentText>}
            {children(this.handleClose)}
          </DialogContent>
        </MuiDialog>
      </React.Fragment>
    );
  }
}

export default Dialog;
