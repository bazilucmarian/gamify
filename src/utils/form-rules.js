/* eslint-disable prefer-const */
export default function validate(fields) {
  const specialCharacters = /[!"#$%*<>?^~§©®°¶]+/;

  let errors = {};
  if (fields.title.trim().length < 6) {
    errors.title = 'Please lengthen title to 6 characters or more';
  } else if (fields.title.match(specialCharacters) !== null) {
    errors.title = 'Remove special characters from the title.';
  }

  if (!(fields.xp > 0 && fields.xp <= 200)) {
    errors.xp = 'XP must be between 1 and 200';
  }

  if (!(fields.credits > 0 && fields.credits <= 200)) {
    errors.credits = 'Credits must be between 1 and 200';
  }

  if (fields.description.trim().length < 10) {
    errors.description = 'Please lengthen description to 10 characters or more';
  }

  return errors;
}
