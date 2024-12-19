import { revokedTokens } from "../controllers/authentification.js"; // ajout logout
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIME_TYPE Dictionary
const MIME_TYPE_MAP = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
};

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

//logout

export const checkRevokedToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token manquant" });
  }

  if (revokedTokens.has(token)) {
    return res
      .status(401)
      .json({ message: "Token révoqué, veuillez vous reconnecter." });
  }

  try {
    const jwtConfig = getJWTconfig();
    const user = jwt.verify(token, jwtConfig.secret);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token invalide." });
  }
};

//Upload Image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../pictures"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = MIME_TYPE_MAP[file.mimetype];
    if (!extension) {
      return cb(new Error("Type de fichier non pris en charge"));
    }

    cb(null, uniqueSuffix + "-" + path.extname(file.originalname));
  },
});

export const uploadProfilPicture = multer({ storage }).single("Picture");

