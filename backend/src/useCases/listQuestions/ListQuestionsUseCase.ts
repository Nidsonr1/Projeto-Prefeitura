import { Questions } from "../../entities/Questions";
import { IQuestionRepository } from "../../repositories/interfaces/IQuestionRepository";

class ListQuestionsUseCase {
  constructor(private questionRepository: IQuestionRepository) {}

  async execute(): Promise<Questions[]> {
    const questions = await this.questionRepository.list();

    if(questions.length <= 0) {
      throw new Error("Não há Dados");
    }

    return questions;
  }
}

export { ListQuestionsUseCase }