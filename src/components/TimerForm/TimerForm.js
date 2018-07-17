import React from 'react';
import style from './TimerForm.css';

export default class TimerForm extends React.Component {
  render() {
    return (
      <div className={style.timerForm}>
        <div className={style.inputTitle}>
          <input type='text' placeholder='Enter your task name here'  ></input>
        </div>
        
        <div className={style.start}>
          Starts from: 
          <span>14.23</span> 
        </div>

        <div className={style.endTask}>
          <button className={style.button}>
            <span className={style.stop}></span>
            End Task
          </button>
        </div>
      </div>
    )
  }
}