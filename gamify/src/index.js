import React from 'react';
import ReactDOM from 'react-dom';
import {QueryClientProvider} from 'react-query';
import {BrowserRouter as Router} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import {queryClient} from './react-query/query-client';
import App from './components/app';

import './css/main.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  </QueryClientProvider>,
  document.getElementById('root')
);
