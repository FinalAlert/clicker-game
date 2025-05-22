export default function Prestige({ credits, prestige }) {
    const calculateDuiktcoins = () => {
        return Math.floor(Math.sqrt(credits / 10000));
    };

    return (
        <div className="prestige">
            <h3>Prestige</h3>
            <p>Earn {calculateDuiktcoins()} Duiktcoins</p>
            <button
                onClick={prestige}
                disabled={calculateDuiktcoins() < 1}
            >
                Reset Game
            </button>
        </div>
    );
}