const styles = theme => ({
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
  list: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 0,
    paddingBottom: 0
  },
  listItemRoot: {
    flexDirection: 'column',
    alignItems: 'start',
    display: 'flex',
    paddingBottom: 0,
    paddingTop: 0
  },
  listItem: {
    textTransform: 'none',
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    width: '100%',
    minHeight: 96,
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingLeft: 16,
    paddingRight: 16
  },
  listItemActive: {
    backgroundColor: theme.palette.action.hover
  },
  listItemButtonLabel: {
    flexDirection: 'column'
  },
  listItemText: {
    flex: '1 1 100%',
    textTransform: 'none'
  },
  listIcon: {
    height: 15,
    padding: 16
  }
});

export default styles;
