import React from 'react';
import PropsType from 'prop-types';

const ToastHeader = ({children}) => <div className="toast-header">{children}</div>;

ToastHeader.propTypes = {
  children: PropsType.node.isRequired
};

export default ToastHeader;
