import React from 'react';
import PropTypes from 'prop-types';

const Input = ({inputId, inputType, inputValue, inputChangedValue, inputLabel}) => (
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
      <span className="content">{inputLabel}</span>
    </label>
  </div>
);

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputChangedValue: PropTypes.func.isRequired
};

export default Input;
