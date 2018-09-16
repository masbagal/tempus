import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";

import { endTask } from '../../state-management/actions/appStateActions';
import Button from '../Button/Button';
import style from './TimerForm.css';



class TimerForm extends React.Component {
  stopTimer = () => {
    // TODO: save task to db
    this.props.endTask();
  }
  
  render() {
    const classNames= {
      enter: style.formEnter,
      enterActive: style.formEnterActive,
      exit: style.formExit,
      exitActive: style.formExitActive,
    }

    const { isTimerActive, isTimerRunning } = this.props;
    const showTimerForm = isTimerActive && !isTimerRunning;
    
    return (
      <CSSTransition 
        classNames={classNames}
        in={showTimerForm}
        timeout={300}
        unmountOnExit
        mountOnEnter
      >
        <div className={style.container}>
          <div className={style.timerForm}>
            <div className={style.inputTitle}>
              <input type='text' placeholder='Enter your task name here'></input>
            </div>
            
            <div className={style.start}>
              Starts from: 
              <span>14.23</span> 
            </div>

            <div className={style.endTask}>
              <Button onClick={this.stopTimer}>
                Save Task
              </Button>
            </div>
          </div>
      </div>
      </CSSTransition>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  endTask: () => dispatch(endTask())
})

const mapStateToProps = state => ({ 
  isTimerActive: state.appState.timerActive,
  isTimerRunning: state.appState.timerRunning,
})

export default connect(mapStateToProps, mapDispatchToProps)(TimerForm)