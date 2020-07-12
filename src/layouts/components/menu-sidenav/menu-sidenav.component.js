import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import MenuSidenavItem from '../menu-sidenav-item/menu-sidenav-item.component';
import styles from './menu-sidenav.style';

import { menuItems } from '../../../config';

class MenuSidenav extends React.Component {
  constructNavItems = (itemsArray, classes) => {
    const arr = [];
    itemsArray.forEach((el) => {
      arr.push((
        <MenuSidenavItem
          title={el.title}
          href={el.href}
          key={el.title}
          icon={el.icon}
          type={el.type}
        >
          {el.children && this.constructNavItems(el.children, classes)}
        </MenuSidenavItem>));
    });
    return <List className={classes.list}>{arr}</List>;
  }

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          {this.constructNavItems(menuItems, classes)}
        </div>
      </div>

    );
  }
}

MenuSidenav.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(MenuSidenav);
