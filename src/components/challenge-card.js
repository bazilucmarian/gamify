import React from 'react';
import PropTypes from 'prop-types';

import {camelCaseToKebabCase} from '../utils';

import ButtonContainerAdmin from './button-container-admin';
import ButtonsContainerUser from './button-container-user';
import RewardInfo from './reward-info';

function ChallengeCard({isAdmin, challenge}) {
  return (
    <div className={`challenge-card challenge-card--${camelCaseToKebabCase(challenge.status)}`}>
      <div className="challenge-card__content">
        <div className="challenge-card__top">
          <div className="challenge-card__title">{challenge.title}</div>
          <RewardInfo xp={challenge.xp} credits={challenge.credits} />
        </div>
        <div className="challenge-card__middle">
          <p className="challenge-card__description">{challenge.description}</p>
        </div>

        <div className="challenge-card__bottom">
          {isAdmin ? <ButtonContainerAdmin type="validation" /> : <ButtonsContainerUser status={challenge.status} />}
        </div>
      </div>
    </div>
  );
}
ChallengeCard.propTypes = {
  challenge: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    credits: PropTypes.number,
    xp: PropTypes.number,
    status: PropTypes.string
  }).isRequired,
  isAdmin: PropTypes.bool
};
ChallengeCard.defaultProps = {
  isAdmin: false
};
export default ChallengeCard;
