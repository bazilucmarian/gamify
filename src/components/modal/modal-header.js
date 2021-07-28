import React from 'react';
import PropsType from 'prop-types';

function ModalHeader({children}) {
  return <div className="modal-header">{children}</div>;
}

ModalHeader.propTypes = {
  children: PropsType.node
};

ModalHeader.defaultProps = {
  children: ''
};
export default ModalHeader;
