import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Demo from '../../../components/demo.component';

import MenuSimpleExample from './examples/menu-simple-example';
import MenuSimpleExampleRaw from './examples/menu-simple-example-raw';

import MenuSelectedExample from './examples/menu-selected-example';
import MenuSelectedExampleRaw from './examples/menu-selected-example-raw';

import MenuMaxHeightExample from './examples/menu-max-height-example';
import MenuMaxHeightExampleRaw from './examples/menu-max-height-example-raw';

import MenuListExample from './examples/menu-list-example';
import MenuListExampleRaw from './examples/menu-list-example-raw';

import ListItemExample from './examples/list-item-example';
import ListItemExampleRaw from './examples/list-item-example-raw';

import MenuTransitionExample from './examples/menu-transition-example';
import MenuTransitionExampleRaw from './examples/menu-transition-example-raw';

const Menu = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
        <MenuSimpleExample />
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Menu</Typography>
          <p>Menus display a list of choices on a transient sheet of material.</p>
          <p>
            Menus appear upon interaction with a button, action, or other control.
            They display a list of choices, with one choice per line.
          </p>
          <p>
            Menu items may be disabled if not applicable to a certain context.
            Contextual menus dynamically change their available menu items based on the current state of the app.
          </p>
          <p>Menus should not be used as a primary method for navigation within an app.</p>
          <h2>Simple Menu</h2>
          <p>
            Simple menus open over the anchor element by default (this option can be changed via props).
            When close to a screen edge, simple menus vertically realign to make all menu items are completely visible.
          </p>
          <p>Choosing an option should immediately ideally commit the option and close the menu.</p>
          <p>
            <strong>Disambiguation</strong>: In contrast to simple menus,
            simple dialogs can present additional detail related to the options available for a list item
            or provide navigational or orthogonal actions related to the primary task.
            Although they can display the same content, simple menus are preferred over simple dialogs
            because simple menus are less disruptive to the user’s current context.
          </p>
          <Demo index={1} js={MenuSimpleExample} raw={MenuSimpleExampleRaw} />
          <h2>Selected Menus</h2>
          <p>
            If used for item selection, when opened, simple menus attempt to vertically align the currently
            selected menu item with the anchor element.
            The currently selected menu item is set using the <code>selected</code> prop.
          </p>
          <Demo index={2} js={MenuSelectedExample} raw={MenuSelectedExampleRaw} />
          <p>
            If text in a simple menu wraps to a second line, use a simple dialog instead.
            Simple dialogs can have rows with varying heights.
          </p>
          <h2>Max height menus</h2>
          <p>If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.</p>
          <Demo index={3} js={MenuMaxHeightExample} raw={MenuMaxHeightExampleRaw} />
          <h2>MenuList composition</h2>
          <p>
            The <code>Menu</code> component uses the <code>Popover</code> component internally.
            However, you might want to use a different positioning strategy, or not blocking the scroll.
            For answering those needs, we expose a <code>MenuList</code> component that you can compose.
            The primary responsibility of the <code>MenuList</code> component is to handle the focus.
          </p>
          <Demo index={4} js={MenuListExample} raw={MenuListExampleRaw} />
          <h2>Listitem composition</h2>
          <p>
            The <code>MenuItem</code> is a wrapper around <code>ListItem</code> with some additional styles.
            You can use the same list composition features with the <code>MenuItem</code> component:
          </p>
          <Demo index={5} js={ListItemExample} raw={ListItemExampleRaw} />
          <h2>Change Transition</h2>
          <p>Use a different transition altogether.</p>
          <Demo index={6} js={MenuTransitionExample} raw={MenuTransitionExampleRaw} />
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default Menu;
