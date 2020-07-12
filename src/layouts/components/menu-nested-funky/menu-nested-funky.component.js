import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom/';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import themeStyles from './menu-nested-funky.theme.style';


const MenuNestedFunky = (props) => {
  const {
    classes,
    menu,
    onClose
  } = props;

  return (
    <Drawer
      variant="temporary"
      open={menu !== null}
      classes={{
        paper: classes.categoryListPaper,
        docked: classes.fullHeight
      }}
      onClose={onClose}
      anchor="left"
    >
      <AppBar
        color="default"
        position="static"
      >
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            {menu && menu.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.drawerInner}>
        <List component="nav" className={classNames(classes.list, classes['portal-category-list'])}>
          {menu && menu.children && menu.children.map(item => (
            <ListItem
              className={classes['portal-category-list__item']}
              title={item.title}
              key={item.title}
              to={item.href}
              component={NavLink}
              activeClassName={classes['portal-category-list__item--active']}
              button
              disableGutters
            >
              {item.icon && <span className={classes.listIcon}>{item.icon}</span>}
              <Typography
                variant="button"
                color="inherit"
                className={classes['portal-category-list__item__text']}
              >
                {item.title}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
      <AppBar
        color="default"
        position="static"
      >
        <Toolbar disableGutters>
          <span className="portal-flex" />
          <IconButton><InfoIcon /></IconButton>
        </Toolbar>
      </AppBar>
    </Drawer>
  );
};

MenuNestedFunky.defaultProps = {
  menu: null
};

MenuNestedFunky.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  menu: PropTypes.shape({}),
  onClose: PropTypes.func.isRequired
};

export default withStyles(themeStyles, { withTheme: true })(MenuNestedFunky);
