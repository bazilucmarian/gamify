import React from 'react';

import RegisterForm from '../../components/register-form';
import {useForm} from '../../hooks/use-form';
import EmptyPlaceholder from '../../components/empty-placeholder';
import Logo from '../../assets/imgs/logo.png';
import validateRegisterForm from '../../utils/form-rules-register';
import useRegisterMutation from '../../hooks/mutations/use-register-mutation';
import {emptyMessage} from '../../constants/messages';

const emptyState = {
  username: '',
  email: '',
  password: '',
  profilePicture: {},
  job: ''
};

function RegisterPage() {
  // mutation
  const {mutate: registerHandler} = useRegisterMutation();

  const {fields, handleChange, handleSubmit, errors} = useForm(
    emptyState,
    emptyState,
    registerHandler,
    validateRegisterForm
  );

  return (
    <div className="register-page">
      <div className="register-page__left">
        <RegisterForm fields={fields} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>

      <div className="register-page__right">
        <EmptyPlaceholder message={emptyMessage.welcome} image={Logo} />
      </div>
    </div>
  );
}

export default RegisterPage;
