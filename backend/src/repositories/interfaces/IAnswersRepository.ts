import { Answers } from "../../entities/Answers";

interface ICreateAnswerDTO {
  user_id: string;
  question_id: number;
  answers: string;
}

interface IAnswersRepository {
  create({ user_id, question_id, answers }: ICreateAnswerDTO): Promise<void>;
  listByUser(user_id: string): Promise<Answers[]>;
  listByQuestion(question_id: number): Promise<Answers[]>;
}

export { ICreateAnswerDTO, IAnswersRepository };