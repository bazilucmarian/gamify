import React, {useCallback, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

import Button from './button';

function Modal({children, setShowModal, showModal, title, toEdit, onAdd, onEdit}) {
  const modalRef = useRef();

  const handleCancel = () => {
    setShowModal(prev => !prev);
  };

  const handleAdd = () => {
    setShowModal(prev => !prev);
    if (onAdd) {
      onAdd();
    }
  };

  const handleEdit = () => {
    setShowModal(prev => !prev);
  };

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const escapeKeyCloseModal = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', escapeKeyCloseModal);
    return () => document.removeEventListener('keydown', escapeKeyCloseModal);
  }, [escapeKeyCloseModal]);

  return createPortal(
    <div>
      {showModal && (
        <div>
          <div className="overlay" ref={modalRef} onClick={closeModal} aria-hidden="true" />
          <div className="modal">
            <div className="modal__container">
              <div className="title">
                <h1>{title}</h1>
              </div>
              {children}
              <div className="buttons-container">
                <Button variant="outlined-secondary" color="secondary" size="sm" onClick={handleCancel}>
                  Cancel
                </Button>
                {toEdit ? (
                  <Button variant="contained-secondary" color="secondary" size="sm-1" onClick={handleEdit}>
                    Edit
                  </Button>
                ) : (
                  <Button variant="contained-secondary" color="secondary" size="sm-1" onClick={handleAdd}>
                    Add
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
