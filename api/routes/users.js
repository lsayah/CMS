import { Router } from "express";
import { createUserSchema } from "../schemas/userSchema.js";
import { validateArticle } from "./middleware.js";
import { createUser } from "../controllers/user.js";

var router = Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ username: "ruchdane" });
});

router.post("/", validateArticle(createUserSchema), createUser);

export default router;
