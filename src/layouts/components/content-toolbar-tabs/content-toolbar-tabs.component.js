import React from 'react';
import PropTypes from 'prop-types';

// Material components
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom/';

import styles from './content-toolbar-tabs.style';

const menuItems = [{
  title: 'Dashboard',
  href: '/'
}, {
  title: 'Theming',
  href: '/theming'
}, {
  title: 'Email',
  href: '/apps/email'
}, {
  title: 'Todo',
  href: '/apps/todo'
}];

const ContentToolbarTabs = props => (
  <Toolbar classes={{ root: props.classes.toolbarClass }}>
    {menuItems.map(item => (
      item.href &&
        <Button
          className={props.classes.menuItem}
          key={item.title}
          exact
          activeClassName={props.classes.activeMenuItem}
          component={NavLink}
          to={item.href}
        >
          {item.title}
        </Button>
    ))}
  </Toolbar>
);


ContentToolbarTabs.propTypes = {
  classes: PropTypes.shape({
    toolbarClass: PropTypes.string.isRequired,
    menuItem: PropTypes.string.isRequired,
    activeMenuItem: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(ContentToolbarTabs);
