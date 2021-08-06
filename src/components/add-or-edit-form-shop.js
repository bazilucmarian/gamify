import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Plus from '../icons/plus';
import Close from '../icons/close';
import {checkUrl} from '../utils';

import Input from './input';
import Button from './button';

const target = {target: {id: 'imageURL', value: ''}};

function FormShop({closeModal, handleChange, handleSubmit, fields, errors, isEditing}) {
  const handleAddURL = () => {
    const imageURLField = fields?.imageURL;
    if (imageURLField && checkUrl(imageURLField)) {
      handleChange(target, 'images', [
        ...fields?.images,
        {imageUrl: imageURLField, name: `${fields.title}-${Math.random()}`}
      ]);
    } else {
      // eslint-disable-next-line no-alert
      alert('Url is incorrect.');
    }
  };

  const handleRemoveURL = index => {
    handleChange(
      target,
      'images',
      fields?.images.filter((_, imageIndex) => index !== imageIndex)
    );
  };

  return (
    <form className="form shop-" onSubmit={handleSubmit}>
      <div>
        <Input
          inputLabel="Title"
          inputOnChange={handleChange}
          inputValue={fields?.title}
          inputType="text"
          inputId="title"
          error={errors.title}
        />
        <div className="image-container">
          <Input
            inputLabel="ImageUrl"
            inputOnChange={handleChange}
            inputValue={fields?.imageURL}
            inputType="text"
            inputId="imageURL"
            error={errors.imagesURL}
            isRequired={false}
          />

          <div className="input-arrow">
            <Plus onClick={handleAddURL} />
          </div>
        </div>
        {fields?.images &&
          fields.images.map(({imageUrl}, index) => (
            <Fragment key={Date.now() * Math.random()}>
              <div className="url-container">
                <p className="url">{imageUrl}</p>
                <div className="url-icon">
                  <Close onClick={() => handleRemoveURL(index)} />
                </div>
              </div>
            </Fragment>
          ))}

        <Input
          inputLabel="Credits cost (number)"
          inputOnChange={handleChange}
          inputValue={fields?.credits}
          inputType="number"
          inputId="credits"
          error={errors.credits}
        />
        <Input
          inputLabel="Description"
          inputOnChange={handleChange}
          inputValue={fields?.description}
          inputType="text"
          inputId="description"
          error={errors.description}
        />
      </div>
      <div className="buttons-container">
        <div className="buttons-container__wrapper">
          <Button variant="outlined-secondary" color="secondary" size="sm" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="contained-secondary" color="secondary" size="sm-1" type="submit">
            {isEditing ? 'Edit' : 'Add'}
          </Button>
        </div>
      </div>
    </form>
  );
}

FormShop.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  errors: PropTypes.shape({
    title: PropTypes.string,
    imagesURL: PropTypes.string,
    credits: PropTypes.string,
    description: PropTypes.string
  }),
  fields: PropTypes.shape({
    title: PropTypes.string,
    imageURL: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string
      })
    ),
    credits: PropTypes.number,
    description: PropTypes.string
  }),
  currentShopItem: PropTypes.shape({
    credits: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string
      })
    )
  })
};

FormShop.defaultProps = {
  errors: {},
  fields: {},
  currentShopItem: {},
  isEditing: false
};

export default FormShop;
