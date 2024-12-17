import { ROLES, STATUS } from "../const.js";

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
    const { firstname, lastname, username, email, hashedPassword, Picture } =
      user;
    const [result] = await this.connection.query(
      `INSERT INTO users (firstname, lastname, username, email, profile_picture, hashed_password, role, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        firstname,
        lastname,
        username,
        email,
        Picture,
        hashedPassword,
        ROLES.USER,
        STATUS.ACTIVE,
      ]
    );
    return result.insertId;
  }

  async updateProfilPicture(idUser, Picture) {
    try {
      await this.connection.execute(
        `UPDATE users SET profile_picture = ? WHERE id = ?;`,
        [Picture, idUser]
      );
    } catch (error) {
      throw new Error("Error updating profile picture:");
    }
  }
}

export default UserRepository;
