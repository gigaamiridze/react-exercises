import React from 'react';
import PropTypes from 'prop-types';

function PersonProps(props) {
  return (
    <div>Name: {props.name} | Surname: {props.surname} | Age: {props.age}</div>
  );
}

PersonProps.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number
}

export default PersonProps;
