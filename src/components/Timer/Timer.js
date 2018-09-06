import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";

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



  componentDidMount() {
    setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000)
  }

  render() {
    const classNames= {
      enter: style.timerEnter,
      enterActive: style.timerEnterActive,
      exit: style.timerExit,
      exitActive: style.timerExitActive,
    }

    return (
      <CSSTransition 
        classNames={classNames}
        in={this.props.isTimerActive}
        timeout={250}
        unmountOnExit
        mountOnEnter
      >
        <div className={style.timer}>
          <div className={style.time}>
            00:00:{this.prependZero(this.state.seconds)}
          </div>
        </div>
      </CSSTransition>
    )
  }
}

const mapStateToProps = (state) => ({ isTimerActive: state.appState.timerActive })

export default connect(mapStateToProps)(Timer)