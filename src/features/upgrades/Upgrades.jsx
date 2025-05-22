export default function Upgrades({ credits, upgrades, setCredits, setUpgrades }) {
  const upgradeList = [
    { id: 'clickValue', name: 'Click Power', baseCost: 10, multiplier: 1.15 },
    { id: 'autoClicker', name: 'Auto Clicker', baseCost: 50, multiplier: 1.2 },
    { id: 'passiveIncome', name: 'Passive Income', baseCost: 100, multiplier: 1.25 },
    { id: 'comboMultiplier', name: 'Combo Multiplier', baseCost: 200, multiplier: 1.3 },
    { id: 'incomeMultiplier', name: 'Income Multiplier', baseCost: 500, multiplier: 1.4 }
  ];

  const calculateCost = (baseCost, level, multiplier) => {
    return Math.floor(baseCost * Math.pow(multiplier, level));
  };

  const buyUpgrade = (id, baseCost, multiplier) => {
    const currentLevel = upgrades[id] || 0;
    const cost = calculateCost(baseCost, currentLevel, multiplier);

    if (credits >= cost) {
      setCredits(credits - cost);
      setUpgrades({
        ...upgrades,
        [id]: currentLevel + 1
      });
    }
  };

  return (
      <div className="upgrades">
        <h3>Upgrades</h3>
        {upgradeList.map(upgrade => {
          const level = upgrades[upgrade.id] || 0;
          const cost = calculateCost(upgrade.baseCost, level, upgrade.multiplier);

          return (
              <div key={upgrade.id} className="upgrade-item">
                <h4>{upgrade.name} (Lvl {level})</h4>
                <p>+{upgrade.id === 'clickValue' ? level + 1 : level} {upgrade.id.includes('Multiplier') ? '×' : ''}</p>
                <p>Cost: {cost} credits</p>
                <button
                    onClick={() => buyUpgrade(upgrade.id, upgrade.baseCost, upgrade.multiplier)}
                    disabled={credits < cost}
                >
                  Upgrade
                </button>
              </div>
          );
        })}
      </div>
  );
}