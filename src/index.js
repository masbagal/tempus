import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

// import reducers from './state-management/reducers';
import appState from './state-management/reducers/appStateReducer';
import TimerWindow from './window/TimerWindow';

const reducers = combineReducers({ appState })

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('WAWW', appState)

ReactDOM.render(
  <Provider store={store}>
    <TimerWindow />
  </Provider>, 
  document.getElementById("index")
);