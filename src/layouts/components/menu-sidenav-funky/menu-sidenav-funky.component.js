import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { NavLink } from 'react-router-dom/';

import styles from './menu-sidenav-funky.style';

import { menuItems } from '../../../config';

const MenuSidenavFunky = (props) => {
  const { classes, onSelect } = props;

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.content}>
        <List className={classes.list}>
          {menuItems.map((item) => {
            const listAttrs = {};
            const buttonAttrs = {};
            if (item.href) {
              listAttrs.exact = true;
              listAttrs.activeClassName = classes.listItemActive;
              listAttrs.component = NavLink;
              listAttrs.to = item.href;
            }
            if (item.children) {
              buttonAttrs.onClick = onSelect(item);
            }
            return item.href || item.children ? (
              <ListItem
                className={classes.listItemRoot}
                disableGutters
                key={item.title}
                {...listAttrs}
              >
                <Button
                  classes={{
                    root: classes.listItem,
                    label: classes.listItemButtonLabel
                  }}
                  {...buttonAttrs}
                >
                  {item.icon && <span className={classes.listIcon}>{item.icon}</span>}
                  <Typography variant="button" color="inherit" className={classes.listItemText}>{item.title}</Typography>
                </Button>
              </ListItem>
            ) : null;
          })}
        </List>
      </div>
    </div>
  );
};

MenuSidenavFunky.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default withStyles(styles)(MenuSidenavFunky);
