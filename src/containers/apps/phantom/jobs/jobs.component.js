import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import DeleteDialog from '../delete-dialog/delete-dialog.component';
import ComposeDialog from '../compose-dialog/compose-dialog.component';

import themeStyles from './jobs.theme.style';
import scss from './jobs.module.scss';

// import { PhantomJob } from '../../../../actions/search.actions';


class PhantomJob extends React.Component {
  state = {
    deleteDialogOpen: false,
    composeDialogOpen: false,
    selectedJob: null, 

  };

  onConfirmationDialogClose = (job) => {
    this.setState({ deleteDialogOpen: false, selectedJob: job });
    if (job) {
      // this.props.deletePhantomJob(job);
      this.props.onDeleteJob(job)
    }
  }

  onEditJob = job => () => { 
    this.setState({ composeDialogOpen: true, selectedJob: job });
  }
  onComposeClose = (job) => {
    this.setState({ composeDialogOpen: false });
    if( job ) {
      this.props.onEditJob(job);
    }
  };



  openConfirmationDialog = job => () => {
    this.setState({ deleteDialogOpen: true, selectedJob: job });
  }

  replyButtonPressed = (replyType, job) => () => {
    this.props.onReply(replyType, job);
  }

  goSearch = (job) => () => {
    // console.log(job);
    
    window.location.href="/?query="+encodeURIComponent(job.job.spl);;
  }

  render() {
    const { classes, jobs } = this.props;
  
    return (
      <div>
        <Typography
          variant="title"
          key={Date.now()}
          className={scss['portal-phantom-subject']}
        >
        </Typography>
        {jobs.map(job => (
          <Card className={classes['portal-thread']} key={job.key}>
            

            <CardActions className={scss['job-name']} disableActionSpacing>
            {job.name}           
            </CardActions>

            <CardContent>
            
            <Button
              variant="contained" 
              onClick={this.goSearch({job})}
              className={scss['text-transform']} >
              {job.spl}
            </Button>
            {/* <Grid container spacing={3}>
            <Grid item xs={11}>
              <textarea
                // value={this.state.internalText}
                placeholder="Type SPL"
                className={scss['portal-spl-text']}
                value={job.spl}
                disabled
                // onChange={e => this.handleFormFieldChange('spl', e.target.value)}
                onClick={this.goSearch({job})}
              />          
            </Grid>
            <Grid item xs={1}>
               <Button variant="contained" >Search</Button>
            </Grid>
            
            </Grid> */}
                 
           
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
            <FormControl className={scss.formControl}>
              <Select
              value={job.severity}
              onChange={this.handleChange}
              disabled
              input={<Input name="severity" />}>
              <MenuItem value="HIGH">HIGH</MenuItem>
              <MenuItem value="MEDIUM">MEDIUM</MenuItem>
              <MenuItem value="LOW">LOW</MenuItem>
              </Select>
              <FormHelperText>Severity</FormHelperText>
            </FormControl>          
            
            <FormControl className={scss.formControl}>
              <Select
              value={job.sensitivity}
              onChange={this.handleChange}
              disabled
              input={<Input name="sensitivity" />}>
              <MenuItem value="RED">RED</MenuItem>
              <MenuItem value="AMBER">AMBER</MenuItem>
              <MenuItem value="GREEN">GREEN</MenuItem>
              <MenuItem value="WHITE">WHITE</MenuItem>
              </Select>
              <FormHelperText>Sensitivity</FormHelperText>
            </FormControl>

            <FormControl className={scss.formControl}>
            <TextField
              defaultValue={job.crontab}
              disabled
            />
              <FormHelperText>Cron Expression</FormHelperText>
            </FormControl>       

            <FormControl className={scss.formControl}>
              <Select
              value={job.status}
              onChange={this.handleChange}
              disabled
              input={<Input name="status" id="status-helper" />}>
              <MenuItem value="Enable">Enable</MenuItem>
              <MenuItem value="Disable">Disable</MenuItem>
              </Select>
              <FormHelperText>Status</FormHelperText>
            </FormControl>    
            <FormControl className={scss.formControl}>
              <Select
              value={job.label}
              onChange={this.handleChange}
              disabled
              input={<Input name="label" id="status-helper" />}>
              <MenuItem value="Events">Events</MenuItem>
              <MenuItem value="Generator">Generator</MenuItem>
              </Select>
              <FormHelperText>Container Label</FormHelperText>
            </FormControl>    

              <IconButton aria-label="Edit" onClick={this.onEditJob(job)} className={scss.delete}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="Delete" onClick={this.openConfirmationDialog(job)} >
                <DeleteForeverIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
        {<DeleteDialog
          open={this.state.deleteDialogOpen}
          job={this.state.selectedJob}
          onClose={this.onConfirmationDialogClose}
        />}
        <ComposeDialog
          open={this.state.composeDialogOpen}
          job={this.state.selectedJob}
          onClose={this.onComposeClose}
        />        
      </div>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     joblist: state.search.joblist || [],
//   };
// }


// let mapDispatchToProps = (dispatch) => {
//   return {
//     deletePhantomJob: (phantomJob) => dispatch(deletePhantomJob(phantomJob))
//   };
// }

// PhantomJob = connect(mapStateToProps, mapDispatchToProps)(PhantomJob);

PhantomJob.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  // jobs: PropTypes.shape({}).isRequired,
  // onJobDelete: PropTypes.func.isRequired,
  onReply: PropTypes.func.isRequired
};

export default withStyles(themeStyles, { withTheme: true })(PhantomJob);
