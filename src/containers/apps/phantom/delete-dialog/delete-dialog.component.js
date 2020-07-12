import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class DeleteDialog extends React.Component {
  handleCancel = () => {
    this.props.onClose(null);
  };

  handleDelete = () => {
    this.props.onClose(this.props.job);
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleCancel}
        aria-labelledby="confirm-delete-dialog-title"
        aria-describedby="confirm-delete-dialog-description"
      >
        <DialogTitle id="confirm-delete-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-delete-dialog-description">
            Are you sure you want to delete this job?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DeleteDialog.defaultProps = {
  job: null
};

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  job: PropTypes.shape({}),
  onClose: PropTypes.func.isRequired
};

export default DeleteDialog;
