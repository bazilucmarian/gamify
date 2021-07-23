import React from 'react';
import PropTypes from 'prop-types';

const Input = ({inputId, inputType, inputValue, inputChangedValue, inputLabel, error}) => (
  <div className="form-group">
    <input
      className="form-group__input"
      id={inputId}
      type={inputType}
      value={inputValue}
      onChange={inputChangedValue}
      required
    />
    <label className="form-group__label" htmlFor={inputId}>
      {error ? <span className="form-group__error">{error}</span> : <span className="content">{inputLabel}</span>}
    </label>
  </div>
);

Input.propTypes = {
  error: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputChangedValue: PropTypes.func.isRequired
};

Input.defaultProps = {
  error: '',
  inputValue: ''
};

export default Input;
