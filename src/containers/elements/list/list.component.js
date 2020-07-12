import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import ListSimpleExample from './examples/list-simple-example';
import ListSimpleExampleRaw from './examples/list-simple-example-raw';

import ListFolderExample from './examples/list-folder-example';
import ListFolderExampleRaw from './examples/list-folder-example-raw';

import ListInsetExample from './examples/list-inset-example';
import ListInsetExampleRaw from './examples/list-inset-example-raw';

import ListNestedExample from './examples/list-nested-example';
import ListNestedExampleRaw from './examples/list-nested-example-raw';

import ListPinnedSubheaderExample from './examples/list-pinned-subheader-example';
import ListPinnedSubheaderExampleRaw from './examples/list-pinned-subheader-example-raw';

import ListCheckboxPrimaryExample from './examples/list-checkbox-primary-example';
import ListCheckboxPrimaryExampleRaw from './examples/list-checkbox-primary-example-raw';

import ListCheckboxSecondaryExample from './examples/list-checkbox-secondary-example';
import ListCheckboxSecondaryExampleRaw from './examples/list-checkbox-secondary-example-raw';

import ListSwitchExample from './examples/list-switch-example';
import ListSwitchExampleRaw from './examples/list-switch-example-raw';

import ListInteractiveExample from './examples/list-interactive-example';
import ListInteractiveExampleRaw from './examples/list-interactive-example-raw';

const List = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <ListSimpleExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Lists</Typography>
          <p>Lists present multiple line items vertically as a single continuous element.</p>
          <p>
            Lists are made up of a continuous column of rows. Each row contains a tile. Primary actions fill the tile,
            and supplemental actions are represented by icons and text. Lists are best suited for similar data types.
          </p>
          <h2>Simple List</h2>
          <Demo index={1} js={ListSimpleExample} raw={ListSimpleExampleRaw} />
          <h2>Folder list</h2>
          <Demo index={2} js={ListFolderExample} raw={ListFolderExampleRaw} />
          <h2>Inset List</h2>
          <Demo index={3} js={ListInsetExample} raw={ListInsetExampleRaw} />
          <h2>Nested List</h2>
          <Demo index={4} js={ListNestedExample} raw={ListNestedExampleRaw} />
          <h2>Pinned Subheader List</h2>
          <p>
            Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader.
          </p>
          <p>
            This feature is relying on the CSS sticky positioning. Unfortunately it's not implemented by all the browsers
            we are supporting. We default to <code>disableSticky</code> when not supported.
          </p>
          <Demo index={5} js={ListPinnedSubheaderExample} raw={ListPinnedSubheaderExampleRaw} />
          <h2>List Controls</h2>
          <p>Checkbox</p>
          <p>A checkbox can either be a primary action or a secondary action.</p>
          <p>
            The checkbox is the primary action and the state indicator for the list item.
            The comment button is a secondary action and a separate target.
          </p>
          <Demo index={6} js={ListCheckboxPrimaryExample} raw={ListCheckboxPrimaryExampleRaw} />
          <p>The checkbox is the secondary action for the list item and a separate target.</p>
          <Demo index={7} js={ListCheckboxSecondaryExample} raw={ListCheckboxSecondaryExampleRaw} />
          <p>Switch</p>
          <p>The checkbox is the secondary action for the list item and a separate target.</p>
          <Demo index={8} js={ListSwitchExample} raw={ListSwitchExampleRaw} />
          <h2>Interactive</h2>
          <p>Below is an interactive demo that lets you explore the visual results of the different settings:</p>
          <Demo index={9} js={ListInteractiveExample} raw={ListInteractiveExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);


export default List;
