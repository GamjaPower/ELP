import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import HorizontalLinearStepperExample from './examples/horizontal-linear-stepper-example';
import HorizontalLinearStepperExampleRaw from './examples/horizontal-linear-stepper-example-raw';

import HorizontalNonLinearStepperExample from './examples/horizontal-non-linear-stepper-example';
import HorizontalNonLinearStepperExampleRaw from './examples/horizontal-non-linear-stepper-example-raw';

import HorizontalErrorStepperExample from './examples/horizontal-error-stepper-example';
import HorizontalErrorStepperExampleRaw from './examples/horizontal-error-stepper-example-raw';

import VerticalStepperExample from './examples/vertical-stepper-example';
import VerticalStepperExampleRaw from './examples/vertical-stepper-example-raw';


const styles = {
  headerWidth: {
    maxWidth: '800px',
  }
};

const Steppers = (props) => {
  const { classes } = props;
  return (
    <div>
      <section className="portal-pages__header">
        <div className={classNames(classes.headerWidth, "portal-pages__header-demo")}>
          <HorizontalLinearStepperExample />
        </div>
      </section>
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper className="portal-pages__content-inner">
            <Typography variant="headline" gutterBottom>Steppers</Typography>
            <p>
              Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation.
              Steppers may display a transient feedback message after a step is saved.
            </p>

            <h2>Horizontal Linear</h2>
            <p>
              The Stepper can be controlled by passing the current step index (zero-based) as the activeStep property. Stepper orientation is set using the orientation property.
            </p>
            <Demo index={1} js={HorizontalLinearStepperExample} raw={HorizontalLinearStepperExampleRaw} />

            <h2>Horizontal Non-linear</h2>
            <p>Non-linear steppers allow users to enter a multi-step flow at any point.</p>
            <Demo index={2} js={HorizontalNonLinearStepperExample} raw={HorizontalNonLinearStepperExampleRaw} />

            <h2>Horizontal Non Linear - Error Step</h2>
            <Demo index={3} js={HorizontalErrorStepperExample} raw={HorizontalErrorStepperExampleRaw} />

            <h2>Vertical Stepper</h2>
            <Demo index={4} js={VerticalStepperExample} raw={VerticalStepperExampleRaw} />
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Steppers);
