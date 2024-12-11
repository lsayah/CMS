import { Router } from "express";
import { getAllTags } from "../controllers/tags.js";


var router = Router();

router.get("/", getAllTags);

export default router;