import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import CategoriesNav from './phantom-categories/phantom-categories.component';
import { withStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';
import TrafficIcon from '@material-ui/icons/Traffic';
import NoJobs from './no-jobs/no-jobs.component';
import Jobs from './jobs/jobs.component';

import ComposeDialog from './compose-dialog/compose-dialog.component';

import themeStyles from './phantom.theme.style';
import scss from './phantom.module.scss';

import { getPhantomJobList } from '../../../actions/search.actions';
import { postPhantomJob } from '../../../actions/search.actions';
import { putPhantomJob } from '../../../actions/search.actions';
import { deletePhantomJob } from '../../../actions/search.actions';

const emailCategories = [{
  name: 'TLP:RED',
  icon: <TrafficIcon style={{fill: "#FF0033"}} />,
  list: 'RED',
  count: 24
}, {
  name: 'TLP:AMBER',
  icon: <TrafficIcon style={{fill: "#FFC000"}} />,
  list: 'AMBER',
  count: 2
}, {
  name: 'TLP:GREEN',
  icon: <TrafficIcon style={{fill: "#37C000"}} />,
  list: 'GREEN',
  count: 1
}, {
  name: 'TLP:WHITE',
  icon: <TrafficIcon style={{fill: "#FFFFFF"}} />,
  list: 'WHITE',
  count: 0
}];



class Phantom extends Component {

  
  state = {
    selectedCategory: emailCategories[0],
    composeDialogOpen: false
  };

  static defaultProps = {
    joblist: []
  }  
  // constructor() {
  //   super();
  // }

  selectCategory = category => () => {
    this.setState({
      selectedCategory: category,
    });

    this.props.getPhantomJobList(category.list);

  };
  
  
  componentDidMount(){
    this.props.getPhantomJobList("RED");
  }  
  deleteJob = (job) => {
    this.props.deletePhantomJob(job);
  }

  editJob = (job) => {
    this.props.putPhantomJob(job);

    let idx = 0; 
    if( job.sensitivity === "RED" ) { 
      idx = 0 
    } else if ( job.sensitivity === "AMBER" ) {  
      idx = 1
    } else if ( job.sensitivity === "GREEN" ) {  
      idx = 2
    } else if ( job.sensitivity === "WHITE" ) {  
      idx = 3
    }
    this.setState({
      selectedCategory: emailCategories[idx]
    });    
        
  }

  onReply() { 
    
  }

  openComposeDialog = (job) => {
    this.setState({
      composeDialogOpen: true,      
    });
  }

  sendJob = (job) => {
    this.setState({
      composeDialogOpen: false
    });    
    if (!job) {
      return;
    }
    
    this.props.postPhantomJob(job);
    let idx = 0; 
    if( job.sensitivity === "RED" ) { 
      idx = 0 
    } else if ( job.sensitivity === "AMBER" ) {  
      idx = 1
    } else if ( job.sensitivity === "GREEN" ) {  
      idx = 2
    } else if ( job.sensitivity === "WHITE" ) {  
      idx = 3
    }
    this.setState({
      selectedCategory: emailCategories[idx]
    });    
    
    

  }  


  render() {
    const { classes, width } = this.props;
    const anchor = 'left';

    const composeButton = (
      <Button
        variant="fab"
        color="secondary"
        aria-label="compose"
        className={scss['portal-phantom-compose-fab']}
        onClick={() => this.openComposeDialog()}
      >
        <AddIcon className={classes['portal-email-compose-fab__icon']} />
      </Button>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
        <CategoriesNav
            categories={emailCategories}
            selectedCategory={this.state.selectedCategory}
            onSelect={this.selectCategory}
          />
                 
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], 'portal-hide-scrollbars', {
              [classes.contentShift]: (isWidthUp('md', width)),
              [classes[`contentShift-${anchor}`]]: isWidthUp('md', width)
            })}
          >
            {this.props.joblist ?
              <Jobs
                jobs={this.props.joblist}
                onDeleteJob={this.deleteJob}
                onEditJob={this.editJob}
                onReply={this.onReply}
              /> : <NoJobs />}
            {composeButton}
          </main>         
          <ComposeDialog
            open={this.state.composeDialogOpen}
            title={this.state.composeDialogTitle}
            message={this.state.composedMessage}
            onClose={this.sendJob}
          />

        </div>
       
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    joblist: state.search.joblist || [],
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    getPhantomJobList: (sensitivity) => dispatch(getPhantomJobList(sensitivity)),
    postPhantomJob: (phantomJob) => dispatch(postPhantomJob(phantomJob)),
    putPhantomJob: (phantomJob) => dispatch(putPhantomJob(phantomJob)),
    deletePhantomJob: (phantomJob) => dispatch(deletePhantomJob(phantomJob))
  };
}

Phantom = connect(mapStateToProps, mapDispatchToProps)(Phantom);

Phantom.propTypes = {
    classes: PropTypes.shape({}).isRequired,
};

export default withStyles(themeStyles)(Phantom);

