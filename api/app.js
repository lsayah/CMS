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

config();
import "./connection.js";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";
const file = readFileSync("./api.yml", "utf8");
const swaggerDocument = parse(file);

var app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  staticFile(join(path.dirname(fileURLToPath(import.meta.url)), "public"))
);

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api", serve, setup(swaggerDocument));
app.use("/", indexRouter);

export default app;
