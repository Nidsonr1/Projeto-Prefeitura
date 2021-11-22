import { Request, Response } from "express";
import { ListQuestionsUseCase } from "./ListQuestionsUseCase";

class ListQuestionsController {
  constructor(private listQuestionsUseCase: ListQuestionsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const questions = await this.listQuestionsUseCase.execute();

      return response.status(200).json(questions);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ListQuestionsController };