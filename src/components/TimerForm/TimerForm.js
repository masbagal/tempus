import React from 'react';
import dayjs from 'dayjs';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";

import { endTask } from '../../state-management/actions/appStateActions';
import Button from '../Button/Button';
import style from './TimerForm.css';



class TimerForm extends React.Component {
  state = {
    taskName: ''
  };

  stopTimer = () => {
    const { startTime, endTime } = this.props;
    this.props.db.addTask({
      taskName: this.state.taskName,
      startTime,
      endTime,
      duration: endTime - startTime,
    });
    this.props.endTask();
    this.setState({ taskName: '' });
  }

  handleInputChange = e => {
    this.setState({ taskName: e.target.value });
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
    const displayedStartTime = dayjs(this.props.startTime).format('HH:mm');
    const displayedEndTime = dayjs(this.props.endTime).format('HH:mm');
    
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
              <input 
                type='text' 
                placeholder='Enter your task name here' 
                onChange={this.handleInputChange}
              />
            </div>
            
            <div className={style.start}>
              Work time: 
              <span>{displayedStartTime} - {displayedEndTime}</span> 
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
  startTime: state.appState.startTime,
  endTime: state.appState.endTime,
})

export default connect(mapStateToProps, mapDispatchToProps)(TimerForm)