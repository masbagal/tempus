import React from 'react';
import style from './DateSlider.css';

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
      <div className={style.dateSlider} style={translate}>
        <DateBox date={0} onClick={this.clickItem(0)}/>
        <DateBox date={1} onClick={this.clickItem(1)}/>
        <DateBox date={2} onClick={this.clickItem(2)}/>
        <DateBox date={3} onClick={this.clickItem(3)}/>
        <DateBox date={4} onClick={this.clickItem(4)} isWeekend/>
        <DateBox date={5} onClick={this.clickItem(5)} isWeekend/>
        <DateBox date={6} onClick={this.clickItem(6)}/>
        <DateBox date={7} onClick={this.clickItem(7)}/>
        <DateBox date={8} onClick={this.clickItem(8)}/>
        <DateBox date={9} onClick={this.clickItem(9)}/>
      </div>
    )
  }
}