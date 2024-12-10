import getConnection from "../connection.js";
import UserRepository from "../repository/user.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { getJWTconfig } from "../routes/middleware.js";
export async function login(req, res) {
  const { email, password } = req.body;

  const connection = await getConnection();
  const userRepository = new UserRepository(connection);
  const existinguser = await userRepository.findUserByEmail(email);

  if (existinguser === undefined) {
    return res.status(400).json({
      message: "E-mail ou mot de passe erronne",
    });
  }
  const jwtConfig = getJWTconfig();
  console.log(jwtConfig);
  const { hashed_password: hashedPassword, role } = existinguser;
  if (await compare(password, hashedPassword)) {
    const token = jwt.sign({ email, role }, jwtConfig.secret, {
      algorithm: jwtConfig.algorithms[0],
      expiresIn: "1h",
    });
    res
    .status(200)
    .json({
      token,
      message: "Authentification réussi",
    });
  } else {
    res.status(400).json({
      message: "E-mail ou mot de passe erronne",
    });
  }
}
