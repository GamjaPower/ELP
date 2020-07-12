import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import themeStyles from './404.theme.style';
import scss from './404.module.scss';

const Error404 = (props) => {
  const {
    classes
  } = props;

  return (
    <div className={classes.background}>
      <Card className={scss.card} raised>
        <CardContent className={scss['card-content']}>
          <Typography variant="headline" component="h2" gutterBottom>
            Page Not Found
          </Typography>
          <Typography className={scss['card-text']}>
            Sorry the page you were looking for could not be found.
          </Typography>
          <Input
            className={scss['card-search-input']}
            placeholder="Search Portal"
            endAdornment={<SearchIcon />}
          />
        </CardContent>
        <CardActions className={scss['card-actions']}>
          <Button href="/">Go Home</Button>
        </CardActions>
      </Card>
    </div>
  );
};


Error404.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(Error404);
