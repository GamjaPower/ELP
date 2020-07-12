import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';

import {
  changeSidenavToolbarBackground,
  changeSidenavToolbarText,
  changeSidenavPaletteType,

  changeContentToolbarBackground,
  changeContentToolbarText,
  changeContentPaletteType,

  changePrimaryPaletteBackground,
  changePrimaryPaletteText,
  changeSecondaryPaletteBackground,
  changeSecondaryPaletteText
} from '../../actions/theme.actions';

import scss from './theming.module.scss';
import ColorPicker from './color-picker.component';

const Theming = (props) => {
  const {
    theme
  } = props;

  return (
    <div>
      <section className={scss['portal-pages__header']}>
        <svg
          className={scss['portal-pages__header-icon']}
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <g>
            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M7 1h48v17H7z" />
            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M2 9h5" />
            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M55 9h6v15H32v17" />
            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M28 42h8v21h-8z" />
          </g>
        </svg>
      </section>
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={10} >
          <Paper className={scss['portal-pages__content-inner']}>
            <Typography variant="headline" gutterBottom>Theming</Typography>

            <Typography component="p" gutterBottom>
              Portal is based on the fantastic Material-UI framework.
              This allows us to use the Material-UI React themes to change the colors of the app
            </Typography>

            <Typography component="p" gutterBottom>
              Go ahead and play with the color options below and create your own theme.
            </Typography>

            <br />

            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Typography variant="title" gutterBottom>Side Navigation Colors</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Toolbars Background</Typography>
                  </Grid>
                  <Grid item>
                    <ColorPicker
                      color={theme.sidenavTheme.overrides.MuiAppBar.colorDefault.backgroundColor}
                      onChange={props.changeSidenavToolbarBackground}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Toolbars Text Color</Typography>
                  </Grid>
                  <Grid item>
                    <ColorPicker
                      color={theme.sidenavTheme.overrides.MuiAppBar.colorDefault.color}
                      onChange={props.changeSidenavToolbarText}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Dark Sidenav</Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={theme.sidenavTheme.palette.type === 'dark'}
                      onChange={props.changeSidenavPaletteType}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <br />
                <Typography variant="title" gutterBottom>Primary Color</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Primary Background Color</Typography>
                  </Grid>
                  <Grid item>
                    <ColorPicker
                      color={theme.contentTheme.palette.primary.main}
                      onChange={props.changePrimaryPaletteBackground}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Primary Text Color</Typography>
                  </Grid>
                  <Grid item>
                    <ColorPicker
                      color={theme.contentTheme.palette.primary.contrastText}
                      onChange={props.changePrimaryPaletteText}
                    />
                  </Grid>
                </Grid>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="title" gutterBottom>Main Content Colors</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Content Toolbars Background</Typography>
                  </Grid>
                  <Grid item>
                    <ColorPicker
                      color={theme.contentTheme.overrides.MuiAppBar.colorDefault.backgroundColor}
                      onChange={props.changeContentToolbarBackground}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Content Toolbars Text Color</Typography>
                  </Grid>
                  <Grid item>
                    <ColorPicker
                      color={theme.contentTheme.overrides.MuiAppBar.colorDefault.color}
                      onChange={props.changeContentToolbarText}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Dark Content</Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={theme.contentTheme.palette.type === 'dark'}
                      onChange={props.changeContentPaletteType}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <br />
                <Typography variant="title" gutterBottom>Secondary Color</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Secondary Background Color</Typography>
                  </Grid>
                  <Grid item>
                    <ColorPicker
                      color={theme.contentTheme.palette.secondary.main}
                      onChange={props.changeSecondaryPaletteBackground}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Secondary Text Color</Typography>
                  </Grid>
                  <Grid item>
                    <ColorPicker
                      color={theme.contentTheme.palette.secondary.contrastText}
                      onChange={props.changeSecondaryPaletteText}
                    />
                  </Grid>
                </Grid>
                <Divider />
              </Grid>

              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                className={scss['portal-pages__color_examples']}
              >
                <Grid item>
                  <Button variant="raised" color="primary">
                    Example Primary Button
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="raised" color="secondary">
                    Example Secondary Button
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    theme: state.theme,
    layout: state.layout
  };
}

Theming.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  changeSidenavToolbarBackground: PropTypes.func.isRequired,
  changeSidenavToolbarText: PropTypes.func.isRequired,
  changeSidenavPaletteType: PropTypes.func.isRequired,
  changeContentToolbarBackground: PropTypes.func.isRequired,
  changeContentToolbarText: PropTypes.func.isRequired,
  changeContentPaletteType: PropTypes.func.isRequired,
  changePrimaryPaletteBackground: PropTypes.func.isRequired,
  changePrimaryPaletteText: PropTypes.func.isRequired,
  changeSecondaryPaletteBackground: PropTypes.func.isRequired,
  changeSecondaryPaletteText: PropTypes.func.isRequired
};

export default compose(connect(mapStateToProps, {
  changeSidenavToolbarBackground,
  changeSidenavToolbarText,
  changeSidenavPaletteType,
  changeContentToolbarBackground,
  changeContentToolbarText,
  changeContentPaletteType,
  changePrimaryPaletteBackground,
  changePrimaryPaletteText,
  changeSecondaryPaletteBackground,
  changeSecondaryPaletteText
}))(Theming);
