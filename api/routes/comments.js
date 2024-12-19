import { Router } from "express";
import { commentSchema } from "../schemas/commentSchema.js";  
import { postComment } from "../controllers/comments.js";
import { checkRevokedToken } from "./middleware.js";
import { validateArticle } from "./middleware.js";

const router = Router();

router.post("/", checkRevokedToken, validateArticle(commentSchema), postComment);

export default router;