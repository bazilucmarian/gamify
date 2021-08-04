/* eslint-disable react/prop-types */
import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

import Plus from '../icons/plus';
import Close from '../icons/close';
import {checkUrl} from '../utils';

import Input from './input';
import Button from './button';

function FormShop({closeModal, handleChange, handleSubmit, fields, errors, clearField, currentShopItem, isEditing}) {
  const [imageURLS, setImageURLS] = useState(isEditing ? currentShopItem?.images : []);

  const imageURLField = fields?.imageURL;

  const handleAddURL = () => {
    if (imageURLField) {
      const validURL = checkUrl(imageURLField) ? imageURLField : null;

      if (validURL) {
        setImageURLS(prev => [...prev, {imageUrl: validURL, name: `${fields.title}-${Math.random()}`}]);
        clearField('imageURL');
      }
    }
  };

  const handleRemoveURL = index => {
    const filteredURLS = imageURLS.filter((_, imageIndex) => index !== imageIndex);
    setImageURLS(filteredURLS);
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
            inputOnChange={e => handleChange(e, 'images')}
            inputValue={fields?.imageURL}
            inputType="text"
            inputId="imageURL"
            error={errors.xp}
            isRequired={false}
          />

          <div className="input-arrow">
            <Plus onClick={handleAddURL} />
          </div>
        </div>
        {imageURLS &&
          imageURLS.map(({imageUrl}, index) => (
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
  clearField: PropTypes.func,
  isEditing: PropTypes.bool,
  errors: PropTypes.shape({
    title: PropTypes.string,
    xp: PropTypes.string,
    credits: PropTypes.string,
    description: PropTypes.string
  }),
  fields: PropTypes.shape({
    title: PropTypes.string,
    imageURL: PropTypes.string,
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
  clearField: () => {},
  errors: {},
  fields: {},
  currentShopItem: {},
  isEditing: false
};

export default FormShop;
