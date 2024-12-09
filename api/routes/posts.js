var express = require("express");
const { postSchema } = require("../schemas/postSchema");
const { createArticle } = require("../controllers/posts");
const { validateArticle } = require("./middleware");
const router = express.Router();

router.post("/", validateArticle(postSchema), createArticle);

module.exports = router;
