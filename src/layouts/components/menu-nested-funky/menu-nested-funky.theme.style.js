const styles = theme => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  categoryListPaper: {
    height: '100%',
    position: 'absolute',
    left: 96,
    width: 220,
    maxWidth: 220,
    backgroundColor: theme.overrides.MuiAppBar.colorDefault.backgroundColor
  },
  fullHeight: {
    height: '100%'
  },
  drawerInner: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%'
  },
  'portal-category-list': {
    background: theme.overrides.MuiAppBar.colorDefault.backgroundColor,
    height: '100%'
  },
  'portal-category-list__item': {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    color: theme.palette.common.white
  },
  'portal-category-list__item--active': {
    background: theme.palette.action.hover
  },
  'portal-category-list__item__text': {
    padding: '0px 16px',
    textTransform: 'none'
  }
});

export default styles;
