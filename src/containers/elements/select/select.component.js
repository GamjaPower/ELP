import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import SimpleSelectExample from './examples/simple-select-example';
import SimpleSelectExampleRaw from './examples/simple-select-example-raw';

import NativeSelectExample from './examples/native-select-example';
import NativeSelectExampleRaw from './examples/native-select-example-raw';

import MultipleSelectExample from './examples/multiple-select-example';
import MultipleSelectExampleRaw from './examples/multiple-select-example-raw';

import DialogSelectExample from './examples/dialog-select-example';
import DialogSelectExampleRaw from './examples/dialog-select-example-raw';

const Select = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <DialogSelectExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Select</Typography>
          <h2>Simple Selects</h2>
          <p>
            Menus are positioned over their emitting elements such that the currently selected menu item appears
            on top of the emitting element.
          </p>
          <Demo index={1} js={SimpleSelectExample} raw={SimpleSelectExampleRaw} />
          <h2>Native Select</h2>
          <p>As the user experience can be improved on mobile using the native select of the platform, we allow such pattern.</p>
          <Demo index={2} js={NativeSelectExample} raw={NativeSelectExampleRaw} />
          <h2>Multiple Select</h2>
          <p>The <code>Select</code> component can handle multiple selections. It's enabled with the multiple property.</p>
          <Demo index={3} js={MultipleSelectExample} raw={MultipleSelectExampleRaw} />
          <h2>With a Dialog</h2>
          <p>While it is not encouraged by the Material Design specification, you can use a select inside a dialog.</p>
          <Demo index={4} js={DialogSelectExample} raw={DialogSelectExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default Select;
