import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [btnColor, setBtnColor] = useState('red');
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const newButtonColor = btnColor === 'red' ? 'blue' : 'red';
  const handleCheckbox = () => {
    isBtnDisabled ? setIsBtnDisabled(false) : setIsBtnDisabled(true);
  };
  return (
    <div>
      <button
        style={{ backgroundColor: btnColor, cursor: 'not-allowed' }}
        onClick={() => setBtnColor(newButtonColor)}
        disabled={isBtnDisabled}
        className={isBtnDisabled ? 'disabled' : 'enabled'}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onClick={handleCheckbox} />
    </div>
  );
};

export default App;
