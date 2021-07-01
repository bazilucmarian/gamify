import React from 'react';
import PropTypes from 'prop-types';

function RewardInfo({xp, credits}) {
  return (
    <div className="rewardInfo">
      {Boolean(xp) && <div className="rewardInfo__xp">{xp} XP</div>}
      <div className="rewardInfo__credits">{credits} CREDITS</div>
    </div>
  );
}

RewardInfo.propTypes = {
  credits: PropTypes.number,
  xp: PropTypes.number
};

RewardInfo.defaultProps = {
  credits: 0,
  xp: 0
};

export default RewardInfo;
