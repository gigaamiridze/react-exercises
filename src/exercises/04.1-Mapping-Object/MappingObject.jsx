import React from 'react';

function MappingObject() {
  const animals = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephant' }, { label: 'Monkey' } ];

  return (
    <ul>
      {animals.map((item, index) => (
        <li key={index}>{item.label}</li>
      ))}
    </ul>
  );
}

export default MappingObject;
