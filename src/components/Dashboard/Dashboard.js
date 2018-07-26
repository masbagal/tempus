import React from 'react';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { connect } from "redux-zero/react";

import style from './Dashboard.css';

import actions from '../../state-management/actions';

import DateSlider from '../DateSlider/DateSlider';
import StartButton from '../StartButton/StartButton';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStart: false };
  }

  btnClick = () => {
    this.props.startTimer();
  }

  render() {
    const classNames= {
      enter: style.dashEnter,
      enterActive: style.dashEnterActive,
      exit: style.dashExit,
      exitActive: style.dashExitActive,
    }


    return (
      <div className={style.container}>
        <CSSTransition 
          classNames={classNames}
          in={!this.props.isTimerActive}
          timeout={500}
          unmountOnExit
          mountOnEnter
        >
          <div className={style.dashboard}>
            <DateSlider />
            <div className={style.totalHourContainer}>
              <div>Your total work hour(s):</div>
              <div className={style.totalHour}>
                08:23
              </div>
            </div>
          </div>
        </CSSTransition>
        <button className={cx(style.startCta, { [style.clicked]: this.props.isTimerActive})} onClick={this.btnClick}>
          <span>Start New Task</span>
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ isTimerActive }) => ({ isTimerActive })

export default connect(mapStateToProps, actions)(Dashboard)