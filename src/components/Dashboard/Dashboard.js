import React from 'react';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";

import { startTask } from '../../state-management/actions/appStateActions';

import style from './Dashboard.css';

import DateDisplay from '../DateDisplay/DateDisplay';
import Button, { COLOR } from '../Button/Button';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStart: false };
  }

  btnClick = () => {
    this.props.startTask();
  }

  render() {
    const classNames= {
      enter: style.dashEnter,
      enterActive: style.dashEnterActive,
      exit: style.dashExit,
      exitActive: style.dashExitActive,
    }

    const { timerActive } = this.props;

    return (
      <div className={style.container}>
        <CSSTransition 
          classNames={classNames}
          in={!timerActive}
          timeout={500}
          unmountOnExit
          mountOnEnter
        >
          <div className={style.dashboard}>
            <DateDisplay />
            <div className={style.totalHourContainer}>
              <div>Your total work hour(s):</div>
              <div className={style.totalHour}>
                08:23
              </div>
            </div>
          </div>
        </CSSTransition>
        <div className={cx(style.startCta, { [style.clicked]: timerActive})}>
          <Button onClick={this.btnClick} color={COLOR.GREEN}>Start New Task</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  timerActive: state.appState.timerActive, 
  timerRunning: state.appState.timerRunning, 
});

const mapDispatchToProps = dispatch => ({
  startTask: () => dispatch(startTask())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)