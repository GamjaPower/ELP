import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import AppBar from '@material-ui/core/AppBar';

import Sidenav from '../components/sidenav/sidenav.component';
import NotificationSidenav from '../components/notification-sidenav/notification-sidenav.component';
import ContentToolbarLower from '../components/content-toolbar-lower/content-toolbar-lower.component';
import MenuSidenav from '../components/menu-sidenav/menu-sidenav.component';

// Actions
import { toggleSidenav, setSidenavOpen, toggleSidenavVariant } from '../../actions/layout.actions';

import scss from './layout-toolbar.module.scss';
import styles from './layout-toolbar.style';

class ToolbarLayout extends React.Component {
  // Set the initial layout state when the layout is initialised
  constructor(props) {
    super(props);
    props.toggleSidenavVariant('temporary');
    props.setSidenavOpen(false);
  }

  // scroll() { 
  //   const node = ReactDOM.findDOMNode(this);

  //   // Get child nodes
  //   const child = node.querySelector('.fixed_header');
  //   console.log('xxxdssd');

  // }


  render() {
    const { children, classes } = this.props;
    return (
      <div className={classNames(scss['layout-toolbar-wrapper'], classes.wrapper)}>
        <Sidenav>
          <MenuSidenav />
        </Sidenav>
        <main className={scss['layout-toolbar-main']}> 
          <AppBar color="default" position="static">
            {/* <ContentToolbar /> */}
            <ContentToolbarLower />
          </AppBar>
          <div className={scss['layout-toolbar-content-wrapper']}>
            <div className={scss['layout-toolbar-content']}>
              {children}
            </div>
          </div>
          {/* <ContentFooter /> */}
        </main>
        <NotificationSidenav />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout: {
      sidenavOpen: state.layout.sidenavOpen
    }
  };
}

ToolbarLayout.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}).isRequired,
  setSidenavOpen: PropTypes.func.isRequired,
  toggleSidenavVariant: PropTypes.func.isRequired
};

export default compose(
  withWidth(),
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    toggleSidenav,
    setSidenavOpen,
    toggleSidenavVariant
  })
)(ToolbarLayout);

