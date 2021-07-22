import React from 'react';
import PropsType from 'prop-types';

const ModalFooter = ({children}) => <div className="modal-footer">{children}</div>;

ModalFooter.propTypes = {
  children: PropsType.node
};

ModalFooter.defaultProps = {
  children: ''
};

export default ModalFooter;
