const mysql = require("mysql2/promise");
let connection = null;
const connectionCredential = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  queueLimit: 0,
};
async function getConnection() {
  if (connection) {
    return connection;
  }
  try {
    connection = await mysql.createConnection(connectionCredential);
    console.log("Connexion à la base de données établie avec succès.");
  } catch (err) {
    console.error("Erreur de connexion à la base de données :", err);
  }
  return connection;
}

module.exports = getConnection;
