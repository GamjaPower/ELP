import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './app.component';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from "redux-thunk";	
import portalApp from './reducers';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Barlow:300,400,400i,500,600,700']
  }
});

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatch', action)
  next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
}

export default logger

const store = createStore(portalApp, applyMiddleware(ReduxThunk, logger));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
