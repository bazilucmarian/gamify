import React from 'react';
import RewardInfo from './reward-info';
/*
 *  The card will receive as props:
 *    - challenge (filtered challenges by section. This will contain: id, title, xp, credits, description)
 *    - a method that will change the status of the challenge
 *    - userChallenges (this will contain user's current challenges + status)
 * */
const ChallengeCard = () => (
  <div className="challenge-card">
    <div className="challenge-card__title">Do a byte-sized learning talk</div>
    <RewardInfo xp={15} credits={50} />
    <div className="challenge-card__description">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem
        faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.
      </p>
    </div>

    {/*  Button container here */}
    <div className="btn-container">
      <button className="btn-quit" type="button">
        Quit
      </button>
      <button className="btn-complete" type="button">
        Complete
      </button>
    </div>
  </div>
);

export default ChallengeCard;
