import React from 'react';
import PropTypes from 'prop-types';

import Input from './input';
import Button from './button';

function Form({closeModal, isEditing, handleSubmit, handleChange, fields, errors}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__container">
        <Input
          inputLabel="Title"
          inputOnChange={handleChange}
          inputValue={fields?.title}
          inputType="text"
          inputId="title"
          error={errors.title}
        />
        <div className="form__wrapper">
          <Input
            inputLabel="XP (number)"
            inputOnChange={handleChange}
            inputValue={fields?.xp}
            inputType="number"
            inputId="xp"
            error={errors.xp}
          />
          <Input
            inputLabel="Credits (number)"
            inputOnChange={handleChange}
            inputValue={fields?.credits}
            inputType="number"
            inputId="credits"
            error={errors.credits}
          />
        </div>
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

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    title: PropTypes.string,
    xp: PropTypes.number,
    credits: PropTypes.number,
    description: PropTypes.string
  }),
  fields: PropTypes.shape({
    title: PropTypes.string,
    xp: PropTypes.number,
    credits: PropTypes.number,
    description: PropTypes.string
  })
};

Form.defaultProps = {
  errors: {},
  fields: {}
};

export default Form;
