import React from 'react';
import cx from 'classnames';
import style from './DateBox.css';

export default class DateBox extends React.Component {
  render() {
    return (
      <div className={cx(style.container, {[style.weekend]: this.props.isWeekend})} onClick={this.props.onClick}>
        <div className={style.day}>
          MON
        </div>
        <div className={style.date}>
          {this.props.date}
        </div>
      </div>
    )
  }
}