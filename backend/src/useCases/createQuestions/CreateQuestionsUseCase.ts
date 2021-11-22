import { IQuestionRepository } from "../../repositories/interfaces/IQuestionRepository";

class CreateQuestionsUseCase {
  constructor(private questionsRepository: IQuestionRepository) {}

  async execute(description: string): Promise<void> {
    const questionAlreadyExist = await this.questionsRepository.findByDescription(description);

    if(questionAlreadyExist) {
      throw new Error("Questão já inserida");
    }

    this.questionsRepository.create(description);
  }
}

export { CreateQuestionsUseCase }