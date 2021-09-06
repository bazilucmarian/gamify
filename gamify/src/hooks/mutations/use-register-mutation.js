import {useMutation} from 'react-query';
import {toast} from 'react-toastify';

import {useAuth} from '../../components/auth/use-auth';

const useRegisterMutation = () => {
  const {signUp} = useAuth();

  return useMutation(registerFields => signUp(registerFields), {
    onSuccess: () => {
      toast.success('Successful registration ✅✅');
    },
    onError: error => {
      toast.error(error.response.data.message);
    }
  });
};

export default useRegisterMutation;
