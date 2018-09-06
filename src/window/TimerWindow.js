import React from 'react';
import Timer from '../components/Timer/Timer';
import TimerForm from '../components/TimerForm/TimerForm';
import Dashboard from '../components/Dashboard/Dashboard';
import TaskList from '../components/TaskList/TaskList';

export default class TimerWindow extends React.Component {
  render() {
    return (
        <div style={{ position: 'relative' }}>
          <Dashboard />
          <Timer/>
          <TimerForm />
          <TaskList />
          
        </div>
    )
  }
}