import * as SQLite from "expo-sqlite";

let db;

export const initDatabase = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync("guaridamario.db");
  }
};

export const initSessionTable = async () => {
  console.log("Desde IndexDB - Iniciando tabla de sesiones"); //!LOG Inicializando Base de datos
  await initDatabase();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS session (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      localId TEXT,
      email TEXT
    );
  `);
};

export const saveSession = async (localId, email) => {
  await initDatabase();
  await db.runAsync("DELETE FROM session;");
  await db.runAsync("INSERT INTO session (localId, email) VALUES (?, ?);", [localId, email]);
};

export const getSession = async () => {
  await initDatabase();
  const result = await db.getAllAsync("SELECT * FROM session LIMIT 1;");
  console.log("Desde IndexDB - Obteniendo datos de DB", result); //!LOG Obteniendo session
  return result.length > 0 ? result[0] : null;
};

export const clearSession = async () => {
  await initDatabase();
  await db.runAsync("DELETE FROM session;");
  console.log("Desde IndexDB - Session Eliminada"); //! LOG Session Eliminada
};
