import React from 'react';
import PropsType from 'prop-types';

const ToastBody = ({children}) => <div className="toast-body">{children}</div>;

ToastBody.propTypes = {
  children: PropsType.node.isRequired
};

export default ToastBody;
