import React, { useState } from 'react';

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [onA, setInputA] = useState('');
  const [onB, setInputB] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  function handleAChange(event) {
    setInputA(event.target.value);
  }

  function handleBChange(event) {
    setInputB(event.target.value);
  }
  /* You will need some function to handle the key pressed and button events */
   
  function handleCompute() {
    const numA = parseFloat(onA);
    const numB = parseFloat(onB);

    if (!isNaN(numA) && !isNaN(numB)) {
      setResult(numA + numB);
      setError('');
    } else {
      setResult('');
      setError('A and B shall be numbers !');
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={onA} onChange={handleAChange} />

      <label>B =</label>
      <input onKeyUp={onB} onChange={handleBChange}/>

      <label>A + B =</label>
      <input value={error ? error : result} style={{ color: error ? 'red' : 'black' }} disabled />

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
