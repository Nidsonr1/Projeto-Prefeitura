import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string, password: string): Promise<User> {
    const userAlreadyExist = await this.userRepository.findByEmail(email);
    if(!userAlreadyExist) {
      throw new Error("Email inválido");
    }

    const user = await this.userRepository.login(email, password, userAlreadyExist.salt);
    if(!user) {
      throw new Error("Senha Inválida");
    }

    return user;
  }
}

export { LoginUserUseCase }