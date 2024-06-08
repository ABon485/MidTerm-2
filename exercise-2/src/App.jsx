import React, { useState } from 'react';
function App() {

  const [inputText, setInputText] = useState("");

  function handleInputChange(event) {
    setInputText(event.target.value);
  }
  /* You will need to use a boolean state to keep the value of the text entered */

  /* You will need a function to handle a key pressed on the first input and update the state*/
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label htmlFor="textInput">Enter any text:</label>
      <input 
        id="textInput"
        value={inputText}
        onChange={handleInputChange}
      />

        <p>
        {/* This input will need to display the text entered in lower case */}
        <label htmlFor="upperCaseText">Here is the text in upper case:</label>
        <input 
          id="upperCaseText" 
          value={inputText.toUpperCase()} 
          disabled 
        />
      </p>
    </main>
  );
}

export default App;
