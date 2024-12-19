import { genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import getConnection from "../connection.js";
import UserRepository from "../repository/user.js";
import TagRepository from "../repository/tags.js";

export async function createUser(req, res) {
  try {
    const connection = await getConnection();
    const userRepository = new UserRepository(connection);
    const tagRepository = new TagRepository(connection);
    const { email, password, username } = req.body;
    const existinguser = await userRepository.findUserByUsername(username);
    const existingmail = await userRepository.findUserByEmail(email);

    if (existingmail) {
      // Check if mail already exists
      return res.status(400).json({
        message: "Email déja utilisé",
      });
    }

    if (existinguser) {
      // Check if user already exists
      return res.status(400).json({
        message: "Nom d'utilisateur déjà utilisé",
      });
    }

    // Hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const idUser = await userRepository.saveUser({
      hashedPassword,
      salt,
      ...req.body,
    });

    tagRepository.saveUserFavorite(
      idUser,
      req.body.tags.split(",").map(Number)
    );

    if (req.file) {
      const Picture = `/pictures/${req.file.filename}`;
      await userRepository.updateProfilPicture(idUser, Picture);
    }

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la création de l'utilisateur",
      error: error.message,
    });
  }
}
