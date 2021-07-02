import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import calculateXp from '../utils';

function ProgressCard({userXp}) {
  const [currentLevelMaxXp, setCurrentLevelMaxXp] = useState(null);
  const [level, setLevel] = useState(null);
  const [currentXp, setCurrentXp] = useState(null);

  useEffect(() => {
    try {
      const {calcLevel, calcCurrentExp, calcCurrentLevelMaxExp} = calculateXp(userXp);

      setLevel(calcLevel);
      setCurrentXp(calcCurrentExp);
      setCurrentLevelMaxXp(calcCurrentLevelMaxExp);
    } catch (e) {
      console.error(e.message);
    }
  }, [userXp]);

  return (
    <div className="progressCard">
      <div className="progressCard__xpContainer">
        <div className="level">LEVEL {level}</div>
        <div className="xp">
          {currentXp} / {currentLevelMaxXp} XP
        </div>
      </div>

      <div className="progressCard__progress">
        <div className="done" style={{width: `${(currentXp / currentLevelMaxXp) * 100}%`}} />
      </div>
    </div>
  );
}

ProgressCard.propTypes = {
  userXp: PropTypes.number
};

ProgressCard.defaultProps = {
  userXp: 0
};

export default ProgressCard;
