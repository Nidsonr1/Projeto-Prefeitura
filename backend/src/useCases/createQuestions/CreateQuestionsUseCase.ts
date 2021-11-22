import { IQuestionRepository } from "../../repositories/interfaces/IQuestionRepository";

class CreateQuestionsUseCase {
  constructor(private questionsRepository: IQuestionRepository) {}

  async execute(description: string): Promise<void> {
    this.questionsRepository.create(description);
  }
}

export { CreateQuestionsUseCase }