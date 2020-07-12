import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import DatePickerExample from './examples/date-picker-example';
import DatePickerExampleRaw from './examples/date-picker-example-raw';

import TimePickerExample from './examples/time-picker-example';
import TimePickerExampleRaw from './examples/time-picker-example-raw';

import DateTimeExample from './examples/date-time-example';
import DateTimeExampleRaw from './examples/date-time-example-raw';

const Picker = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <DatePickerExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Pickers</Typography>
          <p>Pickers provide a simple way to select a single value from a pre-determined set.</p>
          <ul>
            <li>On mobile, pickers are best suited for display in confirmation dialog.</li>
            <li>For inline display, such as on a form, consider using compact controls such as segmented dropdown buttons.</li>
          </ul>
          <h2>Date Pickers</h2>
          <Demo index={1} js={DatePickerExample} raw={DatePickerExampleRaw} />
          <h2>Time Pickers</h2>
          <Demo index={2} js={TimePickerExample} raw={TimePickerExampleRaw} />
          <h2>Date & Time Pickers</h2>
          <Demo index={3} js={DateTimeExample} raw={DateTimeExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default Picker;
