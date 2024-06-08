import React, { useState } from 'react';

function App() {
  const [isSunny, setIsSunny] = useState(true);

  function onSunClick() {
    setIsSunny(true);
  }

  function onRainClick() {
    setIsSunny(false);
  }

  function getTitle() {
    return isSunny ? "It's Sunny!" : "It's Raining!";
  }

  function getBackgroundColor() {
    return isSunny ? "sunny" : "rainy";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
