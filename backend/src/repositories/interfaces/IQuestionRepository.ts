import { Questions } from "../../entities/Questions";



interface IQuestionRepository { 
  create(description: string): Promise<void>;
  list(): Promise<Questions[]>;
}

export { IQuestionRepository }