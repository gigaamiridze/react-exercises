import React from 'react';

function MappingArray() {
  const animals = ['Horse', 'Turtle', 'Elephant', 'Monkey'];

  return (
    <ul>
      {animals.map((animal, index) => (
        <li key={index}>{animal}</li>
      ))}
    </ul>
  );
}

export default MappingArray;
