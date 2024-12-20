import { config } from "dotenv";
import { readFileSync } from "fs";
import path, { join, dirname } from "path";
import { fileURLToPath } from "url";
import { parse } from "yaml";
import { serve, setup } from "swagger-ui-express";
import express, { json, urlencoded, static as staticFile } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { getJWTconfig } from "./routes/middleware.js";
import { expressjwt as jwt } from "express-jwt";

import "./connection.js";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import tagsRouter from "./routes/tags.js";
import authRouter from "./routes/authentification.js";
import commentsRouter from "./routes/comments.js";
const file = readFileSync("./api.yml", "utf8");
const swaggerDocument = parse(file);
config();
var app = express();
const jwtConfig = getJWTconfig();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(staticFile(join(dirname(fileURLToPath(import.meta.url)), "public")));
app.use(
  jwt(jwtConfig).unless({
    path: [
      new RegExp("/api/doc/*"),
      "/api/auth/login",
      {
        url: "/api/posts",
        methods: ["GET"],
      },
      {
        url: "/api/tags",
        methods: ["GET"],
      },
      {
        url: "/api/users",
        methods: ["POST"],
      },
    ],
  })
);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/tags", tagsRouter);
app.use("/", indexRouter);
app.use("/api/doc", serve, setup(swaggerDocument));
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

export default app;
