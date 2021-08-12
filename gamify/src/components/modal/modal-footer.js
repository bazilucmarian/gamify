import React from 'react';
import PropsType from 'prop-types';

function ModalFooter({children}) {
  return <div className="modal-footer">{children}</div>;
}

ModalFooter.propTypes = {
  children: PropsType.node
};

ModalFooter.defaultProps = {
  children: ''
};

export default ModalFooter;
