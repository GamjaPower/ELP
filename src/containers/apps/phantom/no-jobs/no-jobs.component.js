import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

import themeStyles from './no-jobs.theme.style';
import scss from './no-jobs.module.scss';

const NoMessages = (props) => {
  const { classes } = props;

  return (
    <div className={classNames(scss['portal-email-no-messages'], classes['portal-email-no-messages'])}>
      
      <Typography component="h2">Please select TLP</Typography>
    </div>
  );
};


NoMessages.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(NoMessages);
