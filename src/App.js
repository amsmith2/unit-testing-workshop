import React, {useState} from 'react';
import './App.css';
import { Button } from './Button';
import { Counter } from './Counter';

export const App = () => {
  const [buttonCounts, setButtonCounts] = useState([0,0]);

  const handleClick = (index) => () => {
    console.log('handling click for index', index);
    const count = buttonCounts[index] + 1;
    index === 0 ? setButtonCounts([count, buttonCounts[1]]) : setButtonCounts([buttonCounts[0], count])
  }

  return (
    <div data-testid="count-wrapper">
      <Button name="firstButton" onClick={handleClick(0)} text="Button #1" />
      <Button name="secondButton" onClick={handleClick(1)} text="Button #2" />
      <Counter counts={buttonCounts} />
    </div>
  );
}

export default App;
