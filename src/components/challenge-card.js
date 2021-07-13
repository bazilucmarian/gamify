import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainerAdmin from './button-container-admin';
import ButtonsContainerUser from './button-container-user';
import RewardInfo from './reward-info';
import {camelCaseToKebabCase} from '../utils';

function ChallengeCard({isAdmin, challenge, type}) {
  const status = 'Available';

  return (
    <div className={`challenge-card challenge-card--${camelCaseToKebabCase(status)}`}>
      <div className="challenge-card__content">
        <div className="challenge-card__top">
          <div className="challenge-card__title">{challenge.title}</div>
          <RewardInfo xp={challenge.xp} credits={challenge.credits} />
        </div>
        <div className="challenge-card__middle">
          <p className="challenge-card__description">{challenge.description}</p>
        </div>

        <div className="challenge-card__bottom">
          {isAdmin ? <ButtonContainerAdmin type={type} /> : <ButtonsContainerUser status={status} />}
        </div>
      </div>
    </div>
  );
}
ChallengeCard.propTypes = {
  type: PropTypes.string.isRequired,
  challenge: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    credits: PropTypes.number,
    xp: PropTypes.number
  }).isRequired,
  isAdmin: PropTypes.bool
};
ChallengeCard.defaultProps = {
  isAdmin: false
};
export default ChallengeCard;
