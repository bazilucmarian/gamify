import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

import Plus from '../icons/plus';
import Close from '../icons/close';
import {checkUrl} from '../utils';

import Input from './input';
import Button from './button';

function FormShop({closeModal, handleChange, fields, errors, clearField}) {
  const [imageURLS, setImageURLS] = useState([]);
  const imageURLField = fields?.imageURL;

  const handleAddURL = () => {
    // TODO: needs validation improvements
    if (imageURLField) {
      const validURL = checkUrl(imageURLField) ? imageURLField : null;

      if (validURL) {
        setImageURLS(prev => [...prev, validURL]);
        clearField('imageURL');
      }
    }
  };

  const handleRemoveURL = (url, index) => {
    const filteredURLS = imageURLS.filter((item, imageIndex) => index !== imageIndex);
    setImageURLS(filteredURLS);
  };

  return (
    <form className="form shop-">
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
            error={errors.xp}
            isRequired={false}
          />

          <div className="input-arrow">
            <Plus onClick={handleAddURL} />
          </div>
        </div>
        {imageURLS &&
          imageURLS.map((url, index) => (
            <Fragment key={Date.now() * Math.random()}>
              <div className="url-container">
                <p className="url">{url}</p>
                <div className="url-icon">
                  <Close onClick={() => handleRemoveURL(url, index)} />
                </div>
              </div>
            </Fragment>
          ))}
        {/* TODO: This input will be of type "number". */}
        <Input
          inputLabel="Credits cost (number)"
          inputOnChange={handleChange}
          inputValue={fields?.credits}
          inputType="text"
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
            Add
          </Button>
        </div>
      </div>
    </form>
  );
}

FormShop.propTypes = {
  handleChange: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  clearField: PropTypes.func,
  errors: PropTypes.shape({
    title: PropTypes.string,
    xp: PropTypes.string,
    credits: PropTypes.string,
    description: PropTypes.string
  }),
  fields: PropTypes.shape({
    title: PropTypes.string,
    imageURL: PropTypes.string,
    credits: PropTypes.string,
    description: PropTypes.string
  })
};

FormShop.defaultProps = {
  clearField: () => {},
  errors: {},
  fields: {}
};

export default FormShop;
