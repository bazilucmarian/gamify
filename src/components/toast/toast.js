import React from 'react';
import PropTypes from 'prop-types';

import ToastHeader from './toast-header';
import ToastBody from './toast-body';

const Toast = ({isActive, children}) => (
  <div className="toast-container">
    <div className={`toast toast--${isActive ? 'fadeIn' : 'fadeOut'}`}>{children}</div>
  </div>
);

Toast.Header = ToastHeader;
Toast.Body = ToastBody;

Toast.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node
};
Toast.defaultProps = {
  children: ''
};
export default Toast;
