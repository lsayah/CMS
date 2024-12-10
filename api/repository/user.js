const { ROLES, STATUS } = require("../const");

class UserRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async findUserByUsername(username) {
    const [result] = await this.connection.execute(
      `SELECT * FROM users WHERE username = ?;`,
      [username]
    );
    return result[0];
  }

  async findUserByEmail(email) {
    const [result] = await this.connection.execute(
      `SELECT * FROM users WHERE email = ?;`,
      [email]
    );
    return result[0];
  }

  async saveUser(user) {
    const {
      firstname,
      lastname,
      username,
      email,
      hashedPassword,
      profilePicture,
    } = user;
    const [result] = await this.connection.query(
      `INSERT INTO users (firstname, lastname, username, email, profile_picture, hashed_password, role, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        firstname,
        lastname,
        username,
        email,
        profilePicture,
        hashedPassword,
        ROLES.USER,
        STATUS.ACTIVE,
      ]
    );
    return result.insertId;
  }
}

module.exports = UserRepository;
