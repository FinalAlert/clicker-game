import { useState } from 'react';

export default function Bonuses({ setCredits }) {
    const [bonuses, setBonuses] = useState([
        { id: 1, name: 'Lucky Click', chance: 0.1, multiplier: 5, price: 0 },
        { id: 2, name: 'Time Warp', duration: 30, multiplier: 2, price: 100 }
    ]);

    const activateBonus = (bonus) => {
        if (Math.random() < bonus.chance || bonus.price === 0) {
            setCredits(prev => prev * bonus.multiplier);
        } else if (bonus.price > 0) {
            setCredits(prev => prev - bonus.price);
        }
    };

    return (
        <div className="bonuses">
            <h3>Bonuses</h3>
            {bonuses.map(bonus => (
                <button
                    key={bonus.id}
                    onClick={() => activateBonus(bonus)}
                    className="bonus-button"
                >
                    {bonus.name} {bonus.price > 0 ? `(${bonus.price} credits)` : '(free)'}
                </button>
            ))}
        </div>
    );
}