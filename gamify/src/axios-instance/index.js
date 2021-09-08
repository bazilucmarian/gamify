// import axios from 'axios';

// import {baseUrl} from './constants';

// const config = {baseURL: baseUrl};

// export const axiosInstance = axios.create(config);

export function getJWTHeader(user) {
  return {Authorization: `Bearer ${user.token}`};
}
