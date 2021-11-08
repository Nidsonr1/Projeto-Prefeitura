import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

class TurnAdminUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if(!user) {
      throw new Error("Usuário não encontrado");
    }
    if(user.admin) {
      throw new Error("Usuário já é Admin");
    }

    await this.userRepository.turnUserAdmin(id);
  }
}

export { TurnAdminUseCase }