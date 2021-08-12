import {descriptionMinLength, maxCredits, maxXp, minCredits, minXp, titleMinLength} from '../constants/form-challenges';

/* eslint-disable prefer-const */
export default function validateChallengesForm(fields) {
  const specialCharacters = /[!"#$%*<>?^~§©®°¶]+/;

  let errors = {};
  if (fields.title.trim().length < titleMinLength) {
    errors.title = `Please lengthen title to ${titleMinLength} characters or more`;
  } else if (fields.title.match(specialCharacters) !== null) {
    errors.title = 'Remove special characters from the title.';
  }

  if (!(fields.xp >= minXp && fields.xp <= maxXp)) {
    errors.xp = `XP must be between ${minXp} and ${maxXp}`;
  }

  if (!(fields.credits >= minCredits && fields.credits <= maxCredits)) {
    errors.credits = `Credits must be between ${minCredits} and ${maxCredits}`;
  }

  if (fields.description.trim().length < descriptionMinLength) {
    errors.description = `Please lengthen description to ${descriptionMinLength} characters or more`;
  }

  return errors;
}
