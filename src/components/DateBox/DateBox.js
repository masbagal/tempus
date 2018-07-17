import React from 'react';
import style from './DateBox.css';

export default class DateBox extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.day}>
          MON
        </div>
        <div className={style.date}>
          23
        </div>
      </div>
    )
  }
}