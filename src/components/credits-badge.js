import React from 'react';
import PropTypes from 'prop-types';

function CreditsBadge({xp, credits}) {
  return (
    <div className="creditsBadge">
      {xp && <div className="creditsBadge__xp">{xp} XP</div>}
      <div className="creditsBadge__credits">{credits} CREDITS</div>
    </div>
  );
}

CreditsBadge.propTypes = {
  credits: PropTypes.number,
  xp: PropTypes.number
};

CreditsBadge.defaultProps = {
  credits: 0,
  xp: null
};

export default CreditsBadge;
