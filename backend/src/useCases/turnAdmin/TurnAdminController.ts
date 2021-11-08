import { Request, Response } from "express";
import { TurnAdminUseCase } from "./TurnAdminUseCase";

class TurnAdminController {
  constructor(private turnAdminUseCase: TurnAdminUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      await this.turnAdminUseCase.execute(id);
      
      return response.send();
    } catch (error) {
      switch(error.message) {
        case "Usuário não encontrado":
          return response.status(404).json({ error: error.message });
        case "Usuário já é Admin":
          return response.status(422).json({ error: error.message });
      }
    }
  }
}

export { TurnAdminController }