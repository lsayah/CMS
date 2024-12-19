import { Router } from "express";
import { postSchema } from "../schemas/postSchema.js";
import { postArticle } from "../controllers/posts.js";
import { uploadProfilPicture, validateArticle } from "./middleware.js";
import { checkRevokedToken } from "./middleware.js";

const router = Router();

router.post("/", uploadProfilPicture, validateArticle(postSchema), postArticle);

export default router;
