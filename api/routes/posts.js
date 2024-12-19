import { Router } from "express";
import { postSchema } from "../schemas/postSchema.js";
import { postArticle, getPostsByTags } from "../controllers/posts.js";
import { uploadProfilPicture, validateArticle } from "./middleware.js";
import { checkRevokedToken } from "./middleware.js";

const router = Router();

router.post("/", uploadProfilPicture, validateArticle(postSchema), postArticle);
router.get("/", getPostsByTags);

export default router;
