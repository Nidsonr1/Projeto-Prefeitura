import { Router } from "express";

import createUserController  from "../useCases/createUser/";
import turnAdminController from "../useCases/turnAdmin";
import loginUserController from '../useCases/loginUser';
import { checkAdmin } from "../middlewares/CheckAdmin";

const userRoutes = Router();

userRoutes.post("/create", (request, response) => {
  return createUserController().handle(request, response);
});

userRoutes.patch("/:id/admin", checkAdmin, (request, response) => {
  return turnAdminController().handle(request, response);
});

userRoutes.post('/login', (request, response) => {
  return loginUserController().handle(request, response);
})

export { userRoutes }