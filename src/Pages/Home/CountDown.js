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
      <div className='countdown-main'>
        <CountdownTimer noPoints count={5432} size={40}/>
        <div>
          <ul className='p-0 pt-4'>
            <li className='pr-5 pl-1'>Day</li>
            <li className='pr-4'>Hour</li>
            <li className='pr-4'>Minuts</li>
            <li>Seconds</li>
          </ul>
        </div>
      </div>
      
      
      
    );
  }
}
export default SimpleCountdownTimer;