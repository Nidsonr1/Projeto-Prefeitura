import { getRepository, Repository } from "typeorm";
import { Answers } from "../entities/Answers";
import { IAnswersRepository, ICreateAnswerDTO } from "./interfaces/IAnswersRepository";

class AnswersRepository implements IAnswersRepository{
  private answerRepository: Repository<Answers>;

  constructor() {
    this.answerRepository = getRepository(Answers);
  }

  create({ user_id, question_id, answers }: ICreateAnswerDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }

  listByUser(user_id: string): Promise<Answers[]> {
    throw new Error("Method not implemented.");
  }

  listByQuestion(question_id: number): Promise<Answers[]> {
    throw new Error("Method not implemented.");
  }



}