import * as actions from './actionTypes';

export const updateThemePalette = data => ({
  type: actions.UPDATE_THEME_PALETTE,
  payload: data
});

export const updateThemeDirection = data => ({
  type: actions.UPDATE_THEME_DIRECTION,
  payload: data
});

export const updateThemeColorType = data => ({
  type: actions.UPDATE_THEME_COLOR_TYPE,
  payload: data
});
