import { config } from "dotenv";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "yaml";
import { serve, setup } from "swagger-ui-express";
import express, { json, urlencoded, static as staticFile } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { join } from "path";
import { getJWTconfig } from "./routes/middleware.js";
import { expressjwt as jwt } from "express-jwt";


import "./connection.js";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import tagsRouter from "./routes/tags.js";
import authRouter from "./routes/authentification.js";
const file = readFileSync("./api.yml", "utf8");
const swaggerDocument = parse(file);
config();
var app = express();
const jwtConfig = getJWTconfig();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  staticFile(join(path.dirname(fileURLToPath(import.meta.url)), "public"))
);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/tags", tagsRouter);
app.use("/api", serve, setup(swaggerDocument));
app.use("/", indexRouter);
app.use(jwt(jwtConfig).unless({ path: ["/api", "/api/auth/login"] }));
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send({
      status: "echec",
      message: "token invalide",
    });
  } else {
    next(err);
  }
});
export default app;
