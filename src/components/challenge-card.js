import React from 'react';
import PropTypes from 'prop-types';

import {camelCaseToKebabCase} from '../utils';
import {statusDictionary} from '../mocks/fixtures';

import ButtonContainerAdmin from './button-container-admin';
import ButtonsContainerUser from './button-container-user';
import RewardInfo from './reward-info';
import UserCard from './user-card';

function ChallengeCard({isAdmin, challenge, onChangeStatus, onUpdateChallenge}) {
  const {status} = challenge;

  return (
    <div
      className={`challenge-card challenge-card--${camelCaseToKebabCase(status)} challenge-card--${
        isAdmin && status === statusDictionary.inPending && 'validation'
      }`}
    >
      <div
        className={`challenge-card__content challenge-card__content--${
          isAdmin && status === statusDictionary.inPending && 'extend'
        }`}
      >
        {isAdmin && status === statusDictionary.inPending && (
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
            <ButtonContainerAdmin status={status} onClick={onUpdateChallenge} />
          ) : (
            <ButtonsContainerUser status={status} onClick={onChangeStatus} />
          )}
        </div>
      </div>
    </div>
  );
}

ChallengeCard.propTypes = {
  onChangeStatus: PropTypes.func,
  onUpdateChallenge: PropTypes.func.isRequired,
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
  onChangeStatus: () => {},

  isAdmin: false
};
export default ChallengeCard;
