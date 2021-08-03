import React from 'react';
import PropTypes from 'prop-types';

import {useForm} from '../hooks/use-form';

import Modal from './modal/modal';
import FormShop from './add-or-edit-form-shop';

const emptyState = {
  title: '',
  imageURL: '',
  credits: '',
  description: ''
};

function ShopModal({isOpen, hide, currentShopItem}) {
  const isEditing = Boolean(currentShopItem?.id);

  const {fields, handleChange, handleSubmit, errors, clearField} = useForm(currentShopItem);

  return (
    <Modal isOpen={isOpen} hide={hide}>
      <Modal.Header>
        <div className="modal__title">{isEditing ? <h1>Edit ShopItem</h1> : <h1>Add new shopItem</h1>}</div>
      </Modal.Header>
      <Modal.Body>
        <FormShop
          closeModal={hide}
          currentShopItem={currentShopItem}
          isEditing={isEditing}
          errors={errors}
          fields={fields}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          clearField={clearField}
        />
      </Modal.Body>
    </Modal>
  );
}

ShopModal.propTypes = {
  hide: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  currentShopItem: PropTypes.shape({
    title: PropTypes.string,
    xp: PropTypes.number,
    credits: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    id: PropTypes.number
  })
};

ShopModal.defaultProps = {
  currentShopItem: emptyState
};

export default ShopModal;
