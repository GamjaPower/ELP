const styles = theme => ({
  root: {
    flexDirection: 'column',
    alignItems: 'start',
    display: 'flex',
    paddingBottom: 0,
    paddingTop: 0
  },
  list: {
    backgroundColor: theme.palette.background.paper
  },
  listItem: {
    textAlign: 'left',
    textTransform: 'none',
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    width: '100%',
    minHeight: 48,
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingLeft: 16,
    paddingRight: 16
  },
  listItemActive: {
    backgroundColor: theme.palette.action.hover
  },
  listItemButtonLabel: {
    flexDirection: 'row'
  },
  listItemText: {
    flex: '1 1 100%',
    textTransform: 'none'
  },
  listIcon: {
    height: 15,
    paddingLeft: 0,
    paddingRight: 16
  },
  nested: {
    width: '100%'
  }
});

export default styles;
