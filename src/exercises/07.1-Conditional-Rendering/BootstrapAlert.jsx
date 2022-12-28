import React from 'react';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';

const colorClasses = {
  'red': 'alert-danger',
  'orange': 'alert-warning'
}

function BootstrapAlert(props) {
  const { text, color } = props;

  return (
    <div className={`alert ${colorClasses[color]}`} role="alert">
      {text}
    </div>
  );
}

BootstrapAlert.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default BootstrapAlert;
