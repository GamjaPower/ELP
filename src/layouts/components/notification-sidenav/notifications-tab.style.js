const styles = theme => ({
  cardHeader: {
    backgroundColor: theme.palette.background.default
  },
  cardTitle: {
    fontSize: '1em',
  },
  cardTime: {
    fontSize: '14px',
    alignAelf: 'auto',
    margin: '5px 0px 0px 0px'
  },
  roundedAvatar: {
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12px',
  },
  comment: {
    background: '#00A2EC',
    color: '#fff'
  },
  facebook: {
    background: '#395A93',
    color: '#fff'
  },
  slack: {
    background: '#E51160',
    color: '#fff'
  },
  twitter: {
    background: '#00A3EC',
    color: '#fff'
  },
  spotify: {
    background: '#00B962',
    color: '#fff'
  }
});

export default styles;
