import { configuredTheme } from '../config';
import {
  CHANGE_SIDENAV_TOOLBAR_BACKGROUND,
  CHANGE_SIDENAV_TOOLBAR_TEXT,
  CHANGE_SIDENAV_PALETTE_TYPE,

  CHANGE_CONTENT_TOOLBAR_BACKGROUND,
  CHANGE_CONTENT_TOOLBAR_TEXT,
  CHANGE_CONTENT_PALETTE_TYPE,

  CHANGE_PRIMARY_PALETTE_BACKGROUND,
  CHANGE_PRIMARY_PALETTE_TEXT,
  CHANGE_SECONDARY_PALETTE_BACKGROUND,
  CHANGE_SECONDARY_PALETTE_TEXT,

  CHANGE_THEME,
  CHANGE_THEME_DIRECTION
} from '../actions/theme.actions';

const portalData = JSON.parse(sessionStorage.getItem('portalData'));

const defaultTheme = portalData && portalData.theme ? portalData.theme : configuredTheme;

const themeReducer = (theme = defaultTheme, action) => {
  switch (action.type) {
  case CHANGE_SIDENAV_TOOLBAR_BACKGROUND:
    return {
      ...theme,
      sidenavTheme: {
        ...theme.sidenavTheme,
        overrides: {
          MuiAppBar: {
            colorDefault: {
              ...theme.sidenavTheme.overrides.MuiAppBar.colorDefault,
              backgroundColor: action.payload.hex
            }
          }
        }
      }
    };
  case CHANGE_SIDENAV_TOOLBAR_TEXT:
    return {
      ...theme,
      sidenavTheme: {
        ...theme.sidenavTheme,
        overrides: {
          MuiAppBar: {
            colorDefault: {
              ...theme.sidenavTheme.overrides.MuiAppBar.colorDefault,
              color: action.payload.hex
            }
          }
        }
      }
    };
  case CHANGE_SIDENAV_PALETTE_TYPE:
    return {
      ...theme,
      sidenavTheme: {
        ...theme.sidenavTheme,
        palette: {
          ...theme.sidenavTheme.palette,
          type: theme.sidenavTheme.palette.type === 'light' ? 'dark' : 'light',
          background: {
            default: theme.sidenavTheme.palette.type === 'light' ? '#424242' : '#FFF'
          }
        }
      }
    };
  case CHANGE_CONTENT_TOOLBAR_BACKGROUND:
    return {
      ...theme,
      contentTheme: {
        ...theme.contentTheme,
        overrides: {
          MuiAppBar: {
            colorDefault: {
              ...theme.contentTheme.overrides.MuiAppBar.colorDefault,
              backgroundColor: action.payload.hex
            }
          }
        }
      }
    };
  case CHANGE_CONTENT_TOOLBAR_TEXT:
    return {
      ...theme,
      contentTheme: {
        ...theme.contentTheme,
        overrides: {
          MuiAppBar: {
            colorDefault: {
              ...theme.contentTheme.overrides.MuiAppBar.colorDefault,
              color: action.payload.hex
            }
          }
        }
      }
    };
  case CHANGE_CONTENT_PALETTE_TYPE:
    return {
      ...theme,
      contentTheme: {
        ...theme.contentTheme,
        palette: {
          ...theme.contentTheme.palette,
          type: theme.contentTheme.palette.type === 'light' ? 'dark' : 'light',
          background: {
            default: theme.contentTheme.palette.type === 'light' ? '#424242' : '#FFF'
          }
        }
      }
    };
  case CHANGE_PRIMARY_PALETTE_BACKGROUND:
    return {
      ...theme,
      contentTheme: {
        ...theme.contentTheme,
        palette: {
          ...theme.contentTheme.palette,
          primary: {
            ...theme.contentTheme.palette.primary,
            main: action.payload.hex
          }
        }
      }
    };
  case CHANGE_PRIMARY_PALETTE_TEXT:
    return {
      ...theme,
      contentTheme: {
        ...theme.contentTheme,
        palette: {
          ...theme.contentTheme.palette,
          primary: {
            ...theme.contentTheme.palette.primary,
            contrastText: action.payload.hex
          }
        }
      }
    };
  case CHANGE_SECONDARY_PALETTE_BACKGROUND:
    return {
      ...theme,
      contentTheme: {
        ...theme.contentTheme,
        palette: {
          ...theme.contentTheme.palette,
          secondary: {
            ...theme.contentTheme.palette.secondary,
            main: action.payload.hex
          }
        }
      }
    };
  case CHANGE_SECONDARY_PALETTE_TEXT:
    return {
      ...theme,
      contentTheme: {
        ...theme.contentTheme,
        palette: {
          ...theme.contentTheme.palette,
          secondary: {
            ...theme.contentTheme.palette.secondary,
            contrastText: action.payload.hex
          }
        }
      }
    };
  case CHANGE_THEME:
    return {
      ...action.payload
    };
  case CHANGE_THEME_DIRECTION:
    return {
      ...theme,
      contentTheme: {
        ...theme.contentTheme,
        direction: action.payload.direction
      },
      sidenavTheme: {
        ...theme.sidenavTheme,
        direction: action.payload.direction
      }
    };
  default:
    return theme;
  }
};

export default themeReducer;
