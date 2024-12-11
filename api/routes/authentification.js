import { authSchema } from "../schemas/authSchema.js";
import { validateArticle } from "./middleware.js";
import { Router } from "express";
import { login } from "../controllers/authentification.js";
import { logout } from "../controllers/authentification.js"; //ajout logout

const router = Router();
router.post("/login", validateArticle(authSchema), login);
router.post("/logout", logout);

export default router;
