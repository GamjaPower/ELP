import React from 'react';
import PropTypes from 'prop-types';

// import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import ResultWidget from './components/result-widget/result-widget.component';

import styles from './analytics.style';


const Analytics = (props) => {
  
  const { classes } = props;
  return (
    <div className={classes.portalDashboardPageWrapper}>
      {/* <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>
          <Grid key={4} item xs={12} sm={12} md={12} className={classes.portalWidget}> */}
              <ResultWidget location={props.location} history={props.history}/> {/*  classes={this.props}  */}
          {/* </Grid>
        </Grid>
      </Grid> */}
    </div>
  );
};

Analytics.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Analytics);
