import React from 'react';
import style from './TaskList.css';

import TaskCard from '../TaskCard/TaskCard';

export default class TaskList extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.date}>
        <span className={style.bold}>TUESDAY</span>, 17 JULY 2018
        </div>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    )
  }
}