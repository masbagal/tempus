import React from 'react';
import cx from 'classnames';
import ButtonCss from './Button.css';

export const COLOR = {
  GREEN: 'linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)',
  RED: 'linear-gradient(315deg, #ff7878 0%, #ff0000 74%)',
  BLUE: 'linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)'
};

export default class Button extends React.Component {
  handleClick = () => {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const {
      color = COLOR.BLUE,
      children,
      classNames
    } = this.props;

    return (
      <button
        className={cx(ButtonCss.button, classNames)}
        onClick={this.handleClick}
        style={{ backgroundImage: color }}
      >
        {children}
      </button>
    )
  }
}