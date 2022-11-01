/* eslint-disable no-alert */

import React, { useState, useEffect, useRef } from 'react';
import Footer from './component/Footer';
import Counter from './component/Counter';
import './styles/App.scss';

function App() {
  const getYear = new Date().getFullYear();
  const alarm = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
  const bip = new Audio('https://www.soundjay.com/phone/sounds/cell-phone-flip-1.mp3');

  const [countMin, setCountMin] = useState(0);
  const [countSec, setCountSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const minute = useRef();
  const second = useRef();

  const handleChange = () => {
    const getMin = minute.current.value;
    const getSec = second.current.value;

    if (getMin <= 1440 && getMin >= 0) setCountMin(+minute.current.value);
    else setCountMin(0);

    if (getSec <= 59 && getSec >= 0) setCountSec(+second.current.value);
    else setCountSec(0);
  };

  const handleReset = () => {
    setCountMin(0);
    setCountSec(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval = null;
    if (isRunning && countMin >= 0 && countSec > 0) {
      interval = setInterval(() => {
        bip.play();
        setCountSec(() => countSec - 1);
      }, 1000);
    } else if (isRunning && countMin > 0 && countSec === 0) {
      setCountMin(() => countMin - 1);
      setCountSec(() => 59);
    } else if (!isRunning && countSec !== 0) {
      clearInterval(interval);
    } else if (isRunning && countMin === 0 && countSec === 0) {
      alarm.play();
      clearInterval(interval);
      alert('ACABOOOOOOOU!');
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [countMin, countSec, isRunning]);

  return (
    <div className="App">
      <header>
        <h1>Contador App</h1>
      </header>
      <main>
        <Counter
          minute={minute}
          handleChange={handleChange}
          countMin={countMin}
          second={second}
          countSec={countSec}
          setIsRunning={setIsRunning}
          handleReset={handleReset}
        />
      </main>

      <footer>
        <Footer getYear={getYear} />
      </footer>

    </div>
  );
}

export default App;
