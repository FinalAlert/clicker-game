export default function Clicker({ credits, onClick }) {
    return (
        <div className="clicker">
            <h2>Credits: {credits}</h2>
            <button onClick={onClick} className="click-button">
                Click Me!
            </button>
        </div>
    );
}