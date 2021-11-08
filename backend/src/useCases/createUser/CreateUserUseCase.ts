import { IUserRepository, ICreateUser } from "../../repositories/interfaces/IUserRepository";

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({name, email, password}: ICreateUser): Promise<void> {
    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if(userAlreadyExist) {
      throw new Error("Usuário já cadastrado");
    }

    const user = this.userRepository.create({
      name, 
      email, 
      password 
    });
  }
}

export { CreateUserUseCase }