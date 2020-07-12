import { createStore, applyMiddleware } from 'redux'; 
import ReduxThunk from 'redux-thunk'; 
import { createLogger } from 'redux-logger'; 

let middleware = [ReduxThunk]

if( process.env.NODE_ENV !== 'production' ) { 
    const logger = createLogger(); 
    middleware = [ ...middleware, logger];
}

export function createStoreWrapper(reducer) {
    return createStore( reducer, applyMiddleware(...middleware));
}