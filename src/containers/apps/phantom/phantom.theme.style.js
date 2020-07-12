
const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  content: {
    width: '100%',
    padding: 0,
    flexGrow: 1,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: '100%',
    overflowY: 'auto',
    boxSizing: 'border-box'
  },
  // Fab button icon
  'portal-phantom-compose-fab__icon': {
    color: theme.palette.secondary.contrastText
  }
});

export default styles;
