import React from 'react';

import {useForm} from '../../hooks/use-form';
import EmptyPlaceholder from '../../components/empty-placeholder';
import Logo from '../../assets/imgs/logo.png';
import validateRegisterForm from '../../utils/form-rules-register';
import LoginForm from '../../components/login-form';
import useLoginMutation from '../../hooks/mutations/use-login-mutation';
import {emptyMessage} from '../../constants/messages';

const emptyState = {
  email: '',
  password: ''
};

function LoginPage() {
  const {mutate: loginHandler} = useLoginMutation();

  const {fields, handleChange, handleSubmit, errors} = useForm(
    emptyState,
    emptyState,
    loginHandler,
    validateRegisterForm
  );

  return (
    <div className="register-page">
      <div className="register-page__left">
        <LoginForm fields={fields} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>

      <div className="register-page__right">
        <EmptyPlaceholder message={emptyMessage.welcome} image={Logo} />
      </div>
    </div>
  );
}

export default LoginPage;
