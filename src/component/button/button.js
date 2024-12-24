import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ backgroundColor, content, onClick }) => {
  return (
    <button
      style={{ backgroundColor }}
      onClick={onClick}
      className="custom-button"
    >
      {content}
    </button>
  );
};

PropTypes.string.isRequired = undefined;
Button.propTypes = {
  backgroundColor: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
