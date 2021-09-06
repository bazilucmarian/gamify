import React from 'react';
import PropTypes from 'prop-types';

import Input from './input';
import Button from './button';

function LoginForm({handleChange, handleSubmit, fields, errors}) {
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <fieldset className="fieldset" aria-busy="false">
        <div className="form__container">
          <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Sign in </h1>

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

          <div>
            <Button variant="contained-secondary" color="secondary" size="lg" type="submit">
              Login
            </Button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  })
};
LoginForm.defaultProps = {
  errors: {},
  fields: {}
};
export default LoginForm;
