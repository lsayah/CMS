import { Router } from "express";
import { postSchema } from "../schemas/postSchema.js";
import { postArticle, getPostsByTags } from "../controllers/posts.js";
import { uploadProfilPicture, validateArticle } from "./middleware.js";
import { checkRevokedToken } from "./middleware.js";
import { getCommentsByPostId } from "../controllers/comments.js";   

const router = Router();

router.post("/", uploadProfilPicture, validateArticle(postSchema), postArticle);
router.get("/", getPostsByTags);
router.get("/:postId/comments", getCommentsByPostId); 

export default router;
