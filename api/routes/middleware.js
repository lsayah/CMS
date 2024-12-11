import { revokedTokens } from "../controllers/authentification.js"; // ajout logout
import jwt from "jsonwebtoken";

export function validateArticle(schema) {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        errors: error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      });
    }
  };
}

export const getJWTconfig = () => ({
  secret: process.env.APP_SECRET,
  algorithms: ["HS256"],
});

//ajout logout

export const checkRevokedToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Récupère le token

  if (!token) {
    return res.status(401).json({ message: "Token manquant" });
  }

  // Vérifie si le token a été révoqué
  if (revokedTokens.has(token)) {
    return res
      .status(401)
      .json({ message: "Token révoqué, veuillez vous reconnecter." });
  }

  try {
    const jwtConfig = getJWTconfig();
    const user = jwt.verify(token, jwtConfig.secret); // Valide le token
    req.user = user; // Ajoute l'utilisateur validé à la requête
    next(); // Passe à la route suivante
  } catch (error) {
    return res.status(403).json({ message: "Token invalide." });
  }
};
