/* eslint-disable no-use-before-define */

import PropTypes from 'prop-types';

import {useForm} from '../hooks/use-form';
import validateChallengesForm from '../utils/form-rules-challenges';
import {addTitle, editTitle} from '../constants/form-challenges';

import Modal from './modal/modal';
import Form from './add-or-edit-form';

const emptyState = {
  title: '',
  xp: '',
  credits: '',
  description: ''
};

function ChallengesModal({isOpen, hide, currentChallenge, handleAddNewChallenge, handleEditChallenge}) {
  const isEditing = Boolean(currentChallenge?.id);

  const handler = isEditing ? handleEditChallenge : handleAddNewChallenge;
  const {fields, handleChange, handleSubmit, errors} = useForm(currentChallenge, handler, validateChallengesForm);
  return (
    <Modal isOpen={isOpen} hide={hide}>
      <Modal.Header>
        <div className="modal__title">{isEditing ? <h1>{editTitle}</h1> : <h1>{addTitle}</h1>}</div>
      </Modal.Header>
      <Modal.Body>
        <Form
          closeModal={hide}
          currentChallenge={currentChallenge}
          handleEditChallenge={handleEditChallenge}
          addNewChallenge={handleAddNewChallenge}
          isEditing={isEditing}
          errors={errors}
          fields={fields}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Modal.Body>
    </Modal>
  );
}

ChallengesModal.propTypes = {
  handleAddNewChallenge: PropTypes.func.isRequired,
  handleEditChallenge: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  currentChallenge: PropTypes.shape({
    title: PropTypes.string,
    xp: PropTypes.number,
    credits: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number
  })
};

ChallengesModal.defaultProps = {
  currentChallenge: emptyState
};

export default ChallengesModal;
