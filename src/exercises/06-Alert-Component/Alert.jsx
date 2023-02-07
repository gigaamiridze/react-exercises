import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function Alert(props) {
  return (
    <div className="alert alert-danger" role="alert">
      {props.text}
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string,
}

export default Alert;
