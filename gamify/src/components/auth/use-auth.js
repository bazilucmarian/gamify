/* eslint-disable no-return-await */
import {useUser} from '../../hooks/use-user';
import api from '../api';

async function signUp(body) {
  return await api.post('/auth/register', body);
}
async function signIn(body) {
  return await api.post('/auth/login', body);
}

export function useAuth() {
  const {clearUser} = useUser();

  function signOut() {
    clearUser();
  }

  return {
    signUp,
    signIn,
    signOut
  };
}
