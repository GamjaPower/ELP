const styles = theme => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  listItem: {
    textAlign: 'left'
  },
  drawerHeader: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    textAlign: 'left'
  },
  contentWrapper: {
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box'
  },
  content: {
    width: '100%',
    minWidth: '100%',
    height: '100%',
    minHeight: '100%',
    margin: '0',
    overflowY: 'auto',
    '-ms-overflow-style': 'none',
    '&::-webkit-scrollbar': {
      width: '0'
    }
  },
  toolbarContainer: {
    flexDirection: 'row',
    boxSizing: 'border-box',
    display: 'flex',
    padding: '0 16px',
    position: 'relative'
  }
});

export default styles;
