import React from 'react';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";

import { endTimer } from '../../state-management/actions/appStateActions';
import Button, { COLOR } from '../Button/Button';
import TimerForm from '../TimerForm/TimerForm';
import style from './Timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    }  
  }

  prependZero = (number) => {
    const textNumber = '' + number;
    return textNumber.length < 2 ? `0${textNumber}` : textNumber;
  }

  timerTick = () => {
    setTimeout(() => {
      this.setState({ seconds: this.state.seconds + 1 })
    }, 1000);
  }

  componentDidUpdate() {
    if (this.props.isTimerRunning) {
      this.timerTick();
    }    
  }

  render() {
    const classNames= {
      enter: style.timerEnter,
      enterActive: style.timerEnterActive,
      exit: style.timerExit,
      exitActive: style.timerExitActive,
    }

    const { isTimerActive, isTimerRunning } = this.props;

    return (
      <CSSTransition 
        classNames={classNames}
        in={isTimerActive}
        timeout={100}
        unmountOnExit
        mountOnEnter
      >
        <div className={cx(style.timer, { [style.ends]: !isTimerRunning })}>
          <div className={style.time}>
            00:00:{this.prependZero(this.state.seconds)}
          </div>
          <div className={style.ctaContainer}>
          {
            isTimerRunning &&
            <Button 
              onClick={this.props.endTimer}
              color={COLOR.RED}  
            >
              End Task
            </Button>
          }
          </div>
          
        </div>
      </CSSTransition>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  endTimer: () => dispatch(endTimer()),
});

const mapStateToProps = (state) => ({ 
  isTimerActive: state.appState.timerActive, 
  isTimerRunning: state.appState.timerRunning,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer)