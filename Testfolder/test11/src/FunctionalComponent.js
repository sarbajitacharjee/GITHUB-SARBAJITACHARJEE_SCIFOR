import React, { useState } from 'react';

const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div style={{ border: '2px solid green', padding: '20px', marginBottom: '20px' }}>
      <h2> Functional Component</h2>
      <p>Counter Value: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>
      
    </div>
  );
};

export default FunctionalComponent;
