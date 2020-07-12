const styles = theme => ({
  toolbarClass: {
    background: theme.palette.primary.main,
    flexWrap: 'wrap',
    placeContent: 'stretch flex-start',
    alignItems: 'stretch',
    flexLayout: 'row'
  },
  menuItem: {
    color: theme.palette.common.white,
    textTransform: 'none',
    minWidth: 160
  },
  activeMenuItem: {
    borderBottom: `2px solid ${theme.palette.common.white}`
  }
});

export default styles;
