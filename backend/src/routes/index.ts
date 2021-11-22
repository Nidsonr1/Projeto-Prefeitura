import { application, Router } from "express";
import { questionRoutes } from "./Question.routes";
import { userRoutes } from "./User.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/questions", questionRoutes);

export { routes }