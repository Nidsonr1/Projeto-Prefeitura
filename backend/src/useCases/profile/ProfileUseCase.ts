import { IRequestProfile, IUserRepository } from "../../repositories/interfaces/IUserRepository";

class ProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<IRequestProfile> {
    const user = await this.userRepository.profile(id);

    if(!user) {
      throw new Error("Problema Interno!");
    }

    return user;

  }
}

export { ProfileUseCase }