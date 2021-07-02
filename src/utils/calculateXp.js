export default function calculateXp(xp) {
  let userXp = xp;
  let initialLevel = 1;
  const multiplier = 15;

  function recurse() {
    if (userXp >= multiplier * initialLevel) {
      userXp -= multiplier * initialLevel;
      initialLevel++;
      recurse(userXp);
    }
  }

  recurse();

  return {
    level: initialLevel,
    currentXp: userXp,
    currentLevelMaxXp: multiplier * initialLevel
  };
}
