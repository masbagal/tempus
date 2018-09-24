import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

import DatabaseContext from './helpers/DatabaseContext';
import TaskDatabase from './helpers/DatabaseClass';
import appState from './state-management/reducers/appStateReducer';
import TimerWindow from './window/TimerWindow';
import './assets/base.css';

const reducers = combineReducers({ appState })
const taskDb = new TaskDatabase();

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <DatabaseContext.Provider value={taskDb}>
      <TimerWindow />
    </DatabaseContext.Provider>
  </Provider>, 
  document.getElementById("index")
);