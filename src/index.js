import React from "react";
import ReactDOM from 'react-dom'
import App from "./App";
import DigitalClock from "./DigitalClock";
import GetTime from "./GetTime";
import './index.css'

ReactDOM.render(
  <>
    <App />
    <GetTime />
    <br />
    <DigitalClock />
  </>, document.getElementById('root')
)
