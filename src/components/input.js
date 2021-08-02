import React from 'react';
import PropTypes from 'prop-types';

function Input({inputId, inputType, inputValue, inputOnChange, inputLabel, error, isRequired, className}) {
  return (
    <div className="form-group">
      <input
        className={`form-group__input ${className}`}
        id={inputId}
        type={inputType}
        value={inputValue}
        onChange={inputOnChange}
        required={isRequired}
      />
      <label className="form-group__label" htmlFor={inputId}>
        {error ? <span className="form-group__error">{error}</span> : <span className="content">{inputLabel}</span>}
      </label>
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputOnChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool
};

Input.defaultProps = {
  error: '',
  inputValue: '',
  className: '',
  isRequired: true
};

export default Input;
