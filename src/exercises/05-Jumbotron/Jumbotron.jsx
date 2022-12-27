import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function Jumbotron(props) {
  const { title, description, buttonLabel, buttonURL } = props;

  return (
    <div className="jumbotron m-5">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{description}</p>
      <a className="btn btn-primary btn-lg" href={buttonURL} role="button">{buttonLabel}</a>
    </div>
  );
}

Jumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
}

export default Jumbotron;
