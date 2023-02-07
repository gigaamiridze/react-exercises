import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function Button(props) {
  const { title, isVisible } = props;

  if (isVisible === false) {
    return null;
  } else {
    return (
      <button type="button" className="btn btn-primary">{title}</button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool
}

export default Button;
