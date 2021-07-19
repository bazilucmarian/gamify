import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainerAdmin from './button-container-admin';
import ButtonsContainerUser from './button-container-user';
import RewardInfo from './reward-info';
import UserCard from './user-card';
import {camelCaseToKebabCase} from '../utils';

function ChallengeCard({isAdmin, challenge, handleChangeStatus, handleDeleteChallenge}) {
  const {status} = challenge;

  return (
    <div
      className={`challenge-card challenge-card--${camelCaseToKebabCase(status)} challenge-card--${
        isAdmin && status === 'inPending' && 'validation'
      }`}
    >
      <div
        className={`challenge-card__content challenge-card__content--${isAdmin && status === 'inPending' && 'extend'}`}
      >
        {isAdmin && status === 'inPending' && (
          <div>
            <UserCard userName={challenge.userName} jobTitle={challenge.jobTitle} image={challenge.jobTitle} />
          </div>
        )}

        <div className="challenge-card__top">
          <div className="challenge-card__title">{challenge.title}</div>
          <RewardInfo xp={challenge.xp} credits={challenge.credits} />
        </div>
        <div className="challenge-card__middle">
          <p className="challenge-card__description">{challenge.description}</p>
        </div>

        <div className="challenge-card__bottom">
          {isAdmin ? (
            <ButtonContainerAdmin
              challengeId={challenge.id}
              status={status}
              onClick={status === 'inPending' ? handleChangeStatus : handleDeleteChallenge}
            />
          ) : (
            <ButtonsContainerUser status={status} onClick={handleChangeStatus} />
          )}
        </div>
      </div>
    </div>
  );
}

ChallengeCard.propTypes = {
  handleChangeStatus: PropTypes.func,
  handleDeleteChallenge: PropTypes.func,
  challenge: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    credits: PropTypes.number,
    status: PropTypes.string,
    jobTitle: PropTypes.string,
    userName: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    xp: PropTypes.number
  }).isRequired,
  isAdmin: PropTypes.bool
};
ChallengeCard.defaultProps = {
  handleChangeStatus: () => {},
  handleDeleteChallenge: () => {},
  isAdmin: false
};
export default ChallengeCard;
