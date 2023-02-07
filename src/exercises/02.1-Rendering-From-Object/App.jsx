import React from 'react';

const customer = {
  first_name: 'Giga',
  last_name: 'Amiridze'
}

function App() {
  const { first_name, last_name } = customer;

  return (
    <div>
      <h1>My name is {first_name}</h1>
      <h2>My last name is {last_name}</h2>
    </div>
  );
}

export default App;
