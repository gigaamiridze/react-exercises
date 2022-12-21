import React from 'react';
import dylanImg from '../../assets/Dylan.png?raw=true';
import 'bootstrap/dist/css/bootstrap.min.css';

function BootstrapCard() {
  return (
    <div className='card' style={{ width: '20rem' }}>
      <img className='card-img-top' src={dylanImg} alt="Dylan" />
      <div className='card-body'>
        <h5 className='card-title'>Bob Dylan</h5>
        <p className='card-text'>Bob Dylan is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
        <a 
          href="https://en.wikipedia.org/wiki/Bob_Dylan" 
          target="_blank"
          rel="noreferrer"
          className='btn btn-primary'>
            Go to wikipedia
        </a>
      </div>
    </div>
  );
}

export default BootstrapCard;
