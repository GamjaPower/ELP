import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import CardSimpleExample from './examples/card-simple-example';
import CardSimpleExampleRaw from './examples/card-simple-example-raw';

import CardMediaExample from './examples/card-media-example';
import CardMediaExampleRaw from './examples/card-media-example-raw';

import CardControlsExample from './examples/card-controls-example';
import CardControlsExampleRaw from './examples/card-controls-example-raw';

import CardComplexExample from './examples/card-complex-example';
import CardComplexExampleRaw from './examples/card-complex-example-raw';


const Card = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <CardSimpleExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Cards</Typography>
          <p>A card is a sheet of material that serves as an entry point to more detailed information.</p>
          <p>Cards display content composed of different elements whose size or supported actions vary.</p>
          <p>
            Cards are a convenient means of displaying content composed of different elements.
            They’re also well-suited for showcasing elements whose size or supported actions vary,
            like photos with captions of variable length.
          </p>
          <h2>Simple Card</h2>
          <p>
            Although cards can support multiple actions, UI controls, and an overflow menu,
            use restraint and remember that cards are entry points to more complex and detailed information.
          </p>
          <Demo index={1} js={CardSimpleExample} raw={CardSimpleExampleRaw} />
          <h2>Media</h2>
          <p>Example of a card using an image to reinforce the content.</p>
          <Demo index={2} js={CardMediaExample} raw={CardMediaExampleRaw} />
          <h2>UI Controls</h2>
          <p>
            Supplemental actions within the card are explicitly called out using icons, text, and UI controls,
            typically placed at the bottom of the card. Here is an example of a media control card.
          </p>
          <Demo index={3} js={CardControlsExample} raw={CardControlsExampleRaw} />
          <h2>Complex Interaction</h2>
          <p>On desktop, card content can expand.</p>
          <Demo index={4} js={CardComplexExample} raw={CardComplexExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default Card;
