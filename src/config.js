import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EventNoteIcon from '@material-ui/icons/EventNote';

import themes from './themes';

export const configuredTheme = themes[3].theme;


export const configuredLayout = {
  currentLayout: 'toolbar',
  notificationsOpen: false
};

const iconStyle = {
  fontSize: 16
};

export const menuItems = [{
  title: 'Search',
  href: '/',
  icon: <SearchIcon style={iconStyle} />
}, {
  title: 'Apps',
  icon: <EventNoteIcon style={iconStyle} />,
  children: [{
    title: 'Phantom',
    href: '/apps/phantom',
    icon: <CheckCircleIcon style={iconStyle} />
  }]
}];
