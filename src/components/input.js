import React from 'react';
import PropTypes from 'prop-types';

function Input({inputId, inputType, inputValue, inputOnChange, inputLabel, error}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className="form-group">
        <input
          className="form-group__input"
          id={inputId}
          type={inputType}
          value={inputValue}
          onChange={inputOnChange}
          required
        />
        <label className="form-group__label" htmlFor={inputId}>
          <span className="content">{inputLabel}</span>
        </label>
      </div>
      {error && <span className="form-group__error">{error}</span>}
    </div>
  );
}

Input.propTypes = {
  error: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputOnChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  error: '',
  inputValue: ''
};

export default Input;
