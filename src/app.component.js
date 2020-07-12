import React from 'react';
import PropTypes from 'prop-types';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { JssProvider } from 'react-jss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { MuiThemeProvider, createMuiTheme, createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import Routes from './routes';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName();

class App extends React.Component {

  
  componentWillReceiveProps(nextProps) {
    if (document.body) {
      document.body.dir = nextProps.themeConfig.contentTheme.direction;
    }
  }

  render() {
    const childProps = {};
    const { themeConfig, layoutConfig } = this.props;

    sessionStorage.setItem(
      'portalData',
      JSON.stringify({
        theme: {
          ...themeConfig
        },
        layout: {
          ...layoutConfig
        }
      })
    );

    const materialTheme = createMuiTheme(themeConfig.contentTheme);

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={materialTheme}>
          <Routes childProps={childProps} layout={layoutConfig} />
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    themeConfig: state.theme,
    layoutConfig: state.layout
  };
}

App.propTypes = {
  themeConfig: PropTypes.shape({
    contentTheme: PropTypes.shape({
      direction: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  layoutConfig: PropTypes.shape({}).isRequired
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(App);
