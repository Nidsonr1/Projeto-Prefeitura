import { Request, Response } from "express";
import { CreateQuestionsUseCase } from "./CreateQuestionsUseCase";

class CreateQuestionsController {
  constructor(private createQuestionsUseCase: CreateQuestionsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { description } = request.body;

      await this.createQuestionsUseCase.execute(description);

      return response.status(201).send();
    } catch (error) {
      return response.status(403).json({ error: error.message });
    }
  }
}

export { CreateQuestionsController }