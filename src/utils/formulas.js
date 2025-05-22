export const calculateOfflineEarnings = (savedData) => {
  if (!savedData || !savedData.lastPlayed) return 0;
  
  const secondsOffline = (Date.now() - savedData.lastPlayed) / 1000;
  
  return Math.floor(
    secondsOffline * 
    (savedData.upgrades.passiveIncome + savedData.upgrades.autoClicker) * 
    savedData.prestigeMultiplier
  );
};
