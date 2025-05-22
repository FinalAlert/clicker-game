export default function Skins({ activeSkin, setActiveSkin }) {
    const skins = [
        { id: 'default', name: 'Default' },
        { id: 'dark', name: 'Dark Mode' },
        { id: 'neon', name: 'Neon' }
    ];

    return (
        <div className="skins">
            <h3>Skins</h3>
            <div className="skin-selector">
                {skins.map(skin => (
                    <button
                        key={skin.id}
                        onClick={() => setActiveSkin(skin.id)}
                        className={activeSkin === skin.id ? 'active' : ''}
                    >
                        {skin.name}
                    </button>
                ))}
            </div>
        </div>
    );
}