import React from 'react';
import style from './Dashboard.css';

import DateBox from '../DateBox/DateBox';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className={style.dashboard}>
        <div className={style.dateSlider}>
          <DateBox />
          <DateBox />
          <DateBox />
        </div>
        <div className={style.totalHourContainer}>
          <div>You have worked for:</div>
          <div className={style.totalHour}>
            08:23
          </div>
        </div>
      </div>
    )
  }
}