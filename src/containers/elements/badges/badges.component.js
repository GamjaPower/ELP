import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Badges = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        demo
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10} >
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Badges</Typography>
          <h1>Badges Example</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default Badges;
