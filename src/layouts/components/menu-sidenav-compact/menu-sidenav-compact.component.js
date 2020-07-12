import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import { NavLink } from 'react-router-dom/';

import styles from './menu-sidenav-compact.style';

import { menuItems } from '../../../config';

class MenuSidenavCompact extends React.Component {
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
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <List className={classes.list}>
            {menuItems.map(item => (
              item.href ?
                <ListItem
                  exact
                  activeClassName={classes.listItemActive}
                  className={classes.listItemRoot}
                  disableGutters
                  component={NavLink}
                  to={item.href}
                  key={item.title}
                >
                  <Button
                    classes={{
                      root: classes.listItem,
                      label: classes.listItemButtonLabel
                    }}
                  >
                    {item.icon && <span className={classes.listIcon}>{item.icon}</span>}
                    <Typography variant="button" color="inherit" className={classes.listItemText}>{item.title}</Typography>
                  </Button>
                </ListItem> :
                item.children &&
                  <ListItem
                    className={classes.listItemRoot}
                    disableGutters
                    key={item.title}
                  >
                    <Button
                      aria-owns={anchor && open === item.title ? item.title : null}
                      aria-haspopup="true"
                      onClick={this.handleClick(item.title)}
                      classes={{
                        root: classes.listItem,
                        label: classes.listItemButtonLabel
                      }}
                    >
                      {item.icon && <span className={classes.listIcon}>{item.icon}</span>}
                      <Typography variant="button" color="inherit" className={classes.listItemText}>{item.title}</Typography>
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
                          activeClassName={classes.listItemActive}
                          component={NavLink}
                          to={child.href}
                          key={child.title}
                          onClick={this.handleClose}
                        >
                          {child.title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

MenuSidenavCompact.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(MenuSidenavCompact);
