import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import SwipeableViews from 'react-swipeable-views';

// Material UI
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Styles
import scss from './notification-sidenav.module.scss';

// Tabs
import TodayTab from './today-tab.component';
import NotificationsTab from './notifications-tab.component';

// Actions
import { toggleNotifications } from '../../../actions/layout.actions';

class NotificationSidenav extends React.Component {
  static propTypes = {
    layout: PropTypes.shape({
      notificationsOpen: PropTypes.bool
    }),
    toggleNotifications: PropTypes.func
  };

  static defaultProps = {
    layout: {
      notificationsOpen: false
    },
    toggleNotifications: null
  }

  state = {
    currentTabIndex: 0
  };

  handleChangeTab = (event, index) => {
    this.setState({ currentTabIndex: index });
  };

  handleChangeTabIndex = (index) => {
    this.setState({ currentTabIndex: index });
  };

  render() {
    const { layout } = this.props;

    return (
      <Drawer
        variant="temporary"
        open={layout.notificationsOpen}
        onClose={this.props.toggleNotifications}
        anchor="right"
        className={scss['portal-notification-sidenav']}
        PaperProps={{
          style: {
            width: '320px'
          }
        }}
        ModalProps={{
          keepMounted: true
        }}
      >
        <AppBar color="default" position="static">
          <Tabs
            value={this.state.currentTabIndex}
            onChange={this.handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Today" />
            <Tab label="Notifications" />
          </Tabs>
        </AppBar>

        <SwipeableViews
          className={scss['portal-notification-sidenav__content']}
          animateHeight
          index={this.state.currentTabIndex}
          onChangeIndex={this.handleChangeTabIndex}
        >
          <TodayTab />
          <NotificationsTab />
        </SwipeableViews>

        <Toolbar
          disableGutters
        >
          <IconButton onClick={this.props.toggleNotifications}>
            <ChevronRightIcon />
          </IconButton>
        </Toolbar>
      </Drawer>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout: {
      notificationsOpen: state.layout.notificationsOpen
    }
  };
}

export default compose(connect(mapStateToProps, {
  toggleNotifications
}))(NotificationSidenav);
