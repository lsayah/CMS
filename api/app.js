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
import usersRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import tagsRouter from "./routes/tags.js";
import authRouter from "./routes/authentification.js";
import commentsRouter from "./routes/comments.js";

const file = readFileSync("./api.yml", "utf8");
const swaggerDocument = parse(file);

config();
const jwtConfig = getJWTconfig();

var app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  "/api",
  jwt(jwtConfig).unless({
    path: [
      new RegExp("/api/doc/*"),
      "/api/auth/login",
      { url: "/api/posts", methods: ["GET"] },
      { url: "/api/tags", methods: ["GET"] },
      { url: "/api/users", methods: ["POST"] },
    ],
  })
);

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/tags", tagsRouter);

app.use("/api/doc", serve, setup(swaggerDocument));

app.use("/api/*", (req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

app.use(express.static(join(__dirname, "client")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "client", "index.html"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

export default app;
