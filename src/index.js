import React from "react";
import ReactDOM from "react-dom";
import TimerWindow from './window/TimerWindow';
import 'mini.css';


const Index = () => {
  return <div>Hello React! <Button/></div>;
};

ReactDOM.render(<TimerWindow />, document.getElementById("index"));