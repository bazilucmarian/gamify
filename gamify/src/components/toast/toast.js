import React from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';

import ToastHeader from './toast-header';
import ToastBody from './toast-body';

const Toast = ({isVisible, children}) =>
  createPortal(
    <div className="toast-container">
      <div className={`toast toast--${isVisible ? 'fadeIn' : 'fadeOut'}`}>{children}</div>
    </div>,
    document.getElementById('toast')
  );

Toast.Header = ToastHeader;
Toast.Body = ToastBody;

Toast.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node
};
Toast.defaultProps = {
  children: ''
};
export default Toast;
