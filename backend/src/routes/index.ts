import { application, Router } from "express";
import { userRoutes } from "./User.routes";

const routes = Router();

routes.use("/user", userRoutes);

export { routes }