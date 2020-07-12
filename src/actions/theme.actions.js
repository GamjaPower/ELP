export const CHANGE_THEME = '(THEME) CHANGE_THEME';

export const CHANGE_SIDENAV_TOOLBAR_BACKGROUND = '(THEME) CHANGE_SIDENAV_TOOLBAR_BACKGROUND';
export const CHANGE_SIDENAV_TOOLBAR_TEXT = '(THEME) CHANGE_SIDENAV_TOOLBAR_TEXT';
export const CHANGE_SIDENAV_PALETTE_TYPE = '(THEME) CHANGE_SIDENAV_PALETTE_TYPE';

export const CHANGE_CONTENT_TOOLBAR_BACKGROUND = '(THEME) CHANGE_CONTENT_TOOLBAR_BACKGROUND';
export const CHANGE_CONTENT_TOOLBAR_TEXT = '(THEME) CHANGE_CONTENT_TOOLBAR_TEXT';
export const CHANGE_CONTENT_PALETTE_TYPE = '(THEME) CHANGE_CONTENT_PALETTE_TYPE';

export const CHANGE_PRIMARY_PALETTE_BACKGROUND = '(THEME) CHANGE_PRIMARY_PALETTE_BACKGROUND';
export const CHANGE_PRIMARY_PALETTE_TEXT = '(THEME) CHANGE_PRIMARY_PALETTE_TEXT';
export const CHANGE_SECONDARY_PALETTE_BACKGROUND = '(THEME) CHANGE_SECONDARY_PALETTE_BACKGROUND';
export const CHANGE_SECONDARY_PALETTE_TEXT = '(THEME) CHANGE_SECONDARY_PALETTE_TEXT';

export const CHANGE_THEME_DIRECTION = '(THEME) CHANGE_TEXT_DIRECTION';

export const changeTheme = theme => ({
  type: CHANGE_THEME,
  payload: theme
});

export const changeSidenavToolbarBackground = color => ({
  type: CHANGE_SIDENAV_TOOLBAR_BACKGROUND,
  payload: color
});

export const changeSidenavToolbarText = color => ({
  type: CHANGE_SIDENAV_TOOLBAR_TEXT,
  payload: color
});

export const changeSidenavPaletteType = type => ({
  type: CHANGE_SIDENAV_PALETTE_TYPE,
  payload: type
});

export const changeContentToolbarBackground = color => ({
  type: CHANGE_CONTENT_TOOLBAR_BACKGROUND,
  payload: color
});

export const changeContentToolbarText = color => ({
  type: CHANGE_CONTENT_TOOLBAR_TEXT,
  payload: color
});

export const changeContentPaletteType = type => ({
  type: CHANGE_CONTENT_PALETTE_TYPE,
  payload: type
});

export const changePrimaryPaletteBackground = color => ({
  type: CHANGE_PRIMARY_PALETTE_BACKGROUND,
  payload: color
});

export const changePrimaryPaletteText = color => ({
  type: CHANGE_PRIMARY_PALETTE_TEXT,
  payload: color
});

export const changeSecondaryPaletteBackground = color => ({
  type: CHANGE_SECONDARY_PALETTE_BACKGROUND,
  payload: color
});

export const changeSecondaryPaletteText = color => ({
  type: CHANGE_SECONDARY_PALETTE_TEXT,
  payload: color
});

export const changeThemeDirection = dir => ({
  type: CHANGE_THEME_DIRECTION,
  payload: dir
});
