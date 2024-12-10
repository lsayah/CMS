import { createConnection } from "mysql2/promise";
let connection = null;
async function getConnection() {
  const connectionCredential = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    queueLimit: 0,
  };
  if (connection) {
    return connection;
  }
  try {
    connection = await createConnection(connectionCredential);
    console.log("Connexion à la base de données établie avec succès.");
  } catch (err) {
    console.error("Erreur de connexion à la base de données :", err);
  }
  return connection;
}

export default getConnection;
