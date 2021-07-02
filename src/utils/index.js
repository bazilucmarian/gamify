export default function calculateXp(xp) {
  let initialLevel = 1;
  const multiplier = 15;

  function recurse() {
    if (xp >= multiplier * initialLevel) {
      xp -= multiplier * initialLevel;
      initialLevel++;
      recurse(xp);
    }
  }

  recurse();

  return {
    level: initialLevel,
    currentXp: xp,
    currentLevelMaxXp: multiplier * initialLevel
  };
}
