import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import AppBarSimpleExample from './examples/app-bar-simple-example';
import AppBarSimpleExampleRaw from './examples/app-bar-simple-example-raw';

import AppBarButtonsExample from './examples/app-bar-buttons-example';
import AppBarButtonsExampleRaw from './examples/app-bar-buttons-example-raw';

import AppBarMenuExample from './examples/app-bar-menu-example';
import AppBarMenuExampleRaw from './examples/app-bar-menu-example-raw';

const AppBar = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <AppBarSimpleExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>App Bar</Typography>
          <p>
            The App bar, formerly known as the action bar in Android,
            is a special kind of toolbar that’s used for branding,
            navigation, search, and actions.
          </p>
          <h2>Simple App bar</h2>
          <Demo index={1} js={AppBarSimpleExample} raw={AppBarSimpleExampleRaw} />
          <h2>App bar with buttons</h2>
          <Demo index={2} js={AppBarButtonsExample} raw={AppBarButtonsExampleRaw} />
          <h2>App bar with menu</h2>
          <Demo index={3} js={AppBarMenuExample} raw={AppBarMenuExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default AppBar;
