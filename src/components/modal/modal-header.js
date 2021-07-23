import React from 'react';
import PropsType from 'prop-types';

const ModalHeader = ({children}) => <div className="modal-header">{children}</div>;

ModalHeader.propTypes = {
  children: PropsType.node
};

ModalHeader.defaultProps = {
  children: ''
};
export default ModalHeader;
