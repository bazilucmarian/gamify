import {descriptionMinLength, maxCredits, minCredits, titleMinLength} from '../constants/form-shop';

/* eslint-disable prefer-const */
export default function validateShopForm(fields) {
  const specialCharacters = /[!"#$%*<>?^~§©®°¶]+/;

  let errors = {};
  if (fields.title.trim().length < titleMinLength) {
    errors.title = `Please lengthen title to ${titleMinLength} characters or more`;
  } else if (fields.title.match(specialCharacters) !== null) {
    errors.title = 'Remove special characters from the title.';
  }

  if (fields.imageURL.length) {
    errors.imageURL = 'Please change the image format (JPEG, JPG, GIF, PNG) and press the plus icon';
  }

  if (!(fields.credits >= minCredits && fields.credits <= maxCredits)) {
    errors.credits = `Credits must be between ${minCredits} and ${maxCredits}`;
  }

  if (fields.description.trim().length < descriptionMinLength) {
    errors.description = `Please lengthen description to ${descriptionMinLength} characters or more`;
  }

  return errors;
}
