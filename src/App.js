import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {

  let [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  }

  const handleReset = () => {
    const reset = 0;
    setValue(value = reset);
  }

  return (
    <div className="App">
      <div className="container">
        <img className="freecodecamp-logo" alt="freeCodeCamp Logo" src="/images/freecodecamp-logo.png"/>

      </div>
      <div className="counter-container">
        <Counter value={value}/>
        <Button text={"Click"} handleClick={handleClick}/>
        <Button text={"Reset"} handleClick={handleReset}/>
      </div>
    </div>
  );
}

export default App;