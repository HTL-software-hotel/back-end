import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { appRoutes } from "./routes/routes";

let cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
