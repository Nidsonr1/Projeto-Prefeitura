import { Router } from "express";

import createUserController  from "../useCases/createUser/";
import { checkAdmin } from "../middlewares/CheckAdmin";
import turnAdminController from "../useCases/turnAdmin";

const userRoutes = Router();

userRoutes.post("/create", (request, response) => {
  return createUserController().handle(request, response);
});

userRoutes.patch("/:id/admin", checkAdmin, (request, response) => {
  return turnAdminController().handle(request, response);
});

export { userRoutes }