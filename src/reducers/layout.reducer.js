import { configuredLayout } from '../config';
import {
  UPDATE_LAYOUT,
  TOGGLE_SIDENAV,
  SET_SIDENAV_OPEN,
  TOGGLE_SIDENAV_VARIANT,
  TOGGLE_NOTIFICATIONS } from '../actions/layout.actions';

const portalData = JSON.parse(sessionStorage.getItem('portalData'));

const defaultLayout = portalData && portalData.layout ? portalData.layout : configuredLayout;

const layoutReducer = (layout = defaultLayout, action) => {
  switch (action.type) {
  case TOGGLE_SIDENAV:
    return {
      ...layout,
      sidenavOpen: !layout.sidenavOpen
    };

  case SET_SIDENAV_OPEN:
    return {
      ...layout,
      sidenavOpen: action.payload
    };

  case TOGGLE_SIDENAV_VARIANT:
    return {
      ...layout,
      sidenavVariant: action.payload
    };

  case TOGGLE_NOTIFICATIONS:
    return {
      ...layout,
      notificationsOpen: !layout.notificationsOpen
    };

  case UPDATE_LAYOUT:
    return {
      ...layout,
      currentLayout: action.payload
    };

  default:
    return layout;
  }
};

export default layoutReducer;
