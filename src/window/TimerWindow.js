import React from 'react';
import Timer from '../components/Timer/Timer';
import TimerForm from '../components/TimerForm/TimerForm';
import Dashboard from '../components/Dashboard/Dashboard';
import TaskList from '../components/TaskList/TaskList';

import { Provider } from "redux-zero/react";
import store from "../state-management/store";

export default class TimerWindow extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ position: 'relative' }}>
          <Dashboard />
          <Timer/>
          <TimerForm />
          <TaskList />
          
        </div>
      </Provider>
    )
  }
}