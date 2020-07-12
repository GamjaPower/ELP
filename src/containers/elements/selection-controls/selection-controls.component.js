import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import CheckboxExample from './examples/checkbox-example';
import CheckboxExampleRaw from './examples/checkbox-example-raw';

import FormgroupExample from './examples/formgroup-example';
import FormgroupExampleRaw from './examples/formgroup-example-raw';

import RadioExample from './examples/radio-example';
import RadioExampleRaw from './examples/radio-example-raw';

import RadioSimpleExample from './examples/radio-simple-example';
import RadioSimpleExampleRaw from './examples/radio-simple-example-raw';

import SwitchExample from './examples/switch-example';
import SwitchExampleRaw from './examples/switch-example-raw';

import SwitchLabelExample from './examples/switch-label-example';
import SwitchLabelExampleRaw from './examples/switch-label-example-raw';

const SelectionControls = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <CheckboxExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Selection Controls</Typography>
          <p>Selection controls allow the user to select options.</p>
          <p>Three types of selection controls are covered in this guidance:</p>
          <ul>
            <li><strong>Checkboxes</strong> allow the selection of multiple options from a set.</li>
            <li><strong>Radio buttons</strong> allow the selection of a single option from a set.</li>
            <li><strong>Switches</strong> allow a selection to be turned on or off.</li>
          </ul>
          <h2>Checkboxes</h2>
          <p>Checkboxes allow the user to select multiple options from a set.</p>
          <p>
            If you have multiple options appearing in a list, you can preserve space
            by using checkboxes instead of on/off switches.
          </p>
          <p>If you have a single option, avoid using a checkbox and use an on/off switch instead.</p>
          <Demo index={1} js={CheckboxExample} raw={CheckboxExampleRaw} />
          <p><code>FormGroup</code> is a helpful wrapper used to group selection controls components that provides an easier API.</p>
          <Demo index={2} js={FormgroupExample} raw={FormgroupExampleRaw} />
          <h2>Radio Buttons</h2>
          <p>
            Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection
            if you think that the user needs to see all available options side-by-side.
          </p>
          <p>Otherwise, consider a dropdown, which uses less space than displaying all options.</p>
          <p>
            <code>RadioGroup</code> is a helpful wrapper used to group <code>Radio</code> components
            that provides an easier API, and proper keyboard accessibility to the group.
          </p>
          <Demo index={3} js={RadioExample} raw={RadioExampleRaw} />
          <p><code>Radio</code> can also be used standalone, without the wrapper.</p>
          <Demo index={4} js={RadioSimpleExample} raw={RadioSimpleExampleRaw} />
          <h2>Switches</h2>
          <p>
            On/off switches toggle the state of a single settings option. The option that the switch controls,
            as well as the state it’s in, should be made clear from the corresponding inline label.
          </p>
          <Demo index={5} js={SwitchExample} raw={SwitchExampleRaw} />
          <p><code>Switch</code> can also be used with a label description thanks to the <code>FormControlLabel</code> component.</p>
          <Demo index={6} js={SwitchLabelExample} raw={SwitchLabelExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default SelectionControls;
