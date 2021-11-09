import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const user = await this.loginUserUseCase.execute(email, password);
      return response.status(200).json({ name: user.name });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { LoginUserController }