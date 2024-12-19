import { Router } from "express";
import { commentSchema } from "../schemas/commentSchema.js";  
import { postComment, getCommentsByPostId } from "../controllers/comments.js";
import { checkRevokedToken, validateArticle } from "./middleware.js";

const router = Router();

router.post("/", checkRevokedToken, validateArticle(commentSchema), postComment);


export default router;