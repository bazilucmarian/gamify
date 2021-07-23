/* eslint-disable prefer-const */
export default function validate(fields) {
  let errors = {};
  if (!fields.title) {
    errors.email = 'Title is required';
  } else if (fields.title.length < 6) {
    errors.title = 'You should modify title length';
  }
  if (!fields.xp) {
    errors.xp = 'xp is required';
  } else if (typeof fields.xp !== 'number') {
    errors.xp = 'Xp is a number !!';
  }
  if (!fields.credits) {
    errors.credits = 'credits is required';
  } else if (typeof fields.credits !== 'number') {
    errors.credits = 'credits is a number !!';
  }
  if (!fields.description) {
    errors.description = 'description is required';
  } else if (fields.description.length < 6) {
    errors.description = 'You should modify description';
  }
  return errors;
}
