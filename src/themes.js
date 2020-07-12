import lightBlue from '@material-ui/core/colors/lightBlue';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';

const defaultContentTheme = {
  direction: 'ltr',
  typography: {
    fontFamily: 'Barlow',
    fontSize: 14,
    subheading: {
      fontSize: '14px'
    }
  },
  palette: {
    type: 'light',
    primary: lightBlue,
    secondary: pink
  },
  status: {
    danger: 'orange'
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#FFF',
        color: '#000'
      }
    }
  }
};

const defaultSidenavTheme = {
  ...defaultContentTheme,
  palette: {
    ...defaultContentTheme.palette,
    type: 'dark',
    background: {
      default: '#424242'
    }
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#424242',
        color: '#FFF'
      }
    }
  }
};

const darkContentTheme = {
  direction: 'ltr',
  typography: {
    fontFamily: 'Barlow',
    fontSize: 14,
    subheading: {
      fontSize: '14px'
    }
  },
  palette: {
    type: 'light',
    primary: lightBlue,
    secondary: pink
  },
  status: {
    danger: 'orange'
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#424242',
        color: '#FFF'
      }
    }
  }
};

const nightContentTheme = {
  direction: 'ltr',
  typography: {
    fontFamily: 'Barlow',
    fontSize: 14,
    subheading: {
      fontSize: '14px'
    }
  },
  palette: {
    type: 'dark',
    primary: lightBlue,
    secondary: pink
  },
  status: {
    danger: 'orange'
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#424242',
        color: '#FFF'
      }
    }
  }
};

const themes = [{
  id: 'classic-light_blue-pink',
  name: 'Classic - Light Blue / Pink',
  theme: {
    contentTheme: defaultContentTheme,
    sidenavTheme: defaultSidenavTheme
  }
}, {
  id: 'classic-green-deep_orange',
  name: 'Classic - Green / Deep Orange',
  theme: {
    contentTheme: {
      ...defaultContentTheme,
      palette: {
        type: 'light',
        primary: green,
        secondary: deepOrange
      }
    },
    sidenavTheme: defaultSidenavTheme
  }
}, {
  id: 'classic-indigo-orange',
  name: 'Classic - Indigo / Orange',
  theme: {
    contentTheme: {
      ...defaultContentTheme,
      palette: {
        type: 'light',
        primary: indigo,
        secondary: orange
      }
    },
    sidenavTheme: defaultSidenavTheme
  }
}, {
  id: 'dark-light_blue-pink',
  name: 'Dark - Light Blue / Pink',
  theme: {
    contentTheme: darkContentTheme,
    sidenavTheme: defaultSidenavTheme
  }
}, {
  id: 'dark-green-deep_orange',
  name: 'Dark - Green / Deep Orange',
  theme: {
    contentTheme: {
      ...darkContentTheme,
      palette: {
        type: 'light',
        primary: green,
        secondary: deepOrange
      }
    },
    sidenavTheme: defaultSidenavTheme
  }
}, {
  id: 'dark-indigo-orange',
  name: 'Dark - Indigo / Orange',
  theme: {
    contentTheme: {
      ...darkContentTheme,
      palette: {
        type: 'light',
        primary: indigo,
        secondary: orange
      }
    },
    sidenavTheme: defaultSidenavTheme
  }
}, {
  id: 'night-light_blue-pink',
  name: 'Night - Light Blue / Pink',
  theme: {
    contentTheme: nightContentTheme,
    sidenavTheme: defaultSidenavTheme
  }
}, {
  id: 'night-green-deep_orange',
  name: 'Night - Green / Deep Orange',
  theme: {
    contentTheme: {
      ...nightContentTheme,
      palette: {
        type: 'dark',
        primary: green,
        secondary: deepOrange
      }
    },
    sidenavTheme: defaultSidenavTheme
  }
}, {
  id: 'night-indigo-orange',
  name: 'Night - Indigo / Orange',
  theme: {
    contentTheme: {
      ...darkContentTheme,
      palette: {
        type: 'dark',
        primary: indigo,
        secondary: orange
      }
    },
    sidenavTheme: defaultSidenavTheme
  }
}];

export default themes;
