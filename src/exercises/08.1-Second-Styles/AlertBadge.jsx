import React from 'react';
import PropTypes from 'prop-types';

function AlertBadge(props) {
  const { label, number } = props;

  return (
    <div className="alert-badge">
      <button type="button" style={styles.buttonStyles}>
        {label} <span style={styles.badgeStyles}>{number}</span>
      </button>
    </div>
  );
}

const styles = {
  buttonStyles: {
    width: 100,
    height: 35,
    backgroundColor: 'dodgerblue',
    color: 'white',
    outline: 'none',
    border: 'none',
    borderRadius: 5,
  },

  badgeStyles: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 2,
  }
}

AlertBadge.propTypes = {
  label: PropTypes.string,
  number: PropTypes.number,
}

export default AlertBadge;
