import React from 'react';

import DatabaseContext from '../helpers/DatabaseContext';
import Timer from '../components/Timer/Timer';
import TimerForm from '../components/TimerForm/TimerForm';
import Dashboard from '../components/Dashboard/Dashboard';
import TaskList from '../components/TaskList/TaskList';

export default class TimerWindow extends React.Component {
  render() {
    return (
        <div style={{ position: 'relative' }}>
          <DatabaseContext.Consumer>
            {
              db => (
                <React.Fragment>
                  <Dashboard />
                  <Timer />
                  <TimerForm db={db} />
                  <TaskList />
                </React.Fragment>
              )
            }
            
          </DatabaseContext.Consumer>
          
        </div>
    )
  }
}