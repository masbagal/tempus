import React from 'react';
import style from './TaskCard.css';

export default class TaskCard extends React.Component {
  render() {
    return (
      <div className={style.card}>
        <div className={style.body}>
          <div className={style.title}>
            Web Push Notification
          </div>
          <div className={style.time}>
            12.00 - 14.20
          </div>  
        </div>
        <div className={style.side}>
          <div className={style.duration}>
            2:20
          </div>
        </div>
      </div>
    )
  }
}