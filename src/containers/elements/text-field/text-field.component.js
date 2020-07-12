import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import TextFieldExample from './examples/text-field-example';
import TextFieldExampleRaw from './examples/text-field-example-raw';

import ComponentsExample from './examples/components-example';
import ComponentsExampleRaw from './examples/components-example-raw';

import LayoutExample from './examples/layout-example';
import LayoutExampleRaw from './examples/layout-example-raw';

import AdornmentsExample from './examples/adornments-example';
import AdornmentsExampleRaw from './examples/adornments-example-raw';

import InputsExample from './examples/inputs-example';
import InputsExampleRaw from './examples/inputs-example-raw';

const TextField = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <InputsExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Text Fields</Typography>
          <p>
            Text fields allow users to input text and usually appear in forms. Users may enter text, numbers,
            or mixed-format types of input.
          </p>
          <h2>TextField</h2>
          <p>The <code>TextField</code> wrapper component is a complete form control including a label, input and help text.</p>
          <Demo index={1} js={TextFieldExample} raw={TextFieldExampleRaw} />
          <h2>Components</h2>
          <p>
            <code>TextField</code> is composed of smaller components (<code>FormControl</code>, <code>InputLabel</code>,
            <code>Input</code>, and <code>FormHelperText</code>) that you can leverage directly to
            significantly customize your form inputs.
          </p>
          <p>
            You might also have noticed that some native HTML input properties are missing from the
            <code>TextField</code> component. This is on purpose. The component takes care of the most used properties,
            then it's up to the user to use the underlying component shown in the following demo. Still, you can use
            <code>inputProps</code> (and <code>InputProps</code>, <code>InputLabelProps</code> properties)
            if you want to avoid some boilerplate.
          </p>
          <Demo index={2} js={ComponentsExample} raw={ComponentsExampleRaw} />
          <h2>Layout</h2>
          <p>
            <code>TextField</code>, <code>FormControl</code> allow the specification of margin to alter the
            vertical spacing of inputs. Using <code>none</code> (default) will not apply margins to the
            <code>FormControl</code>, whereas <code>dense</code> and <code>normal</code> will as well as
            alter other styles to meet the specification.
          </p>
          <Demo index={3} js={LayoutExample} raw={LayoutExampleRaw} />
          <h2>Input Adornments</h2>
          <p>
            <code>Input</code> allows the provision of <code>InputAdornment</code>. These can be used to add a prefix,
            a suffix or an action to an input.
          </p>
          <Demo index={4} js={AdornmentsExample} raw={AdornmentsExampleRaw} />
          <h2>Inputs</h2>
          <Demo index={5} js={InputsExample} raw={InputsExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);


export default TextField;
