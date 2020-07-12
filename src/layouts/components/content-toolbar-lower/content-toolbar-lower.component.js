import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

// Material components
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { NavLink } from 'react-router-dom/';

import styles from './content-toolbar-lower.style';

import { menuItems } from '../../../config';

// Actions
import { toggleNotifications } from '../../../actions/layout.actions';


class ContentToolbarLower extends React.Component {
  state = { anchor: null, open: null };

  handleClick = title => (event) => {
    this.setState({ anchor: event.currentTarget, open: title });
  };

  handleClose = () => {
    this.setState({ anchor: null, open: null });
  };

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;

    return (
      <Toolbar classes={{ root: classes.toolbarClass }}>
        {menuItems.map(item => (
          item.href ?
            <Button
              className={classes.menuItem}
              key={item.title}
              exact
              activeClassName={classes.activeMenuItem}
              component={NavLink}
              to={item.href}
            >
              {item.title}
            </Button> :
            item.children &&
              <div key={item.title}>
                <Button
                  aria-owns={anchor && open === item.title ? item.title : null}
                  aria-haspopup="true"
                  onClick={this.handleClick(item.title)}
                  classes={{
                    root: classes.menuItem
                  }}
                >
                  {item.title}
                </Button>
                <Menu
                  id={item.title}
                  anchorEl={anchor}
                  open={Boolean(open === item.title)}
                  onClose={this.handleClose}
                >
                  {item.children.map(child => (
                    <MenuItem
                      exact
                      activeClassName={classes.activeMenuItem}
                      component={NavLink}
                      to={child.href}
                      key={child.title}
                      onClick={this.handleClose}
                    >
                      {child.title}
                    </MenuItem>
                  ))}
                </Menu>
                
              </div>
        ))}
<span className="portal-flex" />
        <IconButton
          color="inherit"
          aria-label="open notifications"
          onClick={this.props.toggleNotifications}
        >
          <NotificationsIcon />
        </IconButton>

      </Toolbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    
  };
}


ContentToolbarLower.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  toggleNotifications: PropTypes.func.isRequired,
};

// export default withStyles(styles)(ContentToolbarLower);

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
    toggleNotifications,
  })
)(ContentToolbarLower);

