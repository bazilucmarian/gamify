import React, {useCallback, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

import ModalHeader from './modal-header';
import ModalBody from './modal-body';
import ModalFooter from './modal-footer';

function Modal({isOpen, hide, children}) {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      hide();
    }
  };

  const escapeKeyCloseModal = useCallback(
    e => {
      if (e.key === 'Escape' && isOpen) {
        hide();
      }
    },
    [isOpen, hide]
  );

  useEffect(() => {
    document.addEventListener('keydown', escapeKeyCloseModal);
    return () => document.removeEventListener('keydown', escapeKeyCloseModal);
  }, [escapeKeyCloseModal]);

  return createPortal(
    <div>
      {isOpen && (
        <div>
          <div className="overlay" ref={modalRef} onClick={closeModal} aria-hidden="true" />
          <div className="modal">{children}</div>
        </div>
      )}
    </div>,
    document.getElementById('modal')
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
