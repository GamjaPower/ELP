const styles = theme => ({
  'portal-backlog-widget': {
    padding: 0,
    boxSizing: 'border-box',
    position: 'relative',
    '& :last-child': {
      paddingBottom: 0
    }
  },
  'portal-backlog-widget__table': {
    width: '100%',
    position: 'relative',
    padding: 0,
    overflowX: 'auto'
  },
  'table-cell': {
    padding: '4px 24px 4px 24px'
  }
});

export default styles;
