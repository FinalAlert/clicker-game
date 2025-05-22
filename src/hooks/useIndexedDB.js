import { useEffect, useState } from 'react';
import { openDB } from 'idb';

export default function useIndexedDB() {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      const database = await openDB('ClickerGameDB', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('gameState')) {
            db.createObjectStore('gameState');
          }
        },
      });
      setDb(database);
    };
    initDB();
  }, []);

  const saveGame = async (gameState) => {
    if (db) {
      await db.put('gameState', {...gameState, lastPlayed: Date.now()}, 'current');
    }
  };

  const loadGame = async () => {
    if (db) {
      return await db.get('gameState', 'current');
    }
    return null;
  };

  return { saveGame, loadGame };
}
