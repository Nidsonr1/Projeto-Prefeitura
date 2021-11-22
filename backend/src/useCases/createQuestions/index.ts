import { QuestionsRepository } from "../../repositories/QuestionsRepository"
import { CreateQuestionsController } from "./CreateQuestionsController";
import { CreateQuestionsUseCase } from "./CreateQuestionsUseCase";


export default () => {
  const questionsRepository = new QuestionsRepository();
  const createQuestionsUseCase = new CreateQuestionsUseCase(questionsRepository);
  const createQuestionsController = new CreateQuestionsController(createQuestionsUseCase);

  return createQuestionsController
}