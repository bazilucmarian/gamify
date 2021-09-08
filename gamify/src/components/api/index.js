// import {axiosInstance} from '../../axios-instance';
import axios from 'axios';

const apiCall = async (url, method = 'GET', body = null, headers = null) => {
  const response = await axios({
    url,
    method,
    ...(body && {data: body}),
    headers
  });

  return response.data;
};

export default {
  get: (url, headers) => apiCall(url, 'GET', null, headers),
  post: (url, body, headers) => apiCall(url, 'POST', body, headers),
  put: (url, body, headers) => apiCall(url, 'PUT', body, headers),
  delete: (url, headers) => apiCall(url, 'DELETE', null, headers)
};
