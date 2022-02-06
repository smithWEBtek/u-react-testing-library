import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setColor] = useState('gray');
  const [buttonText, setButtonText] = useState('Turn Blue')
  const toggleColor = () => {
    if (color === 'gray') {
      setColor('blue')
      setButtonText('Turn Red')
    } else if (color === 'red') {
      setColor('blue')
      setButtonText('Turn Red')
    } else if (color === 'blue') {
      setColor('red')
      setButtonText('Turn Blue')
    }
  };

  return (
    <div className="App">
      <button
        onClick={toggleColor}
      ><h1 className={color}>{buttonText}</h1></button>
    </div >
  );
}

export default App;
