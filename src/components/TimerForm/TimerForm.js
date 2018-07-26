import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from "redux-zero/react";
import actions from '../../state-management/actions';
import style from './TimerForm.css';

class TimerForm extends React.Component {
  stopTimer = () => {
    this.props.stopTimer();
  }
  
  render() {
    const classNames= {
      enter: style.formEnter,
      enterActive: style.formEnterActive,
      exit: style.formExit,
      exitActive: style.formExitActive,
    }
    
    return (
      <CSSTransition 
        classNames={classNames}
        in={this.props.isTimerActive}
        timeout={300}
        unmountOnExit
        mountOnEnter
      >
        <div className={style.container}>
          <div className={style.timerForm}>
            <div className={style.inputTitle}>
              <input type='text' placeholder='Enter your task name here'  ></input>
            </div>
            
            <div className={style.start}>
              Starts from: 
              <span>14.23</span> 
            </div>

            <div className={style.endTask}>
              <button className={style.button} onClick={this.stopTimer}>
                <span className={style.stop}></span>
                End Task
              </button>
            </div>
          </div>
      </div>
      </CSSTransition>
    )
  }
}

const mapStateToProps = ({ isTimerActive }) => ({ isTimerActive })

export default connect(mapStateToProps, actions)(TimerForm)