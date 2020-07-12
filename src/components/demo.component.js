import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CodeIcon from '@material-ui/icons/Code';
import Tooltip from '@material-ui/core/Tooltip';

import MarkdownElement from './markdown-element.component';

const styles = theme => ({
  root: {
    position: 'relative',
    marginBottom: 40,
    marginLeft: -theme.spacing.unit * 2,
    marginRight: -theme.spacing.unit * 2,
    clear: 'both',
    [theme.breakpoints.up('sm')]: {
      padding: `0 ${theme.spacing.unit}px`,
      marginLeft: 0,
      marginRight: 0
    }
  },
  demo: theme.mixins.gutters({
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 6
    }
  }),
  header: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flip: false,
      zIndex: 10,
      position: 'absolute',
      top: 2,
      right: theme.spacing.unit * 2
    }
  },
  code: {
    display: 'none',
    padding: 0,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    '& pre': {
      overflow: 'auto',
      margin: '0px !important',
      borderRadius: '0px !important'
    }
  }
});


class Demo extends React.Component {
  state = {
    codeOpen: false
  };

  codesandboxForm = null;

  handleClickCodeOpen = () => {
    this.setState({
      codeOpen: !this.state.codeOpen
    });
  };

  render() {
    const {
      classes, index, js: DemoComponent, raw
    } = this.props;
    const { codeOpen } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.header}>

          <Tooltip
            id={`demo-source-${index}`}
            title={codeOpen ? 'Hide the source' : 'Show the source'}
            placement="top"
          >
            <IconButton onClick={this.handleClickCodeOpen} aria-labelledby={`demo-source-${index}`}>
              <CodeIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Collapse in={codeOpen} unmountOnExit>
          <MarkdownElement dir="ltr" className={classes.code} text={`\`\`\`jsx\n${raw}\n\`\`\``} />
        </Collapse>
        <div className={classes.demo}>
          <DemoComponent />
        </div>
      </div>
    );
  }
}

Demo.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
  js: PropTypes.func.isRequired,
  raw: PropTypes.string.isRequired
};

export default withStyles(styles)(Demo);
