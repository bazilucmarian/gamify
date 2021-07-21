import React, {useState} from 'react';
import PropTypes from 'prop-types';

import useForm from '../hooks/use-form';

import ChallengeCard from './challenge-card';
import Modal from './modal';
import Input from './input';

function ChallengesSection({title, filteredChallenges, isAdmin, isScrollable}) {
  const [showModal, setShowModal] = useState(false);
  const [fields, handleFieldChange, reset] = useForm({
    title: '',
    xp: '',
    credits: '',
    description: ''
  });

  const openModal = () => {
    setShowModal(prevState => !prevState);
  };

  const handleSubmit = () => {
    // Empty input fields
    reset();
  };
  return (
    <section className="challenges-section">
      <h2 className="challenges-section__title">{title}</h2>
      <div className={`challenges-section__items challenges-section__items--${isScrollable && 'scrollable'}`}>
        {filteredChallenges?.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} isAdmin={isAdmin} />
        ))}
      </div>
      <button type="button" onClick={openModal}>
        Show Modal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} title="Add Challenges" onAdd={handleSubmit}>
        <form className="form">
          <Input
            inputLabel="Title"
            inputChangedValue={handleFieldChange}
            inputValue={fields.title}
            inputType="text"
            inputId="title"
          />
          <div className="form__wrapper">
            <Input
              inputLabel="XP"
              inputChangedValue={handleFieldChange}
              inputValue={fields.xp}
              inputType="text"
              inputId="xp"
            />
            <Input
              inputLabel="Credits"
              inputChangedValue={handleFieldChange}
              inputValue={fields.credits}
              inputType="text"
              inputId="credits"
            />
          </div>
          <Input
            inputLabel="Description"
            inputChangedValue={handleFieldChange}
            inputValue={fields.description}
            inputType="text"
            inputId="description"
          />
        </form>
      </Modal>
    </section>
  );
}

ChallengesSection.propTypes = {
  title: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
  filteredChallenges: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      xp: PropTypes.number,
      credits: PropTypes.number,
      id: PropTypes.number,
      description: PropTypes.string
    })
  ),
  isScrollable: PropTypes.bool
};

ChallengesSection.defaultProps = {
  filteredChallenges: [],
  isAdmin: false,
  isScrollable: false
};

export default ChallengesSection;
