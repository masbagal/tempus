import React from "react";
import ReactDOM from "react-dom";
import Button from './components/Button';


const Index = () => {
  return <div>Hello React! <Button/></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));