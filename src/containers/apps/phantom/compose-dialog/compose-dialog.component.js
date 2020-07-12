import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';



import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';

import scss from './compose-dialog.module.scss';

// const editorOptions = {
//   modules: {
//     toolbar: [
//       ['bold', 'italic', 'underline', 'strike'],
//       ['blockquote', 'code-block'],
//       [{ list: 'ordered' }, { list: 'bullet' }],
//       [{ header: [1, 2, 3, 4, 5, 6, false] }]
//     ]
//   },
//   placeholder: 'insert email content...'
// };

class ComposeDialog extends React.Component {
  state = {
    key: -1,
    name: '',
    spl: '',
    severity: 'HIGH',
    sensitivity: 'RED', 
    status: 'Enable', 
    crontab: '* * * * *',
    label: 'Events'
  };

  handleCancel = () => {
    this.props.onClose(null);
  };

  handleSave = () => {
    this.props.onClose(this.state);
  };

  handleFormFieldChange = (prop, value) => {
    this.setState({ [prop]: value });
  }

  handleEntering = () => {

    if (this.props.job) { 
      this.setState({
        key: this.props.job.key,
        name: this.props.job.name,
        spl: this.props.job.spl,
        severity: this.props.job.severity,
        sensitivity: this.props.job.sensitivity,
        status: this.props.job.status,
        crontab: this.props.job.crontab,
        label: this.props.job.label
      });
    }
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleCancel}
        onEntering={this.handleEntering}
        aria-labelledby="new-mail-dialog"
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={this.state.name}
            onChange={e => this.handleFormFieldChange('name', e.target.value)}
            fullWidth
          />
            <textarea
              // value={this.state.internalText}
              placeholder="Type SPL"
              className={scss['portal-spl-text']}
              value={this.state.spl}
              onChange={e => this.handleFormFieldChange('spl', e.target.value)}
            />          
          <FormControl className={scss.formControl}>
              <Select
              value={this.state.severity}
              onChange={e => this.handleFormFieldChange('severity', e.target.value)}
              input={<Input name="severity" id="severity-helper" />}>
              <MenuItem value="HIGH">HIGH</MenuItem>
              <MenuItem value="MEDIUM">MEDIUM</MenuItem>
              <MenuItem value="LOW">LOW</MenuItem>
              </Select>
              <FormHelperText>Severity</FormHelperText>
            </FormControl>          
            
            <FormControl className={scss.formControl}>
              <Select
              value={this.state.sensitivity}
              onChange={e => this.handleFormFieldChange('sensitivity', e.target.value)}
              input={<Input name="sensitivity" id="sensitivity-helper" />}>
              <MenuItem value="RED">RED</MenuItem>
              <MenuItem value="AMBER">AMBER</MenuItem>
              <MenuItem value="GREEN">GREEN</MenuItem>
              <MenuItem value="WHITE">WHITE</MenuItem>
              </Select>
              <FormHelperText>Sensitivity</FormHelperText>
            </FormControl>    
            <FormControl className={scss.formControl}>
            <TextField
              id="crontab"
              onChange={e => this.handleFormFieldChange('crontab', e.target.value)}
              value={this.state.crontab}
            />
              <FormHelperText>Cron Expression</FormHelperText>
            </FormControl>              
            <FormControl className={scss.formControl}>
              <Select
              value={this.state.status}
              onChange={e => this.handleFormFieldChange('status', e.target.value)}
              input={<Input name="status" id="status-helper" />}>
              <MenuItem value="Enable">Enable</MenuItem>
              <MenuItem value="Disable">Disable</MenuItem>
              </Select>
              <FormHelperText>Status</FormHelperText>
            </FormControl>    
            <FormControl className={scss.formControl}>
              <Select
              value={this.state.label}
              onChange={e => this.handleFormFieldChange('label', e.target.value)}
              input={<Input name="label" id="label-helper" />}>
              <MenuItem value="Events">Events</MenuItem>
              <MenuItem value="Generator">Generator</MenuItem>
              </Select>
              <FormHelperText>Label</FormHelperText>
            </FormControl>              

        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSave} color="primary" autoFocus>
            Save
          </Button>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          

        </DialogActions>
      </Dialog>
    );
  }
}

ComposeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  // job: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ComposeDialog;
