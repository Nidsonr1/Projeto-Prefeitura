import { Router } from "express";

import createQuestionsController from '../useCases/createQuestions';
import listQuestionsController from '../useCases/listQuestions';
import { checkAdmin } from "../middlewares/CheckAdmin";

const questionRoutes = Router();

questionRoutes.post('/create', checkAdmin, (request, response) => {
  return createQuestionsController().handle(request, response);
});

questionRoutes.get("/", (request, response) => {
  return listQuestionsController().handle(request, response);
})

export { questionRoutes }