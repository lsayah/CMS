import { authSchema } from "../schemas/authSchema.js";
import { validateArticle } from "./middleware.js";
import { Router } from "express";
import { login } from "../controllers/authentification.js";

const router = Router();
router.post("/login", validateArticle(authSchema), login);

export default router;
