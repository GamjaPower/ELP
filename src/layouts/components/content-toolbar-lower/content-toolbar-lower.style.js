const styles = theme => ({
  toolbarClass: {
    background: theme.palette.primary.main,
    flexWrap: 'wrap'
  },
  menuItem: {
    color: theme.palette.common.white,
    textTransform: 'none'
  },
  activeMenuItem: {
    background: theme.palette.primary.dark
  }
});

export default styles;
