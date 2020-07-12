export const UPDATE_LAYOUT = '(LAYOUT) UPDATE_THEME_LAYOUT';
export const TOGGLE_SIDENAV = '(LAYOUT) TOGGLE_SIDENAV';
export const SET_SIDENAV_OPEN = '(LAYOUT) SET_SIDENAV_OPEN';
export const TOGGLE_SIDENAV_VARIANT = '(LAYOUT) TOGGLE_SIDENAV_VARIANT';
export const TOGGLE_NOTIFICATIONS = '(LAYOUT) TOGGLE_NOTIFICATIONS';

export const updateLayout = data => ({
  type: UPDATE_LAYOUT,
  payload: data
});

export const toggleSidenav = () => ({
  type: TOGGLE_SIDENAV
});

export const setSidenavOpen = data => ({
  type: SET_SIDENAV_OPEN,
  payload: data
});

export const toggleSidenavVariant = data => ({
  type: TOGGLE_SIDENAV_VARIANT,
  payload: data
});

export const toggleNotifications = () => ({
  type: TOGGLE_NOTIFICATIONS
});


