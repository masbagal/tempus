import React from 'react';
import style from './DateDisplay.css';

import DateBox from '../DateBox/DateBox';

export default class DateSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }

  clickItem = (idx) => () => { 
    this.setState({ selected: idx }, () => console.log(this.state.selected * 51))
  };

  render() {
    const translateValue = (this.state.selected * -66) / 2;
    const translate = { transform: `translateX(${translateValue}px)` };
    return (
      <div className={style.dateDisplay} style={translate}>
        Tuesday, 4 September 2017
      </div>
    )
  }
}