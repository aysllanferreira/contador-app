import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Counter.scss';

function Counter({
  minute,
  handleChange,
  countMin,
  second,
  countSec,
  setIsRunning,
  handleReset,
}) {
  return (
    <div className="Counter">
      <div id="inputs">
        <input maxLength="1440" minLength="0" type="number" ref={minute} onChange={handleChange} value={countMin} />
        <span>:</span>
        <input maxLength="59" minLength="0" type="number" ref={second} onChange={handleChange} value={countSec} />
      </div>

      <div id="btns">
        <button id="start" onClick={() => setIsRunning(true)} type="button">Start</button>
        <button id="stop" onClick={() => setIsRunning(false)} type="button">Stop</button>
        <button id="reset" onClick={handleReset} type="button">Reset</button>
      </div>

    </div>
  );
}

Counter.propTypes = {
  minute: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  handleChange: PropTypes.func.isRequired,
  countMin: PropTypes.number.isRequired,
  second: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  countSec: PropTypes.number.isRequired,
  setIsRunning: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Counter;
