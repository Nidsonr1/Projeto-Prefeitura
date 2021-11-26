import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { ProfileUseCase } from "./ProfileUseCase";

class ProfileController {
  constructor(private profileUseCase: ProfileUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.body;

      const user = await this.profileUseCase.execute(id);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export { ProfileController }