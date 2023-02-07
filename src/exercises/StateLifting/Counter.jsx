import React from 'react';

function Counter({ count, handleClick }) {
  return (
    <>
      <button type='button' onClick={handleClick}>Clicked {count} times</button>
    </>
  );
}

export default Counter;
