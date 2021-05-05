import React from "react";
import CountdownTimer from "react-component-countdown-timer";
import "../../../node_modules/react-component-countdown-timer/lib/styles.css";

 
class SimpleCountdownTimer extends React.Component {
  render() {
    var settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true,
    };
    return (
      <div>
        <CountdownTimer noPoints count={5432} size={40}/>
        <div>
          <ul className='p-0'>
            <li>Day</li>
            <li>Hour</li>
            <li>Minuts</li>
            <li>Seconds</li>
          </ul>
        </div>
      </div>
      
      
      
    );
  }
}
export default SimpleCountdownTimer;