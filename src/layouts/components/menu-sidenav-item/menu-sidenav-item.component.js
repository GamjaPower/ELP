import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom/';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './menu-sidenav-item.style';

class MenuSidenavItem extends React.Component {
    state = { open: false };

    handleClick = () => {
      this.setState({ open: !this.state.open });
    };

    render() {
      const {
        children, classes, href, title, icon, type
      } = this.props;

      if (type && type === 'header') {
        return (<ListSubheader disableSticky className={classes.root}>{title}</ListSubheader>);
      }

      const listItemAttrs = {};
      if (href && !children) {
        listItemAttrs.to = href;
        listItemAttrs.component = NavLink;
        listItemAttrs.exact = true;
        listItemAttrs.activeClassName = classes.listItemActive;
      }

      const iconStyle = {
        fontSize: 16
      };

      return (
        <ListItem {...listItemAttrs} className={classes.root} disableGutters>
          <Button
            onClick={this.handleClick}
            classes={{
              root: classes.listItem,
              label: classes.listItemButtonLabel
            }}
          >
            {icon && <span className={classes.listIcon}>{icon}</span>}
            <Typography variant="button" color="inherit" className={classes.listItemText}>{title}</Typography>
            {!href && (this.state.open ? <ExpandLessIcon style={iconStyle} /> : <ExpandMoreIcon style={iconStyle} />)}
          </Button>
          {children &&
            <Collapse
              in={this.state.open}
              timeout="auto"
              unmountOnExit
              className={classes.nested}
            >
              {children}
            </Collapse>}
        </ListItem>
      );
    }
}

MenuSidenavItem.defaultProps = {
  children: null,
  href: null,
  icon: null,
  type: null
};

MenuSidenavItem.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}),
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({}),
  type: PropTypes.string
};

export default withStyles(styles)(MenuSidenavItem);
