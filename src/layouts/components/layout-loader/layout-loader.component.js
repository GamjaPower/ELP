import React from 'react';
import PropTypes from 'prop-types';

// Material components
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import themeStyles from './layout-loader.theme.style';

const LayoutLoader = (props) => {
  const {
    classes
  } = props;

  return (
    <div className={classes.loaderWrapper}>
      <CircularProgress className={classes.progress} size={50} />
      Loading...
    </div>
  );
};

LayoutLoader.propTypes = {
  classes: PropTypes.shape({}).isRequired
};


export default withStyles(themeStyles, { withTheme: true })(LayoutLoader);
