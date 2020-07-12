import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import ProgressIndeterminateExample from './examples/progress-indeterminate-example';
import ProgressIndeterminateExampleRaw from './examples/progress-indeterminate-example-raw';

import ProgressDeterminateExample from './examples/progress-determinate-example';
import ProgressDeterminateExampleRaw from './examples/progress-determinate-example-raw';

import ProgressBufferExample from './examples/progress-buffer-example';
import ProgressBufferExampleRaw from './examples/progress-buffer-example-raw';

import ProgressQueryExample from './examples/progress-query-example';
import ProgressQueryExampleRaw from './examples/progress-query-example-raw';

import ProgressCircularIndeterminateExample from './examples/progress-circular-indeterminate-example';
import ProgressCircularIndeterminateExampleRaw from './examples/progress-circular-indeterminate-example-raw';

import ProgressCircularDeterminateExample from './examples/progress-circular-determinate-example';
import ProgressCircularDeterminateExampleRaw from './examples/progress-circular-determinate-example-raw';

const Progress = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <ProgressIndeterminateExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Progress</Typography>
          <p>Progress and activity indicators are visual indications of an app loading content.</p>
          <p>
            A single visual indicator should be used to represent each type of operation. For example, a refresh operation should display either a refresh bar or an activity circle, but not both.
          </p>
          <h2>Linear Indeterminate</h2>
          <p>Indeterminate indicators visualize an unspecified wait time.</p>
          <Demo index={1} js={ProgressIndeterminateExample} raw={ProgressIndeterminateExampleRaw} />

          <h2>Linear Determinate</h2>
          <p>Determinate indicators display how long an operation will take.</p>
          <Demo index={2} js={ProgressDeterminateExample} raw={ProgressDeterminateExampleRaw} />

          <h2>Linear Buffer</h2>
          <Demo index={3} js={ProgressBufferExample} raw={ProgressBufferExampleRaw} />

          <h2>Linear Query</h2>
          <Demo index={5} js={ProgressQueryExample} raw={ProgressQueryExampleRaw} />

          <h2>Circular Indeterminate</h2>
          <Demo index={1} js={ProgressCircularIndeterminateExample} raw={ProgressCircularIndeterminateExampleRaw} />

          <h2>Circular Determinate</h2>
          <Demo index={1} js={ProgressCircularDeterminateExample} raw={ProgressCircularDeterminateExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default Progress;
