import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [btnColor, setBtnColor] = useState('red');
  const newButtonColor = btnColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newButtonColor)}
      >Change to {newButtonColor}</button>
    </div >
  );
}

export default App;
