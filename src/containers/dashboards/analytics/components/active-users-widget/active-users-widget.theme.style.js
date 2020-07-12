const styles = theme => ({
  'portal-text-contrast': {
    color: theme.palette.common.white
  },
  'portal-active-users-widget': {
    background: theme.palette.primary.main,
    padding: '24px 24px 0px 24px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'stretch space-between',
    height: '100%'
  },
  'portal-active-users-widget__countup': {
    marginBottom: 64
  },
  'portal-active-users-widget__legend': {
    marginBottom: 16,
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
  }
});

export default styles;
