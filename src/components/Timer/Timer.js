import React from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";

import { convertSecondsToTimerFormat } from '../../helpers/TimeUtil';
import { endTimer } from '../../state-management/actions/appStateActions';
import Button, { COLOR } from '../Button/Button';
import style from './Timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    }  
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

  componentWillUnmount() {
    this.setState({ seconds: 0 });
  }

  render() {
    const classNames= {
      enter: style.timerEnter,
      enterActive: style.timerEnterActive,
      exit: style.timerExit,
      exitActive: style.timerExitActive,
    }

    const { isTimerActive, isTimerRunning } = this.props;
    const displayedStartTime = dayjs(this.props.startTime).format('HH:mm');

    return (
      <CSSTransition 
        classNames={classNames}
        in={isTimerActive}
        timeout={100}
        unmountOnExit
        mountOnEnter
      >
        <div className={cx(style.timer, { [style.ends]: !isTimerRunning })}>
          <div className={style.startsFrom}>Starts from: { displayedStartTime }</div>
          <div className={style.time}>
            {convertSecondsToTimerFormat(this.state.seconds)}
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
  startTime: state.appState.startTime,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer)