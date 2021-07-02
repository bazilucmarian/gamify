export default function calculateXp(xp) {
  let initialLevel = 1;

  function recurse() {
    if (xp >= 15 * initialLevel) {
      xp -= 15 * initialLevel;
      initialLevel++;
      recurse(xp);
    }
  }
  recurse();

  return {
    calcLevel: initialLevel,
    calcCurrentExp: xp,
    calcCurrentLevelMaxExp: 15 * initialLevel
  };
}
