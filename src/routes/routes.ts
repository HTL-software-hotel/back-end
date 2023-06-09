import { Express } from "express";
import { sessionRoutes } from "./session.routes";
import { userRoutes } from "./user.routes";

const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/login", sessionRoutes());
};

export { appRoutes };

