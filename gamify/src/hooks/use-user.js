import {useState} from 'react';
import {useQuery, useQueryClient} from 'react-query';

import {deleteStoredUser, getStoredUser, setStoredUser} from '../user-local-storage';
import api from '../components/api';
import {queryKeys} from '../react-query/constants';
import {getJWTHeader} from '../axios-instance';

// query function

async function getUser(user) {
  if (!user) {
    return null;
  }
  // eslint-disable-next-line no-return-await
  return await api.get(`/auth/${user.userId}`, getJWTHeader(user));
}

export const useUser = () => {
  const [user, setUser] = useState(null || getStoredUser());
  const queryClient = useQueryClient();

  useQuery(queryKeys.user, () => getUser(user), {
    enabled: !user,
    onSuccess: data => {
      setUser(data);
    }
  });

  function updateUser(newUser) {
    setUser(newUser);
    setStoredUser(newUser);
    queryClient.setQueriesData(queryKeys.user, newUser);
  }

  function clearUser() {
    setUser(null);
    deleteStoredUser();
    queryClient.setQueryData(queryKeys.user, null);
  }
  return {user, updateUser, clearUser};
};
