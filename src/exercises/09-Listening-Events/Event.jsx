import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Event() {
  const handleClick = () => {
    console.log("Button clicked");
  }

  return (
    <button 
      type="button"
      className="btn btn-primary"
      onClick={handleClick}
    >
      Click
    </button>
  );
}

export default Event;
