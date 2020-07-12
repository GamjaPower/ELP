import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import PaperExample from './examples/paper-example';
import PaperExampleRaw from './examples/paper-example-raw';

const PaperDemo = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <PaperExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Paper</Typography>
          <p>
            In material design, the physical properties of paper are translated to the screen.
            The background of an application resembles the flat, opaque texture of a sheet of paper,
            and an application’s behavior mimics paper’s ability to be re-sized, shuffled, and bound together in multiple sheets.
          </p>
          <Demo index={1} js={PaperExample} raw={PaperExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default PaperDemo;
