import { Router } from "express";
import { postSchema } from "../schemas/postSchema.js";
import { createArticle } from "../controllers/posts.js";
import { validateArticle } from "./middleware.js";
const router = Router();

router.post("/", validateArticle(postSchema), createArticle);

export default router;
