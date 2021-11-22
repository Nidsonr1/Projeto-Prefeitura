import { QuestionsRepository } from "../../repositories/QuestionsRepository"
import { ListQuestionsController } from "./ListQuestionsController";
import { ListQuestionsUseCase } from "./ListQuestionsUseCase";



export default () => {
  const questionsRepository = new QuestionsRepository();
  const listQuestionsUseCase = new ListQuestionsUseCase(questionsRepository);
  const listQuestionsController = new ListQuestionsController(listQuestionsUseCase);

  return listQuestionsController;
}