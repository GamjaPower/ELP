const styles = theme => ({
  'portal-email-no-messages': {
    '&:before': {
      background: theme.palette.secondary.main
    }
  },
  'portal-email-no-messages__envelope': {
    background: theme.palette.secondary.main,
    'box-shadow': `0 0 1px ${theme.palette.secondary.main} inset`,
    '&:before, &:after': {
      border: '0 solid transparent'
    },
    '&:before': {
      'border-bottom-color': theme.palette.secondary.main,
      'border-left-color': 'transparent',
      'border-right-color': 'transparent'
    },
    '&:after': {
      'border-right-color': theme.palette.secondary.light,
      'border-left-color': theme.palette.secondary.main,
      'border-bottom-color': theme.palette.secondary.main
    }
  }
});

export default styles;
