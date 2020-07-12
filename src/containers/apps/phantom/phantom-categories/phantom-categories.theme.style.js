const categoryListWidth = 100;

const styles = theme => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  categoryListPaper: {
    width: categoryListWidth,
    maxWidth: categoryListWidth,
    position: 'relative',
    height: '100%',
    zIndex: 1201
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
    background: theme.palette.primary.main,
    height: '100%'
  },
  'portal-category-list__item': {
    padding: 16,
    display: 'flex',
    'flex-direction': 'column',
    color: theme.palette.common.white
  },
  'portal-category-list__item--active': {
    background: theme.palette.primary.dark
  },
  'portal-category-list__item__text': {
    marginTop: 8,
    textTransform: 'none'
  }
});

export default styles;
