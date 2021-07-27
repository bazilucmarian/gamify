import React from 'react';
import PropsType from 'prop-types';

function ModalBody({children}) {
  return <div className="modal-body">{children}</div>;
}

ModalBody.propTypes = {
  children: PropsType.node
};

ModalBody.defaultProps = {
  children: ''
};
export default ModalBody;
