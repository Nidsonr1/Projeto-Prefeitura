import { getRepository, Repository } from "typeorm";

import { Questions } from "../entities/Questions";
import { IQuestionRepository } from './interfaces/IQuestionRepository';

class QuestionsRepository implements IQuestionRepository {
  private questionRepository: Repository<Questions>;

  constructor() {
    this.questionRepository = getRepository(Questions);
  }
  
  async create(description: string): Promise<void> {
    const question = this.questionRepository.create({ description });

    await this.questionRepository.save(question);
  }

  async list(): Promise<Questions[]> {
    const questions = await this.questionRepository.find();
    return questions;
  }


  async findByDescription(description: string): Promise<Questions> {
    const question = await this.questionRepository.findOne({ description });

    return question;
  }
}

export { QuestionsRepository }