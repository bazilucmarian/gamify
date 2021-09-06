import {useMutation} from 'react-query';
import {toast} from 'react-toastify';

import {useAuth} from '../../components/auth/use-auth';
import {useUser} from '../use-user';

const useLoginMutation = () => {
  const {signIn} = useAuth();
  const {updateUser} = useUser();

  return useMutation(loginFields => signIn(loginFields), {
    onSuccess: data => {
      toast.success('Successful login ✅👏');
      updateUser(data);
    },
    onError: error => {
      toast.error(error.response.data.message);
    }
  });
};

export default useLoginMutation;
