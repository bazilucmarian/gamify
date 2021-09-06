import React from 'react';
import PropTypes from 'prop-types';

import Input from './input';
import Button from './button';

const target = {target: {id: 'profilePicture'}};

function RegisterForm({handleChange, handleSubmit, fields, errors}) {
  const handleOnChangeFile = (fieldName, fieldValue) => {
    handleChange(target, fieldName, fieldValue);
  };
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <fieldset className="fieldset" aria-busy="false">
        <div className="form__container">
          <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Register</h1>
          <Input
            inputLabel="Username"
            inputOnChange={handleChange}
            inputValue={fields?.username}
            inputType="text"
            inputId="username"
            error={errors.username}
          />
          <Input
            inputLabel="Email"
            inputOnChange={handleChange}
            inputValue={fields?.email}
            inputType="email"
            inputId="email"
            error={errors.email}
          />
          <Input
            inputLabel="Password"
            inputOnChange={handleChange}
            inputValue={fields?.password}
            inputType="password"
            inputId="password"
            error={errors.password}
          />

          <Input
            inputLabel="Job"
            inputOnChange={handleChange}
            inputValue={fields?.job}
            inputType="text"
            inputId="job"
            error={errors.job}
          />
          <Input
            inputLabel="Import profile picture"
            inputOnChange={handleOnChangeFile}
            inputValue={fields?.profilePicture}
            inputType="file"
            inputId="profilePicture"
            error={errors.job}
          />

          <div>
            <Button variant="contained-secondary" color="secondary" size="lg" type="submit">
              Register
            </Button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
RegisterForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    profilePicture: PropTypes.shape({
      url: PropTypes.string,
      file: PropTypes.string
    }),
    job: PropTypes.string
  }),
  errors: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    profilePicture: PropTypes.string,
    job: PropTypes.string
  })
};
RegisterForm.defaultProps = {
  errors: {},
  fields: {}
};
export default RegisterForm;
