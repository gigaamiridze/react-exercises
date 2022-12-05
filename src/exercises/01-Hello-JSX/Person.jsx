/*
  Exercise:
    - Include that variable inside the react function the hard coded word Felix with the variable
      name (remember the curly brackets {}).
*/

import React from 'react';

function Person() {
  
  const name = 'Felix';
  const age = 18;

  return (
    <div>{name} is {age} years old</div>
  );
}

export default Person;
