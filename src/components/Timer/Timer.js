import React from 'react';
import style from './Timer.css';

export default class Timer extends React.Component {
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
    return (
      <div className={style.timer}>
        <div className={style.time}>
          01:23:{this.prependZero(this.state.seconds)}
        </div>
      </div>
    )
  }
}