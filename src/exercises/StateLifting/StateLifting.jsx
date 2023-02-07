import React, { useState }  from 'react';
import Counter from './Counter';

function StateLifting() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Counter count={count} handleClick={handleClick}/>
      <Counter count={count} handleClick={handleClick}/>
    </>
  );
}

export default StateLifting;
