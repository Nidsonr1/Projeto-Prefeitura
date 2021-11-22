import { Questions } from "../../entities/Questions";



interface IQuestionRepository { 
  create(description: string): Promise<void>;
  list(): Promise<Questions[]>;
  findByDescription(description: string):Promise<Questions>;
}

export { IQuestionRepository }