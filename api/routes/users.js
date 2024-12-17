import { Router } from "express";
import { createUserSchema } from "../schemas/userSchema.js";
import { validateArticle, uploadProfilPicture } from "./middleware.js";
import { createUser } from "../controllers/user.js";
import multer from "multer";

const router = Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ username: "ruchdane" });
});

router.post("/", uploadProfilPicture, validateArticle(createUserSchema), createUser);

export default router;
