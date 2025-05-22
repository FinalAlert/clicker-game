import { useState, useEffect } from 'react';
import './styles/App.css';
import Clicker from './components/Clicker/Clicker';
import Upgrades from './features/upgrades/Upgrades';
import Bonuses from './features/bonuses/Bonuses';
import Prestige from './features/prestige/Prestige';
import Skins from './features/skins/Skins';

function App() {
    const [credits, setCredits] = useState(0);
    const [duiktcoins, setDuiktcoins] = useState(0);
    const [activeSkin, setActiveSkin] = useState('default');
    const [upgrades, setUpgrades] = useState({
        clickValue: 1,
        autoClicker: 0,
        passiveIncome: 0,
        comboMultiplier: 1,
        incomeMultiplier: 1
    });

    // Автоклікери
    useEffect(() => {
        const interval = setInterval(() => {
            if (upgrades.autoClicker > 0) {
                setCredits(prev => prev + upgrades.autoClicker * upgrades.clickValue);
            }
            if (upgrades.passiveIncome > 0) {
                setCredits(prev => prev + upgrades.passiveIncome);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [upgrades]);

    const prestige = () => {
        const newCoins = Math.floor(Math.sqrt(credits / 10000));
        setDuiktcoins(duiktcoins + newCoins);
        setCredits(0);
        setUpgrades({
            clickValue: 1,
            autoClicker: 0,
            passiveIncome: 0,
            comboMultiplier: 1,
            incomeMultiplier: 1
        });
    };

    return (
        <div className={`app ${activeSkin}`}>
            <h1>Clicker Game</h1>
            <p>Duiktcoins: {duiktcoins}</p>

            <Clicker
                credits={credits}
                onClick={() => setCredits(credits + upgrades.clickValue)}
            />

            <Upgrades
                credits={credits}
                upgrades={upgrades}
                setCredits={setCredits}
                setUpgrades={setUpgrades}
            />

            <Bonuses setCredits={setCredits} />
            <Prestige credits={credits} prestige={prestige} />
            <Skins activeSkin={activeSkin} setActiveSkin={setActiveSkin} />
        </div>
    );
}

export default App;