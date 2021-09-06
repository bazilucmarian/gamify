import React from 'react';
import FileBase from 'react-file-base64';
import PropTypes from 'prop-types';

function Input({inputId, inputType, inputValue, inputOnChange, inputLabel, error, isRequired, className}) {
  return (
    <div className="form-group__container">
      <div className="form-group">
        {inputType === 'file' ? (
          <>
            <FileBase
              type="file"
              multiple={false}
              onDone={({base64, file}) =>
                inputOnChange('profilePicture', {
                  ...inputValue,
                  url: base64,
                  file: file.name
                })
              }
            />
            <label className="label-input-file" htmlFor={inputId}>
              <span>{inputLabel}</span>
            </label>
            <span className="label-input-file__file">{inputValue.file}</span>
          </>
        ) : (
          <>
            <input
              className={`form-group__input ${className}`}
              id={inputId}
              type={inputType}
              value={inputValue}
              onChange={inputOnChange}
              required={isRequired}
              placeholder="placeholder"
            />
            <label className="form-group__label" htmlFor={inputId}>
              <span className="content">{inputLabel}</span>
            </label>
          </>
        )}
      </div>
      {error && <span className="form-group__error">{error}</span>}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
