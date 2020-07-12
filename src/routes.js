import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from './components/async.component';
import Toolbar from './layouts/layout-toolbar/layout-toolbar.component';

const AsyncAnalyticsDashboard = asyncComponent(() => import('./containers/dashboards/analytics/analytics.component'));
const AsyncPhantomApp = asyncComponent(() => import('./containers/apps/phantom/phantom.component'));
const AsyncNotFound = asyncComponent(() => import('./containers/not-found/not-found.component'));



const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const ToolbarLayout = props => (
  <Toolbar>{props.children}</Toolbar>
);


// TODO: Consider looping through an object containing all routes
export default ({ childProps, layout }) => {
  let activeLayout = ToolbarLayout;
  return (
    <Switch>
      <AppRoute path="/" exact component={AsyncAnalyticsDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/phantom" exact component={AsyncPhantomApp} props={childProps} layout={activeLayout} />
      <AppRoute component={AsyncNotFound} layout={activeLayout} />
    </Switch>);
};
